<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Footers</title-h1>
  <!-- 用于显示用户可能想要从网站中的任何页面都能访问到的公共信息 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-footer class="tw-grid tw-grid-rows-2">
      <div class="tw-flex tw-w-full tw-place-content-evenly tw-bg-pink-400">
        <v-btn density="compact" variant="text">a</v-btn>
        <v-btn density="compact" variant="text">b</v-btn>
        <v-btn density="compact" variant="text">c</v-btn>
        <v-btn density="compact" variant="text">d</v-btn>
      </div>
      <p class="tw-flex tw-justify-center tw-bg-amber-500">这是页脚</p>
    </v-footer>
  </div>
</template>

<style scoped></style>
