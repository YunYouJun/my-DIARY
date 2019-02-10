<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="loginForm.email"
          :rules="rules.email"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="loginForm.password"
          :rules="rules.password"
          type="password"
          label="Password"
          required
        />
        <v-checkbox
          v-model="checkbox"
          :rules="rules.checkbox"
          :label="agreement"
          required
        />
        <v-btn :disabled="!valid" color="success" :loading="loading" @click="submit">
          Login
        </v-btn>
        <v-btn @click="reset">
          Reset
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import qs from 'qs'
import ohShenghuo from '@/api/ohShenghuo.json'
export default {
  data: () => ({
    agreement: 'Would you like to be my friend?',
    valid: true,
    checkbox: false,
    loading: false,
    loginForm: {
      csrfmiddlewaretoken: ohShenghuo.csrftoken,
      email: process.env.email,
      password: process.env.password
    },
    rules: {
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters'
      ],
      checkbox: [v => !!v || 'You must agree to continue!']
    }
  }),
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    login() {
      this.loading = true
      this.$axios
        .post('/api/login/', qs.stringify(this.loginForm, { encode: false }))
        .then(res => {
          if (res.data && res.data.token) {
            this.$store.commit('login', {
              token: res.data.token,
              userid: res.data.userid,
              user_config: res.data.user_config
            })
            this.setTheme(res.data.user_config.role)
            this.$toast.open({
              color: 'success',
              text: 'Login success'
            })
            this.$router.push({
              path: '/diary'
            })
          } else {
            this.$toast.open({
              color: 'error',
              title: 'Login fail',
              text: 'Please check your e-mail or password.'
            })
          }
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            title: 'Login fail',
            text: err
          })
        })
    },
    setTheme(role) {
      let theme = {
        color: '',
        textColor: ''
      }
      if (role === 'boy') {
        theme = {
          color: 'blue accent-2',
          textColor: 'blue--text text--accent-2'
        }
      } else if (role === 'girl') {
        theme = {
          color: 'red lighten-2',
          textColor: 'pink--text text--lighten-2'
        }
      }
      this.$store.commit('setTheme', theme)
    }
  }
}
</script>

<style>
</style>
