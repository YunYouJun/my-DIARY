export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (localStorage.getItem('token')) {
      config.headers.common = Object.assign(config.headers.common, {
        auth: 'token ' + localStorage.getItem('token')
      })
    }
    console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
