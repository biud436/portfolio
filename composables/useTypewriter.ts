import type { Ref } from 'vue'

interface TypewriterInstance {
  typeString: (text: string) => TypewriterInstance
  pauseFor: (ms: number) => TypewriterInstance
  start: () => TypewriterInstance
  stop: () => void
}

interface TypewriterOptions {
  loop?: boolean
  delay?: number
  cursor?: string
}

export function useTypewriter(
  target: Ref<HTMLElement | null>,
  text: string,
  options: TypewriterOptions = { loop: true },
) {
  let writer: TypewriterInstance | null = null

  onMounted(async () => {
    if (!target.value) return
    const Typewriter = (await import('typewriter-effect/dist/core')).default
    writer = new Typewriter(target.value, options) as TypewriterInstance
    writer.typeString(text).pauseFor(2500).start()
  })

  onBeforeUnmount(() => {
    writer?.stop()
    writer = null
  })
}
