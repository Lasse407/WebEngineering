<template>
    <div class="main">
        <div class="logo">
            <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>

        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration</div>
            <div class="button--container">
                <router-link class="button-router button--white" to="login">Login</router-link>
                <router-link class="button-router button--purple" to="register">Registrieren</router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
@import '~/node_modules/reset-css/reset.css';

body {
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    line-height: 1.5;
    background-color: #f5f5f5;
}

.main {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 50%;
    height: 100%;
    background-color: white;
}

.logoMain {
    height: 60rem;
}

.half {
    display: flex;
    width: 50%;
    height: 100vh;
    background-color: #F3621B;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.m {
    font-family: 'Roboto Slab', serif;
    font-size: 5rem;
    color: white;
    text-align: center;
    font-weight: bold;
}

.button--container {
    width: 50%;
    margin-top: 100px;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}

.button-router {
    padding: 1rem;
    border-radius: 2rem;
    width: 30%;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
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

.text-centered {
    text-align: center;
}
</style>