<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile'
import { useLocale } from '../composables/useLocale'

const { locale } = useLocale()

const counters = ref(profile.stats.map(() => 0))
const intervalIds: ReturnType<typeof setInterval>[] = []

onMounted(() => {
  profile.stats.forEach((stat, i) => {
    const duration = 1500
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        counters.value[i] = stat.value
        clearInterval(interval)
      } else {
        counters.value[i] = Math.floor(current)
      }
    }, duration / steps)
    intervalIds.push(interval)
  })
})

onUnmounted(() => {
  intervalIds.forEach(clearInterval)
})
</script>

<template>
  <div class="flex items-center justify-center gap-0">
    <div
      v-for="(stat, i) in profile.stats"
      :key="i"
      class="group flex items-center"
    >
      <div class="px-6 text-center md:px-10">
        <div class="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent-orange)] md:text-4xl">
          {{ counters[i] }}<span class="text-[var(--color-accent-orange)]">{{ stat.suffix ?? '+' }}</span>
        </div>
        <div class="mt-1 text-xs tracking-wider text-[var(--color-text-muted)] uppercase">
          {{ stat.label[locale] }}
        </div>
      </div>
      <div
        v-if="i < profile.stats.length - 1"
        class="h-10 w-px shrink-0 bg-[var(--color-border)]"
      />
    </div>
  </div>
</template>
