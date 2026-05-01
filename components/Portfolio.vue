<template>
  <section id="portfolio" class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">Projects</span>
        <h2 class="section-title">개인 프로젝트</h2>
        <p class="section-subtitle">
          취미와 학습 과정에서 만든 사이드 프로젝트들. 카드를 클릭하면 자세한
          내용이 열립니다.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="item in items"
          :key="item.key"
          type="button"
          class="surface group flex flex-col overflow-hidden text-left transition hover:-translate-y-1 hover:border-indigo-400/60"
          @click="openModal(item.key)"
        >
          <div class="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
            <img
              :src="item.image"
              :alt="item.title"
              class="size-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-zinc-950/0"
            ></div>
            <div class="absolute left-3 top-3">
              <span
                class="inline-block rounded-full bg-zinc-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-indigo-200 backdrop-blur"
                >{{ item.subtitle }}</span
              >
            </div>
            <div
              class="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-indigo-500/90 text-white opacity-0 shadow-lg shadow-indigo-500/40 transition group-hover:opacity-100"
              aria-hidden="true"
            >
              <Icon name="lucide:plus" size="1.2em" />
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-2 p-5">
            <h3
              class="text-lg font-semibold text-white transition group-hover:text-indigo-200"
            >
              {{ item.title }}
            </h3>
            <p class="line-clamp-2 text-sm text-zinc-400">
              {{ summaries[item.key] ?? '자세한 내용을 보려면 클릭하세요.' }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { items, contents } = useProjects()
const { open: openModal } = useModal()

const summaries = computed(() => {
  const map: Record<string, string> = {}
  for (const c of contents.value ?? []) {
    const slug = String(c.path).split('/').pop()
    if (!slug) continue
    const desc = (c as { description?: string }).description
    if (desc) {
      map[slug] = desc
    }
  }
  return map
})
</script>
