<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-all duration-300"
    :class="
      shrunk
        ? 'border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md py-3'
        : 'bg-transparent py-5'
    "
  >
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
      <a
        href="#page-top"
        class="font-semibold uppercase tracking-[0.25em] text-white"
        @click="onClick"
      >
        EO·JINSEOK
      </a>

      <button
        type="button"
        class="rounded-md p-2 text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white md:hidden"
        :aria-expanded="open"
        aria-label="메뉴"
        @click="open = !open"
      >
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="1.4em" />
      </button>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider text-zinc-300 transition hover:text-white"
            @click="onClick"
            >{{ item.label }}</a
          >
        </li>
      </ul>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="open"
        class="mx-4 mt-3 flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/95 p-2 shadow-xl shadow-black/40 backdrop-blur md:hidden"
      >
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
            @click="onClick"
            >{{ item.label }}</a
          >
        </li>
      </ul>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { shrunk } = useNavbarShrink(40)
const { handleClick } = useSmoothScroll()
const open = ref(false)

const navItems = [
  { label: 'Profile', href: '#contact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Career', href: '#career' },
  { label: 'Projects', href: '#portfolio' },
]

function onClick(e: MouseEvent) {
  handleClick(e)
  open.value = false
}
</script>
