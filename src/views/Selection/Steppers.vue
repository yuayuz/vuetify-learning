<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Steppers（步骤条）</title-h1>
  <!-- v-stepper 组件通过数字步骤显示进度 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  editable 用户随时可以选择可编辑的步骤条并将跳转到该步骤 -->
    <!--  使用 mobile 属性来隐藏 v-stepper-item 组件的标题和子标题  -->
    <v-stepper :items="['step1', 'step2', 'step3']" editable mobile>
      <template v-slot:[`item.1`]>
        <v-card title="Step 1"></v-card>
      </template>

      <template v-slot:[`item.2`]>
        <v-card title="Step 2"></v-card>
      </template>
      <template v-slot:[`item.3`]>
        <v-card title="Step 3"></v-card>
      </template>
    </v-stepper>
  </div>
</template>

<style scoped></style>
