

<template>
  <div v-if="this.evenements.length>0" class="eventCarte">
    <div v-for="(evenement, index) in this.evenements" :key="index">
    <div class="event-card">
      <!-- Badge de date -->
      <div class="date-badge">
        <span class="date">{{evenement.date }}</span>
      </div>
      <div class="event-image">
        <!-- Affiche illustrative de l'événement -->
        <img src="@\assets\csm_atelier_4_fc7bdce275.jpg" alt="Affiche de l'événement">
      </div>
      <div class="event-info">
        <div class="titre">{{ evenement.nom }}</div>
        <div v-for="ville in villes" :key="ville.id" class="content">
          <p v-if="ville.id === evenement.villes_id"> {{ ville.name }}, {{ evenement.lieu }}</p>
        </div>
        <textarea v-model="comment" placeholder="Commenter..." rows="1" ></textarea>
        <i class="fas fa-star" @click="voteEvent"></i>
        <i class="fas fa-comments" @click="viewComments"></i>
      </div>
    </div>
  </div>
  </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    props: {
      eventName: String,
      eventLocation: String,
      imageUrl: String
    },
    data() {
      return {
        evenementId:'',
        evenements: [],
        categories: [],
        villes: [] ,
        comment: '' // Champ de saisie de commentaire
      };
    },

    mounted() {
      this.getEvenements();
      this.getCategories();
      this.getVilles();
    },
    methods: {
      voteEvent() {
        // Logique pour voter pour l'événement
      },
      viewComments() {
        // Logique pour afficher les commentaires de l'événement
      },

      getEvenements(){
            axios.get('http://localhost:8000/api/evenements')
            .then(response => {
                this.evenements = response.data.evenements;
            console.log(this.evenements)
            this.evenements = response.data.evenements;
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
            console.log(this.categories)
            this.categories = response.data.categories;
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
          console.log(this.villes)
          this.villes = response.data.villes;
     })
    .catch(error => {
      console.error("Erreur d'affichage de catégorie", error);
      alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
    });
        },
    }
  };
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
  
  .event-card {
  width: 300px; /* Largeur de la carte */
  border: 1px solid #ccc; /* Bordure de la carte */
  border-radius: 8px; /* Bordure arrondie */
  overflow: hidden; /* Masquer le contenu qui dépasse de la carte */
  background-color: #ccc;
  box-shadow: 0 2px 4px 0px;
  margin-left:0.5cm;
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
  