<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const value = ref(true)
const list = ref(['a'])
const model = ref('a')
</script>

<template>
  <title-h1>Switches</title-h1>
  <!--
  v-switch 组件让用户可以在两个不同的值之间作出选择。
  这和切换按钮，或者接通/断开开关很类似，但明显地比单选框好看
  -->
  <p class="tw-bg-sky-400">使用</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>{{ value }}</p>
    <v-switch v-model="value"></v-switch>
  </div>

  <p class="tw-bg-sky-400">数组模型</p>
  <!-- 通过使用数组，多个 v-switch 可以共享相同的 v-model -->
  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-items-center tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <p>{{ list }}</p>
    <v-switch v-model="list" value="a" class="tw-flex tw-items-center"></v-switch>
    <v-switch v-model="list" value="b" class="tw-flex tw-items-center"></v-switch>
    <v-switch v-model="list" value="c" class="tw-flex tw-items-center"></v-switch>
  </div>

  <p class="tw-bg-sky-400">自定义 true/false 值</p>
  <!-- 开关组件可以通过修改 true-value 和 false-value 属性值来自定义 v-model 接受到的值。 -->
  <div
    class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-place-content-evenly tw-items-center tw-bg-slate-50 tw-p-6 tw-shadow"
  >
    <p>{{ model }}</p>
    <v-switch
      v-model="model"
      false-value="a"
      true-value="b"
      class="tw-flex tw-items-center"
    ></v-switch>
  </div>
</template>

<style scoped></style>
