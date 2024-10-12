<template>
  <section class="page-section bg-light" id="portfolio2">
    <div class="container">
      <div class="card">
        <h5
          class="
            text-uppercase
            font-weight-bold
            white-text
            text-center
            py-4
            px-4
            text-white
          "
          style="background-color: #3f51b5"
        >
          (주)하벤
        </h5>
        <div
          class="
            px-5
            mb-5
            pb-3
            lead
            text-muted
            mt-3
            border-top border-bottom
            bg-body-tertiary
            p-3
            mb-5
          "
        >
          <!-- 재직 기간-->
          <p class="mb-0 text-muted small">
            <!-- icon -->
            <i class="fas fa-calendar-alt mr-2"></i>
            <strong>Node.js Developer</strong>
          </p>
          <span class="text-muted">2021.04 ~ 2024.09 (3년 6개월)</span>
        </div>

        <div class="px-5 pb-3 lead text-muted mt-3 bg-body-tertiary p-3 mb-1">
          <h6 class="text-muted mb-3 font-weight-bold lead">주요 업무</h6>
          <ul class="list-unstyled mb-0 text-muted small">
            <li class="mb-2">
              <i class="fas fa-check mr-2"></i> 앱과 연계되는 백엔드 서버 개발
              및 유지 보수
            </li>
            <li class="mb-2">
              <i class="fas fa-check mr-2"></i> 자사 제품과 연동되는 대시보드
              사이트 개발 및 유지 보수
            </li>
            <li class="mb-2">
              <i class="fas fa-check mr-2"></i> 인프라 구축, 운영, 배포 등
              전반적인 DevOps 구축 및 관리
            </li>
          </ul>
        </div>

        <div class="px-5 mb-5 pb-3 lead text-muted bg-body-tertiary p-3">
          <details>
            <summary class="text-muted mb-3 font-weight-bold">
              상세 내용
            </summary>
            <div class="row" v-for="(item, index) in contents" :key="index">
              <a id="career-dashboard"></a>
              <div class="col-md-12 mb-4">
                <div class="row no-gutters">
                  <div class="col-md-12">
                    <div class="card-body">
                      <p class="card-text card-description active">
                        <nuxt-content :document="item"></nuxt-content>
                      </p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';

import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contents: <any[]>[],
    };
  },
  async mounted() {
    await this.loadDashboardData();
  },
  methods: {
    async loadDashboardData() {
      this.contents = await this.$content('career').fetch<IContentDocument[]>();

      const re = /^([\d]+)\-(.*)/;

      // 정렬
      this.contents = this.contents.sort((a, b) => {
        const prev = <string>a.path.split('/').pop();
        const next = <string>b.path.split('/').pop();

        const group1 = re.exec(prev)!;
        const group2 = re.exec(next)!;

        return parseInt(group2[1], 10) - parseInt(group1[1], 10);

        // return parseInt(next.slice(0, 1)) - parseInt(prev.slice(0, 1));
      });
    },
  },
});
</script>
<style lang="scss"></style>
