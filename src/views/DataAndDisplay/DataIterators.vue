<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const page = ref(1)
const items = Array.from({ length: 15 }, (k, v) => ({
  title: 'Item ' + v,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
}))
</script>

<template>
  <title-h1>数据迭代器（Data iterators）</title-h1>
  <!--
  该 v-data-iterator 组件用于显示任意数据，
  并与 v-data-table 组件共享大部分功能。功能包括排序、搜索、分页和选择
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 允许 v-data-iterator 精确自定义如何显示数据 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-data-iterator :items="items" :page="page">
      <template v-slot:default="{ items }">
        <template v-for="(item, i) in items" :key="i">
          <v-card v-bind="item.raw" class="tw-my-4"></v-card>
        </template>
      </template>
      <template v-slot:header>
        <p class="tw-text-center">数据迭代器（Data iterators）</p>
      </template>
      <template v-slot:footer>
        <v-pagination length="3" rounded v-model="page"></v-pagination>
      </template>
    </v-data-iterator>
  </div>
</template>

<style scoped></style>
