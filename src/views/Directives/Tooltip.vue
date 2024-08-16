<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>工具提示（Tooltip）指令</title-h1>
  <!-- v-tooltip 指令可以轻松地向应用程序中的任何元素添加工具提示 -->
  <v-btn v-tooltip="'Tooltip'">button</v-btn>
</template>

<style scoped></style>
