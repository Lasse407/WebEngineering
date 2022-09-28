<template>
    <div class="topBar--main">
        <div class="topBar--col">
            <a href="./Administration">
                <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="centered topBar--col">
            <h1> Vorlesungsplan C-Gebäude</h1>
            <div class="topBar--date" id="dateTf">{{date}}</div>
        </div>
        <div class="topBar--col currentTime" id="timeTf">{{time}}</div>
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
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>John Doe</p>
                                <p>John Doe</p>
                                <p>John Doe</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>212</p>
                                <p>212</p>
                                <p>212</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>10-12</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>John Doe</p>
                                <p>John Doe</p>
                                <p>John Doe</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>212</p>
                                <p>212</p>
                                <p>212</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>12-14</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>John Doe</p>
                                <p>John Doe</p>
                                <p>John Doe</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>212</p>
                                <p>212</p>
                                <p>212</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>14-16</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>John Doe</p>
                                <p>John Doe</p>
                                <p>John Doe</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>212</p>
                                <p>212</p>
                                <p>212</p>
                            </div>
                        </div>
                        <div class="table-row">
                            <div class="table-col table-col--20">
                                <p>16-18</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                                <p>Web Engineering</p>
                            </div>
                            <div class="table-col table-col--30">
                                <p>John Doe</p>
                                <p>John Doe</p>
                                <p>John Doe</p>
                            </div>
                            <div class="table-col table-col--20">
                                <p>212</p>
                                <p>212</p>
                                <p>212</p>
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
        };
    },

    computed: {
        currentWeather() {
            // Grad-Angabe runden 
            return `${Math.round(this.weatherForecast.temp)}°C`;
        }
    },

    methods: {

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
                        item.published_date = new Intl.DateTimeFormat('de-DE', { datestyle: 'short' }).format(new Date(item.event_date));
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
    height: 13vh;
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

}

.table-col--20 {
    width: 20%;
}

.table-col--30 {
    width: 30%;
}
</style> 