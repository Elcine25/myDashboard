<template>
  <nav>
    <NaavBar />
  </nav>
  <!-- Carousel Start -->
  <div class="carousel">
    <div class="owl-carousel">
      <div class="carousel-item">
        <div class="carousel-img">
          <img v-if="evenements.fichier" :src="getImageUrl(evenements.fichier)" :alt="evenements.name">
        </div>
        <div class="carousel-text">
          <h1>{{ evenements.nom }}</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- Carousel End -->

  <body>
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
          <div class="contact">
            <div class="container">
              <div class="row align-items-center">
                <div class="col">
                  <div class="contact-info">
                    <div class="contact-text">
                      <h3>Ajouter cette date à mon calendrier</h3>
                      <div class="row">
                        <a :href="googleCalendarUrl" target="_blank" class="button rectangle btn mt-2">Google
                          Calendar</a>
                        <a :href="outlookCalendarUrl" target="_blank" class="button rectangle btn mt-2">Outlook
                          Calendar</a>
                        <a :href="iCalUrl" download="event.ics" class="button rectangle btn  mt-2">Apple Calendar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="circle "></div>
          <div class="apropos ml-5">À propos de cet événement</div>
          <div class="descrip"> {{ evenements.description }}</div>
        </div>
        <div class="contact">
          <div class="container">
            <div class="row align-items-center">
              <div class="col">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="contact-text">
                    <h3>Voulez-vous être informé par courrier des événements similaires à celui-ci ?</h3>
                    <div class="row">
                      <button @click="handleSubscription(false)" class="rectangle btn mt-2">NON</button>
                      <button @click="handleSubscription(true)" class="rectangle btn mt-2">OUI</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="mt-2">
          <div class="banner-rating">
            <ul>
              <li class="rating-star">
                <span class="nom">{{ nombreVotes }} Personne(s) aime(ent) l'idée de cet événement !</span>
              </li>
              <li>
                <i class="ml-3 m fas btn fa-star fa-lg"
                  :class="{ 'text-primary': hasvoted, 'text-secondary': !hasvoted }" @click="addVote(evenements.id)">
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div class="circle mt-3"></div>
        <div class="ml-5 nom">Que-dit la communauté à propos de cet événement ?</div>
        <div class="comments-container">
          <div class="comment" v-for="(comment, index) in commentaires" :key="index">
            <div class="comment-content">
              <div class="username">
                <div>{{ comment.user_name }} | {{ formatTimestamp(comment.created_at) }}</div>

              </div>
              <div class="message">{{ comment.contenu }}</div>
            </div>
          </div>
        </div>

        <form @submit.prevent="addComments(evenementID)" class="form">
          <textarea class="form-control mt-3" v-model="model.comment.contenu" placeholder="Commenter..."></textarea>
          <button type="submit" class=" rectangle btn mt-2">Envoyer </button>
        </form>
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
import NaavBar from '@/components/NaavBar.vue';
//import CalendarLinks from '@/components/CalendarLinks.vue';

