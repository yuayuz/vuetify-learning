<script lang="ts" setup>
import router from '@/router'

const props = defineProps(['page'])

const goTo = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <v-btn @click="goTo(props.page)" class="weight tw-rounded-sm tw-bg-violet-400 tw-px-2 tw-py-1">{{
    props.page
  }}</v-btn>
</template>

<style scoped></style>
