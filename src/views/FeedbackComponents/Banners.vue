<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>横幅 (Banners)</title-h1>
  <!-- v-banner 组件用于展示给用户一个中度打断性的消息，并且可以提供一到两个操作 -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 横幅有两种形式：单行和多行（隐式）。它们可以包含图标和操作，您可以将其与消息一起使用 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-banner stacked text="你好">
      <template v-slot:actions>
        <v-btn color="info" variant="text">点击</v-btn>
      </template>
    </v-banner>
  </div>

  <!-- 行 (Lines) 组件会根据lines属性来决定显示多少文字的内容  -->

  <p class="tw-bg-sky-400">粘连 (Sticky) 可以设置粘性属性，来使横幅停留在屏幕顶部</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-banner :stacked="false" text="你好" sticky>
      <template v-slot:prepend>
        <v-icon icon="mdi-home"></v-icon>
      </template>
      <template v-slot:actions>
        <v-btn color="info" variant="text">点击</v-btn>
      </template>
    </v-banner>
  </div>
</template>

<style scoped></style>
