<template>
  <v-footer height="auto" color="primary lighten-1" absolute>
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link.index"
        :href="link.href"
        color="white"
        flat
        round
        target="_blank"
      >
        {{ link.label }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>my DIARY</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        index: 'github',
        label: 'GitHub',
        href: 'https://github.com/YunYouJun/my-DIARY'
      },
      {
        index: 'about',
        label: 'About',
        href: 'https://github.com/YunYouJun/my-DIARY#readme'
      },
      {
        index: 'blog',
        label: 'Blog',
        href: 'https://yunyoujun.cn'
      },
      {
        index: 'contact',
        label: 'Contact',
        href: 'mailto:me@yunyoujun.cn'
      }
    ]
  })
}
</script>

<style>
</style>
