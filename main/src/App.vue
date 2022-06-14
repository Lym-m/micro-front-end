<template>
  <home />
</template>

<script>
import shared from "@/shared";
import home from "@/views/home";

export default {
    name: 'App',
    components: {
      home
    },
    methods: {
      login(){
        const token = '8905jsfj4iou230usjfjsl2389rklfjlo34oitlrgd';

        shared.setToken(token);

        history.pushState(null, '/vue', '/vue')
      }
    }
}
</script>

<style>

</style>
