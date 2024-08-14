<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const list = ref(['a', 'b', 'c'])
</script>

<template>
  <title-h1>Selects</title-h1>
  <!-- 选择器组件用于从选项列表中收集用户提供的信息 -->
  <!--  multiple 属性允许多个选择 -->
  <!-- 使用 chips 属性，将选择的内容显示成纸片 -->
  <!--
  自定义显示值 (title) 和实际值 (value)
  你可以自定义选项数组中的显示值和实际值对应的字段。
  默认情况下是 title 和 value。
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-select label="select" chips multiple :items="list" variant="outlined"></v-select>
  </div>
</template>

<style scoped></style>
