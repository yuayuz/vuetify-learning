<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const show = ref(false)
const chip = ref(true)
const message = ref('')
</script>

<template>
  <title-h1>Chip</title-h1>
  <!--
  v-chip 组件用于传递小段信息。close 属性会让纸片变得可交互。
  此组件和 v-chip-group 组件的合用可以实现更高级的用法
  -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn @click="show = !show">显示 Chip</v-btn>
    <!-- 可关闭的纸片可以通过v-model进行控制。如果您想知道纸片组件何时关闭，也可以监听click:close事件     -->
    <v-chip
      v-if="chip"
      v-model="show"
      prepend-icon="mdi-arrow-left-bold-outline"
      append-icon="mdi-arrow-right-bold-outline"
      closable
      @click:close="chip = !chip"
    >
      你好！！！
    </v-chip>

    <v-btn v-if="!chip" @click="chip = true">reset chip</v-btn>
  </div>

  <p class="tw-bg-sky-400">color and variant</p>
  <!-- variant 属性可以让按钮具有不同的风格。的变化形式有：levated、flat、toanl（默认）、lined、text和plain -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-chip class="tw-bg-pink-400">hello</v-chip>
    <v-chip class="tw-text-pink-400">hello</v-chip>
    <v-chip class="tw-text-pink-400" variant="tonal">hello</v-chip>
    <v-chip class="tw-text-pink-400" variant="outlined">hello</v-chip>
  </div>

  <div class="tw-bg-sky-400">Size and density</div>
  <!-- chip 可以具有从 x-small 到 x-large 的各种尺寸。density 用于调整垂直间距而不影响宽度或字体大小 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-flex tw-w-full tw-items-center tw-space-x-3">
      <p>compact</p>
      <v-chip density="compact" size="x-small">x-small</v-chip>
      <v-chip density="compact" size="small">small</v-chip>
      <v-chip density="compact" size="x-small">x-small</v-chip>
      <v-chip density="compact" size="large">large</v-chip>
      <v-chip density="compact" size="x-large">x-large</v-chip>
    </div>
    <div class="tw-flex tw-items-center tw-space-x-3">
      <p>default</p>
      <v-chip density="default" size="x-small">x-small</v-chip>
      <v-chip density="default" size="small">small</v-chip>
      <v-chip density="default" size="x-small">x-small</v-chip>
      <v-chip density="default" size="large">large</v-chip>
      <v-chip density="default" size="x-large">x-large</v-chip>
    </div>
    <div class="tw-flex tw-items-center tw-space-x-3">
      <p>comfortable</p>
      <v-chip density="comfortable" size="x-small">x-small</v-chip>
      <v-chip density="comfortable" size="small">small</v-chip>
      <v-chip density="comfortable" size="x-small">x-small</v-chip>
      <v-chip density="comfortable" size="large">large</v-chip>
      <v-chip density="comfortable" size="x-large">x-large</v-chip>
    </div>
  </div>

  <p class="tw-bg-sky-400">可拖动的 (Draggable)</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-chip draggable>可拖动</v-chip>
  </div>

  <p class="tw-bg-sky-400">标签 (Label) 纸片组件会拥有类似v-card组件的圆角</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-chip class="tw-bg-pink-400 tw-text-white" prepend-icon="mdi-label-outline" label
      >标签
    </v-chip>
  </div>

  <p class="tw-bg-sky-400">
    禁止波纹效果（无波纹） 如果提供了点击事件，纸片组件就正常点击，可以调用方法
  </p>
  <!-- 当 ripple 属性被设置false时，v-chip没有点击后续效果 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-items-center tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-chip @click="message = '你好'">你好</v-chip>
    <p>{{ message }}</p>
    <v-chip @click="message = '世界'" :ripple="false">世界</v-chip>
  </div>

  <!-- 主要的轮廓 (Outlined) 所制作的纸片中的文本颜色继承了其原来的颜色 -->
</template>

<style scoped></style>
