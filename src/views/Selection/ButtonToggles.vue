<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const toggle_exclusive = ref()
const toggle_multiple = ref()
</script>

<template>
  <title-h1>切换按钮 (Button toggles)</title-h1>
  <!-- v-btn-toggle 组件是专门用于v-btn构建的 v-item-group 简单包装器 -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 切换按钮允许创建一个样式化的按钮组，可以在单个v-model下选择或切换 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-grid tw-grid-cols-2 tw-gap-10">
      <div>
        <p class="tw-text-center">Exclusive is: {{ toggle_exclusive }}</p>
        <!-- 必填项 v-btn-toggle 带有 mandatory 属性 将总是有一个（被选中的）值。       -->
        <v-btn-toggle v-model="toggle_exclusive" mandatory>
          <v-btn>
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>

      <div>
        <p class="tw-text-center">Multiple is: {{ toggle_multiple }}</p>
        <v-btn-toggle v-model="toggle_multiple" multiple>
          <v-btn value="A">
            <v-icon>mdi-format-align-left</v-icon>
          </v-btn>
          <v-btn value="B">
            <v-icon>mdi-format-align-center</v-icon>
          </v-btn>
          <v-btn value="C">
            <v-icon>mdi-format-align-right</v-icon>
          </v-btn>
          <v-btn value="D">
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
