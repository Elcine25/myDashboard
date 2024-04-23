

<template>
  <div class="eventCarte">
    <div class="event-card">
      <!-- Badge de date -->
      <div class="date-badge">
        <span>{{ eventDate }}</span>
      </div>
      <div class="event-image">
        <!-- Affiche illustrative de l'événement -->
        <img src="@\assets\csm_atelier_4_fc7bdce275.jpg" alt="Affiche de l'événement">
      </div>
      <div class="event-info">
        <div class="titre">Conférence</div>
        <div class="content">
          <p>Cotonou, Palace Lucide</p>
        </div>
        <textarea v-model="comment" placeholder="Commenter..." rows="1" ></textarea>
        <i class="fas fa-star" @click="voteEvent"></i>
        <i class="fas fa-comments" @click="viewComments"></i>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      eventName: String,
      eventLocation: String,
      imageUrl: String,
      eventDate: String // Format 'jour-mois', par exemple '15-02'
    },
    data() {
      return {
        comment: '' // Champ de saisie de commentaire
      };
    },
    methods: {
      voteEvent() {
        // Logique pour voter pour l'événement
      },
      viewComments() {
        // Logique pour afficher les commentaires de l'événement
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles de la carte d'événement */
  .date-badge {
    position:absolute;
    border-radius: 5px;
    width: 50px;
    height: 70px;
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
}
  .event-image img {
  width: 100%; /* Largeur de l'image */
  height: auto; /* Hauteur automatique pour conserver les proportions */
}
  
  .event-info {
    position: relative;
    padding: 8px 15px;
    
  }
  
  textarea {
    width: 80%;
    border: none;
  }
  
  .fa-star, .fa-comments {
    /* Styles pour les icônes */
    cursor: pointer;
    color: gold; /* Couleur par défaut de l'étoile */
  }

  .event-info .titre{
    font-size: large;
    font-weight: bold;
  }
  </style>
  