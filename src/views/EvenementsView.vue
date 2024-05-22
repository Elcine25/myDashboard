<template>
  <nav>
    <Navbar/>
  </nav>
  <div class="mt-3">
      <Catégories />
    </div>
    <div class="alignement">
    <div class="ml-3">
       <div v-if="this.evenements.length>0" class="eventCarte">
    <div v-for="(evenement, index) in this.evenements" :key="index">
    <div class="event-card">
      <!-- Badge de date -->
      <div class="date-badge">
        <span class="date">{{formatDate(evenement.date) }}</span>
      </div>
      <div class="event-image">
        <!-- Affiche illustrative de l'événement -->
        <img src="@\assets\csm_atelier_4_fc7bdce275.jpg" alt="Affiche de l'événement">
      </div>
      <div class=" event-info">
        <div>
        <RouterLink :to="{ path: '/evenements/'+evenement.id}" >{{ evenement.nom }}</RouterLink>
        <i class="fas fa-star fa-lg" @click="voteEvent"></i>
        </div>
        <div v-for="ville in villes" :key="ville.id" class="content">
          <p v-if="ville.id === evenement.villes_id"> {{ ville.name }}, {{ evenement.lieu }}</p>
          
        </div>
        <textarea v-model="comment" placeholder="Commenter..." rows="1" ></textarea>
        <i class="fas fa-comments fa-lg" @click="viewComments"></i>
      </div>
    </div>
  </div>
  </div>
      </div>
    </div>

    <div class="mt-3">
      <Foooter />
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
//import UserButton from '../components/UserButton.vue';
import Foooter from '../components/Foooter.vue';
import Catégories from '../components/Catégories.vue';
//import Event_cart from '@/components/Event_cart.vue';

export default {
  name: 'evenementsPre',
  components: {
    Navbar,
    Catégories,
    //UserButton,
    Foooter,
   // Event_cart
},

  data() {
    return {
      evenementId:'',
        evenements: [],
        categories: [],
        villes: [] ,
        comment: '' ,
      searchQuery: ''
    }
  },

  mounted() {
      this.getEvenements();
      this.getCategories();
      this.getVilles();
    },

  methods: {
    performSearch() {
      // Insérez votre logique de recherche ici
      console.log('Recherche effectuée:', this.searchQuery);
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

  formatDate(dateString) {
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);
    
    // Récupérer le jour en format numérique
    const day = date.getDate();
    
    // Récupérer le mois en format alphabétique
    const monthIndex = date.getMonth();
    const months = [
      'JANV', 'FEV', 'MARS', 'AVR', 'MAI', 'JUIN',
      'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC'
    ];
    const month = months[monthIndex];
    
    // Concaténer le jour et le mois dans le format souhaité
    return `${day} ${month}`;
  },


  }
};

</script>

<style scoped>
/*style du navbar*/


  /* Styles de la carte d'événement */
  .alignement {
    display: flex;
  }
  
  .date-badge {
    position:absolute;
    margin-left: 5px;
    border-radius: 5px;
    width: 50px;
    height: 60px;
    background:  #7c5295e0;
  }
  
  .event-card {
  width: 300px;
  border: 1px solid #ccc; 
  border-radius: 8px; 
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
margin: 5px;
  color:white;
  font-weight:bolder;
  font-size:larger;
}
  
  .event-info {
    position: relative;
    color: rgb(41, 41, 41);
    padding: 8px 15px;
    
  }
  
  textarea {
    width: 80%;
    border-radius: 5px;
    border: none;
  }
  
  .fa-star {
    padding-right: 9px;
    cursor: pointer;
    color: #7c5295e0; /* Couleur par défaut de l'étoile */
  }
  .fa-comments{
    margin-left: 20px;
    cursor: pointer;
    color: #7c5295e0;
  }

  .event-info .titre{
    font-size: large;
    font-weight: bold;
  }

</style>
