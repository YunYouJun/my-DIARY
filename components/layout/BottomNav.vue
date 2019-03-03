<template>
  <div>
    <v-bottom-nav
      v-if="$store.state.token"
      :color="theme.color"
      :value="true"
      app
      dark
      fixed
    >
      <v-btn dark @click="toggleDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn dark @click="openTodayEditDialog">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn dark>
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import dayjs from 'dayjs'
import diary from '@/utils/diary.js'
export default {
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...diary,
    ...mapMutations('app', ['toggleDrawer']),
    ...mapMutations('diary', [
      'setCurEditDiary',
      'setOldDiary',
      'toggleEditDialog'
    ]),
    async openTodayEditDialog() {
      const today = dayjs().format('YYYY-MM-DD')
      let todayDiary = await this.getDiaryByDate(today)
      if (!todayDiary) {
        todayDiary = {
          id: '',
          title: '',
          content: '',
          createddate: today
        }
      }
      this.setOldDiary(Object.assign({}, todayDiary))
      this.setCurEditDiary(todayDiary)
      this.toggleEditDialog()
    }
  }
}
</script>
