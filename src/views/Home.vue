<template>
    <div class="main">
        <div class="logo">
            <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>

        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration</div>
            <div class="button--container">
                <button class="button button--white">Login</button>
                <button class="button button--purple">Registrieren</button>
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
    text-align: center;
    color: #2c3e50;
}

.main {
    display: flex;
}

.logoMain {
    height: 800px;
    margin: 25% 25% 25% 25%;
}

.half {
    display: flex;
    width: 50%;
    height: 100vh;
    background-color: #F3621B;
    z-index: -1;
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