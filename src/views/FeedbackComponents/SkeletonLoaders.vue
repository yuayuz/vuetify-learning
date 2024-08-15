<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <title-h1>骨架装载器（Skeleton Loaders）</title-h1>
  <!-- 骨架加载器提供了一种在应用程序中显示加载占位符的简单方法 -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  v-skeleton-loader 组件为用户提供了内容即将到来/正在加载的视觉指示。
  这比传统的全屏加载器更受欢迎
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-skeleton-loader type="table-heading,image, list-item-two-line"></v-skeleton-loader>
  </div>
  <p class="tw-bg-sky-400">加载</p>
  <!--
  如果满足以下条件之一，则认为装载器装载状态：
  1、默认槽未被使用
  2、loading 属性被设置为 true
  如果满足任一条件，则骨架加载器将返回类型结构来代替默认插槽并应用尺寸值；
  例如高度、宽度、最小高度等。如果条件不满足，则返回默认插槽。
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn class="tw-mx-auto tw-w-full" @click="loading = !loading">切换</v-btn>
    <v-skeleton-loader :loading="loading" type="card">
      <v-card title="你好" text="世界">
        <template v-slot:actions>
          <v-btn @click="loading = !loading">切换</v-btn>
        </template>
      </v-card>
    </v-skeleton-loader>
  </div>
  <!--
  Elevation（海拔）
  elevation 属性使骨架加载器的海拔与其替换的内容相匹配
  -->
</template>

<style scoped></style>
