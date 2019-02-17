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
import dayjs from 'dayjs'
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
      month: dayjs().format('MMMM'),
      day: dayjs().format('D'),
      weekday: dayjs().format('dddd')
    }
  }
}
</script>

<style>
</style>
