<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useHead } from '@vueuse/head'
import { toFormValidator } from '@vee-validate/zod'
import { useUserSession } from '/@src/stores/userSession'
import { useForm } from 'vee-validate'
import { z as zod } from 'zod'

import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import { signupAPI, signupIdCheckAPI } from '/@src/stores/api'
import sleep from '/@src/utils/sleep'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'


const iptLoginId = ref<string>('')
const iptEmail = ref<string>('')
const iptPassword = ref<string>('')
const iptConfirmPassword = ref<string>('')
const iptName = ref<string>('')
const iptBusinessNumber = ref<string>('')
const iptPhoneNumber = ref<string>('')
const iptBirthday = ref<string>('')
const iptGender = ref<boolean>(false)

const userSession = useUserSession()
const darkmode = useDarkmode()
const route = useRoute()
const router = useRouter()
const redirect = route.query.redirect as string
const notyf = new Notyf()

const isLoading = ref(false)
const { t } = useI18n()

// Define a validation schema
const validationSchema = toFormValidator(
  zod
    .object({
      id: zod
        .string({
          required_error: t('아이디는 필수 항목입니다.'),
        })
        .min(1, t('아이디는 최소 3글자 이상 입니다.')),
      email: zod
        .string({
          required_error: t('이메일은 필수 항목입니다.'),
        })
        .email(t('이메일 형식에 맞지 않습니다.')),
      password: zod
        .string({
          required_error: t('패스워드는 필수 항목입니다.'),
        })
        .min(8, t('패스워드는 최소 8자 이상 입니다.')),
      passwordCheck: zod.string({
        required_error: t('패스워드는 필수 항목입니다.'),
      }),
      name: zod
          .string({
            required_error: t('이름은 필수 항목입니다.'),
          })
          .min(1, t('아이디는 최소 2자 이상 입니다.')),
      phone: zod
          .string({
            required_error: t('이름은 필수 항목입니다.'),
          })
          .min(10, t('전화번호는 최소 10자 이상 입니다.')),
      promotional: zod.boolean(),
    })
    .refine((data) => data.password === data.passwordCheck, {
      message: t('패스워드가 일치하지 않습니다.'),
      path: ['passwordCheck'],
    })
)

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    id: '',
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
    promotional: false,
  },
})
const signupIdCheck = handleSubmit(async (values) : Promise<void> => {
  console.log('handleSignup values')
  console.table(values)
  if (!isLoading.value) {
    isLoading.value = true
    const { data } = <any> await signupIdCheckAPI(iptLoginId.value)
    if (data.success) {
      if (!data.data.check) {
        notyf.error('이미 사용중인 아이디입니다.')
        return
      }
    } else {
      notyf.success('아이디를 확인해주세요.')
      return
    }
    onSignup()
  }
})
const onSignup = async () : Promise<void> => {
  const { data } = <any> await signupAPI({
    'loginId' : iptLoginId.value,
    'password' : iptPassword.value,
    'confirmPassword' : iptConfirmPassword.value,
    'name' : iptName.value,
    'businessNumber' : '123-123-1234',
    'phoneNumber' : iptPhoneNumber.value.replace(/-/gi, ''),
    'birthday' : '19990301',
    'gender' : 'man'
  })
  if (data.success) {
    notyf.success('가입에 성공하였습니다.')
    await router.push('/auth/login')
  } else {
    notyf.error('가입에 실패하였습니다. \n 다시 시도해주세요.')
  }
  isLoading.value = false
}

useHead({
  title: '사장님 서비스 가입 - 에코맵',
})
onBeforeMount(() => {
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Form section -->
    <div class="column is-5">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <label
            class="dark-mode ml-auto"
            tabindex="0"
            @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
          >
            <input
              type="checkbox"
              :checked="!darkmode.isDark"
              @change="darkmode.onChange"
            />
            <span></span>
          </label>
          <div class="auth-logo">
            <img src="../../assets/images/logo_ecomap.png" alt="">
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>사장님 서비스 가입</h2>
                  <p>에코맵 사장님 서비스에 가입해주셔서 감사합니다.</p>
                  <RouterLink to="/auth/login">이미 에코맵 사장님이신가요?</RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form @submit="signupIdCheck">
                    <div id="signin-form" class="login-form">
                      <!-- Input -->
                      <VField id="id" v-slot="{ field }">
                        <VControl icon="feather:user">
                          <VInput
                              v-model="iptLoginId"
                              type="text"
                              placeholder="아이디"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="email" v-slot="{ field }">
                        <VControl icon="feather:mail">
                          <VInput
                              v-model="iptEmail"
                              type="text"
                              placeholder="이메일"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="password" v-slot="{ field }">
                        <VControl icon="feather:lock">
                          <VInput
                              v-model="iptPassword"
                              type="password"
                              placeholder="패스워드"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="passwordCheck" v-slot="{ field }">
                        <VControl icon="feather:lock">
                          <VInput
                              v-model="iptConfirmPassword"
                              type="password"
                              placeholder="패스워드 확인"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="name" v-slot="{ field }">
                        <VControl icon="feather:user">
                          <VInput
                              v-model="iptName"
                              type="text"
                              placeholder="이름"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="phone" v-slot="{ field }">
                        <VControl icon="feather:phone">
                          <VInput
                              v-model="iptPhoneNumber"
                              type="tel"
                              placeholder="전화번호"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <!-- Input -->
                      <VField id="name" v-slot="{ field }" v-if="false">
                        <VControl icon="feather:number">
                          <VInput
                              v-model="iptBusinessNumber"
                              type="tel"
                              placeholder="사업자번호"
                          />
                          <p v-if="field?.errors?.value?.length" class="help is-danger">
                            {{ field.errors?.value?.join(', ') }}
                          </p>
                        </VControl>
                      </VField>

                      <VField id="promitional" v-if="false">
                        <VControl class="setting-item">
                          <VSwitchSegment
                            v-model="iptGender"
                            label-true="남자"
                            label-false="여자"
                            color="primary"
                          />
                        </VControl>
                      </VField>

                      <!-- Submit -->

                      <div class="login">
                        <VButton type="submit" color="primary" bold fullwidth raised>가입</VButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-7 is-hidden-mobile hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-10 is-offset-1">

            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered"></p>
        </div>
      </div>
    </div>
  </div>
</template>
