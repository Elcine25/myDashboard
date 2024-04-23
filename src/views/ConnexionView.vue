<template>
  <div class="col-3 m-3 ">
        <figure>
          <img src="@\assets\EventPluse_text.png" width="160px" height="40px" />
        </figure>
    </div>
  <div class="col-6 m-auto">
    <div class="container mt-5 ">
      <div class="row justify-content-center">
        <div class="card o-hidden border-2 shadow-lg my-5 bg-custom">
    <div class="p-5">
      <div class="col-2 m-auto">
        <figure>
          <img src="@\assets\EventPluse.png" width="90px" height="70px" />
        </figure>
    </div>
    <div class="col-4 m-auto">
      <h2 class="mb-5">Connexion</h2>
    </div>

    <form class="user" @submit.prevent="loginUser">
      
        <div class="form-group p-3">
          <input v-model="user.email" type="email" class="form-control form-control-user"
            id="exampleInputEmail" aria-describedby="emailHelp"
            placeholder="Addresse Email..." required>
        </div>
      <div class="mb-3">
        <div class="form-group p-3">
          <input v-model="user.password" type="password" class="form-control form-control-user"
          id="exampleInputPassword" placeholder="Password" required >
        </div>
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
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const user = ref({
    email: '',
    password: ''
  });
  const router = useRouter();
  async function loginUser() {
    try {
        const response = await axios.post('http://localhost:8000/api/login', user.value);      
        localStorage.setItem('accessToken', response.data.access_token);
      router.push('/listecategories');
    } catch (error) {
      console.error("Erreur d'authentification", error.response.data);
    }
  }
</script>

<style scoped>

.btn-primary  {
  background-color:  #7C5295;
  border-color: #7C5295;
}
</style>