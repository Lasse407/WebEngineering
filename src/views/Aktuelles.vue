<template>
    <div class="topBar--main">
        <div>
            <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div>
            <h1> Aktuelles</h1>
            <div class="topBar--date"> 01.01.2022</div>
        </div>
        <div class="currentTime"> 16:30 </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col col-1-of-3">Links</div>
            <div class="col col-1-of-3">Mitte</div>
            <div class="col col-1-of-3">Rechts</div>
        </div>
    </div>
    <div class="bottomBar">
        <div class="bottomBar--container1">
            <div class="bottomBar--Content">Hochschulnews
                <div class="bottomBar--Content--Article--Hochschulnews">
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
                <div class="bottomBar--Content--Article--Hochschulnews">
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
                <div class="bottomBar--Content--Article--Hochschulnews">

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
        <div class="bottomBar--container2">
            <div class="bottomBar--Content ">Tagesschau
                <div class="bottomBar--Content--Article--Tagesschau">API</div>
                <div class="bottomBar--Content--Article--Tagesschau">API</div>
                <div class="bottomBar--Content--Article--Tagesschau">API</div>
            </div>
        </div>

    </div>

</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h1 {
    font-size: 40px;
}

h3 {
    font-size: 30px;
    width: 100%;
    margin-top: 50px;
}

.topBar--main {

    display: flex;
    background-color: #F3621B;
    height: 10vh;
    width: 100%;
    color: white;
    justify-content: space-between;
    align-items: center;
}

.topBar--logo--main {
    height: 80px;
    border-radius: 40px;
    box-shadow: 0px 0px 6px 0px white;
    margin-left: 50px;
}

.topBar--date {
    margin-top: 10px;
    font-size: 25px;
}

.currentTime {
    font-size: 30px;
    margin-right: 50px;
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

.bottomBar--Content--Article--Tagesschau {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: white;
    height: 16vh;
    width: 100%;
    margin: 50px 5px 0px 5px;

    font-size: 20px;

}

.article--date {
    margin: 30px 0px 0px 30px;
    font-size: 25px;
}

.article--headline {
    font-size: 40px;
    margin: 15px 0px 10px 30px;
}

.article--text {
    margin: 5px 30px 10px 30px;
    font-size: 24px;
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