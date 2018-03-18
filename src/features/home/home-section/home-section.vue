<template lang="pug" src="./home-section.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/features/home/hello-world/hello-world.vue'; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {}
</script>
