<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md5
    >
      <v-card>
        <v-container>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            />
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree me?"
              required
            />
            <v-btn
              :disabled="!valid"
              color="success"
              @click="submit"
            >
              Login
            </v-btn>
            <v-btn
              @click="reset"
            >
              Reset
            </v-btn>
          </v-form>
        </v-container>
        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.color"
          top
        >
          {{ snackbar.hint }}
          <v-btn
            flat
            @click="snackbar.show = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CryptoJS from 'crypto-js'

export default {
  data: () => ({
    valid: true,
    email: process.env.email,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: process.env.password,
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters'
    ],
    checkbox: false,
    type: 1,
    snackbar: {
      show: false,
      hint: '',
      color: ''
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
      const w = encodeURI(CryptoJS.AES.encrypt(this.password, 'onediary'))
      this.$axios
        .get('/login', {
          params: {
            a: this.email,
            w: w,
            type: this.type
          }
        })
        .then(res => {
          if (res.data.code === 200) {
            // this.$store.commit('login', {
            //   a: this.email,
            //   type: this.type,
            //   t: res.data.token,
            //   id: res.data.id
            // })
            this.snackbar.hint = 'Login success!'
            this.snackbar.color = 'success'
            this.snackbar.show = true
            console.log(res)
            this.$router.push({
              path: '/inspire'
            })
          } else if (res.data.code === 401) {
            this.snackbar.hint = 'Login fail!'
            this.snackbar.color = 'error'
            this.snackbar.show = true
          }
        })
        .catch(err => {
          console.log(err)
          this.snackbar.hint = 'Login fail!'
          this.snackbar.color = 'error'
          this.snackbar.show = true
        })
    }
  }
}
</script>
