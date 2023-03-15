<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import { getMemberAPI, loginAPI } from '/@src//stores/api'
import sleep from '/@src/utils/sleep'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import 'swiper/css'

const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string
const iptId = ref<string>('')
const iptPass = ref<string>('')

const login = async () : Promise<void> => {
  if (!isLoading.value) {
    isLoading.value = true
    const { data } = <any> await loginAPI({
      loginId: iptId.value,
      password: iptPass.value,
    })
    console.log(data)
    if(data.success) {
      // notyf.dismissAll()
      // notyf.success('Welcome back, Erik Kovalsky')
      localStorage.role = data.data.role
      localStorage.accessToken = data.data.token
      userSession.setToken(data.data.token)
      if (redirect) {
        await router.push(redirect)
      } else {
        await router.push('/sidebar/dashboards')
      }
    } else {
      // notyf.error(data.message ?? 'Welcome back, Erik 111Kovalsky')
    }
    isLoading.value = false
  }
}
const getMember = async (userId: number) : Promise<void> => {
  const { data } = <any> await getMemberAPI(userId)
  if (data.success) {

  } else {

  }
}

useHead({
  title: '로그인 - 에코맵',
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-10 is-offset-1">
<!--              <img src="../../assets/images/banner/banner01.jpg" alt="" style="height: 50%;">-->
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered"></p>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="column is-4">
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
            <RouterLink to="/">
              <img src="../../assets/images/logo_ecomap.png" alt="">
            </RouterLink>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>안녕하세요.</h2>
                  <p>에코맵 사장님 전용 서비스입니다.</p>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form @submit.prevent="login">
                    <div class="login-form">
                      <!-- Username -->
                      <VField>
                        <VControl icon="feather:user">
                          <VInput
                            v-model="iptId"
                            type="text"
                            placeholder="아이디"
                            autocomplete="username"
                            aria-required="true"
                          />
                        </VControl>
                      </VField>

                      <!-- Password -->
                      <VField>
                        <VControl icon="feather:lock">
                          <VInput
                            v-model="iptPass"
                            type="password"
                            placeholder="패스워드"
                            autocomplete="current-password"
                            aria-required="true"
                          />
                        </VControl>
                      </VField>

                      <!-- Switch -->
                      <VField v-if="false">
                        <VControl class="setting-item">
                          <VCheckbox label="Remember me" paddingless />
                        </VControl>
                      </VField>

                      <!-- Submit -->
                      <div class="login">
                        <VButton
                          :loading="isLoading"
                          color="primary"
                          type="submit"
                          bold
                          fullwidth
                          raised
                        >
                          로그인
                        </VButton>
                      </div>

                      <div class="forgot-link has-text-centered">
                        <RouterLink to="/auth/signup">
                          회원가입
                        </RouterLink>
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
  </div>
</template>
