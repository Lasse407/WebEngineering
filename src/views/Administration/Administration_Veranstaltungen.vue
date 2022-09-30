<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout">
        </div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
            <div class="sidebar--content">
                <router-link class="admin-link" to="./vorlesungsplan">Vorlesungsplan</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./social-media">Social Media</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./news">News</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./screens">Screens</router-link>
            </div>
            <div class="sidebar--content current">
                <router-link class="admin-link" to="./veranstaltungen">Veranstaltungen</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./blog">Blog</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link-logout" to="../">Logout</router-link>
            </div>
        </div>
        <div class="contentBackground--admin">
            <div class="events--admin">
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date1">
                        <input type="text" placeholder="Name des Events 1" class="input--veranstaltungen__name"
                            v-model="name1">
                    </small>
                    <button @click="updateEvent1" class="button--3">Änderung bestättigen</button>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date2">
                        <input type="text" placeholder="Name des Events 2" class="input--veranstaltungen__name"
                            v-model="name2">
                    </small>
                    <button @click="updateEvent2" class="button--3">Änderung bestättigen</button>

                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date3">
                        <input type="text" placeholder="Name des Events 3" class="input--veranstaltungen__name"
                            v-model="name3">
                    </small>
                    <button @click="updateEvent3" class="button--3">Änderung bestättigen</button>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date4">
                        <input type="text" placeholder="Name des Events 4" class="input--veranstaltungen__name"
                            v-model="name4">
                    </small>
                    <button @click="updateEvent4" class="button--3">Änderung bestättigen</button>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date5">
                        <input type="text" placeholder="Name des Events 5" class="input--veranstaltungen__name"
                            v-model="name5">
                    </small>
                    <button @click="updateEvent5" class="button--3">Änderung bestättigen</button>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date6">
                        <input type="text" placeholder="Name des Events 6" class="input--veranstaltungen__name"
                            v-model="name6">
                    </small>
                    <button @click="updateEvent6" class="button--3">Änderung bestättigen</button>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date" v-model="date7">
                        <input type="text" placeholder="Name des Events 7" class="input--veranstaltungen__name"
                            v-model="name7">
                    </small>
                    <button @click="updateEvent6" class="button--3">Änderung bestättigen</button>
                </div>
                Die aktuellen Events sehen in Screens --> Vorlesungsplan
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            events: [],
            date1: '',
            name1: '',
            date2: '',
            name2: '',
            date3: '',
            name3: '',
            date4: '',
            name4: '',
            date5: '',
            name5: '',
            date6: '',
            name6: '',
            date7: '',
            name7: '',
        }
    },

    methods: {

        updateEvent1() {
            axios.put('http://127.0.0.1:8000/api/events/1', {
                title: this.name1,
                event_date: this.date1
            })
                .then(() => {
                    alert('Event 1 wurde geändert.');
                })
        },
        updateEvent2() {
            axios.put('http://127.0.0.1:8000/api/events/2', {
                title: this.name2,
                event_date: this.date2
            })
                .then(() => {
                    alert('Event 2 wurde geändert.');
                })
        },
        updateEvent3() {
            axios.put('http://127.0.0.1:8000/api/events/3', {
                title: this.name3,
                event_date: this.date3
            })
                .then(() => {
                    alert('Event 3 wurde geändert.');
                })
        },
        updateEvent4() {
            axios.put('http://127.0.0.1:8000/api/events/4', {
                title: this.name4,
                event_date: this.date4
            })
                .then(() => {
                    alert('Event 4 wurde geändert.');
                })
        },
        updateEvent5() {
            axios.put('http://127.0.0.1:8000/api/events/5', {
                title: this.name5,
                event_date: this.date5
            })
                .then(() => {
                    alert('Event 5 wurde geändert.');
                })
        },
        updateEvent6() {
            axios.put('http://127.0.0.1:8000/api/events/6', {
                title: this.name6,
                event_date: this.date6
            })
                .then(() => {
                    alert('Event 6 wurde geändert.');
                })
        },
        updateEvent7() {
            axios.put('http://127.0.0.1:8000/api/events/7', {
                title: this.name7,
                event_date: this.date7
            })
                .then(() => {
                    alert('Event 7 wurde geändert.');
                })
        },

        fetchEvents() {
            axios.get('http://127.0.0.1:8000/api/events')
                .then((response) => {
                    console.log(response.data);
                    this.events = response.data.events;
                })
        }
    },

    created() {
        this.fetchEvents();
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.input--veranstaltungen__date {
    width: 10%;
    background-color: white;
    margin: 1rem 0rem;
}

.input--veranstaltungen__name {
    width: 60%;
    margin-left: 1rem;
    background-color: white;
    margin: 1rem 4rem;
}

.events--admin {
    align-self: center;
    width: 100%;
}

.button--3 {
    height: 2rem;
    width: 15rem;
    border-width: 0rem;
    background-color: #262481;
    color: white;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 1rem;
}
</style>