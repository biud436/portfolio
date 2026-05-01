<template>
  <article class="surface overflow-hidden">
    <header
      class="flex flex-col gap-3 border-b border-zinc-800 bg-gradient-to-r from-zinc-800/40 to-zinc-900/40 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <div>
        <span
          class="inline-block rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-300"
          >이전 직장</span
        >
        <h3 class="mt-2 text-xl font-bold text-white sm:text-2xl">(주)하벤</h3>
        <p class="mt-1 text-sm text-zinc-400">Node.js Developer</p>
      </div>
      <div class="flex items-center gap-2 text-sm text-zinc-400">
        <Icon name="lucide:calendar-days" />
        <span>2021.04 — 2024.09 · 3년 6개월</span>
      </div>
    </header>

    <div class="px-6 py-6 sm:px-8 sm:py-7">
      <h4
        class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
      >
        주요 업무
      </h4>
      <ul class="space-y-2.5">
        <li
          v-for="(duty, i) in duties"
          :key="i"
          class="flex items-start gap-3 text-zinc-300"
        >
          <Icon
            name="lucide:check"
            class="mt-1 shrink-0 text-indigo-400"
            size="1em"
          />
          <span>{{ duty }}</span>
        </li>
      </ul>

      <div v-if="sortedContents.length" class="mt-6 border-t border-zinc-800 pt-6">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-2 text-left text-sm font-semibold uppercase tracking-wider text-zinc-300 transition hover:text-white"
          :aria-expanded="expanded"
          @click="expanded = !expanded"
        >
          <span class="flex items-center gap-2">
            <Icon name="lucide:file-text" class="text-indigo-300" />
            상세 내용 ({{ sortedContents.length }}건)
          </span>
          <Icon
            :name="expanded ? 'lucide:chevron-up' : 'lucide:chevron-down'"
            class="text-zinc-400"
          />
        </button>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="expanded" class="mt-5 space-y-6">
            <article
              v-for="item in sortedContents"
              :key="item.path"
              class="rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-4"
            >
              <ContentRenderer :value="item" class="prose-invert-tight" />
            </article>
          </div>
        </Transition>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const duties = [
  '앱과 연계되는 백엔드 서버 개발 및 유지 보수',
  '자사 제품과 연동되는 대시보드 사이트 개발 및 유지 보수',
  '인프라 구축, 운영, 배포 등 전반적인 DevOps 구축 및 관리',
]

const expanded = ref(false)

const { data: contents } = await useAsyncData('career-all', () =>
  queryCollection('career').all(),
)

const sortedContents = computed(() => {
  const list = contents.value ?? []
  const re = /^([\d]+)-(.*)/
  return [...list].sort((a, b) => {
    const prev = String(a.path).split('/').pop() ?? ''
    const next = String(b.path).split('/').pop() ?? ''
    const g1 = re.exec(prev)
    const g2 = re.exec(next)
    if (!g1 || !g2) return 0
    return parseInt(g2[1], 10) - parseInt(g1[1], 10)
  })
})
</script>
