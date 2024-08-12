<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>提示 (Tooltips)</title-h1>
  <!--
  v-tooltip 组件常用于用户鼠标悬停在某个元素上时向其传递信息。
  也可以使用 v-model 控制提示信息的显示。
  当激活时，提示组件显示文字描述，例如对其功能的描述
  -->
  <p class="tw-bg-sky-400">提示组件可以包装任何元素</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-tooltip>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">tooltip</v-btn>
      </template>
      你好
    </v-tooltip>
  </div>

  <p class="tw-bg-sky-400">显示位置 (Location)</p>
  <!-- 使用 location 属性确定提示会在元素的哪个方向显示。 -->

  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-tooltip location="start">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">tooltip</v-btn>
      </template>
      你好
    </v-tooltip>
    <v-tooltip location="end">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">tooltip</v-btn>
      </template>
      你好
    </v-tooltip>
    <v-tooltip location="top">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">tooltip</v-btn>
      </template>
      你好
    </v-tooltip>
    <v-tooltip location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">tooltip</v-btn>
      </template>
      你好
    </v-tooltip>
  </div>
  <!-- 可见性 可使用 v-model 编程性修改提示可见性 -->
</template>

<style scoped></style>
