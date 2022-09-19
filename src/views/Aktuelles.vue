<template>
    <div class="topBar">
        <div>LOGO</div>
        <div>
            <h1> Aktuelles</h1>
            <div class="topBar--date"> 01.01.2022</div>
        </div>
        <div> Aktuelle Uhrzeit </div>
    </div>
    <div class="bottomBar">

    </div>

</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h1{
    font-size: 40px;
}

.topBar{

    display:flex;
    background-color: #F3621B;
    height: 10vh;
    width: 100%;
    color:white;

    justify-content:space-around;
    align-items: center;
}

.topBar--date{
margin-top: 10px;
font-size: 25px;
}



.bottomBar{
    display:flex;
    background-color: #f2f2f2;
    height:90vh;
    width:100%;
}

</style>