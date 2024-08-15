<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>评价 (Ratings)</title-h1>
  <!--
  v-rating 组件是构建用户界面时，特别却重要的一环。
  通过评分组件，收集用户的评价，虽然简单，
  但是可以为你的产品或者应用获取大量的用户评价
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-rating color="info" active-color="red"></v-rating>
  </div>

  <p class="tw-bg-sky-400">可清除</p>
  <!-- 使用 clearable 重置评级 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-rating color="info" active-color="red" clearable></v-rating>
  </div>

  <p class="tw-bg-sky-400">图标 (Icons)</p>
  <!-- 可以使用自定义图标 -->
  <!-- 半增量 half-increments 可以选择0.5的值-->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-rating
      color="info"
      active-color="black"
      empty-icon="mdi-circle-outline"
      full-icon="mdi-circle"
      half-icon="mdi-circle-half"
      half-increments
      clearable
    ></v-rating>
  </div>
</template>

<style scoped></style>
