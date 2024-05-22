<template>  
    <!-- Sidebar -->
    <div id="wrapper">
        <SiideBar />
  
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
  
  <!-- Main Content -->
  <div id="content">
  
      <!-- Topbar -->
      <NaavBar />
      <!-- End of Topbar -->
      <h3 class="mx-3">Modifier l'événement</h3>
      
  <div class=" border  rounded shadow-lg mx-2 my-2">
      
   <br>
  
      <div class=" mx-2 my-2">
   <br>

   <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length>0">
   <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index" >
     {{ error[0] }}
   </li>
    </ul>
   
      <div class="row">
  <div class="col-6">
      <label for="Nom d'événement" class="form-label col-12 ">
          <input type="text" class="form-control"
          v-model="model.evenements.nom" name="nom" id="NomEvenement" placeholder="Nom d'événement" required>
      </label>
  </div> 
      <div class="col-6">
      <label for="Lieu" class="form-label col-12 ">
          <input type="text" class="form-control" 
          v-model="model.evenements.lieu" name="lieu" id="Lieu" placeholder="Lieu" >
      </label> 
  </div> 
  </div>
  
  <div class="row">
      <div class="col-6">
      <label for="Jour" class="form-label col-12 ">
          <input type="date" class="form-control" 
          v-model='model.evenements.date' name="date" id="Jour"  required>
      </label>
  </div> 
  <div class="col-6" >
      <label for="Heure" class="form-label col-12 ">
          <input type="time" class="form-control" 
          v-model='model.evenements.heure' name="heure" id="Heure"  required>
      </label>
  </div> 
  </div>
  
  <div class="row">
      <div class="col-6" >
      <label for="Ville" class="form-label col-12 ">
        <select class="form-control" id="Ville" name="villes_id">
    <option v-for="ville in villes" :value="ville.id" :key="ville.id" 
    :selected="ville.id === model.evenements.villes_id">{{ ville.name }}</option>
</select>

      </label>
  </div> 
      
  <div class="col-6">
      <label for="Categorie" class="form-label col-12"  >
          <select class="form-control" id="Categorie" name="categories_id" v-model="model.evenements.categories_id" >
            <option v-for="categorie in categories" :value="categorie.id" :key="categorie.id">{{ categorie.name }}</option>
  </select>    </label>
  </div> 
  
  </div>
  <div class="col">
      <label for="Description" class="form-label col-12 ">
          <input type="text-area" class="form-control" 
          v-model='model.evenements.description' name="description" id="Description" placeholder="Description" required>
      </label>
  </div>
  
   <br> <br>
  
      </div> <br>
      <div class="col-md-12 d-flex justify-content-end">
    <button @click="canceladd" class="btn-custom-color border  m-3 rounded p-2 fas fa-times ">  Annuler</button>
    <button @click="updateEvent" class="btn-custom-color border  m-3 rounded p-2 fas fa-save">  Enregistrer</button>
</div>
</div>

  <br>
  </div>
    </div>
   
  </div>

    
  </template>
  
  <script>
  import axios from 'axios';
  import SiideBar from '../components/SiideBar.vue'
  import NaavBar from '@/components/NaavBar.vue';
    export default {
      components: {
        SiideBar,
        NaavBar,
      },
      name: 'modifierEvent',
    data(){
     return{
      evenementId: '',
       errorList: '',
       model: {
        
         evenements: {
       nom: '',
       description: '',
       lieu: '',
       date: '',
       heure: '',
       categories_id: '',
       villes_id: '',
       }
       },
       categories: [],
       villes: [],
     }
    },
    mounted(){
      this.evenementId=this.$route.params.id;
      this.getEvenementData(this.$route.params.id);
      
    },
    methods: {
    
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
      getEvenementData(evenementId){
        axios.get('http://localhost:8000/api/evenements/' + evenementId + '/edit')
          .then(res=> {
          console.log(res.data.evenements);
          this.model.evenements=res.data.evenements
        })
        .catch(function(error) {
       if (error.response) {
         if(error.response.status == 404){
           alert(error.response.data.message)
         }
        }
     });
      },


      updateEvent() {
        var mythis=this;
  const selectedCategorieId = this.model.evenements.categories_id;
  const selectedVilleId = this.model.evenements.villes_id;
  
  this.model.evenements.categories_id = selectedCategorieId;
  this.model.evenements.villes_id = selectedVilleId;
  
  axios
    .put('http://localhost:8000/api/evenements/' + this.evenementId + '/edit', this.model.evenements)
    .then(res => {
      console.log(res.data);
      alert(res.data.message);
      this.errorList = '';
      this.$router.push({ name: 'listeEvents' });
    })
    .catch(function(error) {
      if (error.response) {
        if (error.response.status == 422) {
          mythis.errorList = error.response.data.errors; 
        }
        if (error.response.status == 404) {
          alert(error.response.data.message);
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
},
 canceladd() {
  this.$router.push ({ name: 'listeEvents' });// Rediriger vers la liste des catégories
   }
}
    }
  </script>
  
  <style>
  .btn-custom-color {
    background-color: #ae71d1; /* Indigo */
    color:white;
  }
  
  </style>