<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <SiideBar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <NaavBar />
        <!-- End of Topbar -->
        <div class="card shadow m-4">
          <div>
            <br>
            <div class="card-header py-3">
                            <h4 class="m-0 font-weight-bold">Liste des Visiteurs</h4>
                        </div>
                     <!-- <router-link to="/ajoutervisiteur" >                               
                  <button type="submit" class=" btn-custom-color border border-dark m-3 rounded p-2 fas fa-plus">  Ajouter</button>
</router-link>-->

            <br> <br>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Password</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      
                    </tr>
                  </tbody>
             
              <br>
              <!-- <div class="border border-dark rounded  " style="width: 90%;height: 80%;">
                <div>
                  <div class="p-4 row">
                    
                    <div class="col-3 border-right border-dark ">
                      <div class=" row p-1 fas fa-info-circle">
                        AB-10001
                      </div>
                      <div class=" row p-1 fas fa-info-circle">
                        Mon crayon bleu
                      </div>
                      <div class="row p-1 fas fa-dollar-sign">
                        &nbsp; 50000000 FCFA
                      </div>
                    </div>
                    <div class="col-3 border-right border-dark">
                      <div class="fas fa-info-circle"> CT-80000</div> <br> <br>
                      <div class="fas fa-info-circle"> Mes chics crayons</div>
                    </div>
                    <div class="col-4">
                      <center>
                                                <button type="button" class="btn border p-1"
                                                    style="width: 35%; height: 30%;">
                                                    <div class=" fas fa-pencil-alt text-success fa-1x" style="height: 50%;width: 50%;">
                          <div> Modifier</div>
                        </div> </button>

                                                <button type="button" class="btn border mx-3 p-1"
                                                    style="width: 40%; height: 30%;">
                                                    <div class=" fas fa-trash-alt text-danger fa-1x" style="height: 50%;width: 50%;">
                          <div >Supprimer</div>
                        </div> </button>
                                            </center>
                    </div>
                  </div>

                </div>
              </div> -->
              </table>
              </div>
            </div>
            <br>
          </div>
        
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiideBar from '../components/SiideBar.vue'
import NaavBar from '@/components/NaavBar.vue';
  export default {
    components: {
      SiideBar,
      NaavBar,
    },
    name: "ListeClients"
  }
</script>

<style scoped>
.btn-custom-color {
  background-color: #7C5295; /* Indigo */
  color: white ;
}
</style>