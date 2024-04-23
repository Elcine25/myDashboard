<template>
  <nav>
    <Navbar/>
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
    <a class="nav-link" href="#" style="color: #7C5295">Accueil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" style="color: #7C5295; border-bottom-color: #7C5295">Voir des événements</a>
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
    </nav> -->
    <div class="mt-3">
      <Catégories />
    </div>
    <div class="mt-3">
      <Event_cart />
    </div>
    <div class="mt-3">
      <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
//import UserButton from '../components/UserButton.vue';
//import Footer from '../components/Footer.vue';
import Catégories from '../components/Catégories.vue';
import Event_cart from '@/components/Event_cart.vue';

export default {
  components: {
    Navbar,
    Catégories,
    //UserButton,
    //Footer,
    Event_cart
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


</style>
