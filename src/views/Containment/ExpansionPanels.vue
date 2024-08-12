<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const panels = ref([''])
const all = function () {
  panels.value = ['a', 'b', 'c']
}
const none = function () {
  panels.value = []
}
</script>

<template>
  <title-h1>扩展面板 (Expansion panels)</title-h1>
  <!-- v-expansion-panel 组件可以用来减少大片信息所占用的垂直方向空间。
  组件默认仅显示一个扩展面板（即打开一个会关闭另一个）；
  但你以添加 multiple 属性，扩展面板则可以保持打开，直到主动关闭
  -->
  <p class="tw-bg-sky-400">使用</p>
  <!--
  扩展面板可以以最简单的形式展现可扩展展现的信息。
  可以使用子组件的形式，亦可以使用 title 和 text 属性
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>扩展面板</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <p class="tw-bg-sky-400">变体 (Variants)</p>
  <!--
  扩展面板有四种不同的变化形式。手风琴式 (Accordion) 扩展面板的展开面板没有外边距。
  内嵌式 (Inset) 扩展面板会减小展开面板的大小。
  而弹出式 (poput) 则会增大展开面板的大小
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-5 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-expansion-panels variant="default">
      <v-expansion-panel>
        <v-expansion-panel-title>default</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>default</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel>
        <v-expansion-panel-title>accordion</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>accordion</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="inset">
      <v-expansion-panel>
        <v-expansion-panel-title>inset</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="popout">
      <v-expansion-panel>
        <v-expansion-panel-title>popout</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <p class="tw-bg-sky-400">扩展面板及其内容都可以使用 disabled 属性禁用</p>

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-5 tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-expansion-panels disabled>
      <v-expansion-panel>
        <v-expansion-panel-title>disabled</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>disabled</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <p class="tw-bg-sky-400">控制模型</p>
  <!--
  扩展面板可以从外部由 v-model 控制。需要在每个面板上设置 value值，以便在组件外部控制它们的打开。
  如果组件设置了 multiple 属性，那么 v-model 的值将是数组。
  -->

  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-space-y-5 tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-flex tw-place-content-evenly">
      <p>v-model is :{{ panels }}</p>
      <v-btn @click="all">all</v-btn>
      <v-btn @click="none">none</v-btn>
    </div>
    <v-expansion-panels v-model="panels" multiple>
      <v-expansion-panel value="a">
        <v-expansion-panel-title expand-icon="mdi-menu-down">a</v-expansion-panel-title>
        <v-expansion-panel-text>expand-icon 修改图标</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel value="b">
        <v-expansion-panel-title>
          <div class="tw-grid tw-grid-cols-3 tw-gap-10">
            <p>b</p>
            <p>hello</p>
            <p>world</p>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel value="c">
        <v-expansion-panel-title>c</v-expansion-panel-title>
        <v-expansion-panel-text>你好</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <!-- 只读面板 readonly 属性的效果和 disabled 是相同的，但后者会影响样式，前者不会 -->
</template>

<style scoped></style>
