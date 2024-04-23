<template>
  <carousel :itemsToShow="1.5" :autoplay="2000" :wrapAround="true" class="resize-carousel">
    <slide v-for="(item, index) in items" :key="index">
      <div class="carousel-item" :style="{ 'background-image': 'url(' + item.image + ')' }"></div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: '@/assets//home/adna/Documents/projest_mémoire/trucVueJs/src/assets/csm_atelier_4_fc7bdce275.jpg' },
        { image: '@/assets//home/adna/Documents/projest_mémoire/trucVueJs/src/assets/csm_atelier_4_fc7bdce275.jpg' },
        // Ajoutez d'autres objets d'images au besoin
      ]
    };
  }
}
</script>

<style>
/* Ajoutez vos styles CSS ici */
</style>
