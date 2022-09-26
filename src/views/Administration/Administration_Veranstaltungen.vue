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
                <router-link class="admin-link-logout" to="../">Logout</router-link>
            </div>
        </div>
        <div class="contentBackground--admin">
            <div class="events--admin">
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date1">
                        <input type="text" placeholder="Name des Events 1" class="input--veranstaltungen__name"
                            vue-model="eventForm.name1">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date2">
                        <input type="text" placeholder="Name des Events 2" class="input--veranstaltungen__name"
                            vue-model="eventForm.name2">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date3">
                        <input type="text" placeholder="Name des Events 3" class="input--veranstaltungen__name"
                            vue-model="eventForm.name3">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date4">
                        <input type="text" placeholder="Name des Events 4" class="input--veranstaltungen__name"
                            vue-model="eventForm.name4">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date5">
                        <input type="text" placeholder="Name des Events 5" class="input--veranstaltungen__name"
                            vue-model="eventForm.name5">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date6">
                        <input type="text" placeholder="Name des Events 6" class="input--veranstaltungen__name"
                            vue-model="eventForm.name6">
                    </small>
                </div>
                <div class="events__item">
                    <small class="events__item-date">
                        <input type="date" placeholder="datum" class="input--veranstaltungen__date"
                            vue-model="eventForm.date7">
                        <input type="text" placeholder="Name des Events 7" class="input--veranstaltungen__name"
                            vue-model="eventForm.name7">
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
            eventForm: {
                date1: '01.01.2022',
                name1: 'Event 1',
                date2: '01.01.2022',
                name2: 'Event 2',
                date3: '01.01.2022',
                name3: 'Event 3',
                date4: '01.01.2022',
                name4: 'Event 4',
                date5: '01.01.2022',
                name5: 'Event 5',
                date6: '01.01.2022',
                name6: 'Event 6',
                date7: '01.01.2022',
                name7: 'Event 7',
            }

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