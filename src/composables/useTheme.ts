import { ref } from 'vue'

const isDark = ref(true)

// Module-level init — runs exactly once regardless of how many components call useTheme()
if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem('theme')
  if (saved) isDark.value = saved === 'dark'
}

function applyTheme() {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }
}

// Apply on load
applyTheme()

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  return { isDark, toggleTheme }
}
