<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>悬停 (Hover)</title-h1>
  <!-- v-hover 组件提供了一个简单的接口来处理任何组件的悬停状态 -->
  <!--
  v-hover 是一个无渲染组件，它使用默认插槽提供对其内部模型的范围访问；
  以及使用鼠标事件侦听器来修改它。要明确控制内部状态，请使用 model-value 属性。
   -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  disabled prop 禁用了悬停功能  -->

    <v-hover>
      <template v-slot="{ isHovering, props }">
        <v-card v-bind="props" :color="isHovering ? 'info' : ''" title="Hover" text="你好"></v-card>
      </template>
    </v-hover>
  </div>
  <!--
   打开和关闭延迟
   通过组合或单独使用 open-delay 和 close-delay props 延迟 v-hover 事件
   -->
</template>

<style scoped></style>
