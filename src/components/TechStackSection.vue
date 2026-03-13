<script setup lang="ts">
import { computed } from 'vue'
import { techStack, techCategories, techCategoryLabels } from '../data/techstack'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLocale } from '../composables/useLocale'

const { isVisible } = useScrollReveal('techSection')
const { locale } = useLocale()

const grouped = computed(() =>
  techCategories.map((cat) => ({
    label: cat,
    items: techStack.filter((t) => t.category === cat),
  }))
)

function initials(name: string): string {
  return name.slice(0, 2).toUpperCase()
}

function itemIndex(catIndex: number, itemIdx: number): number {
  let offset = 0
  for (let i = 0; i < catIndex; i++) {
    offset += grouped.value[i]?.items.length ?? 0
  }
  return offset + itemIdx
}
</script>

<template>
  <section id="tech-stack" ref="techSection" class="px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <h2
        class="mb-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
      >
        {{ locale === 'en' ? 'Tech Stack' : '기술 스택' }}
      </h2>
      <p
        class="mb-12 text-center text-[var(--color-text-muted)] transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        style="transition-delay: 100ms"
      >
        {{ locale === 'en' ? 'Technologies I work with' : '활용하는 기술들' }}
      </p>

      <!-- Category groups -->
      <div class="space-y-10">
        <div
          v-for="(group, catIndex) in grouped"
          :key="group.label"
          class="transition-all duration-700 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :style="{ transitionDelay: `${200 + catIndex * 80}ms` }"
        >
          <!-- Category label -->
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
            {{ techCategoryLabels[group.label]?.[locale] ?? group.label }}
          </p>

          <!-- Items grid -->
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div
              v-for="(tech, idx) in group.items"
              :key="tech.name"
              class="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-4 transition-all duration-300 hover:scale-105 hover:border-[var(--color-accent-orange)]/40"
              :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
              :style="{ transitionDelay: `${300 + itemIndex(catIndex, idx) * 40}ms` }"
            >
              <!-- Icon or fallback -->
              <img
                v-if="tech.icon"
                :src="tech.icon"
                :alt="tech.name"
                class="h-10 w-10 object-contain"
                loading="lazy"
              />
              <div
                v-else
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-orange)]/15 text-sm font-bold text-[var(--color-accent-orange)]"
              >
                {{ initials(tech.name) }}
              </div>

              <!-- Name -->
              <span class="text-center text-xs font-medium leading-tight text-[var(--color-text-primary)]">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
