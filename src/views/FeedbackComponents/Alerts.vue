<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>警告框 (Alerts)</title-h1>
  <!-- v-alert 组件是通过整体性的使用类型，图标和颜色来向用户传递重要信息的组件 -->
  <p class="tw-bg-sky-400"></p>
  <!--
  警告框使用了特殊版本的 v-sheet组件来吸引用户的注意力。它和 v-banner
  在功能上类似，不同的是 v-alert 和内容是内联 (inline) 布局，且在应用中可以多次使用
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--
    类型
    警告组件有四种上下文风格（type）：success（成功）、info（提示）、warning（警告） 和 error（错误）。
    每种风格都有其默认的 color（颜色） 和 icon（图标），
    当没有提供 type 时，v-alert 组件默认是灰色系的背景
    -->
    <v-alert title="Alert" text="你好" closable type="error"></v-alert>
  </div>
  <p class="tw-bg-sky-400">边框颜色</p>
  <!--
  边框颜色
  border-color 属性会移除警告背景以突出border属性。
  如果设置了类型，它将使用该类型的默认颜色。
  如果未设置颜色或类型，则颜色将默认为所应用主题的反色（浅色为黑色，深色为白色/灰色）
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-alert
      title="Alert"
      text="你好"
      closable
      border="start"
      border-color="deep-purple accent-4"
    ></v-alert>
  </div>

  <p class="tw-bg-sky-400">Outlined（轮廓）</p>
  <!--
  outlined 属性将会反转提示框的风格，
  它会继承当前应用的 color 并应用与文本和边框且将其背景透明化
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-alert
      border="top"
      border-color="deep-purple accent-4"
      color="purple"
      title="Alert"
      text="你好"
      closable
      variant="outlined"
    ></v-alert>
  </div>
</template>

<style scoped></style>
