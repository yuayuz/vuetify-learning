<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>徽章 (Badges)</title-h1>
  <!--
  v-badge 组件用于在内容的右上或者右下角显示图标或者文字内容，
  来向用户展示内容或者只是吸引用户的注意力。
  带徽章的内容通常是带有数字或者图标
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 最简单形式的徽章显示在它包装的内容的右上角，并且需要徽章插槽 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-badge :content="1">
      <v-icon icon="mdi-home" size="x-large"></v-icon>
    </v-badge>
  </div>
  <p class="tw-bg-sky-400">点状徽章 (dot)</p>
  <!-- dot 属性移除了徽章的内容，并减少它的大小。这在你需要吸引用户注意力时非常有用  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-badge dot color="red">
      <v-icon icon="mdi-home" size="x-large"></v-icon>
    </v-badge>
  </div>

  <p class="tw-bg-sky-400">行内徽章 (inline)</p>
  <!-- 行内徽章可以放置于内容的任何部分，且无需 default 插槽 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list>
      <v-list-item title="Badges">
        <template v-slot:append>
          <v-badge :content="10" inline color="success"></v-badge>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped></style>
