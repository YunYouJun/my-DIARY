export default function({ store, redirect }) {
  if (!store.state.t) {
    return redirect('/login')
  }
}
