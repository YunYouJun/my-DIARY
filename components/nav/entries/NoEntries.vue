<template>
  <div>
    <v-dialog v-model="show" max-width="80%">
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
import { mapState } from 'vuex'
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: {
        title: 'NO Entries',
        content: '日記がありません',
        action: '新しいアカウントを作成'
      }
    }
  },
  computed: {
    ...mapState(['theme']),
    show: {
      get: function() {
        return this.dialog
      },
      set: function() {}
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
