<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('메장상세')

useHead({
  title: '매장 상세 - 에코맵',
})
</script>

<template>
  <div class="page-content-inner">
    <ShopDetail />
  </div>
</template>
