<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const show = ref(false)
const foo = ref('home')
const setFoo = function (value: string): void {
  foo.value = value
}
const setFab = function () {
  switch (foo.value) {
    case 'home':
      return {
        icon: 'mdi-home-variant-outline',
        color: 'blue'
      }
    case 'history':
      return {
        icon: 'mdi-history',
        color: 'green'
      }
    case 'favorite':
      return {
        icon: 'mdi-heart',
        color: 'red'
      }
    default:
      return {
        icon: 'mdi-heart-outline'
      }
  }
}
</script>

<template>
  <title-h1>Floating Action Buttons</title-h1>
  <!-- v-fab 组件可以用作悬浮操作按钮。它提供了一个主要操作入口 -->
  <p class="tw-mb-6 tw-bg-sky-400">使用</p>

  <div class="tw-relative tw-mx-auto tw-my-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-fab icon="mdi-home" class="tw-absolute tw-right-1/3 tw-top-6"></v-fab>
  </div>
  <p class="tw-bg-sky-400">active</p>

  <div class="tw-relative tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show = !show">显示</v-btn>
    <v-fab icon="mdi-home" :active="show" class="tw-absolute tw-right-1/3 tw-top-10"></v-fab>
  </div>

  <p class="tw-bg-sky-400">按钮切换</p>

  <div class="tw-relative tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">菜单</v-btn>
      </template>
      <v-btn @click="setFoo('home')">home</v-btn>
      <v-btn @click="setFoo('history')">history</v-btn>
      <v-btn @click="setFoo('favorite')">favorite</v-btn>
    </v-menu>

    <v-fab
      :icon="setFab().icon"
      :color="setFab().color"
      class="tw-absolute tw-right-1/3 tw-top-10"
    ></v-fab>
  </div>
</template>

<style scoped></style>
