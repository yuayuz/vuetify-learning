<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>窗格 (Windows)</title-h1>
  <!--
  v-window 组件提供了从一个面板变换至另一个面板的基本功能。
  其他的例如 v-tabs，v-carousel 和 v-stepper 组件都是以它为基础构建的
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- v-window 被设计为可以简单地循环其中的内容，提供简单的接口以用于创建自定义的实现 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--
    默认情况下不显示箭头。可以通过添加show-arrows属性来更改此设置。
    如果将属性值设置为"hover"，则仅当您将鼠标悬停在窗口上时才会显示它们
    -->
    <v-window show-arrows="hover">
      <v-window-item v-for="n in 5" :key="n">
        <v-card>
          <template v-slot:title>
            <p class="tw-text-center">Card {{ n }}</p>
          </template>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped></style>
