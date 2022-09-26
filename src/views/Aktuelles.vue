<template>
    <div class="topBar--main">
        <div class="topBar--col">
            <a href="./Administration">
                <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="topBar--col centered">
            <h1> Aktuelles</h1>
            <div class="topBar--date" id="dateTf">{{currentDate}}</div>
        </div>
        <div class="topBar--col currentTime" id="timeTf">{{currentTime}}</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="bottomBar--Content">
                <div class="col col-1-of-3 article" :key="notification.id" v-for="notification in notifications">
                    <div class="article--date">{{notification.published_date}}</div>
                    <div class="article--headline">{{notification.title}}</div>
                    <div class="article--text">{{notification.bodytext}}</div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="content">
            <div class="row">
                <div class="bottomBar--Content">
                    <div class="col col-1-of-3 article article__Tagesschau" :key="news.id" v-for="news in latestNews">
                        {{news.title.replaceAll('++','')}}
                        {{news.firstSentence}}
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
            date: null,
            time: null,
            notifications: [],
            latestNews: [],
        };
    },
    methods: {
        fetchNews() {
            axios.get('https://www.tagesschau.de/api2/news')
                .then((response) => {
                    this.latestNews = response.data.news.slice(0, 3);
                })
        },
        fetchNotifications() {
            axios.get('http://127.0.0.1:8000/api/notifications')
                .then((response) => {
                    const notificationsWithFormattedDate = response.data.notifications.map(notification => {
                        const item = notification;
                        item.published_date = new Intl.DateTimeFormat('de-DE', { datestyle: 'short' }).format(new Date(item.published_date));
                        return item;
                    })
                    this.notifications = notificationsWithFormattedDate;
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
        this.fetchNews();
        this.fetchNotifications();
        setInterval(
            this.currentTime, 1000
        )
        setInterval(
            this.currentDate, 1000
        )
        setInterval(
            this.fetchNews, 1000
        )

    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h1 {
    font-size: 3rem;
    text-align: center;
}

h3 {
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
}

.centered {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divider {
    width: 100%;
    height: 0.5rem;
    background-color: #F3621B;
}

.topBar--main {
    display: flex;
    background-color: #F3621B;
    height: 8rem;
    width: 100%;
    color: white;
}

.topBar--col {
    display: flex;
    width: 33%;
    align-self: center;
}

.topBar--logo--main {
    display: flex;
    margin-left: 4rem;
    height: 5rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 6px 0px white;
}

.topBar--date {
    font-size: 1.8rem;
}

.currentTime {
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    margin: 2rem;
}

.bottomBar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f2f2f2;
    height: 100%;
    width: 100%;
}

.bottomBar--Content {
    display: flex;
    flex-direction: row;
    width: 99%;
    height: auto;
    margin: 2rem;
}

.bottomBar--Content--Article--Hochschulnews {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    background-color: white;
    height: 45vh;
    width: 100%;
    margin: 50px 5px 0px 5px;

    font-size: 1.5rem;

}

.article__Tagesschau {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    height: 18rem;
    width: 100%;
}

.article {
    background-color: white;
    margin: 1rem;
}

.article--date {
    font-size: 1.5rem;
    margin: 1rem;
}

.article--headline {
    font-size: 3rem;
    margin: 1rem;
}

.article--text {
    margin: 1rem;
    font-size: 1.5rem;
    text-align: justify;
}

.bottomBar--container1 {
    height: 60%;
    width: 100%;
}

.bottomBar--container2 {
    height: 40%;
    width: 100%;

    border-style: solid;
    border-top-width: 1px;
    border-color: grey;
}
</style>