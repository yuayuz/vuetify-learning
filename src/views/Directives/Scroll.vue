<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>滚动指令</title-h1>
  <!-- v-scroll 指令允许在窗口、指定目标或元素本身(使用.self修饰符)滚动时提供回调 -->
  <!--
  v-scroll 默认情况下以 window 为目标，但也可以监视它所绑定到的元素。
  使用 self 修饰符v-scroll.self来监视 v-card 元素
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-card class="overflow-y-auto tw-h-96" v-scroll.self="onScroll">
      <v-card-text>
        <div v-for="n in 12" :key="n" class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur.
          Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem
          pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur
          laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis,
          similique ratione quasi illo!
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
