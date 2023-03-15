<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import {getShopDetailAPI} from '/@src/stores/api'

const route = useRoute()
const viewWrapper = useViewWrapper()
const shopDetail = ref<object>({})

// Get shops detail
const getShopDetail = async () : Promise<void> => {
  const { data } = <any> await getShopDetailAPI(route.params.id as number)
  if (data.success) {
    console.log(data)
    shopDetail.value = data.data
    viewWrapper.setPageTitle(shopDetail.value.name as string)
  } else {
  }
}
useHead({
  title: '매장 상세 - 에코맵',
})
onBeforeMount(() => {
  getShopDetail()
})
</script>

<template>
  <div class="page-content-inner">
    <ShopDetail :shop-detail="shopDetail" />
  </div>
</template>
