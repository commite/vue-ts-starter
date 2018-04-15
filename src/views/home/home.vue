<template lang="pug" src="./home.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/home/hello-world/hello-world.vue';
  import { countActionsIndex } from '@/store/count.store';
  import { UserService } from '@/services/user/user.service';

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
    private userService = new UserService();

    public onCountClick(): void {
      this.$store.dispatch(countActionsIndex.increment);
    }

    private created(): void {
      this.userService.getUser(1).subscribe();
    }
  }
</script>
