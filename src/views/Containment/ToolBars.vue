<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>ToolBars</title-h1>
  <!--
  v-toolbar 组件通常都会作为站点的导航的首选，
  所以对于任何类型的图形用户界面 (GUI) 都是必不可少的。
  它和 v-navigation-drawer和 v-card组件配合使用有非常好的效果
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  工具栏是一个用途很广的可调整容器。默认情况下，工具栏在桌面设备上高 64px，
  在移动端设备上高 56px。有大量的辅助组件可供使用。
  例如 v-toolbar-title 可用于显示标题，
  而v-toolbar-items 会修改其中的 v-btn 的高撑满工具栏高
  -->
  <v-toolbar title="toolbar">
    <v-btn icon="mdi-arrow-left"></v-btn>
  </v-toolbar>

  <p class="tw-mb-6 tw-bg-sky-400">背景</p>
  <v-toolbar title="toolbar" image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-btn icon="mdi-arrow-left"></v-btn>
  </v-toolbar>

  <p class="tw-my-6 tw-bg-sky-400">collapse 可以折叠工具栏以节省屏幕空间。</p>
  <v-toolbar class="tw-bg-pink-400" title="toolbar" collapse>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-btn icon="mdi-arrow-left"></v-btn>
  </v-toolbar>

  <p class="tw-my-4 tw-bg-sky-400">
    具有 floating
    属性的工具栏会转变为内联元素，并且会只占用它所需要的空间。这在将工具栏嵌入内容时十分有用。
  </p>
  <div class="tw-mx-auto tw-my-4 tw-max-w-xl tw-bg-sky-400/70 tw-p-4">
    <v-toolbar title="toolbar" flat class="tw-rounded-full">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn icon="mdi-arrow-left"></v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped></style>
