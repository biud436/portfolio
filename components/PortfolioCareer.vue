<template>
  <section class="page-section bg-light" id="portfolio2">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">진행 프로젝트</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>

      <div class="row">
        <a id="career-dashboard"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p class="card-text card-description active">
                  <nuxt-content :document="contents.dashboard"></nuxt-content>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <a id="career-dashboard"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p class="card-text card-description active">
                  <nuxt-content
                    :document="contents.dashboard1_2"
                  ></nuxt-content>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <a id="career-dashboard"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p class="card-text card-description active">
                  <nuxt-content :document="contents.dashboard2"></nuxt-content>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <a id="career-dashboard"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p class="card-text card-description active">
                  <nuxt-content
                    :document="contents.dashboard2_2"
                  ></nuxt-content>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contents: {
        dashboard: {},
        dashboard1_2: {},
        dashboard2: {},
        dashboard2_2: {},
      },
    };
  },
  async mounted() {
    await this.loadDashboardData();
  },
  methods: {
    async loadDashboardData() {
      const markdown1 = await this.$content('career', 'dashboard-01').fetch();
      const markdown1_2 = await this.$content(
        'career',
        'dashboard-01-2'
      ).fetch();
      const markdown2 = await this.$content('career', 'dashboard-02').fetch();
      const markdown2_2 = await this.$content(
        'career',
        'dashboard-02-2'
      ).fetch();

      this.contents.dashboard = markdown1;
      this.contents.dashboard1_2 = markdown1_2;
      this.contents.dashboard2 = markdown2;
      this.contents.dashboard2_2 = markdown2_2;
    },
  },
});
</script>
<style lang="scss"></style>
