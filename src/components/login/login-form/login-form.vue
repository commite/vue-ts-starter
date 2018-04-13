<template lang="pug" src="./login-form.pug"></template>
<style lang="stylus" src="./login-form.styl" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LoginBody } from '@/models/api/auth.model';

@Component
export default class LoginForm extends Vue {

  public form = {
    email: '',
    password: '',
  };

  public validateBeforeSubmit(): void {
    this.$validator.validateAll().then((result) => {
      if (result) {
        const loginBody: LoginBody = {
          email: this.form.email,
          password: this.form.password,
        };

        this.$emit('login-submit', loginBody);
      }
    });
  }
}
</script>
