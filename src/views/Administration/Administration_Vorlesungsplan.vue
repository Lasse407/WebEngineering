<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div class="topBar--header">
            <h2> Administration C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout">
        </div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
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
        <div class="contentBackground--admin--vl">
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

                    <div class="table-row" v-for="lecture in lectures" :key="lecture.id">
                        <div class="table-col table-col--20">
                            <h5>-</h5>
                        </div>
                        <div class="table-col table-col--30">
                            <div v-for="lectureName in lecture.lecture_names" :key="lectureName.id">
                                <select v-model="lectureName.lecture_name">
                                    <option disabled value="">Veranstaltung auswählen</option>
                                    <option v-for="lecture_name in lecture_names" :key="lecture_name.id">
                                        {{lecture_name.lecture_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-col table-col--30">
                            <div v-for="lectureSpeaker in lecture.speakers" :key="lectureSpeaker.id">
                                <select v-model="lectureSpeaker.speaker">
                                    <option disabled value="">Dozent auswählen</option>
                                    <option v-for="speaker in speakers" :key="speaker.id">{{speaker.speaker}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-col table-col--20">
                            <div v-for="lectureRoom in lecture.rooms" :key="lectureRoom.id">
                                <select v-model="lectureRoom.room">
                                    <option disabled value="">Raum auswählen</option>
                                    <option v-for="room in rooms" :key="room.id">{{room.title}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="input--container">
                <div>Dozent erstellen
                    <input type="text" placeholder="Name des Dozenten" class="input--categorie" v-model="speakerName">
                    <button @click="createSpeaker"
                        style="height:3rem;width:8rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Bestätigen</button>
                </div>
                <div>Raum erstellen
                    <input type="text" placeholder="Raumnummer" class="input--categorie" v-model="roomNumber">
                    <button @click="createRoom"
                        style="height:3rem;width:8rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Bestätigen</button>
                </div>
                <div>Veranstaltung erstellen
                    <input type="text" placeholder="Veranstaltungsname" class="input--categorie" v-model="lectureName">
                    <button @click="createLectureName"
                        style="height:3rem;width:8rem;border-radius: 2rem; border-width: 0rem; background-color: #262481; color:white">Bestätigen</button>
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
            rooms: [],
            lecture_names: [],
            speakers: [],
            lectures: [],
            speakerName: '',
            roomNumber: '',
            lectureName: '',
        }
    },

    methods: {
        fetchLectures() {
            axios.get('http://127.0.0.1:8000/api/lectures')
                .then((response) => {
                    console.log(response.data);

                    this.lectures = response.data.data;
                })
            /*
            const date = new Date('2023-12-12 08:00:00');
            date.getHours()

            const date = new Date('2023-12-12 08:00:00');
            const hours = date.getHours();
            */
        },

        fetchRooms() {
            axios.get('http://127.0.0.1:8000/api/rooms')
                .then((response) => {
                    console.log(response.data);
                    this.rooms = response.data.rooms;
                })
        },

        fetchSpeakers() {
            axios.get('http://127.0.0.1:8000/api/speakers')
                .then((response) => {
                    console.log(response.data);
                    this.speakers = response.data.speakers;
                })
        },

        fetchLectureNames() {
            axios.get('http://127.0.0.1:8000/api/lectureNames')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames = response.data.lecture_names;
                })
        },

        /*
        updateLectures() {
            this.lectures.forEach((lecture) => {
                axios.put(`http://127.0.0.1:8000/api/lectures/${lecture.id}`, {
                    withCredentials: true,
                    data: {
                        speakers: JSON.stringify(this.speakers),
                        rooms: JSON.stringify(this.rooms),
                        lecture_names: JSON.stringify(this.lecture_names),
                    }
                })
                    .then((response) => {
                        console.log(response)
                    })
            })
        },
        */

        createSpeaker() {
            axios.post('http://127.0.0.1:8000/api/speakers', {
                speaker: this.speakerName
            })
                .then(() => {
                    alert('Neuer Dozent wurde hinzugefügt');
                })
        },

        createRoom() {
            axios.post('http://127.0.0.1:8000/api/rooms', {
                title: this.roomNumber
            })
                .then(() => {
                    alert('Neuer Raum wurde hinzugefügt');
                })
        },

        createLectureName() {
            axios.post('http://127.0.0.1:8000/api/lectureNames', {
                lecture_name: this.lectureName
            })
                .then(() => {
                    alert('Neue Veranstaltung wurde hinzugefügt');
                })
        },

    },

    created() {
        this.fetchSpeakers();
        this.fetchLectures();
        this.fetchRooms();
        this.fetchLectureNames();
    }

}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h5 {
    font-size: 1.3rem;
}

.input--table {
    font-size: 1rem;
    text-align: left;
    padding: 1.25rem;
}

.input--container {
    margin: 1rem 0rem;
    background-color: #cfcfcf;
    font-size: 1rem;
    padding: 2rem;
    border-radius: 2rem;
}

.input--categorie {
    margin: 1rem 2rem;
}

.vl-plan-admin {
    width: 100rem;
    height: auto;
    align-self: center;
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
    height: 60rem;
    width: 100%;
}

.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 76rem;
    width: 15%;
    margin: 0rem 1rem 0rem 0rem;
    background-color: white;
}

.sidebar--content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    width: 100%;
    font-size: 2rem;
    border-bottom-width: 0.4rem;
    border-bottom-color: #f3f6f4;
    border-bottom-style: solid;
}

.sidebar--content:hover {
    background-color: #f3f6f4;
}


.sidebar--content--loginInfo {
    border-style: solid;
    border-color: grey;
    border-bottom-width: 0.1rem;

    margin-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.5rem;
    text-align: center;
}

.contentBackground--admin {
    display: flex;
    width: 95%;
}

.contentBackground--admin--vl {
    display: flex;
    margin: 1rem;
    font-size: 0.5rem;
    flex-direction: column;
    margin-left: 0rem;
}

.admin-link-logout {
    text-decoration: none;
    color: #F3621B
}
</style>