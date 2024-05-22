<template>
    <nav>
      <Navbar/>
    </nav>
    <div class="banner">
      <!--<img src="@\assets\csm_atelier_4_fc7bdce275.jpg" class="mt-1" width="100%" height="300" alt="">-->
    </div>
    
    <body>
    <div class="desc">
      <div class="nom">{{ evenements.nom }}</div>
      <div class="j-m-a">
        <i class="fas fa-calendar fa-lg"></i>
        <p class="ml-1">Le {{formatDate(evenements.date)}} à {{ evenements.heure }}.</p>
      </div>
      <div class="j-m-a">
        <i class=" bi-geo "></i> <i class="bi-alarm"></i>
        <p class="ml-1"> {{ evenements.lieu }}.</p>
      </div>
    <div class="apropos">A-propos de cet événement</div>
      <div class="descrip"> {{ evenements.description }}</div>
    </div> Catégorie
    <div class="comments">
      <div class="affcomm">
        <div class="profil">
        <span>kikh</span>
      </div>
        <div class="personame">AMS Adna</div>
        <p class="com"> jcnujdàzajhcnsvbsi oazudoaz bcih dzbcuefc uvuhfbe zhbu
           ubfce uqbcoo kdcbue kdbvu dvb. Trè impatiente d'y être.</p>
      </div>

  </div>

    </body>
      <div class="mt-3">
        <Foooter />
      </div>
  </template>
  
  <script>
 import axios from 'axios'
 import Foooter from '../components/Foooter.vue';
 import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      //UserButton,
      Foooter,
      Navbar
  },
  name: 'descripEvent',
    data(){
     return{
      searchQuery: '',
      evenements: {},
        evenementId:this.$route.params.id,
        categories: [],
        villes: [] 
     }
    },
    mounted() {
      this.getEvenements(this.evenementId);
      this.getCategories();
      this.getVilles();
    },
    methods: {
      
        getEvenements(evenementId){
            axios.get('http://localhost:8000/api/evenements/'+ evenementId)
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
            console.log(response.data.categories);
       })
      .catch(error => {
        console.error("Erreur d'affichage de catégorie", error);
        alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
      });
        },

        getVilles(){
          axios.get('http://localhost:8000/api/villes')
          .then(response => {
          console.log(response.data.villes);
     })
    .catch(error => {
      console.error("Erreur d'affichage de catégorie", error);
      alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
    });
      },
      performSearch() {
        // Insérez votre logique de recherche ici
        console.log('Recherche effectuée:', this.searchQuery);
      },
      formatDate(dateString) {
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);
    
    // Récupérer le jour en format numérique
    const day = date.getDate();
    
    // Récupérer le mois en format alphabétique
    const monthIndex = date.getMonth();
    const months = [
      'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const month = months[monthIndex];
    
    // Concaténer le jour et le mois dans le format souhaité
    return `${day} ${month}`;
  },
    }
  };
  
  </script>
  
  <style scoped>
  /*style des détails*/

  .desc{
    margin: 1.5cm;
  }
  .j-m-a{
    display: flex;
    margin: 1cm;
  }
  .nom{
    font-size: larger;
    font-weight: bold;
    margin: 10px;
  }

  .apropos{
    font-size: larger;
    font-weight: bold;
    margin: 10px;
  }
  .calendar{
    width: 30px;
    position: flex;

  }
  .j-m-a{
    margin-left: 1.5cm;
  }
  .descrip{
    width: 500px;
    margin-left: 1.5cm;
  }

  .personame{
    font-size: larger;
    font-weight: 500;
    margin: 20px;
  }
  .affcomm{
  width: 300px; /* Largeur de la carte */
  border: 1px solid #ccc; /* Bordure de la carte */
  border-radius: 8px; /* Bordure arrondie */
  overflow: hidden; /* Masquer le contenu qui dépasse de la carte */
  background-color: #fff;
  box-shadow: 0 4px 4px 0px;
  margin: 1cm;
  }
  .profil {
    position:absolute;
    border-radius: 100px;
    width: 50px;
    height: 70px;
    background:  #7c5295e0;
  }
  .com{
    margin: 10px;
  }
  .banner{
    width: 100%;
    height: 300px;
    /*background-color: #ccc;*/
    background-image: url("/src/assets/csm_atelier_4_fc7bdce275.jpg");
    background-size: cover;
    background-position: center;
  }  
  
  </style>
  