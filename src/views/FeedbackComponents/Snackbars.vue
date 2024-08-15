<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const snackbar = ref(false)
</script>

<template>
  <title-h1>消息条 (Snackbars)</title-h1>
  <!-- v-snackbar 组件通常用来显示速递消息。它支持修改位置，移除延迟，以及调用回调函数 -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- v-snackbar 以最简单的形式向用户显示一个临时且可关闭的通知 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="snackbar = true">打开消息条</v-btn>
    <v-snackbar v-model="snackbar">
      <template v-slot:actions>
        <v-btn @click="snackbar = false" color="pink" variant="text">关闭消息条</v-btn>
      </template>
      你好
    </v-snackbar>
  </div>
  <!-- 多行 multi-line 属性扩展了 v-snackbar 的高度，拥有更多的内容空间 -->

  <p class="tw-bg-sky-400">超时</p>
  <!-- timeout 属性允许自定义 v-snackbar 隐藏之前的延迟 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="snackbar = true">打开消息条 timeout="2000"</v-btn>
    <v-snackbar v-model="snackbar" timeout="2000">
      <template v-slot:actions>
        <v-btn @click="snackbar = false" color="pink" variant="text">关闭消息条</v-btn>
      </template>
      你好
    </v-snackbar>
  </div>

  <!-- 垂直 vertical 属性允许堆叠 v-snackbar 的内容 -->
</template>

<style scoped></style>
