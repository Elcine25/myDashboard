<template>
  <!-- Nav Bar Start -->
  <div class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="/home/adna/Documents/projest_mémoire/myDashboard (copie)/src/assets/EventPluse_blanc.png" alt="Bootstrap" width="30" height="24">
      </a>

      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-if="!isLoggedIn" class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto">
          <RouterLink :to="{ path: '/' }" class="nav-underline nav-link">Accueil</RouterLink>
          <RouterLink :to="{ path: '/evenements' }" class="nav-underline nav-link">Événéments</RouterLink>
          <RouterLink :to="{ path: '/inscription' }" class="nav-underline nav-link">S'inscrire</RouterLink>
          <RouterLink :to="{ path: '/connexion' }" class="nav-underline nav-link">Se connecter</RouterLink>
        </div>
      </div>
      <div v-if="isLoggedIn" class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto">
          <RouterLink :to="{ path: '/' }" class="nav-underline nav-link">Accueil</RouterLink>
          <RouterLink :to="{ path: '/evenements' }" class="nav-underline nav-link">Événéments</RouterLink>
          <RouterLink :to="{ path: '/inscription' }" @click="logout" class="nav-underline nav-link">Déconnexion</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- Nav Bar End -->
</template>

<script>
//import router from '@/router';
import { useToast } from "vue-toastification";
import axios from 'axios';
export default {
  data() {
    return {
      searchQuery: '',
      menuActif: null, // Ajout de la propriété menuActif
      isLoggedIn: true,
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
  mounted() {
    this.verifiedLogin();
  },
  methods: {

    logout() {
      const toast = useToast();
      axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
      })
        .then(response => {
          if (response.status == 200) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userEvent');
            window.location = '/';
            toast.success("Déconnexion réussie !");
          } else {
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
          if (response.status == 200) {
            toast.success("Connexion réussie !");
            localStorage.setItem('authToken', response.data.access_token);
            localStorage.setItem('userEvent', response.data.user);
            window.location = '/'
            console.log(response);
          } else {
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

    verifiedLogin() {
      if (localStorage.getItem('authToken') && localStorage.getItem('userEvent')) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
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
  background-color: #d4d2d8
    /* Remplacez #ff0000 par votre couleur personnalisée */
}

.form-control {
  border-radius: 20px;
}

.btn-primary {
  background-color: lightgray;
  border-color: #ccc;
  border-left: none;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 37px;
}

.nav-link {
  color: #ffffff;
}

.active {
  color: red !important;
  font-weight: bold;
}
</style>