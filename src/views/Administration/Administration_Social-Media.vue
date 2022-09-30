<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout">
            <button @click="updateSettings()" class="topBar--save">Speichern</button>
        </div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
            <div class="sidebar--content--loginInfo">Angemeldet: <br> max.mustermann@hs-flensburg.de</div>
            <div class="sidebar--content">
                <router-link class="admin-link" to="./vorlesungsplan">Vorlesungsplan</router-link>
            </div>
            <div class="sidebar--content current">
                <router-link class="admin-link" to="./social-media">Social Media</router-link>
            </div>
            <div class="sidebar--content">
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
            <div>
                <div class="input--header">Twitter-Account verlinken:</div>
                <div>
                    <input class="input_twitter" type="text" placeholder="Twitter-Profil-Link" v-model="twitterLink">
                    <div class="current--data">Aktuell verlinkt: {{twitterLink}}</div>
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
            twitterLink: '',
            settings: null,
        }
    },

    methods: {

        updateSettings() {
            axios.get('http://127.0.0.1:8000/api/settings')
        },

        fetchSettings() {
            axios.get('http://127.0.0.1:8000/settings/1')
                .then((response) => {
                    console.log(response)
                    this.settings = response.settings
                    this.twitterLink = response.settings.twitter_url
                })
        }
    },
    created() {
        this.fetchSettings();
    }

}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.input--header {
    width: 100rem;
    font-size: 2rem;
    margin: 12rem 2rem 1rem 2rem;
}

.input_twitter {
    width: 100rem;
    margin: 0rem 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;
}

.currentSettings {
    margin-left: 3rem;
}

.current--data {
    margin: 2rem 0rem 0rem 3rem;
}
</style>