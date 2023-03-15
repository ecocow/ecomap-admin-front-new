<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import {
  getCodeAPI,
  getHashtagAPI,
  getCodeTypeAPI,
  getShopDetailAPI,
  delShopHourAPI,
  searchAddressAPI,
  putShopAPI
} from '/@src/stores/api'
import { VueDaumPostcodeCompleteResult } from 'vue-daum-postcode'

const route = useRoute()
const router = useRouter()
const props = defineProps(['type'])
const shopDetail = ref<object>({})
const hashtagList = ref<object[]>([])
const BHCList = ref<any[]>([])
const shopHourInfoResponses = ref<object[]>([]) // create shop hour request

const iptName = ref<string>('')
const iptPhone = ref<string>('')
const iptBasePrice = ref<number>(0)
const iptBasePoint = ref<number>(0)
const iptDesc = ref<string>('')
const iptAddr = ref<string>('')
const iptAddrDetail = ref<string>('')
const iptAddrDepth01 = ref<string>('')
const iptAddrDepth02 = ref<string>('')
const iptAddrDepth03 = ref<string>('')
const iptLatitude = ref<number>(0)
const iptLongitude = ref<number>(0)

const iptShopHourName = ref<string>('')
const iptShopHourFromTime = ref<any>(new Date)
const iptShopHourToTime = ref<any>(new Date)
const iptShopHourDesc = ref<string>('')

const isLoading = ref(false)
const experience = ref('')
const firstJob = ref('')
const flexibility = ref('')
const remote = ref('')
const skills = ref(['software', 'saas', 'engineering'])
const skillsOptions = [
  { value: 'software', label: 'Software' },
  { value: 'saas', label: 'SaaS' },
  { value: 'engineering', label: 'Engineering' },
]
const result = ref<VueDaumPostcodeCompleteResult | null>(null)
const isOpen = ref(false)
const onAddrResultComplete = async (newResult: VueDaumPostcodeCompleteResult): void => {
  result.value = newResult
  isOpen.value = false
  iptAddr.value = newResult.address
  const { data } = <any> await searchAddressAPI(0, result.value.address)
  if (data.documents.length) {
    const A = data.documents[0]?.address
    iptAddr.value = A.address_name
    console.log(A)
    iptAddrDepth01.value = A.region_1depth_name
    iptAddrDepth02.value = A.region_2depth_name
    iptAddrDepth03.value = A.region_3depth_h_name || A.region_3depth_name
    iptLatitude.value = A.y
    iptLongitude.value = A.x
  }
}

const date = ref({
  start: new Date(),
  end: new Date(),
})

// Get shops detail
const getShopDetail = async () : Promise<void> => {
  const { data } = <any> await getShopDetailAPI(route.params.id as number)
  if (data.success) {
    console.log(data)
    shopDetail.value = data.data
    iptName.value = shopDetail.value.name
    iptPhone.value = shopDetail.value.phone
    iptBasePrice.value = shopDetail.value.basePrice
    iptBasePoint.value = shopDetail.value.basePoint
    iptDesc.value = shopDetail.value.desc
    iptAddr.value = shopDetail.value.addr
    iptAddrDepth01.value = shopDetail.value.addrDepth01
    iptAddrDepth02.value = shopDetail.value.addrDepth02
    iptAddrDepth03.value = shopDetail.value.addrDepth03
    iptLatitude.value = shopDetail.value.latitude
    shopHourInfoResponses.value = [...shopDetail.value.shopHourInfoResponses]
    console.log(shopHourInfoResponses.value)
  } else {
  }
}
const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}

