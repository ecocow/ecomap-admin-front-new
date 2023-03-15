<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { getShopDetailAPI } from '/@src/stores/api'
import { useRoute } from 'vue-router'

const route = useRoute()
const viewWrapper = useViewWrapper()
const shopDetail = ref<object>({})
viewWrapper.setPageTitle('매장정보 수정')

useHead({
  title: '매장정보 수정 - 에코맵',
})
</script>

<template>
  <ShopEditGeneral />
</template>
