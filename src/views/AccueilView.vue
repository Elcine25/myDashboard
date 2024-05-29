<template>
  <div  class="">
  <div id="accueil">
    <nav>
    <Navbar />
  </nav>
    <div class="mt-">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/home/adna/Documents/projest_mémoire/myDashboard/src/assets/csm_atelier_4_fc7bdce275.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
    <h3 classe="titre">EVENTPULSE</h3>
    <p>Explorez l'exitation: trouvez votre prochain grand moment !</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/home/adna/Documents/projest_mémoire/myDashboard/src/assets/csm_atelier_4_fc7bdce275.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
    <h5 classe="titre">EVENTPULSE</h5>
    <p>Explorez des occasions de détentes !</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/home/adna/Documents/projest_mémoire/myDashboard/src/assets/csm_atelier_4_fc7bdce275.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
    <h5 classe="titre">EVENTPULSE</h5>
    <p>Explorez l'exitation: trouvez votre prochain grand moment !</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    <div class="mt-3">
       <Catégories />
    </div>
    <div class="apropos">Événements à la une</div>
    <div class="row">
      <Event_cart/>
    </div>
    <div class="mt-3">
      <Foooter />

  </div>
  </div>
</div>
</template>

<script>
//import UserButton from '../components/UserButton.vue';
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import Foooter from '../components/Foooter.vue';
import Catégories from '../components/Catégories.vue';
import Event_cart from '@/components/Event_cart.vue';

export default {
  name: 'PageAccueil',
  components: {
    Catégories,
    Navbar,
    Event_cart,
    //MyCaroussel,
   // UserButton,
    Foooter
  },

  data() {
    return {
      evenements: [],
      categories: [],
      villes: [] ,
      comment: '' 
    }
  },
  computed: {
    imageUrl() {
      return `/storage/${this.evenements.fichier}`;
    }
  },
  mounted() {
      this.getEvenements();
      this.getCategories();
      this.getVilles();
    },

  methods: {
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
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);
    
    // Récupérer le jour en format numérique
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const months = [
      'JANV', 'FEV', 'MARS', 'AVR', 'MAI', 'JUIN',
      'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC'
    ];
    const month = months[monthIndex];
    
    // Concaténer le jour et le mois dans le format souhaité
    return `${day} ${month}`;
  },

    performSearch() {
      // Insérez votre logique de recherche ici
      console.log('Recherche effectuée:', this.searchQuery);
    }
  }
};

</script>

<style scoped>
/*style des catégorie*/



.apropos{
    font-size: larger;
    color: #000;
    font-weight: bold;
    margin: 10px;
  }

/* Style du caroussel */
.titre  {
  font-weight: bolder;
  font-style: inherit;
}
.carousel-item
{
  width: 100%;
  height: 300px;
  background-position: center;
}

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
  height: auto; 
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
