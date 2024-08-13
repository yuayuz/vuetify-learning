<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Pagination</title-h1>
  <!-- 用于分离长数据集，便于用户消费信息 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-pagination
      :length="17"
      rounded
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      total-visible="6"
    ></v-pagination>
  </div>
  <!-- 圆角 (Rounded) rounded 属性可以调整分页按钮为圆形。 -->
  <!-- 禁用 使用 disabled 属性，可以手动禁用分页 -->
  <!-- 图标 (Icons) 上一页和下一页的图标可以通过 prev-icon 和 next-icon 属性自定义 -->
  <!--
  使用 length 属性可以设置 v-pagination 的长度，
  如果页面按钮的数量超过了父容器，分页将被从中截断
  -->
  <!-- 最大可见分页数 可以通过 total-visible 属性手动设置最大可见分页数 -->
</template>

<style scoped></style>
