<script lang="ts" setup>
import TitleH1 from '@/components/TitleH1.vue'
import TitleP1 from '@/components/TitleP1.vue'
import HomeButton from '@/components/HomeButton.vue'
</script>

<template>
  <title-h1>Home</title-h1>
  <title-p1>Containment</title-p1>
  <div class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow">
    <home-button page="VBottomSheet"></home-button>
    <home-button page="ButtonView"></home-button>
    <home-button page="CardView"></home-button>
    <home-button page="ChipView"></home-button>
    <home-button page="DialogsView"></home-button>
    <home-button page="Dividers"></home-button>
    <home-button page="ExpansionPanels"></home-button>
  </div>
</template>

<style scoped></style>
