<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>OPT</title-h1>
  <!-- OTP 输入用于通过一次性密码对用户进行身份验证的 MFA 程序 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-otp-input length="7" :error="true"></v-otp-input>
  </div>
  <!-- 长度 该 length 决定了渲染的组件数量v-field。默认值为6-->
  <!-- 出错 该 error 使 v-otp-input 进入错误状态。-->
</template>

<style scoped></style>
