<template>
    <div class="topBar--main">
        <div>
            <a href="./Administration">
                <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="centered">
            <h1> Aktuelles</h1>
            <div class="topBar--date" id="dateTf"></div>
        </div>
        <div class="currentTime" id="timeTf"> </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="bottomBar--Content">
                <div class="col col-1-of-3 article">
                    <div class="article--date">01.01.2022</div>
                    <div class="article--headline">Headline </div>
                    <div class="article--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div class="col col-1-of-3 article">
                    <div class="article--date">01.01.2022</div>
                    <div class="article--headline">Headline </div>
                    <div class="article--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>

                </div>
                <div class="col col-1-of-3 article">

                    <div class="article--date">01.01.2022</div>
                    <div class="article--headline">Headline </div>
                    <div class="article--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="content">
            <div class="row">
                <div class="bottomBar--Content">
                    <div class="col col-1-of-3 article article__Tagesschau">API</div>
                    <div class="col col-1-of-3 article article__Tagesschau">API</div>
                    <div class="col col-1-of-3 article article__Tagesschau">API</div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

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

h1 {
    font-size: 3rem;
    text-align: center;
}

h3 {
    font-size: 30px;
    width: 100%;
    margin-top: 50px;
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
    height: 10vh;
    width: 100%;
    color: white;
    align-items: center;
    justify-content: space-between;
}

.topBar--logo--main {
    height: 5rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 6px 0px white;
    margin-left: 5rem;
}

.topBar--date {
    font-size: 1.9rem;
}

.currentTime {
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
    margin: 5px;

    font-size: 40px;

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

    font-size: 20px;

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