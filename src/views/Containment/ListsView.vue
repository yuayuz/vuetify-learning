<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const lists = [
  { title: 'item1', value: 1 },
  { title: 'item2', value: 2 },
  { title: 'item3', value: 3 },
  { title: 'item4', value: 4 }
]

const lists1 = [
  { type: 'subheader', title: 'group1' },
  { type: 'divider' },
  { title: 'item1', value: 1 },
  { title: 'item2', value: 2 },
  { type: 'subheader', title: 'group2' },
  { type: 'divider' },
  { title: 'item3', value: 3 },
  { title: 'item4', value: 4 }
]
const lists2 = [
  { type: 'subheader', title: 'group1' },
  { type: 'divider' },
  {
    title: 'item1',
    value: 1,
    props: {
      prependIcon: 'mdi-home'
    }
  },
  { title: 'item2', value: 2 },
  { type: 'subheader', title: 'group2' },
  { type: 'divider' },
  { title: 'item3', value: 3 },
  { title: 'item4', value: 4 }
]

const lists3 = [
  { title: 'item1', value: 1, icon: 'mdi-bird' },
  { title: 'item2', value: 2, icon: 'mdi-bee' },
  { title: 'item3', value: 3, icon: 'mdi-bug' },
  { title: 'item4', value: 4, icon: 'mdi-cat' }
]

const message = ref('')
const hello = function () {
  message.value = 'Hello, World!'
}
const none = function () {
  message.value = ''
}
</script>

<template>
  <title-h1>Lists</title-h1>
  <!--
  v-list
  组件常用于展示信息。它可以包含头像，动作按钮，子标题等等内容。
  对于同一类信息的展示，使用列表组件展示会变得容易和好看。
  因为它们为文字和图像提供了相同的样式。
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list-item
      >列表项 (Items) 列表项可以通过多个子组件来创建，也能通过 items 属性来创建
    </v-list-item>
    <v-list-item
      >自定义每个列表项的标题和值，请在列表中使用 item-title 和 item-value 属性
    </v-list-item>
    <v-list :items="lists" item-title="title" item-value="value"></v-list>
  </div>

  <p class="tw-bg-sky-400">
    需要添加子标题或者分隔线，只需添加一个带有 type 属性的列表项。可以使用的值由 item-type
    的值来确定
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list :items="lists1" item-title="title" item-value="value"></v-list>
  </div>

  <p class="tw-bg-sky-400">
    要定义某一个单独的列表项，可以使用 item-props 属性。它默认会查找该列表项上的 props
    属性，并把其中每一项应用到 v-list-item 组件之上。 如果 item-props 设置为 true ，它会被放在整个
    item 上。
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list :items="lists2" item-title="title" item-value="value"></v-list>
  </div>

  <p class="tw-bg-sky-400">使用组件插槽构建 list</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list density="comfortable">
      <v-list-item-subtitle inert>group</v-list-item-subtitle>
      <v-divider></v-divider>
      <v-list-item v-for="(item, i) in lists3" :key="i" :value="item" :title="item.title">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </div>

  <p class="tw-bg-sky-400">
    导航列表 可以给列表组件添加 nav 属性改变它的样式。它会修改 v-list-item
    的宽度和为整个列表添加圆角。
  </p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list density="comfortable" nav>
      <!--
      vuetify 的 color="primary"
      和 tw 的 class="focus:tw-text-pink-400"
      能相同的效果，也可以组合使用
      -->
      <v-list-item
        v-for="(item, i) in lists3"
        :key="i"
        :value="item"
        :title="item.title"
        color="primary"
        class="focus:tw-text-pink-400"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </div>

  <p class="tw-bg-sky-400">嵌套列表 可以使用 v-list-group 组件创建列表的子列表</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list>
      <v-list-item>你好</v-list-item>
      <v-list-group value="items">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="items"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title" :value="item">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
        <v-list-group value="others">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="others"></v-list-item>
          </template>
          <v-list-item v-for="(item, i) in lists3" :key="i" :title="item.title" :value="item">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </div>

  <p class="tw-bg-sky-400">v-list-action 组件</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-list nav>
      <p>{{ message }}</p>
      <v-list-item>
        <v-list-item-action>
          <v-btn @click="none" class="tw-bg-pink-400">none</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="hello">
        <template v-slot:prepend>
          <v-icon icon="mdi-human-greeting-variant"></v-icon>
        </template>
        hello
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped></style>
