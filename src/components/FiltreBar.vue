<template>
    <div>
      <select v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.name }}</option>
      </select>
  
      <input type="date" v-model="selectedDate">
  
      <select v-model="selectedCity">
        <option value="">Toutes les villes</option>
        <option v-for="ville in villes" :key="ville.id" :value="ville.id">{{ ville.name }}</option>
      </select>
  
      <button @click="filterEvents">Filtrer</button>
  
      <ul>
        <li v-for="evenement in evenements" :key="evenement.id">{{ evenement.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        categories: [],
        villes: [],
        evenements: [],
        selectedCategory: '',
        selectedDate: '',
        selectedCity: ''
      };
    },
    created() {
      this.getEvenements();
      this.getCategories();
      this.getVilles();
    },
    methods: {
        getEvenements(){
            axios.get('http://localhost:8000/api/evenements')
            .then(response => {
                this.evenements = response.data.evenements;
            console.log(this.evenements)
            this.evenements = response.data.evenements;
       })
      .catch(error => {
        console.error("Erreur d'affichage de l'événement", error);
        alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
      });
        },

        getCategories(){
            axios.get('http://localhost:8000/api/categories')
            .then(response => {
                this.categories = response.data.categories;
            console.log(this.categories)
            this.categories = response.data.categories;
       })
      .catch(error => {
        console.error("Erreur d'affichage de catégorie", error);
        alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
      });
        },

        getVilles(){
          axios.get('http://localhost:8000/api/villes')
          .then(response => {
              this.villes = response.data.villes;
          console.log(this.villes)
          this.villes = response.data.villes;
     })
    .catch(error => {
      console.error("Erreur d'affichage de catégorie", error);
      alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
    });
        },
      filterEvents() {
        const params = {
          categorie_id: this.selectedCategory,
          date: this.selectedDate,
          ville_id: this.selectedCity
        };
  
        axios.get('/api/evenements', { params })
          .then(response => {
            this.evenements = response.data;
          })
          .catch(error => {
            console.error('Erreur de filtrage des événements', error);
          });
      }
    }
  };
  </script>
  