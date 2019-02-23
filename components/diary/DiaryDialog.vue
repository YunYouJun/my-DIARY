<template>
  <v-dialog v-model="show" scrollable>
    <v-card class="diary-dialog" flat>
      <v-card-title
        v-ripple
        :class="color + ' white--text'"
        style="text-align:center;"
      >
        <v-btn flat icon color="white" class="close" @click="show = !show">
          <v-icon>close</v-icon>
        </v-btn>
        <div style="width:100%;">
          <div>
            {{ month }}
          </div>
          <div class="dayOfMonth">
            {{ dayOfMonth }}
          </div>
          <div class="dayOfWeek">
            {{ weekday }}
            <span style="margin-left:5px;">
              {{ time }}
            </span>
          </div>
          <div class="mt-1">
            <span class="weather">
              <v-icon dark>
                wb_sunny
              </v-icon>
              <span>{{ diary.weather + ' ' + diary.mood }}</span>
              <!-- {{ diary.weather + ' ' + diary.temperature }} -->
            </span>
            <span class="address">
              <v-icon dark>
                location_on
              </v-icon>
              <span>earth</span>
              <!-- {{ diary.address + ', ' + diary.city }} -->
            </span>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="diary-content" style="height: 520px;">
        <h5>{{ diary.title }}</h5>
        {{ diary.content }}
      </v-card-text>
      <v-bottom-nav :color="color" :value="true" dark>
        <v-btn dark @click="openEditDialog">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn dark>
          <v-icon>location_on</v-icon>
        </v-btn>
        <v-btn dark>
          <v-icon>camera_alt</v-icon>
        </v-btn>
        <v-btn dark>
          <v-icon>music_note</v-icon>
        </v-btn>
        <v-btn dark>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-dialog>
</template>

<script>
import dayjs from 'dayjs'
import { mapMutations } from 'vuex'
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    dialog: {
      type: Boolean,
      default: false
    },
    diary: {
      type: Object,
      default: function() {
        return {
          id: '',
          title: '',
          content: '',
          createddate: ''
        }
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    dayOfMonth() {
      return dayjs(this.diary.createdtime).format('D')
    },
    weekday() {
      return dayjs(this.diary.createdtime).format('dddd')
    },
    month() {
      return dayjs(this.diary.createdtime).format('MMMM')
    },
    time() {
      return dayjs(this.diary.createdtime).format('HH:mm')
    }
  },
  watch: {
    dialog() {
      this.show = this.dialog
    },
    show() {
      this.$emit('update:dialog', this.show)
    }
  },
  methods: {
    ...mapMutations('diary', [
      'setCurEditDiary',
      'setOldDiary',
      'toggleEditDialog'
    ]),
    openEditDialog() {
      // store old diary
      this.setOldDiary(Object.assign({}, this.diary))
      this.setCurEditDiary(this.diary)
      this.toggleEditDialog()
    }
  }
}
</script>

<style lang="stylus">
.diary-dialog {
  border-radius: 20px;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    .v-icon {
      font-size: 2rem;
      text-align: center;
      margin-left: 0px;
    }
  }
  .dayOfMonth {
    font-size: 5rem;
    line-height: 5rem;
  }
  .dayOfWeek {
    font-weight: normal;
  }
  .weather {
    font-size: 0.8rem;
    .v-icon {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
  .address {
    font-size: 0.8rem;
    .v-icon {
      font-size: 1rem;
      margin-left: 10px;
    }
  }

  .v-item-group.v-bottom-nav .v-btn {
    min-width: 40px;
  }
}
.diary-content {
  white-space: pre-line;
}
</style>