// Get hashtag list
const getHashtag = async () : Promise<void> => {
  const { data } = <any> await getHashtagAPI(0)
  if (data.success) {
    console.log(data)
    hashtagList.value = data.data.content
  }
}
const getCode = async () : Promise<void> => {
  const { data } = <any> await getCodeAPI()
  if (data.success) {
    console.log(data)
  }
}
const getCodeType = async (t: string) : Promise<void> => {
  const { data } = <any> await getCodeTypeAPI(t)
  if (data.success) {
    console.log(data)
    if (t === 'BHC') {
      BHCList.value = data.data
    }
  }
}
const delShopHour = async (idx: number, shopHourId?: number) : Promise<void> => {
  console.log(idx, shopHourId)
  if (shopHourId) {
    const { data } = <any> await delShopHourAPI(shopHourId)
    if (data.success) {
      shopHourInfoResponses.value.splice(idx, 1)
    }
  } else {
    shopHourInfoResponses.value.splice(idx, 1)
  }
}
// 샾 시간 추가
const addShopHourRequests = () : void => {
  const BHC = BHCList.value[BHCList.value.findIndex((a:any) => a.name === iptShopHourName.value)]
  shopHourInfoResponses.value.push({
    codeId: BHC?.code,
    name: BHC?.name,
    fromTime: dayjs(iptShopHourFromTime.value).format('HH:mm'),
    toTime: dayjs(iptShopHourToTime.value).format('HH:mm'),
    desc: iptShopHourDesc.value,
  })
  iptShopHourName.value = ''
  iptShopHourDesc.value = ''
  console.log(shopHourInfoResponses.value)
}
// 샾정보 수정
const putShop  = async () : Promise<void> => {
  const params = {
    name: iptName.value,
    phone: iptPhone.value,
    basePrice: 0,
    basePoint: 0,
    desc: iptDesc.value,
    addr: iptAddr.value + ' ' + iptAddrDetail.value,
    createShopHourRequests: shopHourInfoResponses.value,
    addrDepth01: iptAddrDepth01.value,
    addrDepth02: iptAddrDepth02.value,
    addrDepth03: iptAddrDepth03.value,
    latitude: iptLatitude.value,
    longitude: iptLongitude.value,
    updateShopHourRequests: [],
    updateShopHashcodeRequests: [],
  }
  const json = JSON.stringify(params)
  console.log(json)
  const blob = new Blob([json], {
    type: "application/json",
  })
  console.log(blob)
  const formData = new FormData()
  formData.append('updateShopInfoRequest', blob)
  formData.append('files', '')
  console.log(formData)
  const { data } = <any> await putShopAPI(route.params.id as number, formData)
  console.log(data)

}
onBeforeMount(() => {
  if (props.type === 'edit') getShopDetail()
  getHashtag()
  getCode()
  getCodeType('BHC')
})
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>{{ props.type === 'make' ? '기본정보 생성' : '기본정보 수정'}}</h3>
          <p>매장에 대한 기본 정보를 {{ props.type === 'make' ? '생성' : '수정' }}합니다.</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              @click="router.go(-1)"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              이전
            </VButton>
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              tabindex="0"
              @keydown.space.prevent="onSave"
              @click="putShop"
            >
              저장
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading" v-if="false">
          <h4>Personal Info</h4>
          <p>Others diserve to know you more</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:user">
                <VInput type="text" placeholder="매장명" v-model="iptName" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:phone">
                <VInput
                  type="tel"
                  placeholder="전화번호"
                  v-model="iptPhone"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:map-pin">
                <VInput
                    type="text"
                    placeholder="주소"
                    readonly
                    v-model="iptAddr"
                    @click="isOpen = true"
                />
                <template v-if="isOpen">
                  <vue-daum-postcode @complete="onAddrResultComplete" />
                </template>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField>
              <VControl icon="feather:map-pin">
                <VInput
                    type="text"
                    placeholder="주소 상세"
                    v-model="iptAddrDetail"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>영업시간</h4>
          <p>영업시간을 상세하게 입력하여 손님에게 매장운영시간을 알려주세요.</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-4">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="iptShopHourName"
                  :attrs="{ id }"
                  placeholder="영업종류"
                  :options="BHCList.map((a:any) => a.name)"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-4">
            <VField v-slot="{ id }">
              <VControl>
                <VDatePicker
                    v-model="iptShopHourFromTime"
                    color="green"
                    mode="time"
                    is24hr
                    click
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VControl>
                        <input
                            type="text"
                            class="input form-timepicker"
                            :value="inputValue"
                            v-on="inputEvents"
                        />
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </VControl>
            </VField>
          </div>
          <div class="column is-4">
            <VField v-slot="{ id }">
              <VControl>
                <VDatePicker
                    v-model="iptShopHourToTime"
                    color="green"
                    mode="time"
                    is24hr
                >
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <VControl>
                        <input
                            type="text"
                            class="input form-timepicker"
                            :value="inputValue"
                            v-on="inputEvents"
                        />
                      </VControl>
                    </VField>
                  </template>
                </VDatePicker>
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12" style="margin-top: -20px;">
            <VField>
              <VControl icon="feather:clock">
                <VInput v-model="iptShopHourDesc" type="text" placeholder="설명" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12" style="display: flex;justify-content: center;">
            <VButton
                color="primary"
                icon="fas fa-plus"
                :disabled="!iptShopHourName || !iptShopHourFromTime || !iptShopHourToTime"
                @click="addShopHourRequests"
            >
              추가
            </VButton>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <div class="form-section-output">
              <div  v-for="(h, idx) in shopHourInfoResponses" :key="'shop-hour' + idx"
                  class="output">
                <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                <p><strong>{{ h.name }}</strong> {{ h.fromTime.replace(/\d{2}$/, m => ':' + m) }} ~ {{ h.toTime.replace(/\d{2}$/, m => ':' + m) }}</p>
                <p v-if="h.desc" class="ml-4">{{ h.desc}}</p>
                <div class="action">
                  <VIconButton icon="feather:trash-2" @click="delShopHour(idx, h.shopHourId)" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>헤시태그 설정</h4>
          <p>해시태그를 설정하시면 매장 검색이 간편해집니다.</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="skills"
                  :attrs="{ id }"
                  mode="tags"
                  :searchable="true"
                  :create-tag="true"
                  :options="skillsOptions"
                  placeholder="Add tags"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>소셜 컨텐츠</h4>
          <p>사용하시는 소셜링크를 추가하시면 사용자에게 더 많은 정보를 보여줄 수 있습니다.</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-facebook-f">
                <VInput type="text" placeholder="Facebook URL" inputmode="url" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-twitter">
                <VInput type="text" placeholder="Twitter URL" inputmode="url" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-facebook">
                <VInput type="text" placeholder="Facebook URL" inputmode="url" />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-instagram">
                <VInput type="text" placeholder="Instagram URL" inputmode="url" />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-section-output {
  margin-top: 1.5rem;
  .output {
    height: 52px;
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 0.65rem;
    background: var(--white);
    display: flex;
    align-items: center;
    padding-left: calc(1em - 1px);
    padding-right: calc(1em - 1px);
    padding-top: 0;
    padding-bottom: 0;
    color: var(--dark-text);
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s, border 0.3s, box-shadow 0.3s;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    > svg {
      height: 18px;
      width: 18px;
      margin-right: 0.75rem;
      color: var(--light-text);
    }

    > span {
      font-weight: 500;
      font-family: var(--font);
      color: var(--dark-text);
    }

    .action {
      margin-left: auto;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 38px;
        width: 38px;
        min-width: 38px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: background-color 0.3s;

        &:hover,
        &:focus {
          background: var(--widget-grey-dark-1);
        }

        svg {
          height: 18px;
          width: 18px;
          stroke-width: 1.5px;
        }
      }
    }
  }
}
</style>
