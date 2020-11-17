<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '@/plugins/firebase';

export default Vue.extend({
  mounted() {
    const firebaseui = require("firebaseui");
    require('firebaseui/dist/firebaseui.css');

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };
    const authUi = new firebaseui.auth.AuthUI(firebase.auth());
    authUi.start('#firebaseui-auth-container', uiConfig);
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
