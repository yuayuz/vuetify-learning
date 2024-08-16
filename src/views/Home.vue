<script lang="ts" setup>
import TitleP1 from '@/components/TitleP1.vue'
import HomeButton from '@/components/HomeButton.vue'

import { useTheme } from 'vuetify'
import { ref } from 'vue'

const theme = useTheme()
const darkValue = ref('light')
const darkMode = () => {
  localStorage.theme = 'tw-dark'

  if (theme.global.current.value.dark) {
    theme.global.name.value = 'light'
    document.documentElement.classList.remove('tw-dark')
  } else {
    theme.global.name.value = 'dark'
    document.documentElement.classList.add('tw-dark')
  }
  darkValue.value = theme.global.name.value
}
</script>

<template class="tw-relative">
  <div
    class="tw-fixed tw-left-0 tw-right-0 tw-top-0 tw-flex tw-h-10 tw-items-center tw-border tw-border-violet-400 tw-bg-violet-500 dark:tw-border dark:tw-border-violet-400"
  >
    <p>home</p>
    <v-icon
      :icon="darkValue === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
      @click="darkMode()"
      class="tw-absolute tw-right-10 tw-text-white"
    >
    </v-icon>
  </div>

  <title-p1 class="tw-mt-10">Containment</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
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
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
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
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
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
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="ConfirmEdit"></home-button>
    <home-button page="DataIterators"></home-button>
    <home-button page="DataTables"></home-button>
    <home-button page="SparkLines"></home-button>
    <home-button page="InfiniteScroll"></home-button>
  </div>
  <title-p1>选择组件 (Selection)</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="ButtonToggles"></home-button>
    <home-button page="Carousels"></home-button>
    <home-button page="ChipGroups"></home-button>
    <home-button page="ItemGroups"></home-button>
    <home-button page="SlideGroups"></home-button>
    <home-button page="Steppers"></home-button>
    <home-button page="Windows"></home-button>
  </div>
  <title-p1>反馈式组件</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="Alerts"></home-button>
    <home-button page="Badges"></home-button>
    <home-button page="Banners"></home-button>
    <home-button page="EmptyState"></home-button>
    <home-button page="Hover"></home-button>
    <home-button page="ProgressCircular"></home-button>
    <home-button page="ProgressLinear"></home-button>
    <home-button page="Ratings"></home-button>
    <home-button page="SkeletonLoaders"></home-button>
    <home-button page="Snackbars"></home-button>
    <home-button page="Timeline"></home-button>
  </div>
  <title-p1>反馈式组件</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="AspectRatios"></home-button>
    <home-button page="Avatars"></home-button>
    <home-button page="Icons"></home-button>
    <home-button page="Images"></home-button>
    <home-button page="Parallax"></home-button>
  </div>
  <title-p1>反馈式组件</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="ColorPickers"></home-button>
    <home-button page="DatePickers"></home-button>
  </div>
  <title-p1>过渡动画</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="TransitionAnimation"></home-button>
  </div>
  <title-p1>Directives</title-p1>
  <div
    class="tw-mx-6 tw-mt-4 tw-space-x-3 tw-space-y-1 tw-bg-slate-50 tw-px-3 tw-py-2 tw-shadow dark:tw-bg-black"
  >
    <home-button page="ClickOutside"></home-button>
    <home-button page="IntersectionObserver"></home-button>
    <home-button page="Resize"></home-button>
    <home-button page="Ripple"></home-button>
    <home-button page="Scroll"></home-button>
  </div>
</template>

<style scoped></style>
