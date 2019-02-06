export default function({ store, redirect }) {
  // has logged in
  if (store.state.t) {
    return redirect('/diary')
  }
}
