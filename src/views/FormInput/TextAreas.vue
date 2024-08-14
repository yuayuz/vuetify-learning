<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const message = ref('')
const countRules = function () {
  const returnMessage = []
  if (message.value.length <= 25) {
    returnMessage.push(true)
  } else {
    returnMessage.push('字数不能超过25')
  }
  return returnMessage
}
</script>

<template>
  <title-h1>TextAreas</title-h1>
  <!-- 多行文本框组件用于收集大量文本数据 -->
  <p class="tw-bg-sky-400">使用</p>
  <!-- 自动增长 当使用 auto-grow 属性时，当包含的文本超过其大小时，多行文本框的大小将自动增加 -->
  <!-- 计数器 counter 属性告知用户 v-textarea 的字符限制-->
  <!-- 行数 rows 属性允许你定义多行文本框的行数 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-textarea
      counter
      rows="1"
      :rules="countRules()"
      v-model="message"
      variant="outlined"
      label="label"
    ></v-textarea>
  </div>
</template>

<style scoped></style>
