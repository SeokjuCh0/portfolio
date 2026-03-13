<script setup lang="ts">
import { profile } from '../data/profile'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLocale } from '../composables/useLocale'
import StatsCounter from './StatsCounter.vue'

const { isVisible } = useScrollReveal('heroSection', 0.1)
const { locale } = useLocale()
</script>

<template>
  <section id="hero" ref="heroSection" class="relative px-6 pt-28 pb-20">
    <div class="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
      <!-- Emoji avatar -->
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 0ms"
      >
        <span class="text-8xl leading-none select-none" role="img" aria-label="waving hand">👋</span>
      </div>

      <!-- Greeting + Name -->
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 100ms"
      >
        <p class="mb-4 font-[family-name:var(--font-mono)] text-base tracking-widest text-[var(--color-text-secondary)]">
          {{ locale === 'en' ? "Hey, I'm" : '안녕하세요,' }}
        </p>
        <h1 class="font-[family-name:var(--font-display)] text-6xl font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--color-text-primary)] md:text-8xl">
          {{ profile.name }}
        </h1>
      </div>

      <!-- Subtitle -->
      <div
        class="transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 200ms"
      >
        <span class="font-[family-name:var(--font-display)] text-xl font-semibold tracking-wide text-[var(--color-accent-orange)] md:text-2xl">
          {{ profile.subtitle[locale] }}
        </span>
      </div>

      <!-- Description - two separate lines -->
      <div
        class="max-w-2xl space-y-1 transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 300ms"
      >
        <p v-for="line in profile.descriptionLines[locale]" :key="line" class="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
          {{ line }}
        </p>
      </div>

      <!-- Stats -->
      <div
        class="w-full transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 400ms"
      >
        <StatsCounter />
      </div>

      <!-- CTA Button -->
      <div
        class="flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        style="transition-delay: 500ms"
      >
        <a
          href="#contact"
          class="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-200 hover:border-[var(--color-accent-orange)] hover:text-[var(--color-accent-orange)]"
        >
          {{ locale === 'en' ? "Let's Connect" : '연락하기' }}
        </a>
      </div>
    </div>
  </section>
</template>
