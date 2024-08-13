<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Custom Inputs</title-h1>
  <!-- 该 v-input 组件为您提供了创建自定义输入的基准。它由前置/后置插槽、消息和默认插槽组成 -->
  <p class="tw-bg-sky-400"></p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-input messages="message" prepend-icon="mdi-home" append-icon="mdi-heart">Input</v-input>
  </div>
  <!--
  错误信息 (Error)
  与任何可验证的 Vuetify 组件一样，v-input可以使用 error 属性设置为错误状态，可以使用error-messages属性添加消息。您可以使用error-count属性确定要显示的错误消息数量。
  错误个数
  您可以使用error-count属性v-input添加多个错误
  -->
</template>

<style scoped></style>
