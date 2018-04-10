<template lang="pug" src="./home.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user/user.service';
  import { CountService } from '@/services/count/count.service';
  import HelloWorld from '@/components/home/hello-world/hello-world.vue';

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

    private userService: UserService = new UserService(this.$store);
    private countService: CountService = new CountService(this.$store);

    public onCountClick(): void {
      this.countService.increment();
      this.userService.getUser(this.$store.state.count + 1).subscribe();
    }

    private created(): void {
      this.userService.getUser(1).subscribe();
    }
  }
</script>
