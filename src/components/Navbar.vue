<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color">
      <div class="container">
        <a class="navbar-brand">
          <img src="@\assets\EventPluse.png" alt="Bootstrap" width="30" height="24">
        </a>
        <div v-if="!isLoggedIn" class="text-end">
          <ul class="nav nav-underline">
          <li v-for="(item, index) in navbarItemsConnect" :key="index" :class="{ 'nav-item': true, 'active': menuActif === index }">
            <a class="nav-link" @click="setMenuActif(index)" :style="{ color: (menuActif === index) ? '#52319e' : '' }" :href="item.route">{{ item.label }}</a>
          </li>
          <div  class="m-6">
          <a href="/connexion">
            <UserButton />
          </a>
        </div>
        </ul>
        
      </div>
      <div v-if="isLoggedIn" class="row ">
        <ul class="nav nav-underline">
          <li v-for="(item, index) in navbarItemsDeconnect" :key="index" :class="{ 'nav-item': true, 'active': menuActif === index }">
            <a class="nav-link" @click="setMenuActif(index)" :style="{ color: (menuActif === index) ? '#52319e' : '' }" :href="item.route">{{ item.label }}</a>
          </li>
          <div @click="logout" class="mr-3">
          <DeconUserButton />
        </div>
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
//import router from '@/router';
import { useToast } from "vue-toastification";
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
  mounted(){
    this.verifiedLogin();
  },
  methods: {

    logout() {
      const toast = useToast();
      axios.post('http://localhost:8000/api/logout', {},{
      headers: {
         'Authorization': `Bearer ${localStorage.getItem('authToken')}`
       },
      })
        .then(response => {
          if (response.status ==200) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userEvent');
            window.location='/';
            toast.success("Déconnexion réussie !");
          } else  {
            console.error("Erreur de deconnexion :", response.data.message);
            toast.error("Déconnexion échoueé !");
          }
        })
        .catch(error => {
         console.log(error.response.data.message);
         alert(error.response.data.message || "Une erreur s'est produite.");
        });

    },

    login() {
      const toast = useToast();
      axios.post('http://localhost:8000/api/login', this.user)
        .then(response => {
          if (response.status ==200) {
            toast.success("Connexion réussie !");
            localStorage.setItem('authToken', response.data.access_token);
            localStorage.setItem('userEvent', response.data.user);
            window.location='/'
            console.log(response);
          } else  {
            console.error("Erreur de connexion :", response.data.message);
            toast.error("Erreur de connexion :", response.data.message);
          }
        })
        .catch(error => {
         console.log(error.response.data.message);
         const errorMessage = error.response.data.message || "Une erreur s'est produite.";
          toast.error(errorMessage);
          console.error(errorMessage);
        });

    },

    verifiedLogin(){
    if(localStorage.getItem('authToken') && localStorage.getItem('userEvent')){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
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
  background-color: #d4d2d8 /* Remplacez #ff0000 par votre couleur personnalisée */
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

.nav-link {
  color: #ffffff;
}

.active{
  color: red !important;
  font-weight: bold;
}
</style>
