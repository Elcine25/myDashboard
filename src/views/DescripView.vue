<template>
  <nav>
    <Navbar />
  </nav>

  <body>
    <div class="row">
      <div class="banner">
        <img v-if="evenements.fichier" :src="getImageUrl(evenements.fichier)" :alt="evenements.name"
          class="banner-image">
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="desc">
          <div class="circle "></div>
          <div class="ml-5 nom">
            {{ evenements.nom }}
          </div>
          <div class="j-m-a mt-3">
            <i class="fas fa-calendar fa-lg mg-2"></i>
            <p class="ml-1">Le {{ formatDate(evenements.date) }} à {{ evenements.heure }}.</p>
          </div>
          <div class="j-m-a">
            <i class=" bi-geo "></i>
            <p class="ml-1"> {{ evenements.lieu }}.</p>
          </div>
          <div class="circle "></div>
          <div class="apropos ml-5">À propos de cet événement</div>
          <div class="descrip"> {{ evenements.description }}</div>
        </div>
      </div>
      <div class="col-6">
        <div class="circle mt-5"></div>
        <div class="ml-5 nom">Commentaires</div>
  <div class="comments-container">
    <div class="comment" v-for="(comment, index) in commentaires" :key="index">
      <div class="comment-content">
        <div class="username">{{ comment.user.nom }}</div>
        <div class="message">{{ comment.contenu }}</div>
        <div class="timestamp">{{ formatTimestamp(comment.timestamp) }}</div>
      </div>
    </div>
  </div>

        <form @submit.prevent="addComments(evenementID)" class="form">
          <textarea class="form-control mt-3" v-model="model.comment.contenu" placeholder="Commenter..."></textarea>
          <button type="submit" class="btn">Envoyer </button>
        </form>
        <!--<div class="comments border ">
        <div v-if="comments.length > 0">
        <div v-for="(comment, index) in comments" :key="index" class="affcomm">
          <div class="personname"></div>
          <p class="commentaire"></p>
        </div>
      </div>
      
      <div class="ml-5" v-else>Pas de commentaires pour cet événement.</div>
      </div>-->
      </div>
    </div>
  </body>
  <div class="mt-3">
    <Foooter />
  </div>
</template>

<script>
import axios from 'axios'
import Foooter from '../components/Foooter.vue';
import { useToast } from "vue-toastification";
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    //UserButton,
    Foooter,
    Navbar
  },
  name: 'descripEvent',
  data() {
    return {
      searchQuery: '',
      isLoggedIn: false,
      evenements: [],
      evenementId: this.$route.params.id,
      categories: [],
      villes: [],
      commentaires: [],
      model: {
        comment: {
          contenu: ''
        }
      }
    }
  },
  mounted() {
    this.getEvenements(this.evenementId);
    this.getVilles();
  },
  methods: {
    getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },

    getEvenements(evenementId) {
      axios.get('http://localhost:8000/api/evenements/' + evenementId)
        .then(response => {
          this.evenements = response.data.evenements;
          console.log(this.evenements);
        })
        .catch(error => {
          console.error("Erreur d'affichage de l'événement", error);
          alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
        });
    },

    getVilles() {
      axios.get('http://localhost:8000/api/villes')
        .then(response => {
          console.log(response.data.villes);
        })
        .catch(error => {
          console.error("Erreur d'affichage de catégorie", error);
          alert("Une erreur s'est produite lors de l'affichage de la catégorie.");
        });
    },
    performSearch() {
      // Insérez votre logique de recherche ici
      console.log('Recherche effectuée:', this.searchQuery);
    },

    addComments() {

      const toast = useToast();
      if (localStorage.getItem('authToken') && localStorage.getItem('userEvent')) {
        this.isLoggedIn = true;

        const eventId = this.evenements.id;
      const contenu = this.model.comment.contenu;
      axios.post(`http://localhost:8000/api/evenements/${eventId}/commentaires`, { contenu: this.model.comment.contenu, evenement_id: eventId }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
      })
        .then(response => {
          //this.comments = response.data.contenu;
          console.log(contenu);
          console.log(response.data.contenu);
          toast.success(response.data.message);
        })
        .catch(error => {
          console.error("Erreur d'affichage des commentaires", error);
          // alert("Une erreur s'est produite lors de l'affichage des commentaires.");
        });
      }
      else {
        this.isLoggedIn = false;
        toast.error('Veillez vous connecter')
      }
      
    },
    

    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const months = [
        'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];
      const month = months[monthIndex];

      // Concaténer le jour et le mois dans le format souhaité
      return `${day} ${month}`;
    },
  }
};

</script>

<style scoped>
/*style des détails*/

.desc {
  margin: 1cm;
  color: rgb(99, 99, 99);
}

.j-m-a {
  display: flex;
  margin-left: 1cm;
}

.nom {
  color: rgb(20, 20, 20);

  font-size: larger;
  font-weight: bold;
  margin: 10px;
}

.circle {
  width: 20px;
  /* Largeur du cercle */
  height: 20px;
  /* Hauteur du cercle */
  border-radius: 50%;
  /* Rendre le cercle */
  background-color: #52319e;
  /* Couleur du cercle */
}

.apropos {
  font-size: larger;
  font-weight: bold;
  margin: 10px;
  color: rgb(20, 20, 20);
}

.calendar {
  width: 30px;
  position: flex;

}

.descrip {
  width: 500px;
  height: 700px;
  margin-left: 1cm;
}

.personame {
  font-size: larger;
  font-weight: bolder;
  color: rgb(20, 20, 20);
  margin: 20px;
}

.com {
  color: rgb(99, 99, 99);
  margin: 10px;
}

.banner {
  width: 100%;
}

.banner img {
  width: 100%;
  height: 500px;
  display: block;
  object-fit: cover;
}
.comments-container {
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
}
.comment {
  display: flex;
  margin-bottom: 10px;
}
</style>