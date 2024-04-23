<template>
  <div class="">
  <div id="accueil">
    <nav>
    <Navbar />
  </nav>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color">
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
    </nav>  -->
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
    <h5>ggrrr</h5>
    <p>ppfff</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/home/adna/Documents/projest_mémoire/myDashboard/src/assets/csm_atelier_4_fc7bdce275.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/home/adna/Documents/projest_mémoire/myDashboard/src/assets/csm_atelier_4_fc7bdce275.jpg" alt="Third slide">
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
    <div class="mt-3">
      <Foooter />
    </div>
  </div>
</div>
</template>

<script>
//import UserButton from '../components/UserButton.vue';
import Navbar from '@/components/Navbar.vue';
//import MyCaroussel from '../components/MyCaroussel.vue';
import Foooter from '../components/Foooter.vue';
import Catégories from '../components/Catégories.vue';

export default {
  components: {
    Catégories,
    Navbar,
    //MyCaroussel,
   // UserButton,
    Foooter
  },

  data() {
    return {
      searchQuery: '',
      
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
}

.btn-primary{
  background-color:  #ffffff;
  border-color: #ffffff;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 37px;
}
.input-group {
  width: 300px; /* Ajustez la largeur selon vos besoins */

}

.input-group-append button {/* Style pour centrer verticalement l'icône de recherche */
  display: flex;
  align-items: center;
}


</style>
