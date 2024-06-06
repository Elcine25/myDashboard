<template>
  <div class="blog blog-page mt-100">
            <div class="container">
              
                <div class="section-header">
                    <h2>Événements à la une</h2>
                </div>
                <div v-if="this.evenements.length>0" class="row">
                    <div v-for="(event, index) in this.evenements" :key="index" class="col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img v-if="event.fichier" :src="getImageUrl(event.fichier)" :alt="event.name">
                            </div>
                            <div class="blog-content">
                                <h2 class="blog-title"><div>
                                  {{ event.nom }}
                                  <i class="fas fa-star fa-lg" @click="voteEvent"></i>
                                  </div>
                                </h2>
                                <div class="blog-meta">
                                    <i class="fa fa-list-alt"></i>
                                    <div v-for="categorie in categories" :key="categorie.id" >
                                    <a v-if="categorie.id === event.categories_id" href="">{{ categorie.name }}</a></div>
                                    <i class="fa fa-calendar-alt"></i>
                                    <p>{{formatDate(event.date) }}</p>
                                </div>
                                <div class="blog-text">
                                  <div v-for="ville in villes" :key="ville.id" class="content">
                                    <p v-if="ville.id === event.villes_id"> {{ ville.name }}, {{ event.lieu }}</p>
                                  </div>
                                  <RouterLink :to="{ path: '/evenements/'+event.id}" class="btn" >En savoir plus</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else> Chargement des données... </div>
            </div>
        </div>
      </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        evenements: [],
        categories: [],
        villes: [],
        comment: {} // Champ de saisie de commentaire
      };
    },
    mounted() {
      this.getEvenementsAvant();
      this.getCategories();
      this.getVilles();
    },
    methods: {
      getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },
      voteEvent() {
        // Logique pour voter pour l'événement
      },
      
      getEvenementsAvant(){
        axios.get('http://localhost:8000/api/events/miseenavant')
        .then(response => {
            this.evenements = response.data.evenements;
            console.log('miseenavant',this.evenements);
          })
          .catch(error => {
            console.error("Erreur d'affichage des événements mis en avant", error);
           // alert("Une erreur s'est produite lors de l'affichage de l'événement.");
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
            console.error("Erreur d'affichage des villes", error);
            //alert("Une erreur s'est produite lors de l'affichage des villes.");
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
    }
  };
  </script>
  
  
  <style scoped>
  /* Styles de la carte d'événement */
  .date-badge {
    position:absolute;
    border-radius: 5px;
    width: 60px;
    height: 80px;
    background:  #7c5295d8;
  }
  
  .event-card {
  width: 350px; 
  height: 300px;
  border: 1px solid #ccc; 
  border-radius: 8px; 
  overflow: hidden; 
  background-color: #ccc;
  box-shadow: 0 2px 4px 0px;
  margin-top:0.5cm;
  margin-right:5cm;
}
  .event-image img {
  width: 100%; /* Largeur de l'image */
  height: auto; /* Hauteur automatique pour conserver les proportions */
}
.date{
  color:white;
  font-weight: bolder;
  font-size:x-large;
}
  
  .event-info {
    position:absolute;
    padding: 8px 15px;
  }
  
  textarea {
    width: 80%;
    border-radius: 5px;
    border: none;
  }
  
  .fa-star, .fa-comments {
    /* Styles pour les icônes */
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #7c5295e0; /* Couleur par défaut de l'étoile */
  }

  .event-info .titre{
    font-size: large;
    font-weight: bold;
  }
  </style>
  