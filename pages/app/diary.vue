<template>
  <div>
    <no-entries :dialog="dialog" />
    <edit-diary />
    <v-container
      v-if="!dialog"
      fluid
      grid-list-md
      class="pa-2"
    >
      <v-layout row wrap align-content-start>
        <template v-for="(monthDiaries, month) in diaries">
          <v-flex :key="month" xs12 class="text-xs-center">
            <h2 class="display-3 display-month">
              {{ formatMonth(month) }}
            </h2>
          </v-flex>
          <v-flex v-for="diary in monthDiaries" :key="diary.id" xs12>
            <diary-card :diary="diary" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
    <div class="diary-bg">
      <img src="/bg/sky.jpg" alt="" class="diary-bg-image">
    </div>
  </div>
</template>

<script>
import DiaryCard from '@/components/diary/DiaryCard.vue'
import EditDiary from '@/components/diary/EditDiary.vue'
import NoEntries from '@/components/nav/entries/NoEntries.vue'
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  components: {
    DiaryCard,
    EditDiary,
    NoEntries
  },
  data() {
    return {
      dialog: false,
      latestDiary: {},
      diariesDay: [],
      diaries: {}
    }
  },
  computed: {
    ...mapState(['theme'])
  },
  async mounted() {
    await this.getLatestDiary()
    const year = dayjs(this.latestDiary.createddate).year()
    const month = dayjs(this.latestDiary.createddate).format('MM')
    this.fillDiariesByMonth(year, month)
    // this.fillDiariesByMonth(2019, '01')
    // this.getAllDiariesByKey(this.diariesKey)
  },
  methods: {
    async fillDiariesByMonth(year, month) {
      this.diariesDay = await this.getDiariesByMonth(year, month)
      const diariesInMonth = await this.getAllDiariesInMonth(this.diariesDay)
      this.$set(this.diaries, year + '-' + month, diariesInMonth)
    },
    formatMonth(month) {
      return dayjs(month).format('M')
    },
    getLatestDiary() {
      return this.$axios
        .get('api/diary/latest/')
        .then(res => {
          this.latestDiary = res.data.diary
          console.log(this.latestDiary)
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            text: err
          })
        })
    },
    getDiariesByMonth(year, month) {
      return this.$axios
        .get(`api/diary/simple_by_month/${year}/${month}/`)
        .then(res => {
          if (res.data.diaries) {
            return Object.keys(res.data.diaries)
              .sort()
              .reverse()
          }
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            text: err
          })
        })
    },
    getAllDiariesInMonth(diariesDay) {
      return Promise.all(
        diariesDay.map(async date => {
          const diary = await this.getDiaryByDate(date)
          return diary
        })
      )
    },
    getDiaryByDate(date) {
      return this.$axios
        .get(`api/diary/?date=${date}`)
        .then(res => {
          if (res.data) {
            return res.data.diary
          }
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            text: err
          })
        })
    },
    fetchDiaries() {
      this.$axios
        .get('/api/diary/all/')
        .then(res => {
          console.log(res)
          if (res.data.diaries) {
            this.diaries = res.data.diaries
          } else {
            this.$toast.open({
              color: 'warning',
              text: 'Something wrong'
            })
          }
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            text: err
          })
        })
    }
  }
}
</script>

<style lang="stylus">
.diary-container {
  background-attachment: fixed;
  background-image: url('~assets/img/bg/sky.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
}
.display-month {
  color: white;
  text-shadow: 0px 1px 5px #000000;
}
.diary-bg {
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100% !important;
}
</style>