export default {
  components: {
    //UserButton,
    Foooter,
    //CalendarLinks,
    NaavBar
  },
  name: 'descripEvent',
  data() {
    return {
      searchQuery: '',
      isLoggedIn: false,
      evenements: [],
      evenementId: '',
      categories: [],
      categorieID: null,
      users: [],
      hasvoted: false,
      nombreVotes: 0,
      commentaires: [],
      model: {
        comment: {
          contenu: ''
        }
      }
    }
  },
  mounted() {
    this.evenementID = this.$route.params.id;
    this.getEvenements();
    this.fetchComments();
    this.fetchVotes();
  },
  computed: {
    googleCalendarUrl() {
      const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
      const text = `&text=${encodeURIComponent(this.evenements.nom)}`;
      const dates = `&dates=${this.formatDateTime(this.evenements.date, this.evenements.heure)}/${this.formatDateTime(this.evenements.date, this.evenements.heure)}`;
      const details = `&details=${encodeURIComponent(this.evenements.description)}`;
      const location = `&location=${encodeURIComponent(this.evenements.lieu)}`;
      return `${baseUrl}${text}${dates}${details}${location}&sf=true&output=xml`;
    },
    outlookCalendarUrl() {
      const baseUrl = 'https://outlook.live.com/owa/?path=/calendar/action/compose';
      const subject = `&subject=${encodeURIComponent(this.evenements.nom)}`;
      const startdt = `&startdt=${this.formatDateTimeOutlook(this.evenements.date, this.evenements.heure)}`;
      const enddt = `&enddt=${this.formatDateTimeOutlook(this.evenements.date, this.evenements.heure)}`;
      const body = `&body=${encodeURIComponent(this.evenements.description)}`;
      const location = `&location=${encodeURIComponent(this.evenements.lieu)}`;
      return `${baseUrl}${subject}${startdt}${enddt}${body}${location}`;
    },
    iCalUrl() {
      const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTSTART:${this.formatDate(this.evenements.date, this.evenements.heure)}
DTEND:${this.formatDate(this.evenements.date, this.evenements.heure)}
SUMMARY:${this.evenements.nom}
DESCRIPTION:${this.evenements.description}
LOCATION:${this.evenements.lieu}
END:VEVENT
END:VCALENDAR
            `;
      const blob = new Blob([icsContent.trim()], { type: 'text/calendar' });
      return URL.createObjectURL(blob);
    },
  },

  methods: {
    addVote(evenementId) {
      const toast = useToast();
      if (localStorage.getItem('authToken') && localStorage.getItem('userEvent')) {
        this.isLoggedIn = true;
        axios.post(`http://localhost:8000/api/evenements/votes`, { evenement_id: evenementId }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
        })
          .then(response => {
            console.log(response.data);
            toast.success(response.data.message);
            this.getEvenements()
            this.fetchVotes()
          })
          .catch(error => {
            console.error("Aucun vote.", error);
          });
      }
      else {
        this.isLoggedIn = false;
        toast.error('Veillez vous connecter')
      }
    },

    hasVoted(evenementId) {
      return this.votes.includes(evenementId);
    },

    updateVote(evenementId) {
      if (this.votes.includes(evenementId)) {
        this.votes = this.votes.filter(id => id !== id);
      } else {
        this.votes.push(evenementId);
      }
    },

    fetchVotes() {
      if (localStorage.getItem('authToken')) {
        axios.get(`http://localhost:8000/api/evenements/votes/${this.evenementID}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(response => {
            this.hasvoted = response.data.hasVoted;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des votes", error);
          });
      }
    },

    handleSubscription(subscribe) {
      if (localStorage.getItem('authToken')) {
        axios.post(`http://localhost:8000/api/subscribe`, {
          subscribe: subscribe,
          evenement_id: this.evenementID,
          categories_id: this.categorieID
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
        })
          .then(response => {
            useToast().success(response.data.message);
          })
          .catch(error => {
            useToast().error('Erreur lors de l\'inscription à la notification.');
            console.error(error);
          });
      } else {
        useToast().error('Veuillez vous connecter.');
      }
    },

    getEvenements() {
      axios.get('http://localhost:8000/api/evenements/' + this.evenementID)
        .then(response => {
          this.evenements = response.data.evenements;
          this.nombreVotes = response.data.nombre_votes;
          console.log(this.evenements);
        })
        .catch(error => {
          console.error("Erreur d'affichage de l'événement", error);
          alert("Une erreur s'est produite lors de l'affichage de la l'événement.");
        });
    },
    getImageUrl(imagePath) {
      return `http://localhost:8000/storage/Fichiers/${imagePath}`;
    },
    addComments() {
      const toast = useToast();
      if (localStorage.getItem('authToken') && localStorage.getItem('userEvent')) {
        this.isLoggedIn = true;
        const contenu = this.model.comment.contenu;
        axios.post(`http://localhost:8000/api/evenements/${this.evenementID}/commentaires`, { contenu: this.model.comment.contenu, evenement_id: this.evenementID }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
        })
          .then(response => {
            console.log(contenu);
            this.model.comment.contenu = '';
            toast.success(response.data.message);
            this.fetchComments()
          })
          .catch(error => {
            console.error("Erreur d'affichage des commentaires", error);
          });
      }
      else {
        this.isLoggedIn = false;
        toast.error('Veillez vous connecter')
      }

    },
    fetchComments() {
      axios.get(`http://localhost:8000/api/commentaires/${this.evenementID}/commentaires`)
        .then(response => {
          this.commentaires = response.data.contenu;
          console.log(this.commentaires)
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des commentaires", error);
        });

    },
    formatDateTime(dateString, timestamp) {
      // Combinaison de la date et de l'heure en une seule chaîne
      const dateTimeString = `${dateString}T${timestamp}:00`;

      // Création d'un nouvel objet Date
      const d = new Date(dateTimeString);

      // Vérification si la date est valide
      if (isNaN(d.getTime())) {
        console.error('Date ou heure invalide:', dateTimeString);
        return '';
      }

      // Conversion au format ISO et suppression des séparateurs
      return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    },
    formatDateTimeOutlook(dateString, timestamp) {
      const dateTimeString = `${dateString} T${timestamp}`;
      const d = new Date(dateTimeString);
      // Vérification si la date est valide
      if (isNaN(d.getTime())) {
        console.error('Date ou heure invalide:', dateTimeString);
        return '';
      }
      return d.toISOString().replace(/-|:|\.\d\d\d/g, '').replace(/-|:|\.\d\d\d/g, '');
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
      return `${day} ${month}`;
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];
      const month = months[monthIndex];

      return `${day} ${month} ${year} | ${hours}:${minutes}`;
    }
  }
};

</script>

<style scoped>
/*style des détails*/
.carousel,
.carousel-item {
  height: 400px !important;
}

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

.text-primary {
  color: #7c5295e0;
}

.text-secondary {
  color: white;
}

.banner-rating ul li.rating-star {
  position: relative;
  top: 19px;
  padding-left: 25px;
}

.banner-rating ul {
  list-style: none;
}

.banner-rating ul li {
  display: inline-block;
  width: 230px;
  height: 50px;
  font-size: 15px;
  border-radius: 10%;
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


.comment-content {
  flex: 1;
}

.username {
  font-weight: bold;
  font-size: small;
  color: #000000;
  margin-bottom: 3px;
}

.message {
  margin-bottom: 5px;
}

.timestamp {
  font-size: 0.8em;
  color: #777;
}

.btn {
  color: #ffffff;
}

.rectangle {
  border-radius: 10px;
  background-color: #52319e;
  width: 100px;
  margin: auto;
}
</style>