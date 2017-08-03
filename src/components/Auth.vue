<template>
    <div id="firebaseui-auth-container">
    </div>
</template>

<script>

import firebase from '../../node_modules/firebase'
import firebaseui from '../../node_modules/firebaseui'
import { config } from '../helpers/firebaseConfig'
export default {
    name: 'auth',
    mounted() {
        let uiConfig = {
            signInSuccessUrl: '/#/success',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
