<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout">
            <button class="topBar--save"></button>
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
            <div class="sidebar--content current">
                <router-link class="admin-link" to="./news">News</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./screens">Screens</router-link>
            </div>
            <div class="sidebar--content">
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
            <div class="row">
                <div class="bottomBar--Content">
                    <div class="col col--40 article--admin">
                        <h3>Artikel 1 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                v-model="notificationPublishedDate1">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                v-model="notificationTitle1">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" v-model="notificationBodytext1">
                        </div>
                        <button @click="updateNotification1()"
                            style="height:3rem;width:80%;margin-left:4rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Änderungen
                            speichern</button>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 2 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                v-model="notificationPublishedDate2">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                v-model="notificationTitle2">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" v-model="notificationBodytext2">
                        </div>
                        <button @click="updateNotification2()"
                            style="height:3rem;width:80%;margin-left:4rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Änderungen
                            speichern</button>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 3 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                v-model="notificationPublishedDate3">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                v-model="notificationTitle3">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" v-model="notificationBodytext3">
                        </div>
                        <button @click="updateNotification3()"
                            style="height:3rem;width:80%;margin-left:4rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Änderungen
                            speichern</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            notificationPublishedDate1: '',
            notificationTitle1: '',
            notificationBodytext1: '',
            notificationPublishedDate2: '',
            notificationTitle2: '',
            notificationBodytext2: '',
            notificationPublishedDate3: '',
            notificationTitle3: '',
            notificationBodytext3: '',

        }
    },
    methods: {
        updateNotification1() {
            axios.put('http://127.0.0.1:8000/api/notifications/1', {
                title: this.notificationTitle1,
                published_date: this.notificationPublishedDate1,
                bodytext: this.notificationBodytext1
            })
                .then(() => {
                    alert('Artikel 1 wurde geändert.');
                })
        },
        updateNotification2() {
            axios.put('http://127.0.0.1:8000/api/notifications/2', {
                title: this.notificationTitle2,
                published_date: this.notificationPublishedDate2,
                bodytext: this.notificationBodytext2
            })
                .then(() => {
                    alert('Artikel 2 wurde geändert.');
                })
        },
        updateNotification3() {
            axios.put('http://127.0.0.1:8000/api/notifications/3', {
                title: this.notificationTitle3,
                published_date: this.notificationPublishedDate3,
                bodytext: this.notificationBodytext3
            })
                .then(() => {
                    alert('Artikel 3 wurde geändert.');
                })
        }
    },

    created() {
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.article--admin {
    margin: 2rem 1rem;
    border-radius: 3rem;
}

.article--description--admin {
    font-style: italic;
    font-size: 1rem;
    margin: 1rem;
}

.input--article--date {
    margin-left: 4rem;
    width: 10rem;
}

.input--article--header {
    margin-left: 2rem;
    width: 28rem;
}

.input--article--text {
    margin: 0rem 1rem;
    height: 50vh;
    width: 38rem;
}
</style>