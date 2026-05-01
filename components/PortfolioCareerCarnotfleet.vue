<template>
  <article class="surface overflow-hidden">
    <header
      class="flex flex-col gap-3 border-b border-zinc-800 bg-gradient-to-r from-indigo-500/15 to-purple-500/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <div>
        <span
          class="inline-block rounded-full border border-indigo-400/50 bg-indigo-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-200"
          >현재 재직</span
        >
        <h3 class="mt-2 text-xl font-bold text-white sm:text-2xl">
          (주)카르노플릿
        </h3>
        <p class="mt-1 text-sm text-zinc-400">Node.js Developer</p>
      </div>
      <div class="flex items-center gap-2 text-sm text-zinc-400">
        <Icon name="lucide:calendar-days" />
        <span>2024.09 — 현재</span>
      </div>
    </header>

    <div class="px-6 py-6 sm:px-8 sm:py-7">
      <h4
        class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
      >
        주요 업무
      </h4>
      <ul class="space-y-2.5">
        <li class="flex items-start gap-3 text-zinc-300">
          <Icon
            name="lucide:check"
            class="mt-1 shrink-0 text-indigo-400"
            size="1em"
          />
          <span>백엔드/프론트엔드/앱 담당</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts"></script>
