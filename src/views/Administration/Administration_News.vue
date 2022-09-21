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
                <router-link class="admin-link" to="./user">User</router-link>
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
                                vue-model="article1Date">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article1Header">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 850 Zeichen" vue-model="article1Content">
                        </div>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 2 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                vue-model="article2Date">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article2Header">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 850 Zeichen" vue-model="article2Content">
                        </div>
                    </div>
                    <div class="col col--40 article--admin">
                        <h3>Artikel 3 bearbeiten:</h3>
                        <div class="article--description--admin">
                            Datum <input class="input--article--date" type="date" placeholder="Datum"
                                vue-model="article3Date">
                        </div>
                        <div class="article--description--admin">
                            Überschrift<input class="input--article--header" type="text" placeholder="Headline"
                                vue-model="article3Header">
                        </div>
                        <div class="article--description--admin">
                            <input class="input--article--text" type="text"
                                placeholder="Artikelinhalt - maximal 850 Zeichen" vue-model="article3Content">
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
            article1Date: '',
            article1Header: '',
            article1Content: '',

            article2Date: '',
            article2Header: '',
            article2Content: '',

            article3Date: '',
            article3Header: '',
            article3Content: '',
        }
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.article--admin {
    margin: 2rem 1rem;
    background-color: #cfcfcf;
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