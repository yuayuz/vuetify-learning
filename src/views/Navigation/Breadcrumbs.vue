<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const items = ref(['a', 'b', 'c'])
</script>

<template>
  <title-h1>breadcrumbs</title-h1>
  <!-- 用作页面的导航助手和层次结构 -->
  <p class="tw-bg-sky-400">使用</p>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
  <p class="tw-bg-sky-400">使用 divider 属性来设置面包屑分隔符</p>
  <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
</template>

<style scoped></style>
