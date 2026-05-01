<template>
  <section v-if="hobby" class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">Etc</span>
        <h2 class="section-title">기타 프로젝트</h2>
        <p class="section-subtitle">크고 작은 사이드 작업들.</p>
      </div>

      <article
        class="surface mx-auto mt-12 max-w-3xl px-6 py-8 sm:px-10 sm:py-10"
      >
        <ContentRenderer :value="hobby" class="prose-invert-tight" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: hobby } = await useAsyncData('projects-hobby', () =>
  queryCollection('projects').path('/projects/hobby').first(),
)
</script>
