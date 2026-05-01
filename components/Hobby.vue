<template>
  <section id="portfolio2" class="page-section bg-light">
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
                <div
                  class="card-text-non-interactive card-description-non-interactive active"
                >
                  <ContentRenderer v-if="hobby" :value="hobby" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: hobby } = await useAsyncData('projects-hobby', () =>
  queryCollection('projects').path('/projects/hobby').first(),
)
</script>
