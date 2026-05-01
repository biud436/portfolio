<template>
  <section
    id="page-top"
    ref="headerRef"
    class="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4"
  >
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"
    ></div>

    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <p
        class="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-indigo-300"
      >
        Welcome to my portfolio
      </p>
      <h1
        class="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl"
        style="font-family: 'Roboto Slab', serif"
      >
        Eo JinSeok
      </h1>
      <div class="mt-5 flex min-h-[2.5rem] items-center justify-center">
        <span
          ref="typeRef"
          class="text-lg italic text-zinc-300 sm:text-xl"
          style="font-family: 'Droid Serif', serif"
        ></span>
      </div>

      <div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a class="btn-cta" href="#portfolio" @click="onClick">
          프로젝트 보기
          <Icon name="lucide:arrow-right" size="1.1em" />
        </a>
        <a class="btn-ghost" href="#contact" @click="onClick">
          프로필 보기
        </a>
      </div>
    </div>

    <a
      href="#contact"
      class="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-1 text-zinc-500 transition hover:text-zinc-300"
      @click="onClick"
    >
      <span class="text-[11px] uppercase tracking-[0.3em]">scroll</span>
      <Icon name="lucide:chevron-down" class="animate-bounce" size="1.2em" />
    </a>
  </section>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const typeRef = ref<HTMLElement | null>(null)
const { handleClick } = useSmoothScroll()

useVantaDots(headerRef)
useTypewriter(typeRef, "Eo JinSeok's Portfolio.", { loop: true })

function onClick(e: MouseEvent) {
  handleClick(e)
}
</script>
