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
            <div class="sidebar--content">
                <router-link class="admin-link" to="./news">News</router-link>
            </div>
            <div class="sidebar--content current">
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
            <div class="screen-picker">
                <router-link to="../aktuelles" class="screen-picker_single">zu Screen: Aktuelles</router-link>
                <router-link to="../vorlesungsplan" class="screen-picker_single">zu Screen: Vorlesungsplan
                </router-link>
                <router-link to="../blog" class="screen-picker_single">zu Screen: Blog</router-link>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.screen-picker {
    display: flex;
    justify-content: center;
    align-self: flex-start;
    flex-direction: column;
    margin: 2rem;
    font-size: 2rem;
}

.screen-picker_single:hover {
    font-weight: bold;
}

.screen-picker_single {
    margin: 3rem;
    color: #f3621b;
    text-decoration: none;
}
</style>