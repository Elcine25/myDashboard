<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color">
      <div class="container">
        <a class="navbar-brand">
          <img src="@\assets\EventPluse.png" alt="Bootstrap" width="30" height="24">
        </a>
        <div class="input-group">
          <input type="text" class="form-control" v-model="searchQuery" @keyup.enter="performSearch" placeholder="Rechercher...">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="performSearch">
              <img src="@\assets\icons8-chercher-100 (1).png" height="20px">
            </button>
          </div>
        </div>
        <ul class="nav nav-underline">
          <li v-for="(item, index) in navbarItems" :key="index" :class="{ 'nav-item': true, 'active': menuActif === index }">
            <a class="nav-link" @click="setMenuActif(index)" :style="{ color: (menuActif === index) ? '#7C5295' : '' }" :href="item.route">{{ item.label }}</a>
          </li>
        </ul>
        <div class="mr-3">
          <a href="/connexion">
            <UserButton />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import UserButton from '../components/UserButton.vue';
export default {
  components: {
    UserButton,
  },
  data() {
    return {
      searchQuery: '',
      menuActif: null, // Ajout de la propriété menuActif
      navbarItems: [
        { label: 'Accueil', route: '/' },
        { label: 'Voir des événements', route: '/evenements' },
        { label: 'S\'inscrire', route: '/inscription' }
      ]
    };
  },
  methods: {
    performSearch() {
      console.log('Effectuer une recherche pour:', this.searchQuery);
      // Implémentez ici la logique de recherche si nécessaire
    },
    setMenuActif(index) {
      this.menuActif = index; // Met à jour l'index de l'élément de menu actif
    }
  }
};
</script>

<style scoped>
.custom-bg-color {
  background-color: #e7dede /* Remplacez #ff0000 par votre couleur personnalisée */
}

.form-control {
  border-radius: 20px;
}

.btn-primary{
  background-color:  #ffffff;
  border-color: #ffffff;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 37px;
}
.input-group {
  width: 300px; /* Ajustez la largeur selon vos besoins */

}

.input-group-append button {/* Style pour centrer verticalement l'icône de recherche */
  display: flex;
  align-items: center;
}
.nav-link{
  color: #7C5295;
}

.active{
  color: red !important;
  font-weight: bold;
}
</style>
