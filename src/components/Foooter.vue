<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- Footer.vue -->

<template>
  <!--<footer class="footer">
    <div class="container text-center">
      <div class="row align-item">
        <div class="col order-first">
          <section class="logo">
            <figure>
              <img src="..\assets\EventPluse_blanc.png" width="200px" height="150px">
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
            <p class="contacts">Téléphone:<button type="button" class="btn btn-link">+229 91234567
              </button>(Cotonou)<br>
              <button type="button" class="btn btn-link"> +229 91234567 </button>(Calavi)<br>
            </p>
            <div class="col">
              <a href="url_de_votre_lien">
                <img src="@\assets\facebook.1024x1024.png" width="px" height="40px">
              </a>
              <a href="url_de_votre_lien">
                <img src="@\assets\twitter.1024x1024.png" width="px" height="40px">
              </a>
              <a href="url_de_votre_lien">
                <img src="@\assets\instagram.1024x1024 (1).png" width="px" height="40px">
              </a>
            </div>

          </section>

        </div>
      </div>
      <p class="event">2024 EVENTPULSE</p>
    </div>
  </footer>
  Footer Start -->
  <!-- Footer Start -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="row">
            <div class="col-md-6">
              <div class="footer-contact">
                <h5>NOUS CONTACTER</h5>
                <p><i class="fa fa-map-marker-alt"></i>Abomey-Calavi, Womey</p>
                <p><i class="fa fa-phone-alt"></i>+229 91234567</p>
                <p><i class="fa fa-envelope"></i>pulse@event.com</p>
                <div class="footer-social">
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-link">
                <h5>Rechercher Evénements</h5>
                <a href="">Evénements à Cotonou</a>
                <a href="">Evénements à Calavi</a>
                <a href="">Evénements à Bohicon</a>
                <a href="">Evénements à Parakou</a>
                <a href="">Evénements à Natitingou</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col order-last">
          <section class="logo">
            <figure>
              <img src="..\assets\EventPluse_blanc.png" width="200px" height="150px">
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
      </div>
    </div>
    <div class="container copyright">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; <a href="#">2024 EVENTPULSE</a>, Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
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
  color: #fff
}

.order-last {
  flex: 1;
  /* Pour que chaque élément occupe le même espace */
  border-left: 1px solid #ccc;
}

.mil {
  flex: 1;
  /* Pour que chaque élément occupe le même espace */
  border-right: 1px solid #ccc;
}

.contacts {
  color: #fff;
}

.event {
  font-size: small;
  color: #fff;
  margin-top: 1cm;
}
</style>
