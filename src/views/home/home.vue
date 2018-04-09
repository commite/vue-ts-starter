<template lang="pug" src="./home.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/home/hello-world/hello-world.vue';

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {}
</script>
