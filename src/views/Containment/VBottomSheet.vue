<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <title-h1>VBottomSheet</title-h1>
  <!--
  底部表单是一个经过修改的 v-dialog , 从屏幕的底部滑出，
  类似于 v-bottom-navigation。
  -->
  <p class="tw-bg-violet-400">使用</p>
  <!-- 底部面板组件可以提供应用层级的操作，因为底部的区域能够包含任意的元素 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show = !show" class="tw-bg-sky-400">展开</v-btn>
    <v-bottom-sheet v-model="show" inset>
      <!-- v-model （或者 model-value）用于控制底部面板的可见性 -->
      <!--  使用 inset 属性，可以减少区域的宽度（桌面版）至 70%。也可以使用 width 属性进一步减小    -->
      <v-card title="Bottom Sheet" text="你好">
        <v-btn class="tw-mx-auto tw-bg-sky-400" @click="show = !show">关闭</v-btn>
      </v-card>
      <!--  v-bottom-sheet 组件可以使用 v-dialog 的全部插槽 -->
      <!--  1. Default	默认插槽  2. Activator	Activator 插槽被用于打开底部面板。 -->
      <!--  activator 插槽在使用 v-model 属性时不是必须的 -->
    </v-bottom-sheet>
  </div>
</template>

<style scoped></style>
