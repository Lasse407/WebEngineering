<template>
    <div class="topBar--main">
        <div>
            <img class="topBar--logo--main" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div>
            <h1> Vorlesungsplan C-Gebäude</h1>
            <div class="topBar--date"> 01.01.2022</div>
        </div>
        <div class="currentTime"> 16:30 </div>
    </div>
    <div class="bottomBar--vl">
        <div class="VL-plan">
            <div class="VL-plan--header">
                <h2>Uhrzeit</h2>
                <h2>Veranstaltung</h2>
                <h2>Dozent</h2>
                <h2>Raum</h2>
            </div>
            <div class="VL-plan--content">
                <p>8-10</p>
                <p>Web Engineering</p>
                <p>Kai Petersen</p>
                <p>212</p>
            </div>
        </div>
        <div>
            <div class="weather">
                <div class="weather--box">Morgens</div>
                <div class="weather--box">Mittags</div>
                <div class="weather--box">Abends</div>
            </div>

            <div class="veranstaltungen">
                <div class="veranstaltungen--event">Event 1 - 01.01.2023</div>
                <div class="veranstaltungen--event">Event 2 - 01.02.2023</div>
                <div class="veranstaltungen--event">Event 3 - 01.03.2023</div>
                <div class="veranstaltungen--event">Event 4 - 01.04.2023</div>
                <div class="veranstaltungen--event">Event 5 - 01.05.2023</div>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h2 {
    font-weight: 900;
}


.bottomBar--vl {
    display: flex;
    flex-direction: row;
    background-color: #f2f2f2;
    height: 90vh;
    width: 100%;
}

.VL-plan {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2%;
    background-color: white;

}

.VL-plan--header {
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin-top: 1%;
    width: 100%;

}

.VL-plan--content {
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin-top: 1%;
    width: 100%;

}

.weather {
    display: flex;
    flex-direction: row;
    margin-top: 26%;
    width: 300%;
    height: 20%;
}

.weather--box {
    background-color: white;

    height: auto;
    width: 100%;
    margin: 1%;
}

.veranstaltungen {
    display: flex;
    flex-direction: column;
    width: 300%;
    height: 69%;
    background-color: white;
    margin-top: 15%;

    font-size: 15px;
}

.veranstaltungen--event{
    display:flex;
    align-items: center;
    justify-content: center;
    height:20%;

    font-size: 18px;

    border-style: solid;
    border-color: lightgrey;
    border-top-width: 1px;
    border-bottom-width: 1px;
}
</style> 