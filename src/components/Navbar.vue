<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color">
      <div class="container">
        <a class="navbar-brand">
          <img src="@\assets\EventPluse.png" alt="Bootstrap" width="30" height="24">
        </a>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <!--<div class="input-group">
          <input type="text" class="form-control bg-light border-1" v-model="searchQuery" @keyup.enter="performSearch" placeholder="Rechercher...">
          <div class="input-group-append">
            <button class="btn btn-primary bg-light" type="button" @click="performSearch">
              <i class="fas fa-search fa-sm" height="20px"></i>
            </button>
          </div>
        </div>-->
        </form>
        <div v-if="isLoggedIn" class="l">
          <ul class="nav nav-underline">
          <li v-for="(item, index) in navbarItemsConnect" :key="index" :class="{ 'nav-item': true, 'active': menuActif === index }">
            <a class="nav-link" @click="setMenuActif(index)" :style="{ color: (menuActif === index) ? '#7C5295' : '' }" :href="item.route">{{ item.label }}</a>
          </li>
          <div  class="mr-3">
          <a href="/connexion">
            <UserButton />
          </a>
        </div>
        </ul>
        
      </div>
      <div class="row">
        <ul class="nav nav-underline">
          <li v-for="(item, index) in navbarItemsDeconnect" :key="index" :class="{ 'nav-item': true, 'active': menuActif === index }">
            <a class="nav-link" @click="setMenuActif(index)" :style="{ color: (menuActif === index) ? '#7C5295' : '' }" :href="item.route">{{ item.label }}</a>
          </li>
          <div  v-if="!isLoggedIn" @click="logout" class="mr-3">
          <DeconUserButton />
        </div>
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import UserButton from '../components/UserButton.vue';
import DeconUserButton from '../components/DeconUserButton.vue'
export default {
  components: {
    UserButton,
    DeconUserButton
  },
  data() {
    return {
      searchQuery: '',
      menuActif: null, // Ajout de la propriété menuActif
      isLoggedIn: false,
      navbarItemsDeconnect: [
        { label: 'Accueil', route: '/' },
        { label: 'Événements', route: '/evenements' }
      ],
      navbarItemsConnect: [
        { label: 'Accueil', route: '/' },
        { label: 'Événements', route: '/evenements' },
        { label: 'S\'inscrire', route: '/inscription' }
      ]
    };
  },
  methods: {

    logout() {
      axios.post('http://localhost:8000/api/logout', this.user)
        .then(response => {
          if (response.status ==200) {
            router.push('/connexion');
          } else  {
            console.error("Erreur de deconnexion :", response.data.message);
          }
        })
        .catch(error => {
         console.log(error.response.data.message);
         alert(error.response.data.message || "Une erreur s'est produite.");
        });

    },
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
  background-color:  lightgray;
  border-color: #ccc;
  border-left:none;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 37px;
}
.fa-search {
  color:#7C5295;
}
.input-group {
  width: 300px; /* Ajustez la largeur selon vos besoins */

}

.input-group-append button {/* Style pour centrer verticalement l'icône de recherche */
  display: flex;
  align-items: center;
}
.nav-link {
  color: #7C5295;
}



.active{
  color: red !important;
  font-weight: bold;
}
</style>
