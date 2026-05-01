<template>
  <section id="contact" class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">Profile</span>
        <h2 class="section-title">소개</h2>
        <p class="section-subtitle">
          연락처와 외부 채널을 한곳에 정리했습니다.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-4xl items-center gap-10 md:grid-cols-[280px_1fr]">
        <div class="flex justify-center md:justify-start">
          <div class="relative">
            <div
              class="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/30 blur-2xl"
            ></div>
            <img
              class="size-56 rounded-full border-4 border-zinc-900 object-cover ring-1 ring-zinc-800 sm:size-64"
              src="https://avatars1.githubusercontent.com/u/13586185?s=460&u=d695c01ba6ffbb01eb9230a7d7bb938b6d0c69e0&v=4"
              alt="어진석 프로필 사진"
            />
          </div>
        </div>

        <ul class="space-y-3">
          <li v-for="link in links" :key="link.label">
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="surface group flex items-center gap-4 px-5 py-4 transition hover:border-indigo-400/50 hover:bg-zinc-900"
            >
              <span
                class="grid size-11 shrink-0 place-items-center rounded-xl bg-zinc-800/80 text-indigo-300 transition group-hover:bg-indigo-500/15 group-hover:text-indigo-200"
              >
                <Icon :name="link.icon" size="1.3em" />
              </span>
              <div class="min-w-0 flex-1">
                <p class="text-xs uppercase tracking-wider text-zinc-500">
                  {{ link.label }}
                </p>
                <p class="truncate text-base text-zinc-100">
                  {{ link.value }}
                </p>
              </div>
              <Icon
                v-if="link.external"
                name="lucide:arrow-up-right"
                class="text-zinc-600 transition group-hover:text-indigo-300"
                size="1.1em"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    value: 'github.com/biud436',
    href: 'https://github.com/biud436/',
    icon: 'fa6-brands:github',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jinseok-eo',
    href: 'https://www.linkedin.com/in/jinseok-eo/',
    icon: 'fa6-brands:linkedin-in',
    external: true,
  },
]
</script>
