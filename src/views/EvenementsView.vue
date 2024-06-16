<template>
  <nav>
    <Navbar />
  </nav>
  <div class="mt-3">
    <Catégories />
  </div>
  <div class="alignement text-center ml-5">
    <div class=" justify-content-between ">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-1" v-model="searchQuery" @keyup.enter="performSearch"
          placeholder="Rechercher...">
        <div class="input-group-append">
          <button class="btn btn-primary bg-light" type="button" @click="performSearch">
            <i class="fas fa-search fa-sm" height="20px"></i>
          </button>
        </div>
      </div>
      <!--<select class="ml-5" v-model="selectedCity">
        <option value="">Villes</option>
        <option v-for="ville in villes" :key="ville.id" :value="ville.id">{{ ville.name }}</option>
      </select>-->
      <div class="d-flex align-items-center mt-5 mr-3 row ml-5 filter-options">
        <span class="mr-2">Tous</span>
        <span class="mr-2">Mes événements</span>
        <span class="mr-2">Aujourd'hui</span>
        <span class="mr-2">Ce mois</span>
      </div>
    </div>
    <!--<div class="row ml-5">
      <div class="ml-5">
        <button class="ml-5" @click="filterEvents">Filtrer</button>
      </div>
    </div>-->
    <div class="">
      <Event_cart />
    </div>
  </div>
  <div class="mt-3">
    <Foooter />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Event_cart from '@/components/Event_cart.vue';
import Foooter from '../components/Foooter.vue';
import Catégories from '../components/Catégories.vue';

export default {
  name: 'evenementsPre',
  components: {
    Navbar,
    Event_cart,
    Catégories,
    Foooter,
  },

  data() {
    return {
      evenementID: '',
      evenements: [],
      categories: [],
      villes: [],
      comment: '',
      searchQuery: '',
      selectedCategory: '',
      selectedMonth: '',
      selectedCity: '',
      ItemsMenu: [
        { label: 'Tout', route: '/' },
        { label: 'Aujourd\'hui', route: '/evenements' },
        { label: 'Ce mois', route: '/inscription' }
      ]
    }
  },

  computed: {
    imageUrl() {
      return `/storage/${this.evenements.fichier}`;
    }
  },

  mounted() {
    this.getEvenements();
    this.getCategories();
    this.getVilles();
  },

  methods: {
    performSearch() {
      // Insérez votre logique de recherche ici
      console.log('Recherche effectuée:', this.searchQuery);
    },

    getEvenements() {
      axios.get('http://localhost:8000/api/evenements')
        .then(response => {
          this.evenements = response.data.evenements;
          console.log(this.evenements);
        })
        .catch(error => {
          console.error("Erreur d'affichage de l'événement", error);
          //alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
        });
    },

    getCategories() {
      axios.get('http://localhost:8000/api/categories')
        .then(response => {
          this.categories = response.data.categories;
          console.log(this.categories);
        })
        .catch(error => {
          console.error("Erreur d'affichage de catégorie", error);
          //alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
        });
    },

    getVilles() {
      axios.get('http://localhost:8000/api/villes')
        .then(response => {
          this.villes = response.data.villes;
          console.log(this.villes);
        })
        .catch(error => {
          console.error("Erreur d'affichage de catégorie", error);
          //alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
        });
    },

    formatDate(dateString) {
      // Convertir la chaîne de date en objet Date
      const date = new Date(dateString);

      // Récupérer le jour en format numérique
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const months = [
        'JANV', 'FEV', 'MARS', 'AVR', 'MAI', 'JUIN',
        'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC'
      ];
      const month = months[monthIndex];

      // Concaténer le jour et le mois dans le format souhaité
      return `${day} ${month}`;
    },

    filterEvents() {
      const params = {
        categorie_id: this.selectedCategory,
        month: this.selectedMonth,
        ville_id: this.selectedCity
      };

      axios.get('http://localhost:8000/api/evenements', { params })
        .then(response => {
          this.evenements = response.data.evenements;
        })
        .catch(error => {
          console.error('Erreur de filtrage des événements', error);
        });
    }


  }
};

</script>

<style scoped>
/*style du navbar*/
.mr-2 {
  color: #52319e;
  font-weight: bolder;
}

.fa-search {
  color: #52319e;
}

.input-group {
  width: 300px;
  /* Ajustez la largeur selon vos besoins */

}

.input-group-append button {
  /* Style pour centrer verticalement l'icône de recherche */
  display: flex;
  align-items: center;
}

/* Styles de la carte d'événement */


.date-badge {
  position: absolute;
  margin-left: 5px;
  border-radius: 5px;
  width: 50px;
  height: 60px;
  background: #7c5295e0;
}

.event-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  /* Masquer le contenu qui dépasse de la carte */
  background-color: #ccc;
  box-shadow: 0 2px 4px 0px;
  margin-left: 0.5cm;
  margin-top: 0.5cm;
}

.event-image img {
  width: 100%;
  /* Largeur de l'image */
  height: auto;
  /* Hauteur automatique pour conserver les proportions */
}

.date {
  margin: 5px;
  color: white;
  font-weight: bolder;
  font-size: larger;
}

.event-info {
  position: relative;
  color: rgb(41, 41, 41);
  padding: 8px 15px;

}

textarea {
  width: 80%;
  border-radius: 5px;
  border: none;
}

.fa-star {
  padding-right: 9px;
  cursor: pointer;
  color: #7c5295e0;
  /* Couleur par défaut de l'étoile */
}

.fa-comments {
  margin-left: 20px;
  cursor: pointer;
  color: #7c5295e0;
}

.event-info .titre {
  font-size: large;
  font-weight: bold;
}
</style>
