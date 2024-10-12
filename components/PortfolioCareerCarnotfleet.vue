<template>
  <section class="page-section bg-light" id="portfolio2">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">경력</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
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
          (주)카르노플릿
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
          <span class="text-muted">2024.09 ~ 현재</span>
        </div>

        <div class="px-5 pb-3 lead text-muted mt-3 bg-body-tertiary p-3 mb-1">
          <h6 class="text-muted mb-3 font-weight-bold lead">주요 업무</h6>
          <ul class="list-unstyled mb-0 text-muted small">
            <li class="mb-2">
              <i class="fas fa-check mr-2"></i> 백엔드 서버 및 프론트엔드 담당
            </li>
          </ul>
        </div>
        <div class="mb-5"></div>
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
