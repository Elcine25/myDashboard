<template>
  <div class="">
    <div id="accueil">
      <nav>
        <NaavBar />
      </nav>
      <!-- Carousel Start -->
      <div class="carousel">
        <div class="owl-carousel">
          <div class="carousel-item">
            <div class="carousel-img">
              <img
                src="/home/adna/Documents/projest_mémoire/myDashboard (copie)/src/assets/csm_atelier_4_fc7bdce275.jpg"
                alt="Image">
            </div>
            <div class="carousel-text">
              <h1>EVENTPULSE</h1>
              <p>
                Explorez l'exitation: trouvez votre prochain grand moment !
              </p>
              <div class="carousel-btn">
                <a class="btn" href="/evenements"><i class="fa fa-link"></i>Voir les Événements</a>
              </div>
            </div>
          </div>
          <!--<div class="carousel-item">
            <div class="carousel-img">
              <img src="/home/adna/Documents/projest_mémoire/myDashboard (copie)/src/assets/banner.jpg   " alt="Image">
            </div>
            <div class="carousel-text">
              <h1>EVENTPULSE</h1>
              <p>
                Explorez des occasions de détentes !
              </p>
              <div class="carousel-btn">
                <a class="btn" href=""><i class="fa fa-link"></i>Voir les Événements</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-img">
              <img
                src="/home/adna/Documents/projest_mémoire/myDashboard (copie)/src/assets/csm_atelier_4_fc7bdce275.jpg"
                alt="Image">
            </div>
            <div class="carousel-text">
              <h1>EVENTPULSE</h1>
              <p>
                Explorez l'exitation: trouvez votre prochain grand moment !
              </p>
              <div class="carousel-btn">
                <a class="btn" href=""><i class="fa fa-link"></i>Voir les Événements</a>
              </div>
            </div>
          </div>-->
        </div>
      </div>
      <!-- Carousel End -->

      <div class="">
        <Catégories />
      </div>
      <div class="">
        <Event_cart />
      </div>

      <div class="mt-3">
        <Foooter />

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NaavBar from '@/components/NaavBar.vue';
import Foooter from '../components/Foooter.vue';
import Catégories from '../components/Catégories.vue';
import Event_cart from '@/components/Event_cart.vue';

export default {
  name: 'PageAccueil',
  components: {
    Catégories,
    NaavBar,
    Event_cart,
    Foooter
  },

  data() {
    return {
      evenements: [],
      categories: [],
      villes: [],
      votes: [],
      comment: ''
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

    performSearch() {
      // Insérez votre logique de recherche ici
      console.log('Recherche effectuée:', this.searchQuery);
    }
  }
};

</script>
<style></style>
