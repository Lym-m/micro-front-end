<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SharedModule from "@/shared";

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    // 测试shared通信
    const shared = SharedModule.getShared();
    const token = shared.getToken();
    console.log(token);
  },
}
</script>
