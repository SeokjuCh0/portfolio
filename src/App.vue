<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import StoryTimeline from './components/StoryTimeline.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import DotBackground from './components/DotBackground.vue'
import { useTheme } from './composables/useTheme'

useTheme()
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[var(--color-bg-primary)]">
    <!-- Ambient background -->
    <DotBackground />
    <div class="pointer-events-none fixed inset-0 z-0">
      <div class="ambient-gradient absolute inset-0" />
    </div>

    <NavBar />
    <main class="relative z-10">
      <HeroSection />
      <TechStackSection />
      <StoryTimeline />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>
