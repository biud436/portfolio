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

              <div class="px-6 py-8 sm:px-10 sm:py-10 prose-invert-tight">
                <ShoppingMallModal v-if="current === 'portfolioModal1'" />
                <WeatherModal v-else-if="current === 'portfolioModal2'" />
                <TileMapEditorModal v-else-if="current === 'portfolioModal3'" />
                <ShortUrlModal v-else-if="current === 'portfolioModal4'" />
                <AndroidBuilderModal v-else-if="current === 'portfolioModal5'" />
                <Initial2DModal v-else-if="current === 'portfolioModal6'" />
              </div>

              <div
                class="flex justify-end border-t border-zinc-800 bg-zinc-950/40 px-6 py-4 sm:px-10"
              >
                <button class="btn-ghost" type="button" @click="close">
                  <Icon name="lucide:x" size="1em" />
                  닫기
                </button>
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
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const { current, close } = useModal()
const isVisible = computed(() => current.value !== null)
</script>
