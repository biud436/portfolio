<template>
  <div class="page-section bg-white">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">소개</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row">
        <ContentRenderer v-if="skill" :value="skill" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: skill } = await useAsyncData('skill-skillList', () =>
  queryCollection('skills').path('/skillList').first(),
)
</script>
