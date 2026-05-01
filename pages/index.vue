<template>
  <div>
    <MasterHeader />
    <Contact />
    <MySkillList />
    <SkillList />

    <section id="career" class="section">
      <div class="section-inner">
        <div class="text-center">
          <span class="eyebrow">Experience</span>
          <h2 class="section-title">경력</h2>
          <p class="section-subtitle">
            이전 직장에서 현재까지의 경력 사항.
          </p>
        </div>
        <div class="mt-12 space-y-6">
          <PortfolioCareerCarnotfleet />
          <PortfolioCareerHarven />
        </div>
      </div>
    </section>

    <Portfolio />
    <Hobby />
    <MyFooter />
    <ProjectList />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'main' })
</script>
