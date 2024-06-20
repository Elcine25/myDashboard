<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="service">
    <div class="container">
      <div class="section-header mt-5">
        <h2>Catégories d'événements</h2>
      </div>
      <div v-if="categories.length > 0" class="slick-carousel">
        <div class="autoplay">
          <div v-for="(categorie, index) in categories" :key="index" class="slick-slide">
            <div class="service-item">
              <img v-if="categorie.fichier" :src="getImageUrl(categorie.fichier)" :alt="categorie.name">
              <h6 class="text-center">{{ categorie.name }} ({{ categorie.count }})</h6>
              <!-- <p>{{ categorie.description }}</p> -->
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2>Aucune catégorie</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      selectedCategory: null,
      evenements: [],
      categories: [],
      eventCounts: {},
      categcount:{}
    };
  },
  async mounted() {
    this.getEventCompts();
    this.getEvenementsAvant();
    await this.getCategories(); // Utilisation d'await pour s'assurer que les catégories sont chargées
    this.$nextTick(() => {
      this.initializeSlickCarousel();
    });
  },
  methods: {
    getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },
    initializeSlickCarousel() {
      $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
  //              {
    //              breakpoint: 992,
      //            settings: {
          //          slidesToShow: 3,
        //          },
            //    },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
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
    async getCategories() {
      const toast = useToast();
      try {
        const response = await axios.get('http://localhost:8000/api/categories');
        this.categories = response.data.categ;
        console.log(response.data);
      } catch (error) {
        console.error("Erreur d'affichage de catégorie", error);
        toast.error("Une erreur s'est produite lors de l'affichage de la catégorie.");
      }
    },
    searchCategory(categorie) {
      this.selectedCategory = categorie;
      axios.get(`http://localhost:8000/api/evenements?category=${categorie}`)
        .then(response => {
          this.evenements = response.data.evenements;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des événements:', error);
        });
    },
    getEventCompts() {
      const toast = useToast();
      axios.get('http://localhost:8000/api/evenementscounts')
        .then(response => {
          this.eventCounts = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des comptes d\'événements:', error);
          toast.error('Erreur lors de la récupération des comptes d\'événements.');
        });
    },
    getEventCompt(categories) {
      return this.eventCounts[categories] || 0;
    }
  }
};
</script>

<style scoped>
.categories {
  display: flex; /* Utilisez un affichage flex pour aligner les catégories horizontalement */
}
.slick-slide {
  margin: 0 5px; /* Espacement entre les slides */
}
.slick-slide img{
  display: inline-block !important; 
}
.slick-prev:before .slick-next:before{
  font-size: 25px !important;
  color:#7c5295e0 !important ;
}
</style>

  