<template lang="pug" src="./hello-world.pug"></template>
<style lang="stylus" src="./hello-world.styl" scoped></style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg: string;
    @Prop() private userName: string;

    get count(): number {
      return this.$store.state.count.count;
    }

    private click(): void {
      this.$store.commit('increment');
    }
  }
</script>