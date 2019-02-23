<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark :color="theme.color">
        <v-btn icon dark @click="closeEditDialog">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ date }}</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn dark flat @click="saveCurDiary">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex
              xs12
            >
              <v-text-field
                v-model="title"
                label="Title"
              />
              <v-textarea
                v-model="content"
                name="content"
                label="Content"
                rows="22"
                required
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import qs from 'qs'
export default {
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState(['theme']),
    ...mapState('diary', ['curEditDiary', 'editDialog']),
    show: {
      get() {
        return this.editDialog
      },
      set(val) {
        this.setEditDialog(val)
      }
    },
    // default '' mean today
    date() {
      return this.$store.getters['diary/date']
    },
    title: {
      get() {
        return this.$store.getters['diary/title']
      },
      set(val) {
        this.$store.commit('diary/setTitle', val)
      }
    },
    content: {
      get() {
        return this.$store.getters['diary/content']
      },
      set(val) {
        this.$store.commit('diary/setContent', val)
      }
    }
  },
  methods: {
    ...mapMutations('diary', [
      'setCurEditDiary',
      'setEditDialog',
      'toggleEditDialog'
    ]),
    saveCurDiary() {
      const diaryForm = {
        date: this.date,
        title: this.title,
        content: this.content,
        weather: '',
        mood: ''
      }
      this.$axios
        .post('/api/write/', qs.stringify(diaryForm, { encode: false }))
        .then(res => {
          if (res.data) {
            this.$toast.open({
              color: 'success',
              text: 'Save success'
            })
            this.toggleEditDialog()
          } else {
            this.$toast.open({
              color: 'error',
              title: 'Save fail',
              text: 'No response'
            })
          }
        })
        .catch(err => {
          this.$toast.open({
            color: 'error',
            title: 'Save fail',
            text: err
          })
        })
    },
    closeEditDialog() {
      this.restoreDiary()
      this.toggleEditDialog()
    },
    restoreDiary() {
      const oldDiary = this.$store.state.diary.oldDiary
      this.$store.commit('diary/setTitle', oldDiary.title)
      this.$store.commit('diary/setContent', oldDiary.content)
    }
  }
}
</script>

<style>
</style>
