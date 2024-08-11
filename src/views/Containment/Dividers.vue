<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Dividers</title-h1>
  <!-- 用于分隔列表或布局的各个部分 -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-p-6 tw-shadow">
    <!-- 通过设定 thickness 属性的值，我们可以调整分隔线的粗细   -->
    <!--  嵌入 (Inset)  嵌入的分隔线会向右缩进 72px。这样可以和列表的内容对齐 -->
    <p>你好</p>
    <v-divider thickness="6" inset></v-divider>
    <p>世界</p>
    <div class="tw-mx-auto tw-mt-7 tw-flex tw-h-16">
      <p>你好</p>
      <!--  垂直分隔线    -->
      <v-divider thickness="6" vertical></v-divider>
      <p>世界</p>
    </div>
  </div>
</template>

<style scoped></style>
