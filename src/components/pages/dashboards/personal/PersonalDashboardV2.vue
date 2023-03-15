<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import { useRouter } from 'vue-router'
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { useTaskCompletionChart } from '/@src/data/dashboards/personal-v2/taskCompletionChart'
import { useTeamEfficiencyChart } from '/@src/data/dashboards/personal-v2/teamEfficiencyChart'
import { popovers } from '/@src/data/users/userPopovers'
import * as usersData from '/@src/data/dashboards/personal-v2/users'
import {getShopDetailAPI, getShopsAPI} from '/@src/stores/api'

const router = useRouter()
const { completionOptions } = useTaskCompletionChart()
const { barOptions } = useTeamEfficiencyChart()
const avatarStack1 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack2 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack3 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack4 = usersData.avatarStack1 as VAvatarProps[]
const democheck = ref(['value_2'])
const shopList = ref<object[]>([])

// Get shops list
const getShops = async () : Promise<void> => {
  const { data } = <any> await getShopsAPI(0)
  if (data.success) {
    console.log(data)
    console.log(data)
    shopList.value = data.data.content
  } else {
  }
}

const getInitials = (name: string) : string => {
  const names = name.split(' ')
  let initials: string = names[0].substring(0, 1).toUpperCase()
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return initials
}
onBeforeMount(() => {
  getShops()
})
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v2">
    <!--Personal Dashboard V2-->
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <VAvatar
            picture="/images/avatars/svg/vuero-1.svg"
            badge="/images/icons/flags/korea.svg"
            size="xl"
          />
          <div class="user-meta is-dark-bordered-12">
            <h3 class="title is-4 is-narrow is-bold">안녕하세요. 관리자님</h3>
            <p class="light-text">오늘도 찾아주셔서 감사합니다.</p>
          </div>
          <div class="user-action">
            <h3 class="title is-2 is-narrow">{{ shopList.length }}</h3>
            <p class="light-text">관리 매장수</p>
            <a class="action-link" tabindex="0" v-if="false">View Tasks</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
              <p class="white-text has-text-weight-bold">에코맵은 사장님들의 환경에 대한 관심과 노력에 보답하고자 매일 매일 업데이트 하고 있습니다.</p>
            </div>
            <a class="link inverted-text">업데이트</a>
          </div>
        </div>
      </div>

      <div class="column is-12">
        <div class="dashboard-card has-margin-bottom">
          <div class="card-head">
            <h3 class="dark-inverted">관리 매장</h3>
            <a class="action-link"
               tabindex="0"
               @click="router.push('/sidebar/layouts/shop-make')"
            >매장추가</a>
          </div>
          <div class="active-projects">
            <!--Project-->
            <VBlock
                v-for="shop in shopList.slice(0, 3)"
                :title="shop.name"
                subtitle="에코맵 관리 매장"
                center
                @click="router.push('/sidebar/layouts/shop-detail/' + shop.shopId)"
            >
              <template #icon>
                <VAvatar
                  :initials="getInitials(shop.name)"
                  badge="/images/icons/flags/korea.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action v-if="false">
                <VAvatarStack :avatars="avatarStack1" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>
            <!--Project-->
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">매장 방문수</h3>
            <a class="action-link" tabindex="0" v-if="false">리포트</a>
          </div>
          <ApexChart
            id="completion-chart"
            :height="completionOptions.chart.height"
            :type="completionOptions.chart.type"
            :series="completionOptions.series"
            :options="completionOptions"
          >
          </ApexChart>
        </div>

        <div class="dashboard-card" v-if="false">
          <div class="card-head">
            <h3 class="dark-inverted">Team Efficiency</h3>
            <a class="action-link" tabindex="0" v-if="false">리포트</a>
          </div>
          <ApexChart
            id="efficiency-chart"
            :height="barOptions.chart.height"
            :type="barOptions.chart.type"
            :series="barOptions.series"
            :options="barOptions"
          >
          </ApexChart>
        </div>
      </div>

      <div class="column is-4" v-if="false">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">My Team</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <div class="active-team">
            <ul class="user-list">
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar picture="/demo/avatars/18.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user18" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Esteban C.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar initials="SC" color="h-orange" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user120" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Sara Connor</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar picture="/demo/avatars/13.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user13" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Tara S.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar initials="NL" color="success" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user121" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Naomi Liversky</div>
                  <div class="position">Frontend developer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Todo Today</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_1" />
                <div class="item-meta">
                  <span class="dark-inverted">Call Mr. Markstrom</span>
                  <span>Review the project initial wireframes</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_2" />
                <div class="item-meta">
                  <span class="dark-inverted">Finish wireframes</span>
                  <span>Make all requested changes and publish</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_3" />
                <div class="item-meta">
                  <span class="dark-inverted">Update timesheets</span>
                  <span>Update all the team timesheets</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_4" />
                <div class="item-meta">
                  <span class="dark-inverted">Request payout</span>
                  <span>send project invoice to client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <VPlaceholderSection
            title="Go Premium"
            subtitle="Unlock more features and business tools by going premium"
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/chart-guy.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/chart-guy-dark.svg"
                alt=""
              />
            </template>

            <template #action>
              <VButton color="primary" elevated> Go Premium </VButton>
            </template>
          </VPlaceholderSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v2 {
  .dashboard-header {
    @include vuero-s-card;

    display: flex;
    align-items: center;
    padding: 30px;

    .user-meta {
      padding: 0 3rem;
      border-right: 1px solid var(--fade-grey-dark-3) h3 {
        max-width: 180px;
      }
    }

    .user-action {
      padding: 0 3rem;
    }

    .cta {
      position: relative;
      flex-grow: 2;
      max-width: 275px;
      margin-left: auto;
      background: var(--primary-light-8);
      padding: 20px;
      border-radius: var(--radius-large);
      box-shadow: var(--primary-box-shadow);

      .lnil,
      .lnir {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 4rem;
        opacity: 0.3;
      }

      .link {
        font-family: var(--font-alt);
        display: block;
        font-weight: 500;
        margin-top: 0.5rem;

        &:hover,
        &:focus {
          color: var(--smoke-white);
          opacity: 0.6;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    padding: 30px;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 0;
      }
    }

    .active-projects,
    .active-team,
    .active-list {
      padding: 10px 0;
    }
  }
}

.is-dark {
  .personal-dashboard-v2 {
    .dashboard-header,
    .dashboard-card {
      @include vuero-card--dark;
    }

    .home-header {
      .cta {
        background: var(--primary-light-2);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .personal-dashboard-v2 {
    .dashboard-header {
      flex-direction: column;
      text-align: center;

      .v-avatar {
        margin-bottom: 10px;
      }

      .user-meta {
        padding-top: 10px;
        padding-bottom: 10px;
        border: none;
      }

      .user-action {
        padding-bottom: 30px;
      }

      .cta {
        margin-left: 0;
      }
    }

    .active-projects {
      .media-flex-center {
        .flex-end {
          .avatar-stack {
            display: none;
          }
        }
      }
    }
  }
}
</style>
