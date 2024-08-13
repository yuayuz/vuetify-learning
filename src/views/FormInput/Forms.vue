<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const name = ref('')
// 規則 规则允许对所有表单组件应用自定义验证。
// 这些验证按顺序进行，并且组件每次最多显示 1 个错误；因此请确保按顺序排列规则。
// 最基本的规则是一个简单的函数，它检查输入是否有值；

//  改写
const nameRules = function () {
  const message = []
  if (name.value) {
    message.push(true)
  } else if (!name.value) {
    message.push('名字不能为空')
  }
  if (name.value.length <= 4) {
    message.push(true)
  } else {
    message.push('名字长度不能超过四字')
  }
  return message
}
</script>

<template>
  <title-h1>Forms</title-h1>
  <!-- Vuetify 提供了一个基于函数作为规则的简单的内置表单验证系统，方便开发人员快速进行设置 -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  v-form组件可轻松为表单输入添加验证。
  所有输入组件都有一个规则prop，可用于指定输入有效或无效的条件
  每当输入的值发生变化时，每个规则都会收到一个新值并重新评估。
  如果规则返回false或string，则验证失败，并且该string值将作为错误消息显示
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-form @submit.prevent>
      <v-text-field v-model="name" placeholder="请输入姓名" :rules="nameRules()"></v-text-field>
      <v-btn class="mt-2" type="submit" block>提交</v-btn>
    </v-form>
  </div>
</template>

<style scoped></style>
