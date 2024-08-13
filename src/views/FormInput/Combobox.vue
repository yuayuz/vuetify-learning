<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'

const lists = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
</script>

<template>
  <title-h1>Comebobox</title-h1>
  <!--
  v-combobox 组件本质上是 v-text-field 组件，
  允许填入 items 数组里的值，或者自定义的值。选择的值会以字符串形式返回
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  multiple 允许用户输入多个值 -->

    <v-combobox label="combobox" multiple chips variant="outlined" :items="lists"></v-combobox>
  </div>
</template>

<style scoped></style>
