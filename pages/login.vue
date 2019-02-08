<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md5>
        <login-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '@/components/user/LoginForm.vue'
export default {
  middleware: 'logged',
  components: {
    LoginForm
  },
  data: () => ({
    snackbar: {
      show: false,
      hint: '',
      color: ''
    }
  })
}
</script>
