<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
const color = function (value: number) {
  switch (value) {
    case 0:
      return 'red'
    case 1:
      return 'green'
    case 2:
      return 'blue'
    default:
      return 'blue-grey'
  }
}
</script>

<template>
  <v-app>
    <div
      class="tw-fixed tw-left-0 tw-right-0 tw-top-0 tw-flex tw-h-16 tw-items-center tw-space-x-5 tw-border-b-2 tw-py-3 tw-shadow"
    >
      <p class="tw-ml-16 tw-w-1/12">图标</p>
      <div class="tw-flex tw-space-x-3">
        <input
          type="text"
          placeholder="请输入"
          class="te tw-rounded-full tw-outline-none hover:tw-ring hover:tw-ring-amber-500"
        />
        <v-icon icon="mdi-magnify"></v-icon>
      </div>
      <v-btn variant="text" class="focus:tw-text-pink-400">1</v-btn>
      <v-btn variant="text" class="focus:tw-text-pink-400">2</v-btn>
      <v-btn variant="text" class="focus:tw-text-pink-400">3</v-btn>
      <v-btn variant="text" class="focus:tw-text-pink-400">4</v-btn>
    </div>
    <v-bottom-navigation :bg-color="color(value)" grow v-model="value">
      <v-btn>
        <v-icon>mdi-home-variant-outline</v-icon>
        <span>主页</span>
      </v-btn>
      <v-btn>
        <v-icon>mdi-history</v-icon>
        <span>历史</span>
      </v-btn>
      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
        <span>喜爱</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style scoped></style>
