<template>
  <div class="col-3 m-3 ">
    <figure>
      <img src="@/assets/EventPluse_text.png" width="160px" height="40px" />
    </figure>
  </div>
  <div class="col-6 m-auto">
    <div class="container mt-5 ">
      <div class="card o-hidden border-2 shadow-lg my-5 bg-custom">
        <div class="row justify-content-center">
          <div class="p-5">
            <div class="col-2 m-auto">
              <figure>
                <img src="@/assets/EventPluse.png" width="90px" height="70px" />
              </figure>
            </div>
            <div class="col-5 m-auto">
              <h3 class="mb-5">Inscription</h3>
            </div>
            <div class="text-center">
              <p class="mb-5">Vous avez déjà un compte ?
                <router-link to="/connexion">
                  <button type="button" class="btn btn-link">Se connecter</button>
                </router-link>
              </p>
            </div>

            <form @submit.prevent="register">
              <div class="form-group p-3">
                <input v-model="visitor.email" type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Adresse e-mail" required>
              </div>
              <div class="form-group p-3">
                <input v-model="visitor.name" type="text" class="form-control form-control-user" id="exampleName" placeholder="Nom" required>
              </div>
              <div class="form-group p-3">
                <input v-model="visitor.password" type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Mot de passe" required>
              </div>
              <div class="form-group p-3">
                <input v-model="visitor.password_confirmation" type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Confirmer le mot de passe" required>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn btn-primary btn-block">Continuer</button>
              </div>

              <!--<div class="text-center my-3 mb-4">
                <div class="rectangle">
                  <span class="or-text"><div class="border">ou</div></span>
                </div>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-danger">
                  <div class="col">
                    <p class="continuer">
                      <img src="@/assets/google_2702602.png" width="40px" height="30px" /> Continuer avec Google
                    </p>
                  </div>
                </button>
              </div>-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      visitor: {
        name: '',
        email: '',
        password: '',
         password_confirmation: ''
      }
    };
  },

  methods: {
    register() {
      axios.post('http://localhost:8000/api/register', this.visitor)
        .then(response => {
          if (response.status ==200) {
            router.push('/connexion');
          } else  {
            console.error("Erreur lors de l'inscription :", response.data.message);
          }
        })
        .catch(error => {
         console.log(error.response.data.message);
         alert(error.response.data.message || "Une erreur s'est produite.");
        });
    }
  }
};
</script>


<style scoped>
:root {
    --primary-color: #7C5295; /* Remplacez cette couleur par celle de votre choix */
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --info-color: #17a2b8;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
  }
.rectangle {
  position: relative;
  height: 1px;
  background-color: #ccc;

}
.continuer{
  text-align:center;

  color: #676767;
}
.btn-primary  {
  background-color:  #7C5295;
  border-color: #7C5295;
}

.btn-danger  {
  background-color:  #fff;
  border-color: #676767;
}


.or-text {
  position: absolute;
  top: -10px;
  background-color: #fff;
  padding: 0 10px;
  font-weight: bold;
}
</style>