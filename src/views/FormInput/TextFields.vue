<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const name = ref('')
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

const QQ = ref('')
const QQEmail = function () {
  if (QQ.value) {
    return `${QQ.value}` + '@qq.com'
  } else {
    return ''
  }
}

const onLoading = ref(false)

const show = ref(true)
</script>

<template>
  <title-h1>Text Fields</title-h1>
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-text-field clearable label="text" variant="outlined"></v-text-field>
  </div>
  <p class="tw-bg-sky-400">提示文字和消息文字</p>
  <!--
  所有的 Vuetify 输入组件都有一个 details 部分。
  可以提供 hints，或者 messages，或者是 error-messages
  -->
  <!--
  可清除: clearable 属性会在输入框结束部分里面添加一个 v-icon，
  点击后清除 v-text-field 的输入框内容。当 v-text-field 清除后，它会重置它的内容
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-text-field
      clearable
      label="text"
      placeholder="placeholder:请输入"
      hint="hint:请输入"
      variant="outlined"
    ></v-text-field>
  </div>
  <!--
  如果想始终显示提示文字，使用 persistent-hint 属性
  其他的持续显示属性：
  persistent-clear - 当 value 有值的时候，会持续显示清除按钮
  persistent-counter - 会持续显示字符数量
  persistent-placeholder - 会持续显示占位符，会使标签文字自动上移
  -->

  <!--
  输入验证和填写规则
  当使用文本框时，常常需要验证用户输入。例如邮件地址或者密码。
  使用 rules 属性就可以根据 v-text-field 的状态调用自定义函数。
  这个属性接受一个函数的数组，函数要么返回 true，要么返回 string
  -->
  <!--
  隐藏详细信息
  当 hide-details 设置为 auto 时，
  只有在有信息（提示、错误信息等）显示的情况下，才会显示信息
  -->
  <p class="tw-bg-sky-400">输入验证和填写规则</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-text-field
      hide-details="auto"
      variant="outlined"
      v-model="name"
      :rules="nameRules()"
    ></v-text-field>
  </div>
  <!--
  图标 (Icons)
  可以使用prepend-icon、append-icon和append-inner-icon属性
  给文本框不同位置增加图标
  -->

  <p class="tw-bg-sky-400">前缀和后缀</p>
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <p>{{ QQEmail() }}</p>
    <v-text-field
      label="email"
      placeholder="请输入QQ号"
      prefix="QQ邮箱"
      suffix="@qq.com"
      v-model="QQ"
    ></v-text-field>
  </div>

  <!--
  图标事件
  click:prepend、click:append、click:append-inner 和 click:clear
  当您点击相应图标时，会触发。请注意，如果改用插槽，则不会触发这些事件
  -->

  <p class="tw-bg-sky-400">进度条</p>
  <!-- 
  可以在文本框的底部显示进度条来代替下方的线。
  也可以采用默认的未定进度条与文本框颜色相同，或者是使用 progress 插槽来自定义。
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-text-field :loading="onLoading" label="loading" append-inner-icon="">
      <template v-slot:append-inner>
        <v-icon icon="mdi-subdirectory-arrow-left" @click="onLoading = !onLoading"></v-icon>
      </template>
    </v-text-field>
    <v-btn @click="onLoading = !onLoading">提交</v-btn>
  </div>

  <p class="tw-bg-sky-400">密码输入</p>
  <!-- 
  使用 HTML 输入框的 type 为 password，
  并且使用后缀图标和回调函数来控制密码字段的显隐 
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-text-field
      :type="show ? 'text' : 'password'"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="show = !show"
      variant="outlined"
    >
    </v-text-field>
  </div>
</template>

<style scoped></style>
