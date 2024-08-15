<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>纸片组 (Chip groups)</title-h1>
  <!--
  v-chip-group 组件通过提供组内功能来扩展了 v-chip 组件。
  通常被用来构建纸片组件组成的选择组件
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--
    芯片组让用户能够轻松选择更复杂实现的过滤选项。
    默认情况下 v-chip-group 会溢出到右侧，但可以更改为仅列模式。
    -->
    <!--
    过滤结果
    可以通过增加 filter 属性的方式，创建可以提供额外选中效果的纸片组。
    这个属性会在选中的纸片上添加可见的效果，来表明这个纸片被选中了
    -->
    <v-chip-group column multiple>
      <v-chip filter>Chip 1</v-chip>
      <v-chip filter>Chip 2</v-chip>
      <v-chip filter>Chip 3</v-chip>
      <v-chip filter>Chip 4</v-chip>
      <v-chip filter>Chip 5</v-chip>
      <v-chip filter>Chip 6</v-chip>
      <v-chip filter>Chip 7</v-chip>
      <v-chip filter>Chip 8</v-chip>
    </v-chip-group>
  </div>
</template>

<style scoped></style>
