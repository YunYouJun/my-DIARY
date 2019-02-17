<template>
  <div>
    <v-container
      v-if="diaries.length"
      fluid
      grid-list-lg
      class="diary-container"
      fill-height
    >
      <v-layout row wrap align-content-start>
        <v-flex v-for="diary in diaries" :key="diary.id" xs12>
          <diary-card
            :color="theme.color"
            :diary="diary"
            class="mb-2"
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
        <v-btn flat :class="'action ' + theme.textColor">
          {{ msg.action }}
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DiaryCard from '@/components/diary/DiaryCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
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
  computed: {
    ...mapState(['theme'])
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
}
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
