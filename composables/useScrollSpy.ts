export function useScrollSpy(sectionIds: string[], offset = 74) {
  const activeId = ref<string | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          )
        if (visible.length > 0) activeId.value = visible[0].target.id
      },
      { rootMargin: `-${offset}px 0px -50% 0px`, threshold: 0 },
    )

    sections.forEach((s) => observer!.observe(s))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { activeId }
}
