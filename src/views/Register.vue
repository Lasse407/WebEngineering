<template>
    <div class="main">
        <div class="logo">
            <img class="logoMain" src="@/assets/LogoHsFlPlain.jpeg" alt="Logo der HS Flensburg">
        </div>

        <div class="half">
            <div class="m">HS FL Dashboard <br> Administration
                <div>
                    <div class="label--input">
                        <input type="email" id="email" name="email" placeholder="E-Mail">
                    </div>
                    <div class="label--input">
                        <input type="password" id="password" name="password" placeholder="Passwort">
                    </div>
                    <div>
                        <input type="submit" value="Registrieren">
                    </div>
                    <div>
                        <FormFootnote class="footnote">
                            <p style="margin-top: 20px;">Schon einen Account?
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

</script>

<style>
@import '~/node_modules/reset-css/reset.css';



input {
    border-radius: 16px;
    background-color: white;
    width: 60%;
    height: 25px;
    font-size: 24px;
    margin-top: 55px;
    padding: 10px;
    border: 0px;
    color: black;
    box-shadow: 0px 0px 8px 0px white
}

.footnote {
    font-size: 15px;
}

input[type=submit] {
    width: 62%;
    height: 45px;
    background-color: #262481;
    box-shadow: 0px 0px 8px 0px #262481;
    color: white;
    padding: 0px 0px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
}



</style>