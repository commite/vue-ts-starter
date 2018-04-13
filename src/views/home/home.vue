<template lang="pug" src="./home.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/home/hello-world/hello-world.vue';
  import { userActionsIndex } from '@/store/user.store';
  import { countActionsIndex } from '@/store/count.store';

  @Component({
    components: {
      HelloWorld,
    },
    computed: {
      user() { return this.$store.state.user; },
      count() { return this.$store.state.count; },
    },
  })
  export default class Home extends Vue {
    public onCountClick(): void {
      this.$store.dispatch(countActionsIndex.increment);
      this.$store.dispatch(userActionsIndex.getUser, this.$store.state.count + 1);
    }

    private created(): void {
      this.$store.dispatch(userActionsIndex.getUser, 1);
    }
  }
</script>
