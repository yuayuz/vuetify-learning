<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>

<template>
  <title-h1>Dialogs</title-h1>
  <!--
  v-dialog 组件提醒用户进行特定的任务。
  其中或许包含关键信息，或许让用户选择，或包含多个任务。
  但应谨慎使用对话框，因为它具有打断效果
  -->

  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show1 = !show1">显示对话框</v-btn>
    <v-dialog v-model="show1">
      <div class="tw-mx-auto tw-mt-4 tw-min-w-96">
        <v-card>
          <v-card-title>对话框</v-card-title>
          <v-card-text>你好</v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </div>

  <p class="tw-bg-sky-400">对话框保持</p>
  <!-- 保持的对话框不会因为点击对话框外部或者按 esc 键就会关闭。 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show2 = !show2">显示对话框</v-btn>
    <v-dialog v-model="show2" persistent>
      <div class="tw-mx-auto tw-mt-4 tw-min-w-96">
        <v-card class="tw-bg-fuchsia-300">
          <v-card-title>对话框</v-card-title>
          <v-card-text>你好!</v-card-text>
          <v-card-actions class="tw-flex tw-place-content-end">
            <v-btn class="tw-border" @click="show2 = !show2">关闭</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>

  <p class="tw-bg-sky-400">过渡动画 可以让对话框从顶部或底部渐显出现</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show3 = !show3">显示对话框</v-btn>
    <v-dialog v-model="show3" persistent transition="dialog-bottom-transition">
      <div class="tw-mx-auto tw-mt-4 tw-min-w-96">
        <v-card class="tw-bg-fuchsia-300">
          <v-card-title>对话框</v-card-title>
          <v-card-text>你好!</v-card-text>
          <v-card-actions class="tw-flex tw-place-content-end">
            <v-btn class="tw-border" @click="show3 = !show3">关闭</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<style scoped></style>
