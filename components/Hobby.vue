<template>
  <section class="page-section bg-light" id="portfolio2">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">기타 프로젝트</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>

      <div class="row">
        <a id="career-dashboard"></a>
        <div class="col-md-12 mb-4">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p
                  class="
                    card-text-non-interactive card-description-non-interactive
                    active
                  "
                >
                  <nuxt-content :document="contents.hobby"></nuxt-content>
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
        hobby: {},
      },
    };
  },
  async mounted() {
    await this.loadDashboardData();
  },
  methods: {
    async loadDashboardData() {
      const markdown = await this.$content('projects', 'hobby').fetch();

      this.contents.hobby = markdown;
    },
  },
});
</script>
<style lang="scss"></style>
