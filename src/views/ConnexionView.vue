<template>
  <div class="col-3 m-3 ">
        <figure>
          <img src="@\assets\EventPluse_text.png" width="160px" height="40px" />
        </figure>
    </div>
  <div class="col-5 m-auto ">
    <div class="container mt-3 ">
      <div class="row justify-content-center">
        <div class="card o-hidden border-2 shadow-lg my-5 bg-custom">
    <div class="p-5">
      <div class="col-2 m-auto">
        <figure>
          <img src="@\assets\EventPluse.png" width="90px" height="70px" />
        </figure>
    </div>
    <div class="col-5 m-auto">
      <h3 class="mb-5">Connexion</h3>
    </div>

    <form class="user" @submit.prevent="login">
      
      <div class="form-group p-3">
                <input v-model="visitor.email" type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Adresse e-mail" required>
              </div>
              <div class="form-group p-3">
                <input v-model="visitor.password" type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Mot de passe" required>
              </div>
      <p class="col-6 mx">
      <button type="button" class="btn btn-link">Mot de passe oublié ?</button>
      </p>
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
<div class="col-5 ">ertyfg</div>
</template>

<script>
import axios from 'axios';
import router from '@/router';      
export default {
  data() {
    return {
      visitor:{
      email: '',
      password: ''
    }
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:8000/api/login', this.visitor)
        .then(response => {
          if (response.status ==200) {
            router.push('/');
            console.log(response);
          } else  {
            console.error("Erreur de connexion :", response.data.message);
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

.btn-primary  {
  background-color:  #7C5295;
  border-color: #7C5295;
}
</style>