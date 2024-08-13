<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const rail = ref(true)
</script>

<template>
  <v-app class="tw-relative">
    <div class="opacity-50 tw-flex tw-h-16 tw-items-center tw-border-b-2 tw-bg-pink-400/50">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
    <!--
    导航抽屉主要用于放置应用程序中页面的链接，并且已预先配置为开箱即用，无论是否使用vue-router。
    使用 null 作为 v-model 的起始值将初始化抽屉在移动设备上关闭，在桌面上打开
    -->

    <v-layout>
      <!--  使用 rail 和  expand-on-hover 实现悬停时扩展    -->
      <div>
        <v-navigation-drawer
          v-model="drawer"
          floating
          :rail="rail"
          expand-on-hover
          @click="rail = !rail"
          class="tw-bg-pink-200/50 tw-shadow"
        >
          <v-list-item-title class="tw-flex tw-justify-center tw-leading-10"
            >抽屉导航
          </v-list-item-title>
          <v-divider opacity="100"></v-divider>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-home-variant-outline"></v-icon>
            </template>
            主页
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-history"></v-icon>
            </template>
            历史
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-heart"></v-icon>
            </template>
            收藏夹
          </v-list-item>
        </v-navigation-drawer>
      </div>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
