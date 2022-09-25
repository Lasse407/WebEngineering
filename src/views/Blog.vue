<template>
    <div class="topBar--main">
        <div class="topBar--col">
            <a href="./Administration">
                <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="centered topBar--col">
            <h1> Blog</h1>
            <div class="topBar--date" id="dateTf"></div>
        </div>
        <div class="currentTime topBar--col" id="timeTf"> </div>
    </div>
    <div class="bottomBar--blog">
        <div class="bottomBar-blog-content">
            <div class="bottomBar-blog-content--date">{{latestBlogpost.published_date}}</div>
            <div class="bottomBar-blog-content--headline">{{latestBlogpost.title}}</div>
            <div class="bottomBar-blog-content--subline">{{latestBlogpost.teaser}}</div>
            <div class="bottomBar-blog-content--text">{{latestBlogpost.bodytext}}</div>
            <div class="bottomBar-blog-content--author">{{latestBlogpost.author}}</div>
        </div>
        <div class="bottomBar-blog-socialmedia">
            <a class="twitter-timeline" href="https://twitter.com/HochschuleFL?s=20&t=c-MXbEZOF8eH1xE9PRXipg"> </a>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            blogposts: [],
            latestBlogpost: null,
        };
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/blogposts')
            .then((response) => {
                console.log(response);

                const blogpostWithFormattedDate = response.data.blogposts.map(blogpost => {
                    const item = blogpost;
                    item.published_date = new Intl.DateTimeFormat('de-DE', { datestyle: 'short' }).format(new Date(item.published_date));
                    return item;
                })
                this.blogposts = blogpostWithFormattedDate;
                this.latestBlogpost = blogpostWithFormattedDate[0];
            });
    },
    mounted() {
        const twitterScript = document.createElement('script');
        twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        twitterScript.setAttribute('async', 'async');
        document.head.appendChild(twitterScript);
    },
}

function showTime() {

    var jetzt = new Date();

    var time = jetzt.toLocaleTimeString();

    var date = jetzt.toLocaleDateString();

    document.getElementById('timeTf').textContent = time;

    document.getElementById('dateTf').textContent = date;

}
window.setInterval(showTime, 1000);

</script>

<style>
@import '~/node_modules/reset-css/reset.css';


.twitter-timeline {
    width: 100% !important;
    height: 100px !important;
}

.bottomBar--blog {
    display: flex;
    flex-direction: row;
    background-color: #f2f2f2;
    height: 90vh;
    width: 100%;
}

.bottomBar-blog-content {
    width: 80%;
    height: auto;
    margin: 2%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.bottomBar-blog-content--date {
    margin: 4% 4% 0% 4%;
    font-size: 22px;
}

.bottomBar-blog-content--headline {
    margin: 1% 4% 0% 4%;
    font-size: 40px;
    font-weight: 800;
}

.bottomBar-blog-content--subline {
    margin: 1% 4% 0% 4%;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
}

.bottomBar-blog-content--text {
    margin: 1% 4% 0% 4%;
    font-size: 1.2rem;
    text-align: justify;
    white-space: normal;
}

.bottomBar-blog-content--author {
    margin: 1% 4% 0% 4%;
    font-size: 1rem;
    font-style: italic;
}

.bottomBar-blog-socialmedia {
    display: flex;
    width: 20%;
    height: auto;
    margin: 2%;
    background-color: white;
}
</style>