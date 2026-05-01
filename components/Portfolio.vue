<template>
  <section id="portfolio" class="section overflow-hidden">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">Projects</span>
        <h2 class="section-title">개인 프로젝트</h2>
        <p class="section-subtitle">
          최신순. 회사 일이 아닌, 개인 시간에 만들어 본 것들 — 아마추어 시절의
          습작부터 최근 작업까지.
        </p>
      </div>

      <ol
        class="relative mx-auto mt-20 max-w-5xl space-y-20 sm:space-y-32 sm:before:absolute sm:before:inset-y-0 sm:before:left-1/2 sm:before:w-px sm:before:-translate-x-1/2 sm:before:bg-gradient-to-b sm:before:from-transparent sm:before:via-zinc-800 sm:before:to-transparent"
      >
        <li
          v-for="(item, i) in items"
          :key="item.key"
          class="relative"
        >
          <span
            class="pointer-events-none absolute left-1/2 top-1/2 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-indigo-400 bg-zinc-950 sm:block"
            aria-hidden="true"
          ></span>

          <button
            type="button"
            class="group relative grid w-full items-center gap-6 text-left sm:grid-cols-2 sm:gap-12"
            :class="i % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-2'"
            @click="openModal(item.key)"
          >
            <div
              class="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 shadow-2xl shadow-black/40 transition group-hover:border-indigo-400/60 group-hover:shadow-indigo-500/10"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="size-full object-cover transition duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent transition group-hover:from-zinc-950/30"
              ></div>
              <div
                class="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-indigo-500/90 text-white opacity-0 shadow-lg shadow-indigo-500/40 transition group-hover:opacity-100"
                aria-hidden="true"
              >
                <Icon name="lucide:arrow-up-right" size="1.1em" />
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span
                  class="font-mono text-3xl font-bold tracking-tight text-zinc-700 transition group-hover:text-indigo-400 sm:text-4xl"
                >
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <span
                  class="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400"
                >
                  {{ item.period }}
                </span>
              </div>

              <h3
                class="text-2xl font-bold tracking-tight text-white transition group-hover:text-indigo-200 sm:text-3xl"
                style="font-family: 'Roboto Slab', serif"
              >
                {{ item.title }}
              </h3>

              <p class="text-base text-zinc-400">
                {{ item.subtitle }}
              </p>

              <div class="flex items-center gap-2 pt-2">
                <span class="btn-link">
                  자세히 보기
                  <Icon
                    name="lucide:arrow-right"
                    class="transition group-hover:translate-x-1"
                    size="1em"
                  />
                </span>
              </div>
            </div>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = useProjectsItems()
const { open: openModal } = useModal()
</script>
