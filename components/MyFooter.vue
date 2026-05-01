<template>
  <footer class="border-t border-zinc-800/60 px-4 py-10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"
    >
      <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">
        © 어진석 · {{ year }}
      </p>
      <div class="flex items-center gap-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :aria-label="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-indigo-400/60 hover:text-indigo-300"
        >
          <Icon :name="link.icon" size="1.1em" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const links = [
  { label: 'GitHub', href: 'https://github.com/biud436/', icon: 'fa6-brands:github' },
  { label: 'Blog', href: 'https://blog.naver.com/biud436', icon: 'lucide:rss' },
  { label: 'Email', href: 'mailto:biud436@gmail.com', icon: 'lucide:mail' },
]
</script>
