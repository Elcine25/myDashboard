<template>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color">
  <div class="container">
    <a class="navbar-brand" >
      <img src="@\assets\EventPluse.png" alt="Bootstrap" width="30" height="24">
    </a>
    <div class="input-group">
      <input type="text" class="form-control" v-model="searchQuery" @keyup.enter="performSearch" placeholder="Rechercher...">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="performSearch">
          <img src="@\assets\icons8-chercher-100 (1).png" height="20px">
        </button>
      </div>
    </div>
    <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" style="color: #7C5295; border-bottom-color: #7C5295">Accueil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color: #7C5295">Voir des événements</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style="color: #7C5295">S'inscrire</a>
  </li>
</ul>
    <div class="mr-3">
    <a href="url_de_votre_lien">
      <UserButton />
    </a>
    </div>
  </div>
    </nav>
    <div class="banner">
      <!--<img src="@\assets\csm_atelier_4_fc7bdce275.jpg" class="mt-1" width="100%" height="300" alt="">-->
    </div>
    <div class="desc">
      <div class="nom">Nom de l'événement</div>
      <div class="j-m-a">
        <img src="@\assets\calendar.929x1024.png" alt="" class="calendar">
        <p>Le jour-mois-année. En ligne ou présentiel(facultatif)</p>
      </div>
    <div class="apropos">A-propos de cet événement</div>
      <div class="descrip"> apzd,xsjcndjcndskcnnjjdcnjksx,c jvnfhvbxjj jdncsxwcnosjncnjcb ndnoiazndcjekbhbvbdjgvxkjhbhbfbncjrhrbbnwjniuhzrzrççà_b f&"_bsjbfugHF4Z0F088Gfbsvc"</div>
    </div> 
    <div class="comments">
      <div class="affcomm">
        <div class="profil">
        <span>{{ eventDate }}</span>
      </div>
        <div class="personame">AMS Adna</div>
        <p class="com"> jcnujdàzajhcnsvbsi oazudoaz bcih dzbcuefc uvuhfbe zhbu ubfce uqbcoo kdcbue kdbvu dvb. Trè impatiente d'y être.</p>
      </div>
    </div>

      <div class="mt-3">
        <Footer />
      </div>
  </template>
  
  <script>
  //import UserButton from '../components/UserButton.vue';
 // import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      //UserButton,
      //Footer
  },
  
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      performSearch() {
        // Insérez votre logique de recherche ici
        console.log('Recherche effectuée:', this.searchQuery);
      }
    }
  };
  
  </script>
  
  <style scoped>
  /*style du navbar*/
  .custom-bg-color {
    background-color: #e7dede /* Remplacez #ff0000 par votre couleur personnalisée */
  }
  
  .form-control {
    border-radius: 20px;
    border: 2px;
  }
  
  .btn-primary{
    background-color:  #ffffff;
    border-color: #ffffff;
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-right: 2px;
    height: 37px;
  }
  .input-group {
      width: 300px; /* Ajustez la largeur selon vos besoins */
      border-right: 2px;
  }
  
  .input-group-append button {/* Style pour centrer verticalement l'icône de recherche */
    display: flex;
    align-items: center;
  }
  .desc{
    margin: 1.5cm;
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
  