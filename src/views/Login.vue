<!--Anmerkung: Login-Funktion war geplant, jedoch nicht umsetzen können. Daher wird diese View ignoriert. -->


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
                        <input type="email" id="email" name="email" placeholder="E-Mail" v-model="loginForm.email">
                        {{email}}
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" name="password" placeholder="Passwort"
                            v-model="loginForm.password">
                    </div>
                    <div class="input-container">
                        <input type="submit" value="Login">
                    </div>
                    <div class="footnote">
                        <FormFootnote class="footnote">
                            <p>Noch keinen Account?
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
            loginForm: {
                email: '',
                password: '',
            }
        }
    }
}
</script>

<style>
@import '~/node_modules/reset-css/reset.css';
</style>