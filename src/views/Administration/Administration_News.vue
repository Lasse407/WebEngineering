<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout">
            <button class="topBar--save">Speichern</button>
        </div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
            <div class="sidebar--content--loginInfo">Angemeldet: <br> max.mustermann@hs-flensburg.de</div>
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
                                vue-model="article.date1">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article.header1">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" vue-model="article.content1">
                        </div>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 2 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                vue-model="article.date2">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article.header2">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" vue-model="article.content2">
                        </div>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 3 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                vue-model="article.date3">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article.header3">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 2300 Zeichen" vue-model="article.content3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            article: {

                date1: '',
                header1: '',
                content1: '',

                date2: '',
                header2: '',
                content2: '',

                date3: '',
                header3: '',
                content3: '',
            }
        }
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.article--admin {
    margin: 2rem 1rem;
    background-color: #cfcfcf;
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
    height: 55rem;
    width: 38rem;
}
</style>