<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm12 style="margin-bottom:100px;">
        <div class="text-xs-center">
          <v-btn large round color="primary" nuxt to="/login">
            Start
          </v-btn>
        </div>
      </v-flex>
      <v-flex>
        <main-footer />
      </v-flex>
    </v-layout>
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
  }
}
</script>

<style>
</style>
