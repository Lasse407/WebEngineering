<template>
    <div class="topBar--main">
        <div class="topBar--col">
            <a href="./Administration">
                <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="centered topBar--col">
            <h1> Vorlesungsplan C-Gebäude</h1>
            <div class="topBar--date">{{date}}</div>
        </div>
        <div class="topBar--col currentTime">{{time}}</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col col--70">
                <div class="VL-plan">
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
                                <p>8-10</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{lectureNames1}}</p>
                                <p>{{lectureNames2}}</p>
                                <p>{{lectureNames3}}</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{speakers1}}</p>
                                <p>{{speakers2}}</p>
                                <p>{{speakers3}}</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>{{rooms1}}</p>
                                <p>{{rooms2}}</p>
                                <p>{{rooms3}}</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>10-12</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{lectureNames1}}</p>
                                <p>{{lectureNames2}}</p>
                                <p>{{lectureNames3}}</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{speakers1}}</p>
                                <p>{{speakers2}}</p>
                                <p>{{speakers3}}</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>{{rooms1}}</p>
                                <p>{{rooms2}}</p>
                                <p>{{rooms3}}</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>12-14</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{lectureNames1}}</p>
                                <p>{{lectureNames2}}</p>
                                <p>{{lectureNames3}}</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{speakers1}}</p>
                                <p>{{speakers2}}</p>
                                <p>{{speakers3}}</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>{{rooms1}}</p>
                                <p>{{rooms2}}</p>
                                <p>{{rooms3}}</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>14-16</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{lectureNames1}}</p>
                                <p>{{lectureNames2}}</p>
                                <p>{{lectureNames3}}</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{speakers1}}</p>
                                <p>{{speakers2}}</p>
                                <p>{{speakers3}}</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>{{rooms1}}</p>
                                <p>{{rooms2}}</p>
                                <p>{{rooms3}}</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>16-18</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{lectureNames1}}</p>
                                <p>{{lectureNames2}}</p>
                                <p>{{lectureNames3}}</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>{{speakers1}}</p>
                                <p>{{speakers2}}</p>
                                <p>{{speakers3}}</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>{{rooms1}}</p>
                                <p>{{rooms2}}</p>
                                <p>{{rooms3}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col--30">
                <div class="row">
                    <div class="col col--1-of-1">
                        <div class="forecast forecast--m">
                            <h5>Aktuelle Temperatur</h5>
                            <span class="forecast__degree">{{currentWeather}}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="events">
                            <div class="events__item" :key="event.id" v-for="event in events">
                                <small class="events__item-date">
                                    {{event.event_date}}
                                </small>
                                <h4 class="events__item-title">{{event.title}}</h4>
                            </div>
                        </div>
                    </div>
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
            weatherForecast: null,
            events: [],

            // -------------------
            rooms1: '',
            speakers1: '',
            lectureNames1: '',
            rooms2: '',
            speakers2: '',
            lectureNames2: '',
            rooms3: '',
            speakers3: '',
            lectureNames3: '',
            rooms4: '',
            speakers4: '',
            lectureNames4: '',
            rooms5: '',
            speakers5: '',
            lectureNames5: '',
            rooms6: '',
            speakers6: '',
            lectureNames6: '',
            rooms7: '',
            speakers7: '',
            lectureNames7: '',
            rooms8: '',
            speakers8: '',
            lectureNames8: '',
            rooms9: '',
            speakers9: '',
            lectureNames9: '',
            rooms10: '',
            speakers10: '',
            lectureNames10: '',
            rooms11: '',
            speakers11: '',
            lectureNames11: '',
            rooms12: '',
            speakers12: '',
            lectureNames12: '',
            rooms13: '',
            speakers13: '',
            lectureNames13: '',
            rooms14: '',
            speakers14: '',
            lectureNames14: '',
            rooms15: '',
            speakers15: '',
            lectureNames15: '',
        };
    },

    computed: {
        currentWeather() {
            // Grad-Angabe runden 
            return `${Math.round(this.weatherForecast.temp)}°C`;
        }
    },

    methods: {
        //1 -----------
        fetchRooms1() {
            axios.get('http://127.0.0.1:8000/api/rooms/1')
                .then((response) => {
                    console.log(response.data);
                    this.rooms1 = response.data.title;
                })
        },
        fetchSpeakers1() {
            axios.get('http://127.0.0.1:8000/api/speakers/1')
                .then((response) => {
                    console.log(response.data);
                    this.speakers1 = response.data.speaker;
                })
        },
        fetchLectureNames1() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/1')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames1 = response.data.lecture_name;
                })
        },
        //2 ------------
        fetchRooms2() {
            axios.get('http://127.0.0.1:8000/api/rooms/2')
                .then((response) => {
                    console.log(response.data);
                    this.rooms2 = response.data.title;
                })
        },
        fetchSpeakers2() {
            axios.get('http://127.0.0.1:8000/api/speakers/2')
                .then((response) => {
                    console.log(response.data);
                    this.speakers2 = response.data.speaker;
                })
        },
        fetchLectureNames2() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/2')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames2 = response.data.lecture_name;
                })
        },
        //3 ----------
        fetchRooms3() {
            axios.get('http://127.0.0.1:8000/api/rooms/3')
                .then((response) => {
                    console.log(response.data);
                    this.rooms3 = response.data.title;
                })
        },
        fetchSpeakers3() {
            axios.get('http://127.0.0.1:8000/api/speakers/3')
                .then((response) => {
                    console.log(response.data);
                    this.speakers3 = response.data.speaker;
                })
        },
        fetchLectureNames3() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/3')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames3 = response.data.lecture_name;
                })
        },
        //4
        fetchRooms4() {
            axios.get('http://127.0.0.1:8000/api/rooms/4')
                .then((response) => {
                    console.log(response.data);
                    this.rooms4 = response.data.title;
                })
        },
        fetchSpeakers4() {
            axios.get('http://127.0.0.1:8000/api/speakers/4')
                .then((response) => {
                    console.log(response.data);
                    this.speakers4 = response.data.speaker;
                })
        },
        fetchLectureNames4() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/4')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames4 = response.data.lecture_name;
                })
        },
        //5
        fetchRooms5() {
            axios.get('http://127.0.0.1:8000/api/rooms/5')
                .then((response) => {
                    console.log(response.data);
                    this.rooms5 = response.data.title;
                })
        },
        fetchSpeakers5() {
            axios.get('http://127.0.0.1:8000/api/speakers/5')
                .then((response) => {
                    console.log(response.data);
                    this.speakers5 = response.data.speaker;
                })
        },
        fetchLectureNames5() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/5')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames5 = response.data.lecture_name;
                })
        },
        //6
        fetchRooms6() {
            axios.get('http://127.0.0.1:8000/api/rooms/6')
                .then((response) => {
                    console.log(response.data);
                    this.rooms6 = response.data.title;
                })
        },
        fetchSpeakers6() {
            axios.get('http://127.0.0.1:8000/api/speakers/6')
                .then((response) => {
                    console.log(response.data);
                    this.speakers6 = response.data.speaker;
                })
        },
        fetchLectureNames6() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/6')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames6 = response.data.lecture_name;
                })
        },
        //7
        fetchRooms7() {
            axios.get('http://127.0.0.1:8000/api/rooms/7')
                .then((response) => {
                    console.log(response.data);
                    this.rooms6 = response.data.title;
                })
        },
        fetchSpeakers7() {
            axios.get('http://127.0.0.1:8000/api/speakers/7')
                .then((response) => {
                    console.log(response.data);
                    this.speakers6 = response.data.speaker;
                })
        },
        fetchLectureNames7() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/7')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames6 = response.data.lecture_name;
                })
        },
        //8
        fetchRooms8() {
            axios.get('http://127.0.0.1:8000/api/rooms/8')
                .then((response) => {
                    console.log(response.data);
                    this.rooms8 = response.data.title;
                })
        },
        fetchSpeakers8() {
            axios.get('http://127.0.0.1:8000/api/speakers/8')
                .then((response) => {
                    console.log(response.data);
                    this.speakers8 = response.data.speaker;
                })
        },
        fetchLectureNames8() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/8')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames8 = response.data.lecture_name;
                })
        },
        //9
        fetchRooms9() {
            axios.get('http://127.0.0.1:8000/api/rooms/9')
                .then((response) => {
                    console.log(response.data);
                    this.rooms9 = response.data.title;
                })
        },
        fetchSpeakers9() {
            axios.get('http://127.0.0.1:8000/api/speakers/9')
                .then((response) => {
                    console.log(response.data);
                    this.speakers9 = response.data.speaker;
                })
        },
        fetchLectureNames9() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/9')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames9 = response.data.lecture_name;
                })
        },
        //10
        fetchRooms10() {
            axios.get('http://127.0.0.1:8000/api/rooms/10')
                .then((response) => {
                    console.log(response.data);
                    this.rooms10 = response.data.title;
                })
        },
        fetchSpeakers10() {
            axios.get('http://127.0.0.1:8000/api/speakers/10')
                .then((response) => {
                    console.log(response.data);
                    this.speakers10 = response.data.speaker;
                })
        },
        fetchLectureNames10() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/10')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames10 = response.data.lecture_name;
                })
        },
        //11
        fetchRooms11() {
            axios.get('http://127.0.0.1:8000/api/rooms/11')
                .then((response) => {
                    console.log(response.data);
                    this.rooms11 = response.data.title;
                })
        },
        fetchSpeakers11() {
            axios.get('http://127.0.0.1:8000/api/speakers/11')
                .then((response) => {
                    console.log(response.data);
                    this.speakers11 = response.data.speaker;
                })
        },
        fetchLectureNames11() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/11')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames11 = response.data.lecture_name;
                })
        },
        //12
        fetchRooms12() {
            axios.get('http://127.0.0.1:8000/api/rooms/12')
                .then((response) => {
                    console.log(response.data);
                    this.rooms12 = response.data.title;
                })
        },
        fetchSpeakers12() {
            axios.get('http://127.0.0.1:8000/api/speakers/12')
                .then((response) => {
                    console.log(response.data);
                    this.speakers12 = response.data.speaker;
                })
        },
        fetchLectureNames12() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/12')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames12 = response.data.lecture_name;
                })
        },
        //13
        fetchRooms13() {
            axios.get('http://127.0.0.1:8000/api/rooms/13')
                .then((response) => {
                    console.log(response.data);
                    this.rooms13 = response.data.title;
                })
        },
        fetchSpeakers13() {
            axios.get('http://127.0.0.1:8000/api/speakers/13')
                .then((response) => {
                    console.log(response.data);
                    this.speakers13 = response.data.speaker;
                })
        },
        fetchLectureNames13() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/13')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames13 = response.data.lecture_name;
                })
        },
        //14
        fetchRooms14() {
            axios.get('http://127.0.0.1:8000/api/rooms/14')
                .then((response) => {
                    console.log(response.data);
                    this.rooms14 = response.data.title;
                })
        },
        fetchSpeakers14() {
            axios.get('http://127.0.0.1:8000/api/speakers/14')
                .then((response) => {
                    console.log(response.data);
                    this.speakers14 = response.data.speaker;
                })
        },
        fetchLectureNames14() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/14')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames14 = response.data.lecture_name;
                })
        },
        //15
        fetchRooms15() {
            axios.get('http://127.0.0.1:8000/api/rooms/15')
                .then((response) => {
                    console.log(response.data);
                    this.rooms15 = response.data.title;
                })
        },
        fetchSpeakers15() {
            axios.get('http://127.0.0.1:8000/api/speakers/15')
                .then((response) => {
                    console.log(response.data);
                    this.speakers15 = response.data.speaker;
                })
        },
        fetchLectureNames15() {
            axios.get('http://127.0.0.1:8000/api/lectureNames/15')
                .then((response) => {
                    console.log(response.data);
                    this.lectureNames15 = response.data.lecture_name;
                })
        },

        // ------------------------------------------------------------------------------------------------
        fetchWeather() {
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=54.7751118&lon=9.4504433&appid=81e419e293343e0702e559352ace06ee&lang=de&units=metric')
                .then((response) => {
                    this.weatherForecast = response.data.main;
                })
        },

        fetchEvents() {
            axios.get('http://127.0.0.1:8000/api/events')
                .then((response) => {
                    const eventsWithFormattedDate = response.data.events.map(event => {
                        const item = event;
                        item.event_date = new Intl.DateTimeFormat('de-DE', { datestyle: 'short' }).format(new Date(item.event_date));
                        return item;
                    })
                    this.events = eventsWithFormattedDate;
                })
        },

        currentTime() {
            var jetzt = new Date();
            this.time = jetzt.toLocaleTimeString();
        },
        currentDate() {
            var jetzt = new Date();
            this.date = jetzt.toLocaleDateString();
        }
    },

    created() {
        this.fetchRooms1();
        this.fetchSpeakers1();
        this.fetchLectureNames1();
        this.fetchRooms2();
        this.fetchSpeakers2();
        this.fetchLectureNames2();
        this.fetchRooms3();
        this.fetchSpeakers3();
        this.fetchLectureNames3();
        this.fetchRooms4();
        this.fetchSpeakers4();
        this.fetchLectureNames4();
        this.fetchRooms5();
        this.fetchSpeakers5();
        this.fetchLectureNames5();
        this.fetchRooms6();
        this.fetchSpeakers6();
        this.fetchLectureNames6();
        this.fetchRooms7();
        this.fetchSpeakers7();
        this.fetchLectureNames7();
        this.fetchRooms8();
        this.fetchSpeakers8();
        this.fetchLectureNames8();
        this.fetchRooms9();
        this.fetchSpeakers9();
        this.fetchLectureNames9();
        this.fetchRooms10();
        this.fetchSpeakers10();
        this.fetchLectureNames10();
        this.fetchRooms11();
        this.fetchSpeakers11();
        this.fetchLectureNames11();
        this.fetchRooms12();
        this.fetchSpeakers12();
        this.fetchLectureNames12();
        this.fetchRooms13();
        this.fetchSpeakers13();
        this.fetchLectureNames13();
        this.fetchRooms14();
        this.fetchSpeakers14();
        this.fetchLectureNames14();
        this.fetchRooms15();
        this.fetchSpeakers15();
        this.fetchLectureNames15();


        // ----------------------
        this.fetchEvents();
        this.fetchWeather();
        setInterval(
            this.currentTime, 1000
        );
        setInterval(
            this.currentDate, 1000
        );
        setInterval(
            this.fetchWeather, 1000
        );
    }
}
</script>




