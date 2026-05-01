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
        <div class="fixed inset-0 bg-black/70" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative my-8 w-full max-w-3xl rounded bg-white p-8 text-black shadow-lg"
            >
              <button
                type="button"
                class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
                @click="close"
              >
                <Icon name="fa6-solid:xmark" size="1.5em" />
              </button>

              <ShoppingMallModal v-if="current === 'portfolioModal1'" />
              <WeatherModal v-else-if="current === 'portfolioModal2'" />
              <TileMapEditorModal v-else-if="current === 'portfolioModal3'" />
              <ShortUrlModal v-else-if="current === 'portfolioModal4'" />
              <AndroidBuilderModal v-else-if="current === 'portfolioModal5'" />
              <Initial2DModal v-else-if="current === 'portfolioModal6'" />

              <div class="mt-6">
                <button class="btn btn-primary" type="button" @click="close">
                  <Icon name="fa6-solid:xmark" class="mr-1" />
                  Close Project
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
