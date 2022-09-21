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
                <router-link class="admin-link" to="./user">User</router-link>
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
                                vue-model="vlPlanName1">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName2">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName3">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent1">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent2">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent3">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum1">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum2">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum3">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>10-12</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName4">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName5">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName6">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent4">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent5">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent6">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum4">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum5">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum6">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>12-14</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName7">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName8">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName9">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent7">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent8">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent9">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum7">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum8">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum9">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>14-16</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName10">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName11">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName12">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent10">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent11">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent11">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum10">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum11">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum12">
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-col table-col--20">
                            <p>16-18</p>
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName13">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName14">
                            <input type="text" placeholder="Name der Veranstaltung" class="input--table"
                                vue-model="vlPlanName15">
                        </div>
                        <div class="table-col table-col--30">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent13">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent14">
                            <input type="text" placeholder="Dozent" class="input--table" vue-model="vlPlanDozent15">
                        </div>
                        <div class="table-col table-col--20">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum13">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum14">
                            <input type="number" placeholder="Raum" class="input--table" vue-model="vlPlanRaum15">
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
            vlPlanName1: 'Default',
            vlPlanDozent1: 'Max Mustermann',
            vlPlanRaum1: '111',

            vlPlanName2: 'Default',
            vlPlanDozent2: 'Max Mustermann',
            vlPlanRaum2: '111',

            vlPlanName3: 'Default',
            vlPlanDozent3: 'Max Mustermann',
            vlPlanRaum3: '111',

            vlPlanName4: 'Default',
            vlPlanDozent4: 'Max Mustermann',
            vlPlanRaum4: '111',

            vlPlanName5: 'Default',
            vlPlanDozent5: 'Max Mustermann',
            vlPlanRaum5: '111',

            vlPlanName6: 'Default',
            vlPlanDozent6: 'Max Mustermann',
            vlPlanRaum6: '111',

            vlPlanName7: 'Default',
            vlPlanDozent7: 'Max Mustermann',
            vlPlanRaum7: '111',

            vlPlanName8: 'Default',
            vlPlanDozent8: 'Max Mustermann',
            vlPlanRaum8: '111',

            vlPlanName9: 'Default',
            vlPlanDozent9: 'Max Mustermann',
            vlPlanRaum9: '111',

            vlPlanName10: 'Default',
            vlPlanDozent10: 'Max Mustermann',
            vlPlanRaum10: '111',

            vlPlanName11: 'Default',
            vlPlanDozent11: 'Max Mustermann',
            vlPlanRaum11: '111',

            vlPlanName12: 'Default',
            vlPlanDozent12: 'Max Mustermann',
            vlPlanRaum12: '111',

            vlPlanName13: 'Default',
            vlPlanDozent13: 'Max Mustermann',
            vlPlanRaum13: '111',

            vlPlanName14: 'Default',
            vlPlanDozent14: 'Max Mustermann',
            vlPlanRaum14: '111',

            vlPlanName15: 'Default',
            vlPlanDozent15: 'Max Mustermann',
            vlPlanRaum15: '111',
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
    background-color: white;
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
    height: 5vh;
    width: 100%;
    color: white;

    justify-content: space-between;
    align-items: center;
}

.topBar--logo {
    height: 50px;
    border-radius: 25px;
    margin-left: 13vh;
    box-shadow: 0px 0px 6px 0px white;
}

.topBar--logout {
    margin-right: 5vh;
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