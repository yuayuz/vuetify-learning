<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const tabs = ref()
</script>

<template>
  <title-h1>Tabs</title-h1>
  <!--
  v-tabs 组件用来隐藏那些未选择的选项卡。这个组件可用于制作非页面切换导航，
  即将选项卡作为链接，将选项卡内容作为页面内容
  -->
  <p class="tw-bg-sky-400">Tabs</p>
  <!--
  v-tabs 组件实际是 v-slide-group 的扩展版本。
  它为将内容分隔至不同区域提供了方便的接口
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-tabs v-model="tabs" center-active grow stacked>
      <v-tab value="one">
        <v-icon icon="mdi-home"></v-icon>
        one
      </v-tab>
      <v-tab value="two">
        <v-icon icon="mdi-history"></v-icon>
        two
      </v-tab>
      <v-tab value="third">
        <v-icon icon="mdi-heart"></v-icon>
        third
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tabs">
      <v-tabs-window-item value="one">one</v-tabs-window-item>
      <v-tabs-window-item value="two">two</v-tabs-window-item>
      <v-tabs-window-item value="third">third</v-tabs-window-item>
    </v-tabs-window>
  </div>
  <!-- 激活项居中 center-active属性将使活动标签始终居中 -->
  <!-- 扩展选项卡 grow 属性将使选项卡没有限制地占据所有可用空间-->
  <!--
  堆叠式选项卡 (Stacked)
  stacked 属性将 v-tabs 的高度提至 72px，允许同时显示图标和文字
  -->
  <!-- 垂直的选项卡 direction 属性允许 v-tab 组件纵向堆叠 -->
  <!-- 通常将 v-tabs 置于 v-toolbar 的 extension 插槽中 -->
</template>

<style scoped></style>
