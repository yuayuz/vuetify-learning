<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { getPathToLinterJS } from '@rushstack/eslint-patch/lib/eslint-bulk-suppressions/path-utils'
</script>

<template>
  <title-h1>幻灯片组 (Slide groups)</title-h1>
  <!--
  v-slide-group 组件通常用来提供假分页的信息。
  它使用了 v-item-group 作为核心组件，并为 v-tabs
  和 v-chip-group 提供了基础
   -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
        <v-btn variant="text" :color="isSelected ? 'primary' : undefined" @click="toggle"
          >btn {{ n }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </div>

  <p class="tw-bg-sky-400">激活类与激活项居中</p>
  <!-- active-class 属性允许您在激活的项上设置自定义的 CSS 类 -->
  <!--  使用 center-active 属性将使活动的项目永远居中 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-slide-group show-arrows selected-class="bg-success" center-active>
      <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-btn
          variant="text"
          :color="isSelected ? 'primary' : undefined"
          @click="toggle"
          :class="['', selectedClass]"
          >btn {{ n }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<style scoped></style>
