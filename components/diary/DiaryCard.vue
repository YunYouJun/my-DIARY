<template>
  <v-card class="diary-card" height="85" @click="dialog = !dialog">
    <diary-dialog :dialog.sync="dialog" :diary="diary" :color="theme.color" />
    <v-layout :class="theme.textColor">
      <v-flex md2 xs3 class="text-xs-center pr-0">
        <div v-ripple>
          <div class="dayOfMonth pt-2">
            {{ dayOfMonth }}
          </div>
          <div class="dayOfWeek">
            {{ weekday }}.
          </div>
        </div>
      </v-flex>
      <v-flex md10 xs6 class="px-0">
        <v-card-title class="px-0 pa-2">
          <div>
            <div class="time">
              {{ time }}
            </div>
            <div class="subheading">
              {{ diary.title }}
            </div>
            <div :class="theme.textColor + ' text-truncate'" style="width:180px;">
              {{ diary.content }}
            </div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex md2 xs3 class="pl-0">
        <div class="diary-mark">
          <v-tooltip bottom>
            <v-icon slot="activator">
              wb_sunny
            </v-icon>
            <span class="text-uppercase">
              {{ diary.weather }}
            </span>
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
import theme from '@/config/theme.js'
export default {
  components: {
    DiaryDialog
  },
  props: {
    diary: {
      type: Object,
      default: function() {
        return {
          title: '',
          content: '',
          weather: ''
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
    theme() {
      if (this.diary.space === 'boy') {
        return theme.boy
      } else if (this.diary.space === 'girl') {
        return theme.girl
      }
      return {
        color: '',
        themeColor: ''
      }
    },
    dayOfMonth() {
      return dayjs(this.diary.createddate).format('D')
    },
    weekday() {
      return dayjs(this.diary.createddate).format('ddd')
    },
    month() {
      return dayjs(this.diary.createddate).format('MM/YYYY')
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
    font-size: 40px;
    line-height: 40px;
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
    margin-right: 6px;
  }
}
</style>
