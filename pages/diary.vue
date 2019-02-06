<template>
  <div>
    <v-container
      fluid
      grid-list-lg
      style="margin-bottom:56px;"
    >
      <v-layout row wrap>
        <v-flex v-for="diary in listShown" :key="diary.uuid" xs12>
          <diary-card color="blue lighten-2" :diary="diary" style="margin:6px auto;" />
        </v-flex>
      </v-layout>

      <!-- <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="allPage"
          :total-visible="7"
          @input="clickCallback"
        />
      </div> -->
    </v-container>
    <bottom-nav />
  </div>
</template>

<script>
import moment from 'dayjs'
import BottomNav from '@/components/layout/BottomNav.vue'
import DiaryCard from '@/components/diary/DiaryCard.vue'

// import source from '../logs/source.json'
export default {
  middleware: 'auth',
  components: {
    BottomNav,
    DiaryCard
  },
  data() {
    return {
      allPage: 0,
      page: 1,
      pageCount: 7,
      list: [],
      listShown: []
    }
  },
  mounted() {
    this.fetchDiaryList()
    if (localStorage.getItem('diaries')) {
      this.listShown = JSON.parse(localStorage.getItem('diaries'))
    }
  },
  methods: {
    clickCallback(pageNum) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      const start = (pageNum - 1) * this.pageCount
      this.listShown = this.list.slice(start, start + this.pageCount)
    },
    fetchDiaryList() {
      // this.$emit('showProgress')
      const a = this.$store.state.a
      const type = this.$store.state.type
      const token = this.$store.state.t
      const userId = this.$store.state.id
      this.$axios
        .get('/get', {
          params: {
            a: a,
            type: type,
            token: token,
            userId: userId
          }
        })
        .then(res => {
          if (res.data.data === null) {
            this.list = []
            this.msg = ''
            // this.showProgress = false
          } else {
            // 倒序
            this.dataSource = res.data.data
            const listTemp = res.data.data.json
              .sort((x, y) => {
                return y.createTime - x.createTime
              })
              .filter(diary => {
                return !diary.deleted
              })
            this.msg = ''
            // this.$emit('hideProgress')
            if (listTemp.length > 0) {
              this.allDays =
                moment().diff(
                  moment(listTemp[listTemp.length - 1].createTime),
                  'days'
                ) + 1
            }
            this.list = listTemp
            this.listShown = this.list
            // this.listShown = this.list.slice(0, this.pageCount)
            this.count = this.list.length
            localStorage.setItem('diaries', JSON.stringify(listTemp))
            // this.allPage = parseInt(this.count / this.pageCount + 1)
          }
        })
        .catch(err => {
          console.log('err:' + err)
          // this.msg = '获取数据失败，请重试'
          // this.showProgress = false
          // this.$emit('hideProgress')
        })
    }
  }
}
</script>
