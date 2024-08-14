<script setup lang="ts">
import TitleH1 from '@/components/TitleH1.vue'
import { ref } from 'vue'

const model = ref()
</script>

<template>
  <title-h1>Confirm Edit</title-h1>
  <!-- v-confirm-edit 组件用于让用户提交前确认他的修改是正确的 -->
  <div class="tw-mx-auto tw-mt-4 tw-max-w-xl tw-bg-slate-50 tw-p-6 tw-shadow">
    <v-confirm-edit v-model="model">
      <template v-slot:default="{ model: proxyModel, actions }">
        <v-card title="Confirm">
          <template v-slot:text>
            <v-text-field v-model="proxyModel.value"></v-text-field>
          </template>
          <template v-slot:actions>
            <v-spacer></v-spacer>

            <component :is="actions"></component>
          </template>
        </v-card>
      </template>
    </v-confirm-edit>
  </div>
</template>

<style scoped></style>
