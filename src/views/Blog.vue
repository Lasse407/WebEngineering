<template>
    <div class="topBar">
        <div>LOGO</div>
        <div>
            <div> Überschrift</div>
            <div> Aktuelles Datum</div>
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

.topBar{

    display:flex;
    background-color: #F3621B;
    height: 10vh;
    width: 100%;
    color:white;

    justify-content:space-around;
    align-items: center;
}

.bottomBar{
    display:flex;
    background-color: #f2f2f2;
    height:90vh;
    width:100%;
}
</style>