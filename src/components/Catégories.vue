<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="service mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Catégories d'événements</h2>
                </div>
                <div v-if="categories.length > 0"  class="row">
                    <div  v-for="(categorie, index) in categories" :key="index" class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img v-if="categorie.fichier" :src="getImageUrl(categorie.fichier)" :alt="categorie.name">
                            <h3>{{ categorie.name }}({{ categorie.count }})</h3>
                            <p>
                              <!--{{ categorie.description }}-->
                            </p>
                        </div>
                    </div>
                </div>
                <div v-else> <h2>Aucune catégorie</h2></div>
            </div>
        </div>
  <!--<div class="container">
   Vérifie si des catégories existent avant de les afficher 
    <div v-if="categories.length > 0" class="categories">
      <button
        v-for="(categorie, index) in categories" :key="index"
        class="category"
        @click="searchCategory(categorie.nme)"
      >
        <div class="circle">
          <img v-if="categorie.fichier" :src="getImageUrl(categorie.fichier)" :alt="categorie.name">
        </div>
        <span>{{ categorie.name }} ({{ getEventCompt(categorie.name) }})</span>
      </button>
    </div>
    <div v-if="selectedCategory">
      <h3>Événements pour {{ selectedCategory }}</h3>
      <ul>
        <li v-for="evenement in evenements" :key="evenement.id">{{ evenement.name }}</li>
      </ul>
    </div>
  </div>-->
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      selectedCategory: null, // Corrected variable name
      evenements: [],
      categories: [],
      eventCounts: {}
    };
  },
  mounted() {
    this.getEventCompts();
    this.getEvenements();
    this.getCategories();
  },
  methods: {
    // Génère l'URL de l'image à partir du chemin de l'image
    getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },
    // Récupère les événements depuis l'API
    getEvenements() {
      axios.get('http://localhost:8000/api/evenements')
        .then(response => {
          this.evenements = response.data.evenements;
          console.log(this.evenements);
        })
        .catch(error => {
          console.error("Erreur d'affichage de l'événement", error);
          //alert("Une erreur s'est produite lors de l'affichage de l'événement.");
        });
    },
    // Récupère les catégories depuis l'API
    getCategories() {
      const toast = useToast();
      axios.get('http://localhost:8000/api/categories')
        .then(response => {
          this.categories = response.data.categ;
          console.log(this.categories);
        })
        .catch(error => {
          console.error("Erreur d'affichage de catégorie", error);
          toast.error("Une erreur s'est produite lors de l'affichage de la catégorie.");
        });
    },
    // Recherche les événements par catégorie
    searchCategory(categorie) {
      this.selectedCategory = categorie; // Corrected variable name
      axios.get(`http://localhost:8000/api/evenements?category=${categorie}`)
        .then(response => {
          this.evenements = response.data.evenements; // Corrected variable name
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des événements:', error);
          //alert('Erreur lors de la récupération des événements.');
        });
    },
    // Récupère les comptes d'événements par catégorie depuis l'API
    getEventCompts() {
      const toast = useToast();
    axios.get('http://localhost:8000/api/evenementscounts')
      .then(response => {
        return this.eventCounts = response;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des comptes d\'événements:', error);
        toast.error('Erreur lors de la récupération des comptes d\'événements.');
      });
  },
    // Retourne le nombre d'événements pour une catégorie donnée
    getEventCompt(categories) {
      //const toast = useToast();
      return this.eventCounts[categories] || 0;
  
    }
  }
};
</script>

  <style scoped>
  .categories {
  display: flex; /* Utilisez un affichage flex pour aligner les catégories horizontalement */
}

  </style>
  