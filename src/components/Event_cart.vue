

<template>
  <div class="lesEvent">
      <div class="ml-3">
       <div v-if="this.evenements.length>0" class="eventCarte">
    <div v-for="(evenement, index) in this.evenements" :key="index">
    <div class="event-card">
      <!-- Badge de date -->
      <div class="date-badge">
        <span class="date">{{formatDate(evenement.date) }}</span>
      </div>
      <div class="event-image">
        <img v-if="evenement.fichier" :src="getImageUrl(evenement.fichier)" alt="Image de l'événement">  
      </div>
      <div class=" event-info">
        <div>
        <RouterLink :to="{ path: '/evenements/'+evenement.id}" >{{ evenement.nom }}</RouterLink>
        <i class="fas fa-star fa-lg" @click="voteEvent"></i>
        </div>
        <div v-for="ville in villes" :key="ville.id" class="content">
          <p v-if="ville.id === evenement.villes_id"> {{ ville.name }}, {{ evenement.lieu }}</p>
          
        </div>
        <textarea v-model="comment[evenement.id]" placeholder="Commenter..." rows="1" ></textarea>
        <!-- <i class="fas fa-paper-plane ms-4 fa-lg" @click="sendComments(evenement.id)"></i>-->
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
    
      props: {
    evenement: {
      type: Object,
      required: true
    }
  },
    data() {
      return {
        evenementId:'',
        evenements: [],
        categories: [],
        villes: [] ,
          comment: {}// Champ de saisie de commentaire
      };
    },
    computed: {
    imageUrl() {
      return `/storage/${this.categories.fichier}`;
    }
     },

    mounted() {
      this.getEvenements();
      this.getCategories();
      this.getVilles();
      this.sendComments()
    },
    methods: {

      //getImageUrl(imagePath) {
     // return `http://localhost:8000/storage/${imagePath}`; 
    //},

      voteEvent() {
        // Logique pour voter pour l'événement
      },
      

      getEvenements(){
            axios.get('http://localhost:8000/api/evenements')
            .then(response => {
            this.evenements = response.data.evenements;
            console.log(this.evenements);
       })
      .catch(error => {
        console.error("Erreur d'affichage de l'événement", error);
        alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
      });
        },

        getCategories(){
            axios.get('http://localhost:8000/api/categories')
            .then(response => {
                this.categories = response.data.categories;
            console.log(this.categories);
       })
      .catch(error => {
        console.error("Erreur d'affichage de catégorie", error);
        alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
      });
        },

        getVilles(){
          axios.get('http://localhost:8000/api/villes')
          .then(response => {
              this.villes = response.data.villes;
          console.log(this.villes);
     })
    .catch(error => {
      console.error("Erreur d'affichage de catégorie", error);
      alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
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
    }
  </script>
  
  <style scoped>
  /* Styles de la carte d'événement */
  .date-badge {
    position:absolute;
    border-radius: 5px;
    width: 50px;
    height: 80px;
    background:  #7c5295e0;
  }
  .lesEvent {
    display: flex;
    flex-direction: column;
  }
  
  .event-card {
  width: 300px; 
  border: 1px solid #ccc; 
  border-radius: 8px; 
  overflow: hidden; 
  background-color: #ccc;
  box-shadow: 0 2px 4px 0px;
  margin-top:0.5cm;
}
  .event-image img {
  width: 100%; /* Largeur de l'image */
  height: auto; /* Hauteur automatique pour conserver les proportions */
}
.date{
  color:white;
  font-weight: bolder;
  font-size:large;
}
  
  .event-info {
    position: relative;
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
  