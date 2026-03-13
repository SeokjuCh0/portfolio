import { ref, type Ref } from 'vue'

export type Locale = 'en' | 'ko'

// Global singleton - shared across all components
const locale = ref<Locale>('en') as Ref<Locale>

export function useLocale() {
  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'ko' : 'en'
  }
  return { locale, toggleLocale }
}
