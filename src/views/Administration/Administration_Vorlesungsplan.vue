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
            <div class="sidebar--content current">
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
            <div class="vl-plan-admin">
                <div class="table">
                    <div class="table-row table-row--header">
                        <div class="table-col table-col--20">
                            Uhrzeit
                        </div>
                        <div class="table-col table-col--30">
                            Veranstaltung
                        </div>
                        <div class="table-col table-col--30">
                            Dozent
                        </div>
                        <div class="table-col table-col--20">
                            Raum
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p> 8-10 </p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name1">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name2">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name3">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent1">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent2">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent3">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room1">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room2">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room3">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>10-12</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name4">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name5">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name6">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent4">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent5">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent6">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room4">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room5">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room6">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>12-14</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name7">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name8">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name9">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent7">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent8">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent9">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room7">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room8">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room9">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>14-16</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name10">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name11">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name12">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent10">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent11">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent11">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room10">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room11">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room12">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>16-18</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name13">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name14">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlan.name15">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent13">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent14">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlan.docent15">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room13">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room14">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlan.room15">
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
            vlPlan: {
                name1: '',
                docent1: '',
                room1: '',

                name2: '',
                docent2: '',
                room2: '',

                name3: '',
                docent3: '',
                room3: '',

                name4: '',
                docent4: '',
                room4: '',

                name5: '',
                docent5: '',
                room5: '',

                name6: '',
                docent6: '',
                room6: '',

                name7: '',
                docent7: '',
                room7: '',

                name8: '',
                docent8: '',
                room8: '',

                name9: '',
                docent9: '',
                room9: '',

                name10: '',
                docent10: '',
                room10: '',

                name11: '',
                docent11: '',
                room11: '',

                name12: '',
                docent12: '',
                room12: '',

                name13: '',
                docent13: '',
                room13: '',

                name14: '',
                docent14: '',
                room14: '',

                name15: '',
                docent15: '',
                room15: '',
            },
        }
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

.input--table {
    font-size: 1rem;
    text-align: left;
    padding: 1.25rem;
    height: 3rem;
}

.vl-plan-admin {
    width: 100rem;
    align-self: center;
    margin-left: 15rem;
    display: flex;
    flex-direction: column;
    background-color: #cfcfcf;
    border-radius: 2rem;
}

h2 {
    font-size: 1.5rem;
}

.current {
    background-color: #f3f6f4;
}

.admin-link {
    text-decoration: none;
    color: #262481;
}

.topBar--admin {

    display: flex;
    background-color: #F3621B;
    height: 4rem;
    width: 100%;
    color: white;

    justify-content: space-between;
    align-items: center;
}

.topBar--logo {
    margin: 2rem;
    height: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 6px 0px white;
}

.topBar--logout {
    margin-right: 1rem;
}

.bottomBar--admin {
    display: flex;
    background-color: #f2f2f2;
    height: 95vh;
    width: 100%;
}

.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    margin: 0rem 1rem 0rem 0rem;
    background-color: white;
}

.sidebar--content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    width: 100%;
    font-size: 25px;
    border-bottom-width: 2px;
    border-bottom-color: #f3f6f4;
    border-bottom-style: solid;
}

.sidebar--content:hover {
    background-color: #f3f6f4;
}


.sidebar--content--loginInfo {
    border-style: solid;
    border-color: grey;
    border-bottom-width: 2px;

    margin-top: 10px;
    padding-bottom: 15px;
    line-height: 1.5rem;
    text-align: center;
}

.contentBackground--admin {
    display: flex;
    width: 95%;
}

.admin-link-logout {
    text-decoration: none;
    color: #F3621B
}
</style>