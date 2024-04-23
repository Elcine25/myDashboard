<template>
  <div class="carousel-container">
    <Carousel :items-to-show="1" :autoplay="2000" :wrap-around="true" class="main-carousel">
      <!-- Images défilantes -->
      <Slide v-for="(items, index) in items" :key="index">
      </Slide>
      
    <template #addons>
      <navigation />
      <pagination />
    </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: [
        { image: '../assets/banniere.png' },
        { image: '../assets/banniere.png' },
        { image: '../assets/banniere.png' }
        
      ]
    };
  }
};
</script>

<style scoped>

.carousel-item {
  width: 100%; /* Largeur plein écran pour chaque image */
  background-size: cover; /* Redimensionner l'image pour remplir le conteneur */
  background-position: center; /* Centrer l'image dans le conteneur */
  position: relative;
}

/* Fond semi-transparent pour le carrousel */
.main-carousel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur semi-transparente */
}

/* Styles facultatifs pour le contenu de chaque image */
.carousel-item h2,
.carousel-item p {
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
