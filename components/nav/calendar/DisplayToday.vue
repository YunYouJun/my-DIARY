<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <div :class="theme.textColor + ' text-xs-center pa-5'">
          <div class="headline">
            {{ month }}
          </div>
          <div class="display-4 font-weight-thin my-3">
            {{ day }}
          </div>
          <div class="headline">
            {{ weekday }}
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    theme: {
      type: Object,
      default: function() {
        return {
          color: '',
          textColor: ''
        }
      }
    }
  },
  data() {
    return {
      month: 'September',
      day: '26',
      weekday: 'Friday'
    }
  }
}
</script>

<style>
</style>
