<template>
  <div>
    <navigation-bar />
    <div class="container">
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar';

export default {
  components: {
    NavigationBar
  },
  computed: {
    hoge() {
      console.log('hoge');
      return this.$store.state;
    }
  }
};
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
