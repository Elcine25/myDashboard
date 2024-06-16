// resources/js/components/CalendarLinks.vue

<template>
    <div>
        <a :href="googleCalendarUrl" target="_blank" class="btn btn-primary">Ajouter à Google Calendar</a>
        <a :href="outlookCalendarUrl" target="_blank" class="btn btn-secondary">Ajouter à Outlook Calendar</a>
        <a :href="yahooCalendarUrl" target="_blank" class="btn btn-warning">Ajouter à Yahoo Calendar</a>
    </div>
</template>

<script>
export default {
    props: ['eventTitle', 'eventDescription', 'startTime', 'endTime', 'location'],
    computed: {
        googleCalendarUrl() {
            const base = 'https://www.google.com/calendar/render?action=TEMPLATE';
            const text = `&text=${encodeURIComponent(this.eventTitle)}`;
            const dates = `&dates=${this.formatDateStart}/${this.formatDateEnd}`;
            const details = `&details=${encodeURIComponent(this.eventDescription)}`;
            const location = `&location=${encodeURIComponent(this.location)}`;
            return `${base}${text}${dates}${details}${location}`;
        },
        outlookCalendarUrl() {
            const base = 'https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent';
            const subject = `&subject=${encodeURIComponent(this.eventTitle)}`;
            const startdt = `&startdt=${this.formatDateStartWithTime}`;
            const enddt = `&enddt=${this.formatDateEndWithTime}`;
            const body = `&body=${encodeURIComponent(this.eventDescription)}`;
            const location = `&location=${encodeURIComponent(this.location)}`;
            return `${base}${subject}${startdt}${enddt}${body}${location}`;
        },
        yahooCalendarUrl() {
            const base = 'https://calendar.yahoo.com/?v=60&view=d&type=20';
            const title = `&title=${encodeURIComponent(this.eventTitle)}`;
            const st = `&st=${this.formatDateStart}`;
            const et = `&et=${this.formatDateEnd}`;
            const desc = `&desc=${encodeURIComponent(this.eventDescription)}`;
            const in_loc = `&in_loc=${encodeURIComponent(this.location)}`;
            return `${base}${title}${st}${et}${desc}${in_loc}`;
        },
        formatDateStart() {
            return this.formatDate(this.startTime, false);
        },
        formatDateEnd() {
            return this.formatDate(this.endTime, false);
        },
        formatDateStartWithTime() {
            return this.formatDate(this.startTime, true);
        },
        formatDateEndWithTime() {
            return this.formatDate(this.endTime, true);
        }
    },
    methods: {
        formatDate(date, withTime = false) {
            const dt = new Date(date);
            const year = dt.getUTCFullYear();
            const month = ('0' + (dt.getUTCMonth() + 1)).slice(-2);
            const day = ('0' + dt.getUTCDate()).slice(-2);
            if (withTime) {
                const hours = ('0' + dt.getUTCHours()).slice(-2);
                const minutes = ('0' + dt.getUTCMinutes()).slice(-2);
                return `${year}-${month}-${day}T${hours}:${minutes}:00Z`;
            } else {
                return `${year}-${month}-${day}`;
            }
        }
    }
}
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    margin: 5px;
    color: white;
    text-decoration: none;
    border: none;
    cursor: pointer;
}

.btn-primary { background-color: #007bff; }
.btn-primary:hover { background-color: #0056b3; }

.btn-secondary { background-color: #6c757d; }
.btn-secondary:hover { background-color: #5a6268; }

.btn-warning { background-color: #ffc107; }
.btn-warning:hover { background-color: #e0a800; }
</style>
