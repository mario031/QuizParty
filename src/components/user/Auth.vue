<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import firebase from '@/plugins/firebase';

export default Vue.extend({
  mounted() {
    const { auth } = require("firebaseui");
    require('firebaseui/dist/firebaseui.css');

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };
    const authUi = new auth.AuthUI(firebase.auth());
    authUi.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {
    ...mapActions('user', ['login']),
  },
  created () {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.login(user);
      }
    })
  },
  computed: {
    hoge() {
      console.log('huga');
      return this.$store.state;
    }
  }
});
</script>

<style>
</style>
