<template>
  <div class="container text-center">
    <div class="rectangle">
        <p class="btn" >Déconnexion <img src="@\assets\icons8-utilisateur-sexe-neutre-32.png" height="20px"></p>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
//import router from '@/router';
export default {
  data(){
    return{
      //isLoggedIn: false,
    }
  },

  methods:{
    
  }
}
</script>

<style scoped>
.rectangle{
    border-radius: 10px;
    background-color: #52319e;
    width: 150px;
    height: 40px;
    margin: auto;
}
p{
    font-size: medium;
    color: white;
}

</style>