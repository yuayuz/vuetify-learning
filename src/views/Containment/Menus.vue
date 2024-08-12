<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const lists3 = [
  { title: 'item1', value: 1, icon: 'mdi-bird' },
  { title: 'item2', value: 2, icon: 'mdi-bee' },
  { title: 'item3', value: 3, icon: 'mdi-bug' },
  { title: 'item4', value: 4, icon: 'mdi-cat' }
]

const show = ref(false)
</script>

<template>
  <title-h1>Menus</title-h1>
  <!-- v-menu 组件可以在某个激活菜单的元素位置显示一个菜单 -->
  <p class="tw-bg-sky-400">使用 三种激活方式,推荐第一种</p>
  <!--
  有三种主要的方式定义菜单。
  第一种是使用 activator 插槽。不要忘记在激活用的元素上绑定（使用 v-bind） props 插槽，
  第二种是给 activator 属性赋值 parent。这样就能使菜单的父元素成为激活元素。
  第三种则是在菜单的 activator 属性设置为某个 CSS 选择器字符串。这种方法可以在页面中将菜单和激活元素分离。
  -->
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-3 tw-gap-x-5 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">activator 插槽</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn>
      parent 激活
      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn id="css">css 激活</v-btn>

    <v-menu activator="#css">
      <v-list>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <p class="tw-bg-sky-400">location 菜单可以根据 location 属性从相对于激活元素的设定方向弹出</p>
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-3 tw-gap-x-5 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-menu location="left">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">left 弹出</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <p class="tw-bg-sky-400">
    悬停时打开 设置 open-on-hover 属性，可以使菜单悬停时打开，取代默认的点击才打开
  </p>
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-3 tw-gap-x-5 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">hover open</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <p class="tw-bg-sky-400">
    弹出菜单 菜单可以配置为在打开时为静态菜单，使其充当弹出菜单。
    当菜单内容中有多个交互式项目时，这很有用。
  </p>
  <div
    class="tw-mx-auto tw-mt-4 tw-grid tw-max-w-xl tw-grid-cols-3 tw-gap-x-5 tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <v-menu :close-on-content-click="false" v-model="show">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">hover open</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
        <v-list-item class="tw-bg-pink-400 tw-text-white" @click="show = !show">close</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped></style>
