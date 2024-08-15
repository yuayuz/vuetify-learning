<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'
import { da } from 'vuetify/locale'

const date = ref()
</script>

<template>
  <title-h1>Date pickers（日期选择器）</title-h1>
  <!-- v-date-picker 是一个功能齐全的日期选择组件 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>date is:{{ date }}</p>
    <v-date-picker v-model="date"></v-date-picker>
  </div>
</template>

<style scoped></style>
