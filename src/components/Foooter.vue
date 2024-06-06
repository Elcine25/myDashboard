<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- Footer.vue -->

<template>
   <!-- <footer class="footer">
      <div class="container text-center">
        <div class="row align-item">
            <div class="col order-first">
                <section class="logo">
                <figure>
                    <img src="..\assets\EventPluse_blanc.png" width="200px" height="150px" >
                </figure>
                </section>
                <section class="bouttons">
                    <div>
                        <button type="button" class="btn btn-link"> S'inscrire </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-link"> Se connecter </button>
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
                      <button type="button" class="btn btn-link"> +229 91234567 </button>(Bohicon)<br>
                      <button type="button" class="btn btn-link"> +229 91234567 </button>(Parakou)<br>
                      <button type="button" class="btn btn-link"> +229 91234567 </button>(Natitingou)
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
    </footer>-->
    <!-- Footer Start -->
    <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>Contacter notre agence</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>Cotonou, Bénin</p>
                                    <p><i class="fa fa-phone-alt"></i>+229 91234567</p>
                                    <p><i class="fa fa-envelope"></i>eventpulse@gmail.com</p>
                                    <div class="footer-social">
                                        <a href=""><i class="fa fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div class="form">
                                <input class="form-control" placeholder="Email goes here">
                                <button class="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    bottom: 0;
    width: 100%;
    height: 11cm;
    padding: 70px 0;
    text-align: center;
    background: linear-gradient(to bottom, #e1e0ec -10%, #023ab4 100%);

  }
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
