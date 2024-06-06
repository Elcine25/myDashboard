<template>
  <div class="container text-center">
    <div class="rectangle">
      <p class="btn" >Connexion <img src="@\assets\icons8-utilisateur-sexe-neutre-32.png" height="20px"></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //isAuthenticated: true,
    }
  }
}
</script>

<style scoped>
.rectangle{
    border-radius: 10px;
    background-color: #52319e;
    width: 130px;
    height: 40px;
    margin: auto;
}
p{
    font-size: medium;
    color: white;
}

</style>