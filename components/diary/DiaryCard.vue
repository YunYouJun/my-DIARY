<template>
  <v-card class="diary-card" @click="dialog = !dialog">
    <diary-dialog :dialog.sync="dialog" :diary="diary" :color="color" />
    <v-layout class="blue--text text--lighten-2">
      <v-flex md2 xs3 style="padding-right:0px;">
        <div v-ripple style="text-align:center;">
          <div class="dayOfMonth">
            {{ dayOfMonth }}
          </div>
          <div class="dayOfWeek">
            {{ weekday }}
          </div>
          <div>
            {{ month }}
          </div>
        </div>
      </v-flex>
      <v-flex md10 xs6 style="padding:0px;">
        <v-card-title style="padding-left:0px;padding-right:0px;">
          <div>
            <div class="time">
              {{ time }}
            </div>
            <div class="headline">
              {{ diary.title }}
            </div>
            <div class="content primary--text">
              {{ diary.content }}
            </div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex md2 xs3 style="padding-left:0px;">
        <div class="diary-mark">
          <v-tooltip bottom>
            <v-icon slot="activator">
              wb_sunny
            </v-icon>
            <span>{{ diary.weather }}</span>
          </v-tooltip>
          <v-icon>mood</v-icon>
          <v-icon>bookmark_border</v-icon>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import dayjs from 'dayjs'
import DiaryDialog from '@/components/diary/DiaryDialog.vue'

export default {
  components: {
    DiaryDialog
  },
  props: {
    color: {
      type: String,
      default: ''
    },
    diary: {
      type: Object,
      default: function() {
        return {
          title: '',
          content: ''
        }
      }
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    dayOfMonth() {
      return dayjs(this.diary.createdtime).format('D')
    },
    weekday() {
      return dayjs(this.diary.createdtime).format('ddd')
    },
    month() {
      return dayjs(this.diary.createdtime).format('MM/YYYY')
    },
    time() {
      return dayjs(this.diary.createdtime).format('HH:mm')
    }
  },
  methods: {
    replaceBr() {
      return this.diary.content.replace(/\n/g, '<br />')
    }
  }
}
</script>

<style lang="stylus">
.diary-card {
  border-radius: 5px;
  .dayOfMonth {
    font-size: 4rem;
    line-height: 4rem;
  }
  .dayOfWeek {
    font-weight: normal;
  }
  .content {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // white-space: pre-line;
  }
}
.diary-mark {
  text-align: right;
  .v-icon {
    font-size: 16px;
    margin-right: 8px;
  }
}
</style>
