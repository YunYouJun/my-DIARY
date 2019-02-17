<template>
  <div>
    <display-today :theme="theme" />
    <div class="text-xs-center mt-5">
      <v-btn
        fab
        small
      >
        <v-icon :color="theme.color">
          keyboard_arrow_down
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import DisplayToday from '@/components/nav/calendar/DisplayToday'
import { mapState } from 'vuex'
export default {
  components: {
    DisplayToday
  },
  computed: {
    ...mapState(['theme'])
  }
}
</script>

<style>
</style>
