<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const num = ref(0)
</script>

<template>
  <title-h1>波纹指令</title-h1>
  <!--
  v-ripple 指令用于显示用户的操作。它可以应用于任何块级元素。许多组件都内置了波纹指令，如 v-btn、v-tabs-item 等
  -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      class="tw-mx-auto tw-w-1/2 tw-content-center tw-bg-pink-400 tw-text-center"
      @click="num++"
    >
      {{ num }}
    </v-card>
  </div>

  <p class="tw-bg-sky-400">Center</p>
  <!-- Center 当使用 center 选项时，始终会从目标的中心处产生波纹 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      class="tw-mx-auto tw-w-1/2 tw-content-center tw-bg-pink-400 tw-text-center"
      @click="num++"
      v-ripple.center
    >
      {{ num }}
    </v-card>
  </div>

  <p class="tw-bg-sky-400">自定义色彩</p>
  <!-- 可以使用辅助器类改变波纹的颜色 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card class="tw-mx-auto tw-w-1/2 tw-content-center tw-bg-pink-400 tw-text-center">
      <v-list class="tw-space-y-5">
        <v-list-item
          v-for="color in ['primary', 'secondary', 'info', 'success', 'warning', 'error']"
          :key="color"
          v-ripple="{ class: `text-${color}` }"
        >
          <v-card class="tw-border">Item with "{{ color }}" class</v-card>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<style scoped></style>
