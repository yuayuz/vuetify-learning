<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const active = ref(false)

const onClickOutside = function () {
  active.value = false
}
</script>

<template>
  <title-h1>外部点击 (失败,官网代码也无法正确执行)</title-h1>
  <!--
  当在目标元素外点击鼠标时，v-click-outside 指令会调用函数。
  这个指令已经集成于例如 v-menu 和 v-dialog 组件中
  -->
  <div class="tw-mx-auto tw-mt-4 tw-flex tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card
      :color="active ? 'primary' : undefined"
      :dark="active"
      class="mx-auto"
      height="256"
      rounded="xl"
      width="256"
      :v-click-outside="onClickOutside"
      @click="active = true"
    >
      <div class="text-h6 text-md-h4 fill-height d-flex align-center justify-center">
        {{ active ? 'Click Outside' : 'Click Me' }}
      </div>
    </v-card>
  </div>
</template>

<style scoped></style>
