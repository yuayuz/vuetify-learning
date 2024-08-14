<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const items = ref(Array.from({ length: 30 }, (k, v) => v + 1))
async function api() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, (k, v) => v + items.value[items.value.length - 1] + 1))
    }, 1000)
  })
}
async function load(done: (value: string) => void) {
  // Perform API call
  const res: any = await api()

  items.value.push(...res)

  done('ok')
}
</script>

<template>
  <title-h1>无限滚动 (Infinite scrollers) 失败</title-h1>
  <!--
  v-infinite-scroll 组件用于展示某个潜在无限长度的列表，
  这个列表会在滚动时加载更多的元素。它可以支持水平方向或者垂直方向的列表
  -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-infinite-scroll :items="items" class="tw-space-y-5" :load="load()">
      <div v-for="(item, i) in items" :key="i">
        <v-card>
          <template v-slot:title>
            <v-card-title>item {{ item }}</v-card-title>
          </template>
        </v-card>
      </div>
    </v-infinite-scroll>
  </div>
</template>

<style scoped></style>
