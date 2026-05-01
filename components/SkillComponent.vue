<template>
  <li
    class="surface group flex aspect-square flex-col items-center justify-center gap-3 p-4 transition hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-zinc-900"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="hovering = true"
    @focusout="hovering = false"
    tabindex="0"
  >
    <img
      :src="imgsrc"
      :alt="normal"
      class="size-14 object-contain transition duration-200 group-hover:scale-110"
      loading="lazy"
    />
    <p class="text-center text-sm font-medium text-zinc-200">
      {{ hovering ? status : normal }}
    </p>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  imgsrc: string
  normal: string
  status: string
}>()

const hovering = ref(false)
</script>
