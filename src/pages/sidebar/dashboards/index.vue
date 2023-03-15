<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('데쉬보드')

useHead({
  title: '데쉬보드 - 에코맵',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV2 />
  </div>
</template>
