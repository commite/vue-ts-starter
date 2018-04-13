<template lang="pug" src="./login.pug"></template>
<style lang="stylus" src="./login.styl" scoped></style>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginForm from '@/components/login/login-form/login-form.vue';
  import { LoginBody } from '@/models/api/auth.model';
  import { userActionsIndex } from '@/store/user.store';

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {

    public onLoginSubmit(body: LoginBody): void {
      this.$store.commit(userActionsIndex.login, body);
    }
  }
</script>
