<template>
    <div id="wrapper">
      <SiideBar />
  
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
  
  <!-- Main Content -->
  <div id="content">
  
    <!-- Topbar -->
    <NaavBar />
    <!-- End of Topbar -->
                <div class=" mx-3 rounded shadow-lg justify-content-between">
                    <div>
                        <br>
                        <h3 class="mx-3">Liste des Catégories</h3>
                        <router-link to="/ajoutercategorie" >   
                            <button type="submit" class=" btn-custom-color border border-dark m-3 rounded p-2 fas fa-plus">  Ajouter</button>
                        </router-link>
  
                        <br> <br>
                        
                          <div v-if="this.categories.length>0" class="m-2 border rounded" style="width: 90%; height: 80%;">
      <div>
          <!-- Boucle sur les catégories pour les afficher -->
          <div v-for="(categorie, index) in this.categories" :key="index" class="center p-4 row">
              <div class="col-3 border-right border-dark">
                  <div class="row p-1 fas">
                     Identifiant: {{ categorie.id }}
                  </div><br> 
                  <div class="row p-1 fas">
                    Nom:  {{ categorie.name }}
                  </div><br> 
              </div>
              <div class="col-3 border-right border-dark">
                  <div class="fas fa-paperclip">
                    Description:  {{ categorie.description }}
                  </div>
              </div>
              <div class="col-3">
                  
                      <RouterLink :to="{ path: '/categories/'+categorie.id+'/edit'}" type="button" class="fas btn mb-2 mx-3 text-success   " style="width: 35%; height: 30%;">
                              Modifier
                      </RouterLink>
  
                      <button type="button" @click="deleteCategorie(categorie.id)" class="fas btn  text-danger  mx-3" style="width: 40%; height: 30%;">
                          Supprimer
                      </button>
                  
              </div>
          </div>
      </div>
      </div>
      <div v-else class="m-2 border rounded" style="width: 90%; height: 80%;">
        <div>Loading...</div>
  </div>
   <!--                           <div>
                                    <div class="center p-4 row">
                                        <div class="col-3 border-right border-dark">
                                            <div class=" row p-1 fas ">
                                                ID de l'Événement
                                            </div><br> 
                                            <div class=" row p-1 fas f">
                                                Nom
                                            </div><br> 
                                            
                                            
                                        </div>
                                        <div class="col-3 border-right border-dark">
                                            <div class="fas fa-paperclip">
                                                Description
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            
                                                <RouterLink to="/" type="button" class="btn border p-1" style="width: 35%; height: 30%;">
                                                    <div class=" fas fa-pencil-alt text-success fa-1x" style="height: 50%;width: 50%;">
                           Modifier
                        </div> </RouterLink>
  
                                                <button type="button" class="btn border mx-3 p-1"
                                                    style="width: 40%; height: 30%;">
                                                    <div class=" fas fa-trash-alt text-danger fa-1x" style="height: 50%;width: 50%;">
                          <div >Supprimer</div>
                        </div> </button>
                                           
                                        </div>
                                    </div>
  
                                </div>-->
                            </div>
                            <br>
                            
                        
                        <br>
                    </div>
                </div>
            </div>
        </div>
  
  
  </template>
  
  <script>
  import axios from 'axios';
  import SiideBar from '../components/SiideBar.vue'
  import NaavBar from  '../components/NaavBar.vue'
  export default {
    components: {
      SiideBar,
      NaavBar,
    },
    name: 'listeCategories',
    data() {
      return {
        categorieId:'',
        categories: [] 
      };
    },
    mounted() {
      this.getCategories();
     },
    methods: {
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

        deleteCategorie(categorieId){
            
            if(confirm('Voulez-vous vraiment supprimer cette catégorie ?')){
                console.log(categorieId)
                axios.delete('http://localhost:8000/api/categories/' + categorieId + '/delete')
                .then(res=>{
                    alert(res.data.message);
                    this.getCategories();
                })
                .catch(function(error) {
                    if (error.response) {
                        if(error.response.status == 404){
                            alert(error.response.data.message)
                        }
                    }
            });
            }
        }


    
    },
    
    }
  </script>
  
  <style scoped>
    .btn-custom-color {
        background-color: #ae71d1;
        color:white;
    }
    .top {
        margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  
    .vertical-line {
        border: none;
        border-left: 2px solid black;
        /* Couleur et largeur de la ligne */
        height: 100px;
        /* Hauteur de la ligne */
    }
    
  </style>