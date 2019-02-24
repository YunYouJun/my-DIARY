<template>
  <div class="diary-bg">
    <img :src="bgSrc" alt="" class="diary-bg-image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgSrc: '/bg/sky.jpg'
    }
  }
}
</script>

<style>
.diary-bg {
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100% !important;
}
</style>
