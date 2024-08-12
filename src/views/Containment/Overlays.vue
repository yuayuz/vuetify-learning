<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Overlays</title-h1>
  <!--
  v-overlay 是这些覆盖全部页面的组件，例如 v-menu 和 v-dialog 的基础部分。
  当然，也可以仅使用它来创建一些自己定义的弹出式组件
  -->
  <p class="tw-bg-sky-400">使用 v-overlay 组件将在应用程序上添加一个黯淡图层</p>
  <!-- 最简单的激活元素的就是使用类似于 CSS 选择器 document.querySelector() 中的字符串指向某个组件或者 HTML 元素。或者使用 "parent" 来直接指向它的父元素 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-overlay class="tw-bg-pink-400/20">
      <template v-slot:activator="{ props }">
        <!--   props 是一个包含了所有相关的 ARIA 属性和事件处理器的对象，且必须在激活组件上使用 v-bind 绑定这个值。     -->
        <v-btn v-bind="props">overlay tw-bg-pink-400/20</v-btn>
      </template>
    </v-overlay>
  </div>

  <!--
  放置区域策略
  固定 (static) (默认值) location-strategy="static" 遮罩层组件默认位于它的父容器的中心。
  连接 (Connected) location-strategy="connected" 连接的放置策略用于 v-menu
   和 v-tooltip 组件。通常是通过某个激活器组件激活遮罩层组件。
  location 指定遮罩层显示激活组件的哪个方位。
  而 origin 指定遮罩层显示的起始位置。遮罩层的内容会显示在这两个点指定的位置
  -->

  <p class="tw-bg-sky-400">滚动策略</p>
  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-overlay scroll-strategy="block" class="tw-flex tw-items-center tw-justify-center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">block</v-btn>
      </template>
      <p class="tw-mx-auto tw-max-w-xs tw-border tw-bg-white">
        当遮罩层激活时，滚动会被阻止，滚动条会隐藏。如果也设置了 contained 属性，只会在 offsetParent
        上阻止滚动
      </p>
    </v-overlay>

    <v-overlay scroll-strategy="close" class="tw-flex tw-items-center tw-justify-center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">close</v-btn>
      </template>
      <p class="tw-mx-auto tw-max-w-xs tw-border tw-bg-white">在遮罩层激活时滚动页面会关闭遮罩层</p>
    </v-overlay>

    <v-overlay scroll-strategy="reposition" class="tw-flex tw-items-center tw-justify-center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">reposition</v-btn>
      </template>
      <p class="tw-mx-auto tw-max-w-xs tw-border tw-bg-white">
        此滚动策略会保留遮罩层元素和激活器对应的位置关系
      </p>
    </v-overlay>

    <v-overlay scroll-strategy="none" class="tw-flex tw-items-center tw-justify-center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">none</v-btn>
      </template>
      <p class="tw-mx-auto tw-max-w-xs tw-border tw-bg-white">不使用任何的滚动策略</p>
    </v-overlay>
  </div>
</template>

<style scoped></style>
