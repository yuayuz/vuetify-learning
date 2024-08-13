<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const radios = ref()
const third = ref(3)
</script>

<template>
  <title-h1>Radio buttons</title-h1>
  <!--
  该 v-radio 组件是一个简单的单选按钮。
  与 v-radio-group组件结合使用时，可以提供分组功能，
  让用户从一组预定义的选项中进行选择
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-radio-group>
      <v-radio label="one" value="one"></v-radio>
      <v-radio label="two" value="two"></v-radio>
      <v-radio label="third" value="third"></v-radio>
    </v-radio-group>
  </div>
  <p class="tw-bg-sky-400">Model (group)</p>
  <!--
  使用 v-model（或model-value ），
  可以访问和控制由子组件上的设置值定义的选定单选按钮 v-radio
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>radios is: {{ radios }}</p>
    <v-radio-group v-model="radios">
      <v-radio label="one" value="one"></v-radio>
      <v-radio label="two" value="2"></v-radio>
      <v-radio label="third" :value="third"></v-radio>
    </v-radio-group>
  </div>

  <p class="tw-bg-sky-400">布局</p>
  <!--
  单选按钮组组件可以使用 respective 属性，
  选择按行 (inline) 或者按列 (column) 排布单选按钮。
  默认是按列
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-radio-group v-model="radios" inline>
      <v-radio label="one" value="one"></v-radio>
      <v-radio label="two" value="2"></v-radio>
      <v-radio label="third" :value="third"></v-radio>
    </v-radio-group>
  </div>
  <!--
  插槽
  标签 单选组标签可以在 label 中定义，允许使用 HTML 内容
  -->
</template>

<style scoped></style>
