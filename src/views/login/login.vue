<template lang="pug" src="./login.pug"></template>
<style lang="stylus" src="./login.styl" scoped></style>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginForm from '@/components/login/login-form/login-form.vue';
  import { LoginBody } from '@/models/api/auth.model';
  import { AuthService } from '@/services/auth/auth.service';
  import { UserService } from '@/services/user/user.service';
  import { mergeMap } from 'rxjs/operators';

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {

    private authService = new AuthService();
    private userService = new UserService();

    public onLoginSubmit(body: LoginBody): void {
      this.authService.login(body).pipe(
        mergeMap((res) => this.userService.getUser(1)),
      ).subscribe((res) => {
        this.$router.push('/home');
      });
    }

    private created(): void {
      this.authService.logout();
    }
  }
</script>
