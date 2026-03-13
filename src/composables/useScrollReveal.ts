import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'

export function useScrollReveal(refName: string, threshold = 0.15) {
  const isVisible = ref(false)
  const elementRef = useTemplateRef<HTMLElement>(refName)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(elementRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { isVisible }
}
