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
                      <h3 class="mx-3">Liste des Villes</h3>
                      <router-link to="/ajouterville" >   
                          <button type="submit" class=" btn-custom-color border border-dark m-3 rounded p-2 fas fa-plus">  Ajouter</button>
                      </router-link>

                      <br> <br>
                      
                        <div v-if="this.villes.length>0" class="m-2 border rounded" style="width: 90%; height: 80%;">
    <div>
        <!-- Boucle sur les catégories pour les afficher -->
        <div v-for="(ville, index) in this.villes" :key="index" class="center p-4 row">
            <div class="col-3 border-right border-dark">
                <div class="row p-1 fas">
                   Identifiant: {{ ville.id }}
                </div><br> 
                <div class="row p-1 fas">
                  Nom:  {{ ville.name }}
                </div><br> 
            </div>
            <div class="col-3">
                
                    <RouterLink :to="{ path: '/villes/'+ville.id+'/edit'}" type="button" class="fas btn mb-2 mx-3 text-success   " style="width: 35%; height: 30%;">
                            Modifier
                    </RouterLink>

                    <button type="button" @click="deleteVille(ville.id)" class="fas btn  text-danger  mx-3" style="width: 40%; height: 30%;">
                        Supprimer
                    </button>
                
            </div>
        </div>
    </div>
    </div>
    <div v-else class="m-2 border rounded" style="width: 90%; height: 80%;">
      <div>Loading...</div>
</div>
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
  name: 'listeVilles',
  data() {
    return {
      villeId:'',
      villes: [] 
    };
  },
  mounted() {
    this.getVilles();
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
      alert("Une erreur s'est produite lors de l'affichage des villes.");
    });
      },

      deleteVille(villeId){
          
          if(confirm('Voulez-vous vraiment supprimer cette catégorie ?')){
              console.log(villeId)
              axios.delete('http://localhost:8000/api/villes/' + villeId + '/delete')
              .then(res=>{
                  alert(res.data.message);
                  this.getVilles();
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