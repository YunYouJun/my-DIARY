<template>
  <div>
    <v-container
      v-if="diaries.length"
      fluid
      grid-list-md
      class="diary-container pa-2"
      fill-height
    >
      <v-layout row wrap align-content-start>
        <v-flex v-for="diary in diaries" :key="diary.id" xs12>
          <diary-card :diary="diary" />
        </v-flex>
      </v-layout>
    </v-container>
    <no-entries :dialog="dialog" />
    <edit-diary />
  </div>
</template>

<script>
import DiaryCard from '@/components/diary/DiaryCard.vue'
import EditDiary from '@/components/diary/EditDiary.vue'
import NoEntries from '@/components/nav/entries/NoEntries.vue'
import { mapState } from 'vuex'
export default {
  components: {
    DiaryCard,
    EditDiary,
    NoEntries
  },
  data() {
    return {
      dialog: false,
      diaries: []
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
</style>
