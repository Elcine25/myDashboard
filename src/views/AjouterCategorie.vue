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
     <h3 class="mx-3">Ajouter une nouvelle catégorie</h3>
     
 <div class=" border  rounded shadow-lg mx-2 my-2">
     
  <br>
    
 
     <div class=" mx-2 my-2">
  <br>
  <h5 class=" mx-3">Entrez les informations suivantes:</h5>
  <br> 
  <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length>0">
    <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index" >
      {{ error[0] }}
    </li>
  </ul>
  
 <div class="col-6">
     <label for="NomCategorie" class="form-label col-12 ">
         <input type="text" class="form-control" 
         v-model="model.categorie.name" id="NomCategorie" name="NomCate" placeholder="Nom de catégorie" required>
     </label>
 </div>
 
 <div class="col">
     <label for="Description" class="form-label col-12 ">
         <input type="text" class="form-control" 
         v-model="model.categorie.description" id="Description" name="Descrip" placeholder="Description" required>
     </label>
 </div>
 
  <br> <br>
 
     </div> <br>
     <div class="col-md-12 d-flex justify-content-end">
     <button @click="canceladd" class="btn-custom-color border  m-3 rounded p-2 fas fa-times ">  Annuler</button>
     <button @click="saveCategorie" class="btn-custom-color border  m-3 rounded p-2 fas fa-save">  Enregistrer</button>
 </div>

 <br>
 </div>
   </div>
  
 </div>
 </div>
   
 </template>
 
 <script>
 import axios from 'axios';
 import SiideBar from '@/components/SiideBar.vue'
 import NaavBar from '@/components/NaavBar.vue';
   export default {
     components: {
       SiideBar,
       NaavBar,
     },
     name: 'ajouterCategorie',
     data(){
      return{
        errorList: '',
        model: {
          categorie: {
        name: '',
        description: '',
        }
        }
      }
     },
     methods: {
  saveCategorie() {
    var mythis=this;
      axios
      .post('http://localhost:8000/api/categories', this.model.categorie)
      .then(res => {
        console.log(res.data)
        alert(res.data.message);
       this.model.categorie= {
        name: '',
        description: '',
        }
       this.$router.push({ name: 'listeCategories' });
      })
      .catch(function(error) {
        if (error.response) {
          if(error.response.status == 422){
            mythis.errorList=error.response.data.errors;
          }
      //console.log(error.response.data);
      //console.log(error.response.status);
      //console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
      });
  },
  canceladd() {
      this.$router.push('/listecategories'); // Rediriger vers la liste des catégories
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