<template>
  <div class="col-3 m-3 ">
    <figure>
      <img src="@\assets\EventPluse_text.png" width="160px" height="40px" />
    </figure>
  </div>
  <div class="col-6 m-auto ">
    <div class="container mt-3 ">
      <div class="row justify-content-center">
        <div class="card o-hidden border-2 shadow-lg my-5 bg-custom">
          <div class="p-5">
            <div class="text-center">
              <figure>
                <img src="@\assets\EventPluse.png" width="90px" height="70px" />
              </figure>
            </div>
            <div class="text-center">
              <h5 class="mb-2">Connexion</h5>
            </div>

            <form class="user" @submit.prevent="login">

              <div class="form-group p-3">
                <input v-model="user.email" type="email" class="form-control form-control-user" id="exampleInputEmail"
                  placeholder="Adresse e-mail" required>
              </div>
              <div class="form-group p-3">
                <input v-model="user.password" type="password" class="form-control form-control-user"
                  id="exampleInputPassword" placeholder="Mot de passe" required>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn btn-primary btn-block">Connexion</button>
              </div>
              <div class="text-center m-3">
                <router-link to="/inscription">
                  <a class="small">Créer un compte !</a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//import router from '@/router';   
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {

    login() {
      const toast = useToast();
      axios.post('http://localhost:8000/api/login', this.user)
        .then(response => {
          if (response.status == 200) {

            toast.success("Connexion réussie !");
            localStorage.setItem('authToken', response.data.access_token);
            localStorage.setItem('userEvent', response.data.user);
            window.location = '/'
            console.log(response);
          } else {
            console.error("Erreur de connexion :", response.data.message);
            toast.error("Erreur de connexion :", response.data.message);
          }
        })
        .catch(error => {
          console.log(error.response.data.message);
          const errorMessage = error.response.data.message || "Une erreur s'est produite.";
          toast.error(errorMessage);
          console.error(errorMessage);
        });

    }
  }
};
</script>

<style scoped>
.btn-primary {
  background-color: #52319e;
  border-color: #52319e;
}
</style>