<template>
  <TransitionRoot appear :show="isVisible" as="template">
    <Dialog as="div" class="relative z-50" @close="close">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-zinc-950/80 backdrop-blur" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 sm:p-8">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95 translate-y-4"
            enter-to="opacity-100 scale-100 translate-y-0"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              v-if="active"
              class="surface relative my-8 w-full max-w-3xl overflow-hidden"
            >
              <button
                type="button"
                class="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 backdrop-blur transition hover:border-zinc-600 hover:text-white"
                aria-label="모달 닫기"
                @click="close"
              >
                <Icon name="lucide:x" size="1.1em" />
              </button>

              <div class="relative aspect-[16/7] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="active.item.image"
                  :alt="active.item.title"
                  class="size-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-10">
                  <DialogTitle
                    class="text-2xl font-bold text-white sm:text-3xl"
                    style="font-family: 'Roboto Slab', serif"
                  >
                    {{ active.item.title }}
                  </DialogTitle>
                  <p
                    class="mt-1 text-sm font-medium uppercase tracking-wider text-indigo-300"
                  >
                    {{ active.item.subtitle }}
                  </p>
                </div>
              </div>

              <div class="px-6 py-7 sm:px-10 sm:py-8">
                <ContentRenderer
                  v-if="active.content"
                  :value="active.content"
                  class="prose-invert-tight"
                />
                <p v-else class="text-zinc-500">
                  내용을 불러오지 못했습니다.
                </p>

                <div
                  v-if="active.item.links.length"
                  class="mt-8 flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-6"
                >
                  <a
                    v-for="link in active.item.links"
                    :key="link.href"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-ghost"
                  >
                    <Icon
                      :name="link.icon ?? 'fa6-brands:github'"
                      size="1em"
                    />
                    {{ link.label }}
                  </a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const { current, close } = useModal()
const { items, contents } = useProjects()
const isVisible = computed(() => current.value !== null)

const active = computed(() => {
  if (!current.value) return null
  const item = items.find((i) => i.key === current.value)
  if (!item) return null
  const content =
    contents.value?.find(
      (c) => String(c.path).split('/').pop() === current.value,
    ) ?? null
  return { item, content }
})
</script>
