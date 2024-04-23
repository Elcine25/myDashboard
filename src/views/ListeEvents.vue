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
                        <h3 class="mx-3">Liste des Événements</h3>
                        <router-link to="/ajouterevent" >   
                            <button type="submit" class=" btn-custom-color border border-dark m-3 rounded p-2 fas fa-plus">  Ajouter</button>
                        </router-link>
                        <div v-if="this.evenements.length>0" class="m-2 border rounded" style="width: 90%; height: 80%;">

                        <br> <br>
          <div v-for="(evenement, index) in this.evenements" :key="index" class="center p-4 row">
                        
                            <div class="border border-dark rounded  " style="width: 90%;height: 80%;">
                                <div>
                                    <div class="p-4 row">
                                        <div class="col-3 border-right border-dark">
                                            <img src="../assets/csm_atelier_4_fc7bdce275.jpg" alt="Event Image"
                                                style="width: 100%;height: 100%;"> &nbsp;
                                        </div>
                                        <div class="col-4 border-right border-dark">
                                            <div class=" row p-1 fas ">
                                                ID de l'Événement: {{ evenement.id }}
                                            </div><br> 
                                            <div class=" row p-1 fas ">
                                                Nom: {{ evenement.nom }}
                                            </div><br> 
                                            <div v-for="categorie in categories" :key="categorie.id" class="row p-1 fas">
                                            <template v-if="categorie.id === evenement.categories_id">
                                                Categorie:   {{ categorie.name }}
                                                </template>
                                            </div> <br>
                                            <div v-for="ville in villes" :key="ville.id" class="row p-1 fas">
                                            <template v-if="ville.id === evenement.villes_id">
                                                Ville:   {{ ville.name }}
                                                </template>
                                            </div>
                                            <div class="row p-1 fas " > <u>Lieu:</u> {{ evenement.lieu }}</div> <br>
                                            <div class="row fas "> <u>Date et Heure:</u> {{ evenement.date }} à {{ evenement.heure }}</div>
                                            
                                            
                                        </div>
                                        <div class="col-3 border-right border-dark">
                                            <div class="fas fa-paperclip">
                                                <u>Description:</u> {{ evenement.description }}
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            
                                            <RouterLink :to="{ path: '/evenements/'+evenement.id+'/edit'}" type="button" class="fas btn mb-2 mx-3 text-success   " style="width: 35%; height: 30%;">
                                                Modifier
                                            </RouterLink>
  
                                        <button type="button" @click="deleteEvenement(evenement.id)" class="fas btn  text-danger  mx-3" style="width: 40%; height: 30%;">
                                            Supprimer
                                        </button>
                                            
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                            </div>
                            </div>
                            <div v-else class="m-2 border rounded" style="width: 90%; height: 80%;">
        <div>Loading...</div>
  </div>
                            <br>
                        
                        <br>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
import axios from 'axios'
import SiideBar from '../components/SiideBar.vue'
import NaavBar from  '../components/NaavBar.vue'
  export default {
    components: {
      SiideBar,
      NaavBar,
    },
    name: 'listeEvents',
    data(){
     return{
        evenementId:'',
        evenements: [],
        categories: [],
        villes: [] 
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

        deleteEvenement(evenementId){
            
            if(confirm('Voulez-vous vraiment supprimer cet événement ?')){
                console.log(evenementId)
                axios.delete('http://localhost:8000/api/evenements/' + evenementId + '/delete')
                .then(res=>{
                    alert(res.data.message);
                    this.getEvenements();
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
    }
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