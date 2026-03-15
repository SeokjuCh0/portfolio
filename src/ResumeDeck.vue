<script setup lang="ts">
import { profile } from './data/profile'
import { projects } from './data/projects'
import { storyActs } from './data/story'
import { techStack, techCategories, techCategoryLabels } from './data/techstack'

const enProjects = projects.en
const enActs = storyActs.en

const grouped = techCategories.map((cat) => ({
  label: techCategoryLabels[cat]?.en ?? cat,
  items: techStack.filter((t) => t.category === cat),
}))

function initials(name: string): string {
  return name.slice(0, 2).toUpperCase()
}
</script>

<template>
  <div class="deck">
    <!-- Slide 1: Cover -->
    <section class="slide slide-cover">
      <div class="slide-content flex flex-col items-center justify-center text-center">
        <p class="mono text-sm tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">Portfolio</p>
        <h1 class="text-8xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
          {{ profile.name }}
        </h1>
        <p class="text-2xl font-semibold text-[var(--color-accent-orange)] mb-8">
          {{ profile.subtitle.en }}
        </p>
        <div class="flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
          <span>{{ profile.email }}</span>
          <span class="w-px h-4 bg-[var(--color-border)]"></span>
          <span>GitHub</span>
          <span class="w-px h-4 bg-[var(--color-border)]"></span>
          <span>LinkedIn</span>
        </div>
      </div>
      <div class="slide-number">01</div>
    </section>

    <!-- Slide 2: About -->
    <section class="slide">
      <div class="slide-content flex flex-col justify-center">
        <p class="section-label">About</p>
        <h2 class="slide-title mb-8">Who I Am</h2>
        <div class="max-w-3xl space-y-4">
          <p v-for="line in profile.descriptionLines.en" :key="line" class="text-xl leading-relaxed text-[var(--color-text-secondary)]">
            {{ line }}
          </p>
        </div>
        <div class="mt-12 flex items-center gap-0">
          <div v-for="(stat, i) in profile.stats" :key="i" class="flex items-center">
            <div class="px-8 text-center">
              <div class="text-4xl font-bold text-[var(--color-text-primary)]">
                {{ stat.value }}<span class="text-[var(--color-accent-orange)]">{{ stat.suffix ?? '+' }}</span>
              </div>
              <div class="mt-1 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                {{ stat.label.en }}
              </div>
            </div>
            <div v-if="i < profile.stats.length - 1" class="h-10 w-px bg-[var(--color-border)]"></div>
          </div>
        </div>
      </div>
      <div class="slide-number">02</div>
    </section>

    <!-- Slide 3: Story -->
    <section class="slide">
      <div class="slide-content flex flex-col justify-center">
        <p class="section-label">Journey</p>
        <h2 class="slide-title mb-10">My Story</h2>
        <div class="grid grid-cols-3 gap-6">
          <div
            v-for="(act, i) in enActs"
            :key="act.id"
            class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div class="mb-3 text-xs font-bold uppercase tracking-wider" :class="[
              i === 0 ? 'text-[var(--color-accent-orange)]' : i === 1 ? 'text-[var(--color-accent-lime)]' : 'text-[var(--color-accent-purple)]'
            ]">
              Act {{ act.act }} — {{ act.title }}
            </div>
            <h3 class="mb-3 text-lg font-bold text-[var(--color-text-primary)]">{{ act.subtitle }}</h3>
            <ul class="space-y-2">
              <li v-for="detail in act.details" :key="detail" class="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full" :class="[
                  i === 0 ? 'bg-[var(--color-accent-orange)]' : i === 1 ? 'bg-[var(--color-accent-lime)]' : 'bg-[var(--color-accent-purple)]'
                ]"></span>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slide-number">03</div>
    </section>

    <!-- Slide 4-5: Projects (2 per slide) -->
    <section class="slide">
      <div class="slide-content flex flex-col justify-center">
        <p class="section-label">Projects</p>
        <h2 class="slide-title mb-10">What I Built</h2>
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="project in enProjects.slice(0, 2)"
            :key="project.id"
            class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div class="mb-2 inline-block rounded-full bg-[var(--color-accent-orange)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-orange)]">
              {{ project.role }}
            </div>
            <h3 class="mb-3 text-xl font-bold text-[var(--color-text-primary)]">{{ project.title }}</h3>
            <p class="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.techStack.slice(0, 6)"
                :key="tech"
                class="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2 py-0.5 mono text-[10px] text-[var(--color-text-muted)]"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 6" class="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2 py-0.5 mono text-[10px] text-[var(--color-text-muted)]">
                +{{ project.techStack.length - 6 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-number">04</div>
    </section>

    <section class="slide">
      <div class="slide-content flex flex-col justify-center">
        <p class="section-label">Projects</p>
        <h2 class="slide-title mb-10">What I Built</h2>
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="project in enProjects.slice(2, 4)"
            :key="project.id"
            class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div class="mb-2 inline-block rounded-full bg-[var(--color-accent-orange)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-orange)]">
              {{ project.role }}
            </div>
            <h3 class="mb-3 text-xl font-bold text-[var(--color-text-primary)]">{{ project.title }}</h3>
            <p class="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.techStack.slice(0, 6)"
                :key="tech"
                class="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2 py-0.5 mono text-[10px] text-[var(--color-text-muted)]"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 6" class="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-2 py-0.5 mono text-[10px] text-[var(--color-text-muted)]">
                +{{ project.techStack.length - 6 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-number">05</div>
    </section>

    <!-- Slide 6: Tech Stack -->
    <section class="slide">
      <div class="slide-content flex flex-col justify-center">
        <p class="section-label">Skills</p>
        <h2 class="slide-title mb-10">Tech Stack</h2>
        <div class="space-y-6">
          <div v-for="group in grouped" :key="group.label">
            <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              {{ group.label }}
            </p>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="tech in group.items"
                :key="tech.name"
                class="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2"
              >
                <img v-if="tech.icon" :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />
                <div v-else class="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-orange)]/15 text-[8px] font-bold text-[var(--color-accent-orange)]">
                  {{ initials(tech.name) }}
                </div>
                <span class="text-xs font-medium text-[var(--color-text-primary)]">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-number">06</div>
    </section>

    <!-- Slide 7: Contact -->
    <section class="slide slide-cover">
      <div class="slide-content flex flex-col items-center justify-center text-center">
        <p class="section-label mb-6">Get In Touch</p>
        <h2 class="text-6xl font-extrabold text-[var(--color-text-primary)] mb-8">Thank You</h2>
        <div class="space-y-3 text-[var(--color-text-secondary)]">
          <p class="text-lg">{{ profile.email }}</p>
          <div class="flex items-center justify-center gap-6 text-sm">
            <a v-for="social in profile.socials" :key="social.name" :href="social.url" class="text-[var(--color-accent-orange)] hover:underline">
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="slide-number">07</div>
    </section>
  </div>
</template>

<style scoped>
.deck {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: #050505;
}

.slide {
  position: relative;
  width: 960px;
  height: 540px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 0;
}

.slide-content {
  width: 100%;
  height: 100%;
  padding: 3rem 4rem;
}

.slide-number {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent-orange);
  margin-bottom: 0.5rem;
}

.slide-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.mono {
  font-family: var(--font-mono);
}

/* Print styles for PDF export */
@media print {
  @page {
    size: 960px 540px landscape;
    margin: 0;
  }

  .deck {
    gap: 0;
    padding: 0;
    background: none;
  }

  .slide {
    border: none;
    border-radius: 0;
    page-break-after: always;
    break-after: page;
  }

  .slide:last-child {
    page-break-after: auto;
    break-after: auto;
  }
}
</style>
