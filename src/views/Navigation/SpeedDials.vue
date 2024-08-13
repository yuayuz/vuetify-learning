<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>Speed Dials</title-h1>
  <!-- 该 v-speed-dial 组件可以用作浮动操作按钮，单击时可以显示其他操作 -->
  <p class="tw-bg-sky-400">使用</p>

  <div class="tw-relative tw-mx-auto tw-mt-4 tw-h-96 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-absolute tw-right-1/3 tw-top-1/3">
      <v-speed-dial location="bottom" transition="scale-transition" size="large">
        <template v-slot:activator="{ props: activatorProps }">
          <v-fab icon="mdi-heart" v-bind="activatorProps">1</v-fab>
        </template>
        <v-btn key="1" icon="mdi-home-circle" class="tw-bg-black/70 tw-text-white"></v-btn>
        <v-btn key="2" icon="mdi-history" class="tw-bg-black/70 tw-text-white"></v-btn>
        <v-btn key="3" icon="mdi-heart" class="tw-bg-black/70 tw-text-white"></v-btn>
      </v-speed-dial>
    </div>
  </div>
</template>

<style scoped></style>
