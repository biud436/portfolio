<template>
  <section class="page-section bg-light" id="portfolio2">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">업무 경험</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>

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
    </div>
  </section>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contents: <IContentDocument[]>[],
    };
  },
  async mounted() {
    await this.loadDashboardData();
  },
  methods: {
    async loadDashboardData() {
      this.contents = (await this.$content(
        'career'
      ).fetch()) as IContentDocument[];

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
