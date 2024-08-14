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
    <home-button page="ListsView"></home-button>
    <home-button page="Menus"></home-button>
    <home-button page="Overlays"></home-button>
    <home-button page="Sheets"></home-button>
    <home-button page="ToolBars"></home-button>
    <home-button page="ToolTips"></home-button>
  </div>
  <title-p1>Navigation</title-p1>
  <div class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow">
    <home-button page="AppBars"></home-button>
    <home-button page="BottomNavigation"></home-button>
    <home-button page="Breadcrumbs"></home-button>
    <home-button page="FloatingActionButtons"></home-button>
    <home-button page="Footers"></home-button>
    <home-button page="NavigationDrawer"></home-button>
    <home-button page="Pagination"></home-button>
    <home-button page="SpeedDials"></home-button>
    <home-button page="Tabs"></home-button>
  </div>

  <title-p1>Form Input</title-p1>
  <div class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow">
    <home-button page="Autocomplete"></home-button>
    <home-button page="Checkboxes"></home-button>
    <home-button page="Combobox"></home-button>
    <home-button page="FileInput"></home-button>
    <home-button page="Forms"></home-button>
    <home-button page="CustomInputs"></home-button>
    <home-button page="OPT"></home-button>
    <home-button page="RadioButtons"></home-button>
    <home-button page="RangeSliders"></home-button>
    <home-button page="Selects"></home-button>
    <home-button page="Sliders"></home-button>
    <home-button page="Switches"></home-button>
    <home-button page="TextFields"></home-button>
    <home-button page="TextAreas"></home-button>
  </div>
  <title-p1>Data And Display</title-p1>
  <div class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow">
    <home-button page="ConfirmEdit"></home-button>
    <home-button page="DataIterators"></home-button>
    <home-button page="DataTables"></home-button>
    <home-button page="SparkLines"></home-button>
    <home-button page="InfiniteScroll"></home-button>
  </div>
</template>

<style scoped></style>
