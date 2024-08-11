<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Card</title-h1>
  <!--
  v-card 组件是一个多功能和强化版本薄片，
  为标题、文本、图片、图标等的提供简单的接口
  -->
  <p class="tw-bg-violet-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      class="group tw-text-lg hover:tw-bg-violet-400 hover:tw-text-pink-600"
      loading="true"
      title="使用"
      subtitle="Card"
      text="你好!!!"
    >
      <v-card-actions>
        <v-btn class="tw-border">卡片操作</v-btn>
      </v-card-actions>
    </v-card>
  </div>

  <p class="tw-bg-violet-400">填充内容(组件属性, 组件插槽,v-card-*子组件填充)</p>
  <!--
  属性（porps）可以轻松地显示纯文本的界面，同样也可以轻松地完全放置图像和图标。
  如果需要渲染更复杂的内容，使用插槽（slots）。
  如果需要实现对内容地控制，可以使用子组件标记（markup）
  可以结合起来使用
  -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      class="group tw-text-lg hover:tw-bg-violet-400 hover:tw-text-pink-600"
      loading="true"
      title="this is title"
      subtitle="this is subtitle"
      text="this is text"
    >
      <v-card-actions>
        <v-btn class="tw-border">卡片操作</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="group tw-text-lg hover:tw-bg-violet-400 hover:tw-text-pink-600" loading="true">
      <template v-slot:title>this is title</template>
      <template v-slot:subtitle>this is subtitle</template>
      <template v-slot:text>this is text</template>
      <v-card-actions>
        <v-btn class="tw-border">卡片操作</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="tw-group tw-text-lg" loading="true">
      <v-card-title class="hover:tw-text-pink-600">this is title</v-card-title>
      <v-card-subtitle>this is subtitle</v-card-subtitle>
      <v-card-text>this is text</v-card-text>
      <v-card-actions>
        <v-btn class="tw-border group-hover:tw-bg-amber-400 group-hover:tw-text-pink-400"
          >卡片操作</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>

  <p class="tw-bg-violet-400">背景图</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-x-3 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      class="group tw-text-lg hover:tw-bg-violet-400 hover:tw-text-pink-600"
      loading="true"
      title="使用"
      subtitle="Card"
      text="你好!!!"
      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
    >
      <v-card-actions>
        <v-btn class="tw-border">卡片操作</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped></style>
