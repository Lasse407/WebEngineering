<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout"></div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
            <div class="sidebar--content">
                <router-link class="admin-link" to="./social-media">Vorlesungsplan</router-link>
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
            <div class="sidebar--content">
                <router-link class="admin-link" to="./veranstaltungen">Veranstaltungen</router-link>
            </div>
            <div class="sidebar--content current">
                <router-link class="admin-link" to="./blog">Blog</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link-logout" to="../">Logout</router-link>
            </div>
        </div>
        <div class="contentBackground--admin">
            <div class="col blog--admin">
                <h3>Blogbeitrag bearbeiten</h3>
                <div class="article--description--admin">
                    Datum <input class="input--blog--date" type="date" placeholder="Datum" v-model="date">
                </div>
                <div class="article--description--admin">
                    Überschrift<input class="input--blog--header" type="text" placeholder="Beispiel" v-model="header">
                </div>
                <div class="article--description--admin">
                    Untertitel<input class="input--blog--lowheader" type="text" placeholder="Beispiel 2"
                        v-model="subHeader">
                </div>
                <div class="article--description--admin">
                    Autor<input class="input--blog--author" type="text" placeholder="Max Musterman" v-model="author">
                </div>
                <div class="article--description--admin">
                    <input class="input--blog--text" type="text" placeholder="Bloginhalt - maximal 4000 Zeichen"
                        v-model="content">
                </div>
                <button @click="updateBlogpost" class="button--3">Änderung bestätigen</button>
                Den aktuellen Blog sehen in Screens --> Blog
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            date: '',
            header: '',
            subHeader: '',
            author: '',
            content: '',
        }
    },

    methods: {
        updateBlogpost() {
            axios.put('http://127.0.0.1:8000/api/blogposts/1', {
                title: this.header,
                teaser: this.subHeader,
                author: this.author,
                published_date: this.date,
                bodytext: this.content
            })
                .then(() => {
                    alert('Blog wurde angepasst.');
                })
        },
    },

    created() {

    }

}



</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.topBar--save {
    margin-right: 1rem;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    background-color: #F3621B;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
}

.topBar--save:hover {
    font-weight: bold;
}


.blog--admin {
    margin: 2rem 1rem;
}

.input--blog--date {
    margin-left: 4rem;
    width: 10rem;
}

.input--blog--header {
    margin-left: 2rem;
    width: 120rem;
}

.input--blog--lowheader {
    margin-left: 3rem;
    width: 120rem;
}

.input--blog--author {
    margin-left: 5rem;
    width: 120rem;
}

.input--blog--text {
    margin: 0rem 0rem 0rem 0rem;
    height: 47rem;
    width: 127rem;
}
</style>