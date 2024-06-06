<template>
<!-- Nav Bar Start -->
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
              <a class="navbar-brand">
                <img src="@\assets\EventPluse.png" alt="Bootstrap" width="30" height="24">
              </a>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="index.html" class="nav-underline nav-link active">Accueil</a>
                        <a href="about.html" class="nav-underline nav-link">Événéments</a>
                        <a href="service.html" class="nav-item nav-link">S'inscrire</a>
                        <a href="feature.html" class="nav-item nav-link">Se connecter</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Nav Bar End -->
</template>

<script>
import router from '@/router';
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
  methods: {

    logout() {
      axios.post('http://localhost:8000/api/logout', this.user)
        .then(response => {
          if (response.status ==200) {
            router.push('/connexion');
            console.log("Réussite de deconnexion :", response.data.message);
          } else  {
            console.error("Erreur de deconnexion :", response.data.message);
          }
        })
        .catch(error => {
         console.log(error.response.data.message);
         alert(error.response.data.message || "Une erreur s'est produite.");
        });

    },

    login() {
      axios.post('http://localhost:8000/api/login', this.user)
        .then(response => {
          if (response.status ==200) {
            router.push('/');
            console.log(response);
          } else  {
            console.error("Erreur de connexion :", response.data.message);
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