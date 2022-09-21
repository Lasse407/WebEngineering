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
                <router-link class="admin-link" to="./user">User</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link-logout" to="../">Logout</router-link>
            </div>
        </div>
        <div class="contentBackground--admin">
            <div>
                <div class="input--header">Twitter-Account verlinken:</div>
                <div>
                    <input class="input_twitter" type="text"
                        placeholder="https://twitter.com/HochschuleFL?s=20&t=c-MXbEZOF8eH1xE9PRXipg"
                        vue-model="twitterLink">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            twitterLink: 'https://twitter.com/HochschuleFL?s=20&t=c-MXbEZOF8eH1xE9PRXipg',
        }
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
}
</style>