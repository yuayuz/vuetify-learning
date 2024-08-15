<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
</script>

<template>
  <title-h1>时间线 (Timeline)</title-h1>
  <p class="tw-bg-sky-400">布局</p>
  <!-- 可以使用 direction 属性来实时切换水平方向或者垂直方向的时间线 -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template v-slot:opposite> Opposite content</template>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite> Opposite content</template>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite> Opposite content</template>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>

  <p class="tw-bg-sky-400">方向 (side)</p>
  <!-- 使用 side 属性可以强制所有项目都在时间线的同一个方向 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-timeline direction="vertical" side="end" dot-color="blue">
      <v-timeline-item>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <div>
          <div>你好</div>
          <p>世界</p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>

  <!--
  对齐  默认情况下，圆点的位置对齐 v-timeline-item 的中间，值为 center。
  可以把 align 属性修改为 top 使它对齐内容的头部
  -->
</template>

<style scoped></style>
