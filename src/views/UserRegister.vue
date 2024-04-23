<template>
    <div class="justify-content-center">
     <center>
       <div class="container ">
        <div class="card o-hidden border-2 shadow-lg my-5 bg-custom">
           <div class="card-body ">
             <div class="row ">
               <div class="col-lg-12">
                 <div class="p-5">
                   <div class="text-center">
                     <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                   </div>
                   <form class="user" @submit.prevent="registerUser">
                     <div class="form-group row">
                       <div class="col-sm-6">
                         <input v-model="user.name" type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Name" required>
                       </div>
                     </div>
                     <div class="form-group">
                       <input v-model="user.email" type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" required>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-6 mb-3 mb-sm-0">
                         <input v-model="user.password" type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" required>
                       </div>
                       <div class="col-sm-6">
                         <input v-model="user.password_confirmation" type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Confirm Password" required>
                       </div>
                     </div>
                     <button type="submit" class="btn btn-primary btn-user btn-block">
                       S'inscrire
                     </button>
                     <hr>
                   </form>
                   <hr>
                   <div class="text-center">
                     <a class="small" href="login.html">Already have an account? Login!</a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </center>
   </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
     data() {
       return {
         user: {
           name: '',
           email: '',
           password: '',
           password_confirmation: '',
         }
       };
     },



  

     methods: {
       async registerUser() {
         try {
           const response = await axios.post('/oauth/clients', this.user);
           console.log(response.data);
           this.$router.push('/dashboard');
         } catch (error) {
           console.error(error.response.data);
           // Gérer les erreurs, par exemple afficher un message d'erreur
         }
       }
     }
   }
   </script>
   
   <style>
   .bg-custom {
    background-color: white;
  }
  .btn-primary {
    background: #7C5295;
  }
   </style>