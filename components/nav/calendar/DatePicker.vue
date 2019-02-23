<template>
  <div>
    <v-date-picker
      v-model="datePicker"
      :color="color"
      :reactive="reactive" 
      full-width
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      datePicker: new Date().toISOString().substr(0, 10),
      reactive: true
    }
  },
  computed: {
    ...mapState('theme', ['color', 'textColor'])
  }
}
</script>

<style>
</style>
