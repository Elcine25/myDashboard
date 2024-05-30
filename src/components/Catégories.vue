<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div v-if="this.categories.length>0" class="categories">
    <button v-for="(categorie, index) in this.categories" :key="index" class="category" @click="searchCategory('educatif')">
      <div class="circle">
        <img v-if="categorie.fichier" :src="getImageUrl(categorie.fichier)" alt="Icône Catégorie 1">
      </div>
      <span>{{categorie.name}} ({{ getEventCompts('eventCounts') }})</span>
    </button>
    
  </div>
  <div v-if="selecteCategorie">
    <h3>Événements pour {{ selecteCategorie }}</h3>
    <ul>
      <li v-for="evenement in evenements" :key="evenement.id">{{ evenement.name }}</li>
    </ul>
  </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
      selecteCategorie:null,
      evenements: [],
      categories: [],
      eventCounts:{}
    };
    },
    computed: {
    imageUrl() {
      return `/storage/${this.categories.fichier}`;
    }
  },

  props: {
    categorie: {
      type: Object,
      required: true
    }
  },
    
    mounted() {
    this.getEventCompts();
    this.getEvenements();
    this.getCategories();
  }, 
    methods: {
      getImageUrl(imagePath) {
      return `http://localhost:8000/storage/${imagePath}`; 
    },
      
      getEvenements(){
            axios.get('http://localhost:8000/api/evenements')
            .then(response => {
            this.evenements = response.data.evenements;
            console.log(this.evenements);
       })
      .catch(error => {
        console.error("Erreur d'affichage de l'événement", error);
        alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
      });
        },
        getCategories(){
            axios.get('http://localhost:8000/api/categories')
            .then(response => {
                this.categories = response.data.categories;
            console.log(this.categories);
       })
      .catch(error => {
        console.error("Erreur d'affichage de catégorie", error);
        alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
      });
        },

      searchCategory(categorie) {
      this.selectedCategory = categorie;
      axios.get(`http://localhost:8000/api/evenements?category=${categorie}`)
        .then(response => {
          this.events = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des événements:', error);
          alert('Erreur lors de la récupération des événements.');
        });
    },
      getEventCompts() {
      axios.get('http://localhost:8000/api/evenements-counts')
        .then(response => {
          this.eventCounts = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des comptes d\'événements:', error);
          alert('Erreur lors de la récupération des comptes d\'événements.');
        });
    }, 
    getEventCompt(categorie) {
      return this.eventCounts[categorie] || 0
    }
      
  }
  };
  </script>


  <style scoped>
  .categories {
  display: flex; /* Utilisez un affichage flex pour aligner les catégories horizontalement */
}

.category {
    position: center; 
  display: flex; /* Utilisez un affichage flex pour aligner les cercles et les textes verticalement */
  flex-direction: column; /* Définissez la direction de l'alignement comme colonne */
  align-items: center; /* Alignez les éléments horizontalement */
  margin-right: 30px; /* Espacement entre les catégories */
  border: none; /* Supprimez les styles de bordure du bouton */
  background: none; /* Supprimez les styles de fond du bouton */
  cursor: pointer; /* Définissez le curseur en tant que pointeur pour indiquer l'interactivité */
}
.category:hover .circle {
  /* Changez la couleur de fond du cercle au survol du bouton */
  background-color: #babec2;
}

.circle {
  width: 80px; /* Largeur du cercle */
  height: 80px; /* Hauteur du cercle */
  border-radius: 50%; /* Rendre le cercle */
  background-color: #e7dede; /* Couleur du cercle */
  display: flex; /* Utilisez un affichage flex pour centrer l'icône */
  justify-content: center; /* Centrez l'icône horizontalement */
  align-items: center; /* Centrez l'icône verticalement */
  margin-bottom: 10px; /* Espacement entre le cercle et le texte */
}

.circle img {
  width: 40px; /* Taille de l'icône */
  height: 40px;
}
  </style>
  