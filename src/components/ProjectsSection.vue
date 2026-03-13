<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLocale } from '../composables/useLocale'

const { isVisible } = useScrollReveal('projectsSection')
const { locale } = useLocale()

const localizedProjects = computed(() => projects[locale.value])

// Keyed by project id (locale-stable) instead of role string (which differs per locale)
const projectStyles: Record<string, { badge: string; glow: string }> = {
  'web-infra': {
    badge: 'bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)]',
    glow: 'hover:border-[var(--color-accent-orange)]/20 hover:shadow-[0_0_15px_rgba(249,115,22,0.04)]',
  },
  'fullstack-app': {
    badge: 'bg-[var(--color-accent-lime)]/10 text-[var(--color-accent-lime)]',
    glow: 'hover:border-[var(--color-accent-lime)]/20 hover:shadow-[0_0_15px_rgba(132,204,22,0.04)]',
  },
  'ai-agent': {
    badge: 'bg-purple-500/10 text-purple-400',
    glow: 'hover:border-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.04)]',
  },
  'data-pipeline': {
    badge: 'bg-blue-500/10 text-blue-400',
    glow: 'hover:border-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.04)]',
  },
}

const getStyle = (id: string) => projectStyles[id] || { badge: 'bg-gray-500/10 text-gray-400', glow: '' }
</script>

<template>
  <section id="projects" ref="projectsSection" class="px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <h2
        class="mb-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
      >
        {{ locale === 'en' ? 'Projects' : '프로젝트' }}
      </h2>
      <p
        class="mb-12 text-center text-[var(--color-text-muted)] transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        style="transition-delay: 100ms"
      >
        {{ locale === 'en' ? 'Systems I designed and built in production' : '프로덕션에서 설계하고 구축한 시스템' }}
      </p>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(project, index) in localizedProjects"
          :key="project.id"
          :class="[
            'group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all duration-500',
            getStyle(project.id).glow,
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ]"
          :style="{ transitionDelay: `${200 + index * 100}ms` }"
        >
          <!-- Role badge -->
          <div :class="['mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold', getStyle(project.id).badge]">
            {{ project.role }}
          </div>

          <!-- Title -->
          <h3 class="mb-3 text-xl font-bold text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent-orange)]">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {{ project.description }}
          </p>

          <!-- Highlights -->
          <ul class="mb-5 space-y-1.5">
            <li v-for="highlight in project.highlights" :key="highlight" class="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-orange)]" />
              {{ highlight }}
            </li>
          </ul>

          <!-- Tech stack tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)] transition-colors duration-300 group-hover:border-[var(--color-border)]/80 group-hover:text-[var(--color-text-secondary)]"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
