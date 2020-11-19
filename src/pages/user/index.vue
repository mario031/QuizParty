<template>
  <div>
    <navigation-bar />
    <div class="container">
      <div>
        <auth />
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/components/user/Auth";
import NavigationBar from '@/components/navigation/NavigationBar';

export default {
  components: {
    Auth,
    NavigationBar
  }
};
</script>
