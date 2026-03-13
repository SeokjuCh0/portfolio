<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { storyActs } from '../data/story'
import { useLocale } from '../composables/useLocale'

const { locale } = useLocale()

const localizedActs = computed(() => storyActs[locale.value])

const visibleActs = ref(new Set<string>())
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      let changed = false
      entries.forEach((entry) => {
        if (entry.isIntersecting && !visibleActs.value.has(entry.target.id)) {
          visibleActs.value.add(entry.target.id)
          observer?.unobserve(entry.target)
          changed = true
        }
      })
      if (changed) visibleActs.value = new Set(visibleActs.value)
    },
    { threshold: 0.2 }
  )

  localizedActs.value.forEach((act) => {
    const el = document.getElementById(`act-${act.id}`)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())

const actColors = ['var(--color-accent-orange)', 'var(--color-accent-lime)', 'var(--color-accent-purple)']
const actGlows = ['var(--color-accent-orange-soft)', 'var(--color-accent-lime-soft)', 'var(--color-accent-purple-soft)']
</script>

<template>
  <section id="story" class="px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)]">
        {{ locale === 'en' ? 'My Story' : '나의 이야기' }}
      </h2>
      <p class="mb-16 text-center text-[var(--color-text-muted)]">
        {{ locale === 'en' ? 'From data to systems — my journey so far' : '데이터에서 시스템까지 — 지금까지의 여정' }}
      </p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-[var(--color-accent-orange)]/30 via-[var(--color-accent-lime)]/30 to-purple-500/30 md:left-1/2" />

        <!-- Acts -->
        <div
          v-for="(act, index) in localizedActs"
          :id="`act-${act.id}`"
          :key="act.id"
          :class="[
            'relative mb-16 transition-all duration-700 ease-out',
            visibleActs.has(`act-${act.id}`) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ]"
        >
          <!-- Timeline dot -->
          <div
            class="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full transition-shadow duration-500 md:left-1/2"
            :style="{
              backgroundColor: actColors[index],
              boxShadow: visibleActs.has(`act-${act.id}`) ? `0 0 20px ${actGlows[index]}` : 'none'
            }"
          >
            <div class="h-2 w-2 rounded-full bg-[var(--color-bg-primary)]" />
          </div>

          <!-- Content card -->
          <div :class="['ml-14 md:ml-0', index % 2 === 0 ? 'md:mr-[55%]' : 'md:ml-[55%]']">
            <div class="glow-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <!-- Act label -->
              <div
                class="mb-2 inline-block rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-wider"
                :style="{ backgroundColor: actGlows[index], color: actColors[index] }"
              >
                {{ act.act }}막: {{ act.title }}
              </div>

              <!-- Subtitle -->
              <h3 class="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
                {{ act.subtitle }}
              </h3>

              <!-- Quote -->
              <blockquote class="mb-4 border-l-2 pl-4 text-sm leading-relaxed text-[var(--color-text-secondary)] italic" :style="{ borderColor: actColors[index] }">
                {{ act.quote }}
              </blockquote>

              <!-- Details -->
              <ul class="mb-4 space-y-1.5">
                <li v-for="detail in act.details" :key="detail" class="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" :style="{ backgroundColor: actColors[index] }" />
                  {{ detail }}
                </li>
              </ul>

              <!-- Job match tag -->
              <div class="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
                <span class="font-semibold" :style="{ color: actColors[index] }">
                  {{ locale === 'en' ? 'Relevance:' : '관련성:' }}
                </span>
                {{ act.jobMatch }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
