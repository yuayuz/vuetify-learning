import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import VBottomSheet from '@/views/Containment/VBottomSheet.vue'
import Button from '@/views/Containment/ButtonView.vue'
import ButtonView from '@/views/Containment/ButtonView.vue'
import CardView from '@/views/Containment/CardView.vue'
import ChipView from '@/views/Containment/ChipView.vue'
import DialogsView from '@/views/Containment/DialogsView.vue'
import Dividers from '@/views/Containment/Dividers.vue'
import ExpansionPanels from '@/views/Containment/ExpansionPanels.vue'
import ListsView from '@/views/Containment/ListsView.vue'
import Menus from '@/views/Containment/Menus.vue'
import Overlays from '@/views/Containment/Overlays.vue'
import Sheets from '@/views/Containment/Sheets.vue'
import ToolBars from '@/views/Containment/ToolBars.vue'
import ToolTips from '@/views/Containment/ToolTips.vue'
import AppBars from '@/views/Navigation/AppBars.vue'
import BottomNavigation from '@/views/Navigation/BottomNavigation.vue'
import Breadcrumbs from '@/views/Navigation/Breadcrumbs.vue'
import FloatingActionButtons from '@/views/Navigation/FloatingActionButtons.vue'
import Footers from '@/views/Navigation/Footers.vue'
import NavigationDrawer from '@/views/Navigation/NavigationDrawer.vue'
import Pagination from '@/views/Navigation/Pagination.vue'
import SpeedDials from '@/views/Navigation/SpeedDials.vue'
import Tabs from '@/views/Navigation/Tabs.vue'
import Autocomplete from '@/views/FormInput/Autocomplete.vue'
import Checkboxes from '@/views/FormInput/Checkboxes.vue'
import Combobox from '@/views/FormInput/Combobox.vue'
import FileInput from '@/views/FormInput/FileInput.vue'
import Forms from '@/views/FormInput/Forms.vue'
import CustomInputs from '@/views/FormInput/CustomInputs.vue'
import OPT from '@/views/FormInput/OPT.vue'
import RadioButtons from '@/views/FormInput/RadioButtons.vue'
import RangeSliders from '@/views/FormInput/RangeSliders.vue'
import Selects from '@/views/FormInput/Selects.vue'
import Sliders from '@/views/FormInput/Sliders.vue'
import Switches from '@/views/FormInput/Switches.vue'
import TextFields from '@/views/FormInput/TextFields.vue'
import TextAreas from '@/views/FormInput/TextAreas.vue'
import ConfirmEdit from '@/views/DataAndDisplay/ConfirmEdit.vue'
import DataIterators from '@/views/DataAndDisplay/DataIterators.vue'
import DataTables from '@/views/DataAndDisplay/DataTables.vue'
import SparkLines from '@/views/DataAndDisplay/SparkLines.vue'
import InfiniteScroll from '@/views/DataAndDisplay/InfiniteScroll.vue'
import ButtonToggles from '@/views/Selection/ButtonToggles.vue'
import Carousels from '@/views/Selection/Carousels.vue'
import ChipGroups from '@/views/Selection/ChipGroups.vue'
import ItemGroups from '@/views/Selection/ItemGroups.vue'
import SlideGroups from '@/views/Selection/SlideGroups.vue'
import Steppers from '@/views/Selection/Steppers.vue'
import Windows from '@/views/Selection/Windows.vue'
import Alerts from '@/views/FeedbackComponents/Alerts.vue'
import Badges from '@/views/FeedbackComponents/Badges.vue'
import Banners from '@/views/FeedbackComponents/Banners.vue'
import EmptyState from '@/views/FeedbackComponents/EmptyState.vue'
import Hover from '@/views/FeedbackComponents/Hover.vue'
import ProgressCircular from '@/views/FeedbackComponents/ProgressCircular.vue'
import ProgressLinear from '@/views/FeedbackComponents/ProgressLinear.vue'
import Ratings from '@/views/FeedbackComponents/Ratings.vue'
import SkeletonLoaders from '@/views/FeedbackComponents/SkeletonLoaders.vue'
import Snackbars from '@/views/FeedbackComponents/Snackbars.vue'
import Timeline from '@/views/FeedbackComponents/Timeline.vue'
import AspectRatios from '@/views/ImageAndIconComponents/AspectRatios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/VBottomSheet',
      name: 'VBottomSheet',
      component: VBottomSheet
    },
    {
      path: '/ButtonView',
      name: 'ButtonView',
      component: ButtonView
    },
    {
      path: '/CardView',
      name: 'CardView',
      component: CardView
    },
    {
      path: '/ChipView',
      name: 'ChipView',
      component: ChipView
    },
    {
      path: '/DialogsView',
      name: 'DialogsView',
      component: DialogsView
    },
    {
      path: '/Dividers',
      name: 'Dividers',
      component: Dividers
    },
    {
      path: '/ExpansionPanels',
      name: 'ExpansionPanels',
      component: ExpansionPanels
    },
    {
      path: '/ListsView',
      name: 'ListsView',
      component: ListsView
    },
    {
      path: '/Menus',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/Overlays',
      name: 'Overlays',
      component: Overlays
    },
    {
      path: '/Sheets',
      name: 'Sheets',
      component: Sheets
    },
    {
      path: '/ToolBars',
      name: 'ToolBars',
      component: ToolBars
    },
    {
      path: '/ToolTips',
      name: 'ToolTips',
      component: ToolTips
    },
    {
      path: '/AppBars',
      name: 'AppBars',
      component: AppBars
    },
    {
      path: '/BottomNavigation',
      name: 'BottomNavigation',
      component: BottomNavigation
    },
    {
      path: '/Breadcrumbs',
      name: 'Breadcrumbs',
      component: Breadcrumbs
    },
    {
      path: '/FloatingActionButtons',
      name: 'FloatingActionButtons',
      component: FloatingActionButtons
    },
    {
      path: '/Footers',
      name: 'Footers',
      component: Footers
    },
    {
      path: '/NavigationDrawer',
      name: 'NavigationDrawer',
      component: NavigationDrawer
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/SpeedDials',
      name: 'SpeedDials',
      component: SpeedDials
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/Autocomplete',
      name: 'Autocomplete',
      component: Autocomplete
    },
    {
      path: '/Checkboxes',
      name: 'Checkboxes',
      component: Checkboxes
    },
    {
      path: '/Combobox',
      name: 'Combobox',
      component: Combobox
    },
    {
      path: '/FileInput',
      name: 'FileInput',
      component: FileInput
    },
    {
      path: '/Forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/CustomInputs',
      name: 'CustomInputs',
      component: CustomInputs
    },
    {
      path: '/OPT',
      name: 'OPT',
      component: OPT
    },
    {
      path: '/RadioButtons',
      name: 'RadioButtons',
      component: RadioButtons
    },
    {
      path: '/RangeSliders',
      name: 'RangeSliders',
      component: RangeSliders
    },
    {
      path: '/Selects',
      name: 'Selects',
      component: Selects
    },
    {
      path: '/Sliders',
      name: 'Sliders',
      component: Sliders
    },
    {
      path: '/Switches',
      name: 'Switches',
      component: Switches
    },
    {
      path: '/TextFields',
      name: 'TextFields',
      component: TextFields
    },
    {
      path: '/TextAreas',
      name: 'TextAreas',
      component: TextAreas
    },
    {
      path: '/ConfirmEdit',
      name: 'ConfirmEdit',
      component: ConfirmEdit
    },
    {
      path: '/DataIterators',
      name: 'DataIterators',
      component: DataIterators
    },
    {
      path: '/DataTables',
      name: 'DataTables',
      component: DataTables
    },
    {
      path: '/SparkLines',
      name: 'SparkLines',
      component: SparkLines
    },
    {
      path: '/InfiniteScroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/ButtonToggles',
      name: 'ButtonToggles',
      component: ButtonToggles
    },
    {
      path: '/Carousels',
      name: 'Carousels',
      component: Carousels
    },
    {
      path: '/ChipGroups',
      name: 'ChipGroups',
      component: ChipGroups
    },
    {
      path: '/ItemGroups',
      name: 'ItemGroups',
      component: ItemGroups
    },
    {
      path: '/SlideGroups',
      name: 'SlideGroups',
      component: SlideGroups
    },
    {
      path: '/Steppers',
      name: 'Steppers',
      component: Steppers
    },
    {
      path: '/Windows',
      name: 'Windows',
      component: Windows
    },
    {
      path: '/Alerts',
      name: 'Alerts',
      component: Alerts
    },
    {
      path: '/Badges',
      name: 'Badges',
      component: Badges
    },
    {
      path: '/Banners',
      name: 'Banners',
      component: Banners
    },
    {
      path: '/EmptyState',
      name: 'EmptyState',
      component: EmptyState
    },
    {
      path: '/Hover',
      name: 'Hover',
      component: Hover
    },
    {
      path: '/ProgressCircular',
      name: 'ProgressCircular',
      component: ProgressCircular
    },
    {
      path: '/ProgressLinear',
      name: 'ProgressLinear',
      component: ProgressLinear
    },
    {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/SkeletonLoaders',
      name: 'SkeletonLoaders',
      component: SkeletonLoaders
    },
    {
      path: '/Snackbars',
      name: 'Snackbars',
      component: Snackbars
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/AspectRatios',
      name: 'AspectRatios',
      component: AspectRatios
    }
  ]
})

export default router
