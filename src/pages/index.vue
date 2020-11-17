<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">FirebaseUI サンプル</h1>
        <auth />
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/components/Auth.vue";

export default {
  components: {
    Auth
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
