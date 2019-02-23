<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark :color="theme.color">
        <v-btn icon dark @click="toggleEditDialog">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>date...</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn dark flat @click="toggleEditDialog">
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
                v-model="diary.title"
                label="Title"
              />
              <v-textarea
                v-model="diary.content"
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
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      diary: {
        title: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState('diary', ['editDialog']),
    ...mapState(['theme']),
    show: {
      get() {
        return this.editDialog
      },
      set(val) {
        this.setEditDialog(val)
      }
    }
  },
  methods: {
    ...mapMutations('diary', ['setEditDialog', 'toggleEditDialog'])
  }
}
</script>

<style>
</style>
