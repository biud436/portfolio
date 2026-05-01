<template>
  <section class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">About</span>
        <h2 class="section-title">자기소개</h2>
      </div>

      <article
        class="surface mx-auto mt-12 max-w-3xl px-6 py-8 sm:px-10 sm:py-10"
      >
        <ContentRenderer
          v-if="skill"
          :value="skill"
          class="prose-invert-tight"
        />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: skill } = await useAsyncData('skill-skillList', () =>
  queryCollection('skills').first(),
)
</script>
