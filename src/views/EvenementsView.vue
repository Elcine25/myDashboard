<template>
  <nav>
    <NaavBar />
  </nav>
  <div class="mt-3 ml-5">
    <Categories />
  </div>
  <div class="alignement text-center ml-5">
    <div class="justify-content-between">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-1" v-model="searchQuery" placeholder="Rechercher...">
        <div class="input-group-append">
          <button class="btn btn-primary bg-light" type="button" @click="performSearch">
            <i class="fas fa-search fa-sm" height="20px"></i>
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center  mt-5 mr-3 row ml-5 filter-options">
        <span type="button" class="px-3 mr-2" @click="filterAll">Tous</span>
        <span type="button" class="px-3 mr-2" @click="filterToday">Aujourd'hui</span>
        <span type="button" class="px-3 mr-2" @click="filterMonth">Ce mois</span>
        <select class="m-2" v-model="selectedCity">
          <option value="">Villes</option>
          <option v-for="ville in villes" :key="ville.id" :value="ville.id">{{ ville.name }}</option>
        </select>
      </div>
    </div>
    <div class="blog blog-page mt-100">
      <div class="container">

        <div class="section-header">
          <h2>Événements à la une</h2>
        </div>
        <div v-if="this.evenements.length > 0" class="row">
          <div v-for="(event, index) in this.evenements" :key="index" class="col-md-4">
            <div class="blog-item">
              <div class="blog-img">
                <img v-if="event.fichier" :src="getImageUrl(event.fichier)" :alt="event.name">
              </div>
              <div class="blog-content">
                <h2 class="blog-title">
                  <div>
                    {{ event.nom }}
                  </div>
                </h2>
                <div class="blog-meta">
                  <i class="fa fa-list-alt"></i>
                  <div v-for="categorie in categories" :key="categorie.id">
                    <a v-if="categorie.id === event.categories_id" href="">{{ categorie.name }}</a>
                  </div>
                  <i class="fa fa-calendar-alt"></i>
                  <p>{{ formatDate(event.date) }}</p>
                </div>
                <div class="blog-text">
                  <div v-for="ville in villes" :key="ville.id" class="content">
                    <p v-if="ville.id === event.villes_id"> {{ ville.name }}, {{ event.lieu }}</p>
                  </div>
                  <RouterLink :to="{ path: '/evenements/' + event.id }" class="btn">En savoir plus</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else> Chargement des données... </div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <Foooter />
  </div>
</template>

<script>
import axios from 'axios';
import NaavBar from '@/components/NaavBar.vue';
//import Event_cart from '@/components/Event_cart.vue';
import Foooter from '../components/Foooter.vue';
import Categories from '../components/Categories.vue';

export default {
  name: 'EvenementsView',
  components: {
    NaavBar,
   // Event_cart,
    Categories,
    Foooter,
  },
  data() {
    return {
      evenements: [],
      villes: [],
      searchQuery: '',
      selectedCity: '',

      isLoggedIn: false,
      evenementID: '',
      categories: [],
      votes: [],
    };
  },
  computed: {
    filteredEvents() {
      let filtered = this.evenements;

      if (this.searchQuery) {
        filtered = filtered.filter(event =>
          event.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedCity) {
        filtered = filtered.filter(event => event.villes_id === this.selectedCity);
      }

      return filtered;
    }
  },
  mounted() {
    this.evenementID = this.evenements.id;
    this.getEvenementsAvant();
    this.getCategories();
    this.getVilles();
  },
  methods: {
    getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },

    getEvenementsAvant() {
      axios.get('http://localhost:8000/api/events/miseenavant')
        .then(response => {
          this.evenements = response.data.evenements;
        })
        .catch(error => {
          console.error("Erreur d'affichage des événements mis en avant", error);
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
        })
        .catch(error => {
          console.error("Erreur d'affichage des villes", error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const months = [
        'JANV', 'FEV', 'MARS', 'AVR', 'MAI', 'JUIN',
        'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC'
      ];
      const month = months[monthIndex];
      return `${day} ${month}`;
    },

    filterAll() {
      this.searchQuery = '';
      this.selectedCity = '';
    },
    filterToday() {
      const today = new Date().toISOString().split('T')[0];
      this.evenements = this.evenements.filter(event => event.date === today);
    },
    filterMonth() {
      const month = new Date().getMonth() + 1;
      this.evenements = this.evenements.filter(event => new Date(event.date).getMonth() + 1 === month);
    },
    performSearch() {
      // La recherche est effectuée automatiquement par la propriété calculée "filteredEvents"
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
