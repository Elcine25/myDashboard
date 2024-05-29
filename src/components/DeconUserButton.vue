<template>
  <div class="container text-center">
    <div class="rectangle">
        <p >Déconnexion <img src="@\assets\icons8-utilisateur-sexe-neutre-32.png" height="20px"></p>
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
    background-color: #7C5295;
    width: 110px;
    height: 30px;
    margin: auto;
}
p{
    font-size: medium;
    color: white;
}

</style>