<template>
    <div class="main">
        <div class="logo">
            <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>

        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration</div>
            <div class="button--container">
                    <router-link class="button button--white" to="login">Login</router-link>
                    <router-link class="button button--purple" to="register">Registrieren</router-link>             
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';


.main {
    display: flex;
}

.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height:100vh;
}

.logoMain{
    height:65%;
}

.half {
    display: flex;
    width: 50%;
    height: 100vh;
    background-color: #F3621B;
    margin-right: 0px;
    margin-left: auto;

    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.m {
    font-family: 'Roboto Slab', serif;
    font-size: 100px;
    color: white;
}

.button--container {
    width: 50%;
    margin-top: 100px;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}

.button {
    border-radius: 16px;
    background-color: grey;
    width: 200px;
    height: 60px;
    font-size: 24px;
    padding: 10px;
    border: 0px;
    color: black;
    cursor: pointer;
}

.button--purple {
    background-color: #262481;
    box-shadow: 0px 0px 8px 0px #262481;
    color: white;
}

.button--white {
    background-color: white;
    box-shadow: 0px 0px 8px 0px white;
    color: #262481;
}
</style>