<template lang="pug" src="./login.pug"></template>
<style lang="stylus" src="./login.styl" scoped></style>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginForm from '@/components/login/login-form/login-form.vue';

  @Component({
    components: {
      LoginForm,
    },
  })
  export default class Login extends Vue {

  }
</script>
