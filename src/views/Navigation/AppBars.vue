<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>应用栏 (App bars)</v-app-bar-title>
    </v-app-bar>
  </v-app>

  <!--
  滚动行为
  hide：默认插槽内容会随用户向下滚动而隐藏。而 extension 插槽则会保留。
  fully-hide: The entire app bar will hide as the user scrolls down.
  collapse：会在角落收缩成一团。
  elevate：当向下滚动时，会在应用栏添加阴影效果。忽略 scroll-threshold 属性，任意的滚动都会添加阴影。
  fade-image：背景图片会随着滚动条下拉而渐隐
  inverted：没有任何的效果，但会倒转上面提到的效果。
  scroll-threshold 属性（单位是像素）决定了滚动条需要向下滚动多少才有应用栏的滚动效果。
  默认是通过向 window 增加事件监听器实现的，但你可以通过修改 scroll-target 属性变更它的作用目标。 -->
</template>

<style scoped></style>
