<template>
  <v-container fill-height>
    <v-layout 
      justify-center
      align-center
    >
      <v-flex xs12 sm6>
        <div class="text-xs-center">
          <v-btn large round color="primary" nuxt to="/login">
            Start
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <main-footer :fixed="true" />
  </v-container>
</template>

<script>
import MainFooter from '@/components/layout/MainFooter.vue'
export default {
  components: {
    MainFooter
  },
  data() {
    return {}
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
