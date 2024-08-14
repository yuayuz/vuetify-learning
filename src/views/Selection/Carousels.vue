<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>轮播 (Carousels)</title-h1>
  <!-- v-carousel 组件用于在循环计时器上显示大量可视内容 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <!-- delimiter-icon 使用任何可用的图标来改变轮播的滑动分隔符  -->
    <!--  周期 使用 cycle 属性，你可以设置幻灯片每 6 秒（默认值）切换至下一张。  -->
    <!--
    隐藏控件
    可以使用 :show-arrows="false" 来隐藏导航控制部分，
    也可以使用 show-arrows="hover" 控制它们仅在鼠标悬停时才出现

    hide-delimiters 隐藏隐藏底部的控制条
    -->
    <!--  进度条 可以使用 progress 属性在组件上方出现进度条。它可以表示当前轮播的进度  -->
    <v-carousel
      delimiter-icon="mdi-square"
      progress="pink"
      hide-delimiters
      height="300"
      cycle
      show-arrows="hover"
    >
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped></style>
