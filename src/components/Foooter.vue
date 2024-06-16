<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- Footer.vue -->

<template>
    <footer class="footer">
      <div class="container text-center">
        <div class="row align-item">
            <div class="col order-first">
                <section class="logo">
                <figure>
                    <img src="..\assets\EventPluse_blanc.png" width="200px" height="150px" >
                </figure>
                </section>
                <section v-if="!isLoggedIn" class="bouttons">
                    <div>
                        <button type="button" class="btn btn-link"> S'inscrire </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Se connecter </button>
                    </div>
                </section>
                <section v-if="isLoggedIn" class="bouttons">
                    <div>
                        <button type="button" class="btn btn-link"> Se déconnecter </button>
                    </div>
                </section>
            </div>
            
            <div class="col mil">
                <section class="rechercheR">
                    <h5>Rechercher Evénements</h5>
                    <div>
                        <button type="button" class="btn btn-link"> Evénements à Cotonou </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Evénements à Calavi </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Evénements à Bohicon </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Evénements à Parakou </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Evénements à Natitingou </button>
                    </div>
                </section>
            </div>
            <div class="col order-last">
                <section class="rechercheR">
                    <h5>NOUS CONTACTER</h5>
                    <p class="contacts">Téléphone:<button type="button" class="btn btn-link">+229 91234567 </button>(Cotonou)<br>
                      <button type="button" class="btn btn-link"> +229 91234567 </button>(Calavi)<br>
                    </p>
                    <div class="col">
                    <a href="url_de_votre_lien">
                      <img src="@\assets\facebook.1024x1024.png" width="px" height="40px" >
                    </a>
                    <a href="url_de_votre_lien">
                      <img src="@\assets\twitter.1024x1024.png" width="px" height="40px" >
                    </a>
                    <a href="url_de_votre_lien">
                      <img src="@\assets\instagram.1024x1024 (1).png" width="px" height="40px" >
                    </a>
                  </div>

                </section>
            
            </div>
        </div>
        <p class="event">2024 EVENTPULSE</p>
      </div>
    </footer>
    <!-- Footer Start -->
    <!--<div class="foot">
            <div>
                <h4>Copiright EVENTPUSE 2024</h4>

            </div>
            
        </div>-->
        <!-- Footer End -->
  </template>
  
  <script>
  export default {
    data() {
    return {
      searchQuery: '',
      isLoggedIn: true
    }
  },
  
  }
  </script>
  
  <style scoped>
 
  .logo {
    float: left;
  }
  .bouttons {
    float: right;
  }
  .btn-link {
    color: #fff;
  }
 
  h5 {
    font-weight: bold;
    color:#fff
  }
  .order-first {
    flex: 1;/* Pour que chaque élément occupe le même espace */
    border-right: 1px solid #ccc;
  }
  .mil {
    flex: 1;/* Pour que chaque élément occupe le même espace */
    border-right: 1px solid #ccc;
  }
  .contacts{
    color: #fff;
  }
  .event{
    font-size: small;
    color: #fff;
    margin-top: 1cm;
  }
  </style>
