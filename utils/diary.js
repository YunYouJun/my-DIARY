export default {
  getLatestDiary() {
    return this.$axios.get('api/diary/latest/').then(res => {
      return res.data.diary
    })
  },
  getDiariesByMonth(year, month) {
    return this.$axios
      .get(`api/diary/simple_by_month/${year}/${month}/`)
      .then(res => {
        if (res.data.diaries) {
          return Object.keys(res.data.diaries)
            .sort()
            .reverse()
        }
      })
  }
}
