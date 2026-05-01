export function useNavbarShrink(threshold = 100) {
  const shrunk = ref(false)

  function update() {
    shrunk.value = window.scrollY > threshold
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
  })

  return { shrunk }
}
