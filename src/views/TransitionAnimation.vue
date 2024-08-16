<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const expend1 = ref(false)
const expend2 = ref(false)
</script>

<template>
  <title-h1>过渡动画</title-h1>
  <!--
  使用 Vue 的过渡系统和可复用的功能组件，可以轻松地控制应用程序的动画效果。
  大多数组件可以通过 transition 属性来改变他们的过渡效果
  -->
  <p class="tw-bg-sky-400">Expand x</p>
  <!-- 扩展过渡用于扩展面板和列表组。 还有一个水平版本可用v-expand-x-transition -->

  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-2 tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div>
      <div class="tw-flex">
        <v-btn @click="expend1 = !expend1" class="tw-m-full tw-mx-auto">Expand Transition</v-btn>
      </div>
      <div class="tw-flex">
        <v-expand-transition class="tw-mx-auto">
          <v-card v-show="expend1" color="primary" height="100" width="100">你好</v-card>
        </v-expand-transition>
      </div>
    </div>
    <div>
      <div class="tw-flex">
        <v-btn @click="expend2 = !expend2" class="tw-m-full tw-mx-auto">Expand Transition</v-btn>
      </div>
      <div class="tw-flex">
        <v-expand-transition class="tw-mx-auto">
          <v-card v-show="expend2" color="primary" height="100" width="100">你好</v-card>
        </v-expand-transition>
      </div>
    </div>
  </div>

  <p class="tw-bg-sky-400">Fab</p>
  <!-- 在 v-speed-dial 组件中可以找到fab过渡的示例 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-mx-auto">
      <v-menu transition="fab-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Fade</p>
  <!-- 在 Carousel 组件上可以找到淡入淡出过渡的示例 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-mx-auto">
      <v-menu transition="fade-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Scale</p>
  <!-- 许多 Vuetify 组件都包含一个 transition 属性允许指定想要的效果 -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-mx-auto">
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Scroll x</p>
  <!-- X 轴滚动过渡沿着水平轴继续 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-2 tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div class="tw-mx-auto">
      <v-menu transition="scroll-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="tw-mx-auto">
      <v-menu transition="scroll-x-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Scroll y</p>
  <!-- Y 轴滚动过渡沿着水平轴继续 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-2 tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div class="tw-mx-auto">
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="tw-mx-auto">
      <v-menu transition="scroll-y-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Slide x</p>
  <!-- X 轴滑动过渡可沿水平方向移动 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-2 tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div class="tw-mx-auto">
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="tw-mx-auto">
      <v-menu transition="slide-x-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>

  <p class="tw-bg-sky-400">Slide Y</p>
  <!-- Y 轴滑动过渡可沿水平方向移动 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-2 tw-gap-10 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <div class="tw-mx-auto">
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="tw-mx-auto">
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">菜单</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<style scoped></style>
