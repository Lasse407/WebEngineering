<template>
    <div class="main">
        <div class="logo">
            <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>

        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration
                <div>
                    <div class="label--input">
                        <input type="email" id="email" name="email" placeholder="E-Mail" v-model="email">
                        {{email}}
                    </div>
                    <div class="label--input">
                        <input type="password" id="password" name="password" placeholder="Passwort" v-model="passwort">
                    </div>
                    <div>
                        <input type="submit" value="Login">
                    </div>
                    <div>
                        <FormFootnote class="footnote">
                            <p style="margin-top: 20px;">Noch keinen Account?
                                <router-link to="register" class="link link--white">Jetzt Registrieren.</router-link>
                            </p>
                        </FormFootnote>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            passwort: '',
        }
    }
}
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

.text-centered {
    text-align: center;
}

.main {
    display: flex;
}

.input-container {
    display: flex;
    flex-flow: row;
    margin-top: 50px;
    width: 500px;
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
    font-size: 100px;
    color: white;
}

.button--container {
    width: 50%;
    margin-top: 3rem;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}

.button {
    border-radius: 16px;
    background-color: grey;
    font-size: 1rem;
    padding: 1rem;
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