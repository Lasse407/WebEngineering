<template>
    <div class="topBar--admin">
        <div>
            <img class="topBar--logo" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>
        <div>
            <h2> Administration <br> C-Gebäude Infoscreens</h2>
        </div>
        <div class="topBar--logout"> Logout </div>
    </div>
    <div class="bottomBar--admin">
        <div class="sidebar">
            <div class="sidebar--content--loginInfo">Angemeldet: <br> max.mustermann@hs-flensburg.de</div>
            <div class="sidebar--content">Dashboard</div>
            <div class="sidebar--content">Social-Media</div>
            <div class="sidebar--content">News</div>
            <div class="sidebar--content">Screens</div>
            <div class="sidebar--content">Veranstaltungen</div>
            <div class="sidebar--content">Nachrichten</div>
            <div class="sidebar--content">User</div>
        </div>
        <div class="contentBackground--admin">Content</div>
    </div>

</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

h2{
    font-size: 20px;
}

.topBar--admin{

    display:flex;
    background-color: #F3621B;
    height: 5vh;
    width: 100%;
    color:white;

    justify-content:space-between;
    align-items: center;
}

.topBar--logo{
    height:50px;
    border-radius: 25px;
    margin-left: 13vh;
}

.topBar--logout{
    margin-right: 5vh;
}

.bottomBar--admin{
    display:flex;
    background-color: #f2f2f2;
    height:95vh;
    width:100%;
}

.sidebar{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30vh;
    background-color: white;
}

.sidebar--content{
    height: 5vh;
}

.sidebar--content--loginInfo{

}

.contentBackground--admin{
    display:flex;
    width:auto;
}


</style>