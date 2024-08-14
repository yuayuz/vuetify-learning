<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0])
const fill = ref(true)
const smooth = ref(true)
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]
const setGradient = function (value: number) {
  gradient.value = gradients[value]
}
const gradient = ref(gradients[5])
const lineWith = ref(1)
const padding = ref(10)
const newValue = ref()
const setValue = function () {
  value.value.push(newValue.value)
}
</script>

<template>
  <title-h1>迷你图表（Sparklines）</title-h1>
  <p class="tw-bg-sky-400">使用</p>
  <!--
  迷你图是一种提供数据可视化表示的微型图表。
  迷你图组件有两种变体，趋势图（默认）和条形图。每种都支持多种选项来自定义迷你图的外观
  -->

  <div class="auto- tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-sparkline
      :padding="padding"
      :line-width="lineWith"
      :model-value="value"
      :fill="fill"
      :gradient="gradient"
      :smooth="smooth"
    >
    </v-sparkline>
    <div class="tw-grid tw-grid-cols-2 tw-grid-rows-3 tw-gap-10">
      <div class="tw-grid tw-grid-cols-3 tw-grid-rows-2 tw-gap-3">
        <div v-for="(item, i) in gradients" :key="i">
          <v-card
            :style="{
              background: item.length > 1 ? `linear-gradient(0deg, ${item})` : item[0]
            }"
            class="tw-aspect-square tw-h-4"
            @click="setGradient(i)"
          ></v-card>
        </div>
      </div>
      <v-text-field v-model="newValue" variant="outlined" label="set value" messages="失败">
        <template v-slot:append-inner>
          <v-icon icon="mdi-subdirectory-arrow-left" @click="setValue()"></v-icon>
        </template>
      </v-text-field>

      <div class="tw-flex tw-place-content-around tw-items-center">
        <p>是否填满</p>
        <v-switch v-model="fill" class="tw-flex tw-items-center"></v-switch>
      </div>

      <div class="tw-flex tw-place-content-around tw-pt-6">
        <p>线宽</p>
        <v-slider v-model="lineWith" min="0.1" step="0.1" max="9" thumb-label></v-slider>
      </div>
      <div class="tw-flex tw-place-content-around tw-items-center">
        <p>是否光滑</p>
        <v-switch v-model="smooth" class="tw-flex tw-items-center"></v-switch>
      </div>
      <div class="tw-flex tw-place-content-around tw-pt-6">
        <p>填充</p>
        <v-slider v-model="padding" min="0" step="0.1" max="16" thumb-label></v-slider>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
