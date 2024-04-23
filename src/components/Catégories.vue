<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="categories">
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\training.1024x1023.png" alt="Icône Catégorie 1">
        </div>
        <span>Educatif</span>
       </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\circus-tent.1024x643.png" alt="Icône Catégorie 1">
        </div>
        <span>Social</span>
    </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\ecology.1024x974.png" alt="Icône Catégorie 1">
        </div>
        <span>Environnement</span>
    </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\internet.1024x1013.png" alt="Icône Catégorie 1">
        </div>
        <span>Technologie</span>
    </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\food-wine-cheese-bread-national-culture-paris.1024x996.png" alt="Icône Catégorie 1">
        </div>
        <span>Culinaire</span>
    </button>
      <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\party-stripes.1023x1024.png" alt="Icône Catégorie 1">
        </div>
        <span>Culturel</span>
    </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\digital-wellbeing.743x1024.png" alt="Icône Catégorie 1">
        </div>
        <span>Bien-être</span>
    </button>
        <button class="category" @click="searchCategory('categorie1')">
        <div class="circle">
            <img src="@\components\icons\paint-brush.1024x1024.png" alt="Icône Catégorie 1">
        </div>
        <span>Art</span>
    </button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    methods: {
      searchCategory(category) {
        // Logique pour effectuer la recherche de la catégorie spécifiée
        console.log('Recherche de la catégorie :', category);
        // Vous pouvez implémenter ici la logique de recherche correspondante
        // Par exemple, rediriger vers une autre page de résultats avec les résultats de la recherche
      }
    }
  };
  </script>


  <style scoped>
  .categories {
  display: flex; /* Utilisez un affichage flex pour aligner les catégories horizontalement */
}

.category {
    position: center; 
  display: flex; /* Utilisez un affichage flex pour aligner les cercles et les textes verticalement */
  flex-direction: column; /* Définissez la direction de l'alignement comme colonne */
  align-items: center; /* Alignez les éléments horizontalement */
  margin-right: 30px; /* Espacement entre les catégories */
  border: none; /* Supprimez les styles de bordure du bouton */
  background: none; /* Supprimez les styles de fond du bouton */
  cursor: pointer; /* Définissez le curseur en tant que pointeur pour indiquer l'interactivité */
}
.category:hover .circle {
  /* Changez la couleur de fond du cercle au survol du bouton */
  background-color: #babec2;
}

.circle {
  width: 80px; /* Largeur du cercle */
  height: 80px; /* Hauteur du cercle */
  border-radius: 50%; /* Rendre le cercle */
  background-color: #e7dede; /* Couleur du cercle */
  display: flex; /* Utilisez un affichage flex pour centrer l'icône */
  justify-content: center; /* Centrez l'icône horizontalement */
  align-items: center; /* Centrez l'icône verticalement */
  margin-bottom: 10px; /* Espacement entre le cercle et le texte */
}

.circle img {
  width: 40px; /* Taille de l'icône */
  height: 40px;
}
  </style>
  