<template lang="pug" src="./home.pug"></template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserService } from '@/services/user/user.service';
  import HelloWorld from '@/components/home/hello-world/hello-world.vue';

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {

    private userService: UserService = new UserService();
    private userName: string = '';

    private created(): void {
      this.userService.getUser(1).subscribe((user) => {
        this.userName = user.data.first_name;
      });
    }
  }
</script>