<style>
@import '~/node_modules/reset-css/reset.css';

h2 {
    font-weight: 900;
}

p {
    margin: 0.8rem 0rem;
}

.container {
    width: 100%;
    padding: 2rem;
}

.row {
    display: flex;
    justify-content: space-between;
}

.row+.row {
    margin-top: 2rem;
}

.col {
    width: 100%;
}

.col--70 {
    width: 70%;
}

.col--50 {
    width: calc(50% - 2rem);
}

.col--40 {
    width: calc(40% - 2rem);
}

.col--35 {
    width: calc(35% - 2rem);
}

.col--30 {
    width: calc(30% - 2rem);
}

.col--25 {
    width: calc(25% - 2rem);
}

.col--15 {
    width: calc(15% - 2rem);
}

.col--1-of-1 {
    width: calc(100% / 1 - 0.5rem);
}

.col--1-of-3 {
    width: calc(100% / 3 - 0.5rem);
}

.VL-plan {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: auto;
}

.weather {
    display: flex;
    flex-direction: table-row;
}

.forecast {
    color: white;
    padding: 1.5rem;
    font-size: 2rem;
    text-align: center;
    border-radius: 6rem;
}

.forecast__degree {
    font-size: 4rem;
    margin-left: 2rem;
}

.forecast--m {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #252481;
    height: 5rem;
}

.events {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
}

.events__item {
    border-bottom: 1px solid #e6e6e6;
    padding: 1.5rem;
    color: #252481;
    margin: 0.7rem 0rem;
}

.events__item:last-child {
    border: none;
}

.events__item-title {
    font-weight: bold;
    font-size: 1.25rem;
}


.table {
    padding-top: 1rem;
    text-align: left;
    color: #252481;
}

.table-row {
    display: flex;
    border-bottom: 2px solid #e6e6e6;
    padding: 1rem 2rem;
    font-size: 1.945rem;
    margin: 1rem;
}

.table-row:last-child {
    border-bottom: none;
}

.table-row--header {
    font-weight: bold;
}

.table-col {
    width: 100%;
    align-self: center;
    font-size: 1.2rem;
}

.table-col--20 {
    width: 20%;
}

.table-col--30 {
    width: 30%;
}
</style> 