<template>
  <div>
    <b-navbar type="light" variant="warning">
    <b-navbar-brand id='nav-title'>QuizParty</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <template v-if="isLogined">
          <b-navbar-brand id='nav-text' href='#'>Sign Out</b-navbar-brand>
        </template>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    isLogined() {
      const user = this.$store.state.user.userName;
      return user != null;
    }
  }
});
</script>

<style>
#nav-title {
  font-family: fantasy;
  font-size: 25px;
}

#nav-text{
  font-size: 20px;
}
</style>
