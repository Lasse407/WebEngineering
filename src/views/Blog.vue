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
            <div class="bottomBar-blog-content--date"> 10.08.2022 </div>
            <div class="bottomBar-blog-content--headline"> Lorem Ipsum Dolor </div>
            <div class="bottomBar-blog-content--subline"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. </div>
            <div class="bottomBar-blog-content--text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis.

                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam
                diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet
                clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur </div>
            <div class="bottomBar-blog-content--author"> -- Max Mustermann </div>
        </div>
        <div class="bottomBar-blog-socialmedia">
            <a class="twitter-timeline" href="https://twitter.com/HochschuleFL?s=20&t=c-MXbEZOF8eH1xE9PRXipg"> </a>
        </div>

    </div>

</template>

<script>
export default {
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