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
                <router-link class="admin-link" to="./user">User</router-link>
            </div>
            <div class="sidebar--content">
                <router-link class="admin-link-logout" to="../">Logout</router-link>
            </div>
        </div>
        <div class="contentBackground--admin">
            <div class="events--admin">
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate1">
                        <input type="text" placeholder="Name des Events 1" class="input--veranstaltungen__name"
                            vue-model="eventName1">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate2">
                        <input type="text" placeholder="Name des Events 2" class="input--veranstaltungen__name"
                            vue-model="eventName2">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate3">
                        <input type="text" placeholder="Name des Events 3" class="input--veranstaltungen__name"
                            vue-model="eventName3">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate4">
                        <input type="text" placeholder="Name des Events 4" class="input--veranstaltungen__name"
                            vue-model="eventName4">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate5">
                        <input type="text" placeholder="Name des Events 5" class="input--veranstaltungen__name"
                            vue-model="eventName5">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate6">
                        <input type="text" placeholder="Name des Events 6" class="input--veranstaltungen__name"
                            vue-model="eventName6">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventDate7">
                        <input type="text" placeholder="Name des Events 7" class="input--veranstaltungen__name"
                            vue-model="eventName7">
                    </small>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            eventDate1: '01.01.2022',
            eventName1: 'Event 1',
            eventDate2: '01.01.2022',
            eventName2: 'Event 2',
            eventDate3: '01.01.2022',
            eventName3: 'Event 3',
            eventDate4: '01.01.2022',
            eventName4: 'Event 4',
            eventDate5: '01.01.2022',
            eventName5: 'Event 5',
            eventDate6: '01.01.2022',
            eventName6: 'Event 6',
            eventDate7: '01.01.2022',
            eventName7: 'Event 7',
        }
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
    width: 80%;
    margin-left: 1rem;
    background-color: white;
    margin: 1rem 4rem;
}

.events--admin {
    align-self: center;
    width: 100%;
}
</style>