<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const message = ref()
const setMessage = function () {
  message.value = 'hello world'
}
</script>

<template>
  <title-h1>项目组 (Item groups)</title-h1>
  <!--
  v-item-group 组件提供了一组可选择的任意组件构成的集合。
  它是例如 v-tabs 和 v-carousel 组件的基础部分。
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- v-item-group 的核心用法是创建由 model 控制的任何对象的组 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-item-group class="tw-space-x-3 tw-space-y-5">
      <v-chip>chip 1</v-chip>
      <v-btn>btn 1</v-btn>
      <v-card>card 1</v-card>
    </v-item-group>
  </div>
  <p class="tw-bg-sky-400">选中项的 CSS 类</p>
  <!-- selected-class 属性允许你给 选中 的项目添加 CSS 类 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-item-group class="tw-space-x-3 tw-space-y-5" selected-class="tw-text-pink-400">
      <v-item v-slot="{ selectedClass, toggle }">
        <div>
          <p>{{ message }}</p>
          <div @click="toggle" :class="['', selectedClass]">
            <v-btn @click="setMessage()" variant="text">btn 1</v-btn>
          </div>
        </div>
      </v-item>
      <v-item v-slot="{ selectedClass, toggle }">
        <v-card :class="['', selectedClass]" @click="toggle">card 1</v-card>
      </v-item>
      <v-item v-slot="{ selectedClass, toggle }">
        <v-chip-group>
          <v-chip :class="['', selectedClass]" @click="toggle">chip 1</v-chip>
        </v-chip-group>
      </v-item>
    </v-item-group>
  </div>
</template>

<style scoped></style>
