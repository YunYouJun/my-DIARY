<template>
  <div>
    <v-container
      fluid
      grid-list-lg
      style="margin-bottom:56px;"
    >
      <v-layout row wrap>
        <v-flex v-for="diary in diaries" :key="diary.id" xs12>
          <diary-card
            color="blue lighten-2"
            :diary="diary"
            style="margin:2px auto;"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from '@/components/layout/BottomNav.vue'
import DiaryCard from '@/components/diary/DiaryCard.vue'
export default {
  middleware: 'auth',
  components: {
    BottomNav,
    DiaryCard
  },
  data() {
    return {
      diaries: []
    }
  },
  mounted() {
    this.fetchDiaries()
  },
  methods: {
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
              text: 'Nothing'
            })
          }
        })
        .catch(err => {
          console.log('err:' + err)
          this.$toast.open({
            text: err.info
          })
        })
    }
  }
}
</script>
