<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const isIntersecting = ref(false)

// 改写
const onIntersect = function (value: boolean) {
  isIntersecting.value = value
}
</script>

<template>
  <title-h1>交叉观察者</title-h1>
  <!--
  v-intersect 指令使用了 Intersection Observer API。
  它提供了一个易用的检测元素是否进入视口 (viewport) 的接口。
  这个指令同样也用在了 v-lazy 组件上
  -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xs tw-bg-slate-50 tw-p-6 tw-shadow">
    <div class="tw-flex">
      <v-avatar
        :color="isIntersecting ? 'green-lighten-1' : 'red-darken-2'"
        class="tw-mx-auto"
        size="32"
        variant="flat"
      ></v-avatar>
    </div>
    <v-sheet class="overflow-y-auto" max-height="400">
      <v-sheet class="d-flex align-center text-center pa-2" height="200vh">
        <v-card class="mx-auto" max-width="336" v-intersect="onIntersect">
          <v-card-title>Card title</v-card-title>

          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros
            vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus,
            condimentum nec, tempor a, commodo mollis, magna. In turpis. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor.
            Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<style scoped></style>
