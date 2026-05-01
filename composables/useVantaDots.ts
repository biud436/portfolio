import type { Ref } from 'vue'

interface VantaInstance {
  destroy: () => void
}

interface VantaOptions {
  el: HTMLElement
  THREE: unknown
  mouseControls?: boolean
  touchControls?: boolean
  gyroControls?: boolean
  minHeight?: number
  minWidth?: number
  scale?: number
  scaleMobile?: number
  color?: number
  backgroundColor?: number
}

export function useVantaDots(target: Ref<HTMLElement | null>) {
  let instance: VantaInstance | null = null

  onMounted(async () => {
    if (!target.value) return
    const THREE = await import('three')
    const VANTA = (await import('vanta/dist/vanta.dots.min')).default as (
      opts: VantaOptions,
    ) => VantaInstance

    const rect = target.value.getBoundingClientRect()
    instance = VANTA({
      el: target.value,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: rect.height / 2,
      minWidth: rect.width,
      scale: 1.0,
    })
  })

  onBeforeUnmount(() => {
    instance?.destroy()
    instance = null
  })
}
