export function useModal() {
  const current = useState<string | null>('active-modal', () => null)

  function open(id: string) {
    current.value = id
  }

  function close() {
    current.value = null
  }

  function isOpen(id: string) {
    return computed(() => current.value === id)
  }

  return { current, open, close, isOpen }
}
