<template>
  <div>
    <v-container
      fluid
      grid-list-lg
      style="margin-bottom:56px;"
    >
      <v-layout v-if="diaries.length" row wrap>
        <v-flex v-for="diary in diaries" :key="diary.id" xs12>
          <diary-card
            color="blue lighten-2"
            :diary="diary"
            style="margin:2px auto;"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" max-width="80%">
      <v-card class="pa-2 text-xs-center no-diary">
        <div class="my-2 no-entries-title">
          {{ msg.title }}
        </div>
        <p>{{ msg.content }}</p>
        <v-btn flat class="blue--text text--lighten-3 action">
          {{ msg.action }}
        </v-btn>
      </v-card>
    </v-dialog>
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
      dialog: false,
      diaries: [],
      msg: {
        title: 'NO Entries',
        content: '日記がありません',
        action: '新しいアカウントを作成'
      }
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
            if (this.diaries.length === 0) {
              this.dialog = true
            }
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

<style lang="stylus">
.no-diary {
  text-align: center;
  border-radius: 10px;
  .no-entries-title {
    font-size: 50px;
  }
  .action {
    text-decoration: underline;
  }
}
</style>
