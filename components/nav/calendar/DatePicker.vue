<template>
  <div>
    <v-date-picker
      v-model="datePicker"
      :color="color"
      :reactive="reactive" 
      full-width
      :events="diaryEvents"
      :event-color="color"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import diary from '@/utils/diary.js'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      diaryEvents: [],
      datePicker: new Date().toISOString().substr(0, 10),
      reactive: true
    }
  },
  computed: {
    ...mapState('theme', ['color', 'textColor'])
  },
  async mounted() {
    const latestDiary = await this.getLatestDiary()
    const year = dayjs(latestDiary.createddate).year()
    const month = dayjs(latestDiary.createddate).format('MM')
    this.diaryEvents = await this.getDiariesByMonth(year, month)
  },
  methods: {
    ...diary
  }
}
</script>

<style>
</style>
