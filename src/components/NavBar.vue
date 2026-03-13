<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'

const { locale, toggleLocale } = useLocale()
const { isDark, toggleTheme } = useTheme()

const navItems = computed(() => [
  { label: locale.value === 'en' ? 'Home' : '홈', href: '#hero' },
  { label: locale.value === 'en' ? 'Skills' : '기술', href: '#tech-stack' },
  { label: locale.value === 'en' ? 'Story' : '이야기', href: '#story' },
  { label: locale.value === 'en' ? 'Projects' : '프로젝트', href: '#projects' },
  { label: locale.value === 'en' ? 'Contact' : '연락처', href: '#contact' },
])

const activeSection = ref('#hero')
const scrolled = ref(false)

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

let ticking = false
const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const newScrolled = window.scrollY > 20
    if (scrolled.value !== newScrolled) scrolled.value = newScrolled

    const sections = [...navItems.value].reverse()
    let newActive = '#hero'
    for (const item of sections) {
      const el = document.querySelector(item.href)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 150) {
          newActive = item.href
          break
        }
      }
    }
    if (activeSection.value !== newActive) activeSection.value = newActive

    ticking = false
  })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 transition-all duration-300" :class="scrolled ? 'pt-3' : 'pt-6'">
    <!-- Left: toggles -->
    <div class="flex items-center gap-2">
      <button
        @click="toggleLocale"
        class="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] backdrop-blur-xl transition-all hover:border-[var(--color-accent-orange)] hover:text-[var(--color-accent-orange)]"
        :class="scrolled ? 'bg-[var(--color-bg-card)]/90' : 'bg-[var(--color-bg-card)]/60'"
      >
        {{ locale === 'en' ? 'KR' : 'EN' }}
      </button>
      <button
        @click="toggleTheme"
        class="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text-secondary)] backdrop-blur-xl transition-all hover:border-[var(--color-accent-orange)] hover:text-[var(--color-accent-orange)]"
        :class="scrolled ? 'bg-[var(--color-bg-card)]/90' : 'bg-[var(--color-bg-card)]/60'"
      >
        <svg v-if="isDark" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>

    <!-- Center: nav pills -->
    <div
      class="flex items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-xl transition-all duration-300"
      :class="scrolled
        ? 'border-[var(--color-border)] bg-[var(--color-bg-card)]/90 shadow-lg shadow-black/20'
        : 'border-[var(--color-border)]/50 bg-[var(--color-bg-card)]/60'"
    >
      <button
        v-for="item in navItems"
        :key="item.href"
        class="rounded-full px-4 py-2 text-sm transition-all duration-300"
        :class="activeSection === item.href
          ? 'bg-[var(--color-accent-orange)]/10 font-medium text-[var(--color-accent-orange)]'
          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-primary)]'"
        @click="scrollTo(item.href)"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- Right: spacer for centering -->
    <div class="w-[88px]"></div>
  </nav>
</template>
