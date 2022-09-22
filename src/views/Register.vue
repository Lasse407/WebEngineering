<template>
    <div class="main">
        <div class="logo">
            <a href="./">
                <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
            </a>
        </div>
        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration
                <div>
                    <div class="input-container">
                        <input type="email" id="email" name="email" placeholder="E-Mail" v-model="registerForm.email">
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" name="password" placeholder="Passwort"
                            v-model="registerForm.password">
                    </div>
                    <div class="input-container">
                        <input type="submit" value="Registrieren">
                    </div>
                    <div class="footnote">
                        <FormFootnote class="footnote">
                            <p>Schon einen Account?
                                <router-link to="login">Jetzt Einloggen.</router-link>
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
            registerForm: {
                email: '',
                password: '',
            }
        }
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';

input {
    border-radius: 2rem;
    background-color: white;
    width: 60%;
    height: 3rem;
    padding: 1rem;
    border: none;
    box-shadow: 0px 0px 4px 0px white;
    font-size: 1rem;
}

.input-container {
    height: 6rem;
    margin: 0rem;
}

.footnote {
    font-size: 0.9rem;
    margin-top: 3rem;
}

input[type=submit] {
    background-color: #262481;
    box-shadow: 0px 0px 4px 0px #262481;
    color: white;
    cursor: pointer;
    border: none;
}

input[type=submit]:focus {
    border: none;
}
</style>