<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const loading = ref(false)

const load = function () {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <title-h1>Button</title-h1>
  <!--
  v-btn 组件用满足 material design 主题的，
  拥有多种可选项的按钮组件来替换标准的 html 按钮。
  任何色彩辅助类都可以用来改变背景或文字的颜色
  -->
  <p class="tw-bg-violet-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn>Button</v-btn>
    <!--
    属性 (Props)
    很多属性可以用于修改 v-btn 的默认样式。
    其中 prepend-icon 和 append-icon 属性通常用于提供直接插入图标，
    而 block 和 stacked 常被使用来
    -->
  </div>
  <p class="tw-bg-violet-400">间距 (Density) 用于控制按钮垂直方向所占的空间</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  间距 (Density) density 属性用于控制按钮垂直方向所占的空间。  -->
    <v-btn density="comfortable">comfortable</v-btn>
    <v-btn density="compact">compact</v-btn>
    <v-btn density="default">default</v-btn>
  </div>
  <p class="tw-bg-violet-400">
    尺寸 (Size) 用来控制按钮的大小和随着间距调整的缩放程度。 默认的尺寸是 undefined，会被转化为
    medium
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <!--  间距 (Density) density 属性用于控制按钮垂直方向所占的空间。  -->
    <v-btn size="x-small" density="comfortable">x-small</v-btn>
    <v-btn size="small" density="comfortable">small</v-btn>
    <v-btn density="comfortable">undefined</v-btn>
    <v-btn size="large" density="comfortable">large</v-btn>
    <v-btn size="x-large" density="comfortable">x-large</v-btn>
  </div>

  <p class="tw-bg-violet-400">
    块级按钮 (Block)
    会扩展至其父容器的最大宽度。这一点在想要创建充满卡片或者对话框宽度的按钮时十分有用
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn size="small" block density="comfortable">Black</v-btn>
  </div>

  <p class="tw-bg-violet-400">使用 rounded 属性来控制边框的圆角</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn rounded="0">rounded="0"</v-btn>
    <v-btn rounded="xs">rounded="xs"</v-btn>
    <v-btn rounded="xl">rounded="xl"</v-btn>
  </div>

  <p class="tw-bg-violet-400">elevation 属性可以提供24层级的阴影深度，默认的值为 2dp</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn elevation="2">elevation="2"</v-btn>
    <v-btn elevation="12">elevation="12"</v-btn>
    <v-btn elevation="24">elevation="24"</v-btn>
  </div>

  <p class="tw-bg-violet-400">ripple 属性决定了按钮是否拥有 v-ripple 效果</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn elevation="12">with ripple</v-btn>
    <v-btn :ripple="false" elevation="12">without ripple</v-btn>
  </div>

  <p class="tw-bg-violet-400">
    variant
    属性可以让按钮具有不同的风格。允许的变化形式有：elevated（默认）、flat、toanl、outlined、text 和
    plain
  </p>
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-3xl tw-grid-cols-3 tw-grid-rows-2 tw-gap-4 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div>
      <p>使用按钮的阴影强调</p>
      <v-btn variant="elevated">elevated</v-btn>
    </div>
    <div>
      <p>移除按钮的阴影效果</p>
      <v-btn variant="flat">flat</v-btn>
    </div>
    <div>
      <p>移除背景颜色和阴影</p>
      <v-btn variant="text">text</v-btn>
    </div>
    <div>
      <p>按钮的背景颜色被设为文字颜色的高透明度版本</p>
      <v-btn elevation="12" class="tw-text-amber-400" variant="tonal">tonal</v-btn>
    </div>
    <div>
      <p>以当前文字颜色绘制细边框</p>
      <v-btn elevation="12" class="tw-text-amber-400" variant="outlined">outlined</v-btn>
    </div>
    <div>
      <p>移除背景颜色并且在未悬停时降低透明度</p>
      <v-btn elevation="12" class="tw-bg-pink-400 tw-text-amber-400" variant="plain">plain</v-btn>
    </div>
  </div>

  <p class="tw-bg-violet-400">
    图标 (Icon) 可以用作按钮的主要内容。这种按钮常用于 v-toolbar 和 v-app-bar 组件中
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn icon="mdi-plus" variant="text"></v-btn>
  </div>

  <p class="tw-bg-violet-400">
    加载效果 (Loaders)
    可以通知用户正在进行处理。默认行为是使用组件v-progress-circular，但可以使用加载器插槽进行自定义
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-btn :loading="loading" @click="load">load</v-btn>
  </div>
</template>

<style scoped></style>
