<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'

const action = function () {
  alert('你好')
}
</script>

<template>
  <title-h1>空状态 (Empty state)</title-h1>
  <!-- v-empty-state 组件用于表示某个列表是空的或者结果搜索是空的 -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 基本的空状态由标题和描述组成。它还可以包括一个图标和一个按钮 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  内容 配置文本内容主要有三个属性，title，subtitle，和text  -->
    <v-empty-state title="Empty" text="你好">
      <!--  默认插槽位于文本和操作之间    -->
      <template v-slot:default>
        <p>默认插槽</p>
      </template>
      <template v-slot:actions>
        <v-btn @click="action()" variant="text">点击</v-btn>
      </template>
    </v-empty-state>
  </div>
</template>

<style scoped></style>
