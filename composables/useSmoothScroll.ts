function easeInOutExpo(t: number): number {
  if (t === 0) return 0
  if (t === 1) return 1
  if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2
  return (2 - Math.pow(2, -20 * t + 10)) / 2
}

export function useSmoothScroll() {
  function scrollTo(hash: string, offset = 64, duration = 800) {
    if (!import.meta.client) return
    if (!hash || hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(hash) as HTMLElement | null
    if (!target) return

    const start = window.scrollY
    const end = target.getBoundingClientRect().top + start - offset
    const distance = end - start
    const startTime = performance.now()

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, start + distance * easeInOutExpo(progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function handleClick(event: MouseEvent) {
    const link = (event.target as HTMLElement | null)?.closest(
      'a[href^="#"]',
    ) as HTMLAnchorElement | null
    if (!link) return
    const hash = link.getAttribute('href') ?? ''
    if (!hash.startsWith('#')) return
    event.preventDefault()
    scrollTo(hash)
  }

  return { scrollTo, handleClick }
}
