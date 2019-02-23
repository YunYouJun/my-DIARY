<template>
  <div>
    <v-expand-transition>
      <div v-show="expand">
        <date-picker />
      </div>
    </v-expand-transition>
    <display-today v-show="!expand" :theme="theme" />
    <div class="text-xs-center mt-5">
      <v-btn
        fab
        small
        @click="expand = !expand"
      >
        <v-icon :color="theme.color">
          {{ expand?'keyboard_arrow_up':'keyboard_arrow_down' }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import DatePicker from '@/components/nav/calendar/DatePicker'
import DisplayToday from '@/components/nav/calendar/DisplayToday'
import { mapState } from 'vuex'
export default {
  components: {
    DatePicker,
    DisplayToday
  },
  data() {
    return {
      expand: false
    }
  },
  computed: {
    ...mapState(['theme'])
  }
}
</script>

<style>
</style>
