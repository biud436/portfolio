<template>
  <header ref="headerRef" class="masthead">
    <div class="container">
      <div ref="typeRef" class="masthead-subheading">Welcome To My Portfolio</div>
      <div class="masthead-heading text-uppercase"></div>
      <a
        class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
        href="#portfolio"
        @click="onClick"
        >프로젝트 목록 확인</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const typeRef = ref<HTMLElement | null>(null)
const { handleClick } = useSmoothScroll()

if (import.meta.client) {
  useVantaDots(headerRef)
  useTypewriter(typeRef, "Eo JinSeok's Portfolio.", { loop: true })
}

function onClick(e: MouseEvent) {
  handleClick(e)
}
</script>

<style>
canvas {
  background-color: #000;
}
</style>
