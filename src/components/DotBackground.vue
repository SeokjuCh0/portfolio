<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

const SPACING = 28
const BASE_RADIUS = 1
const ACTIVE_RADIUS = 2.5
const INFLUENCE_RADIUS = 150
const INFLUENCE_R2 = INFLUENCE_RADIUS * INFLUENCE_RADIUS

let rafId = 0
let mouseX = -9999
let mouseY = -9999
let dirty = true

interface Dot {
  x: number
  y: number
}

let dots: Dot[] = []

// Cached parsed colors [r, g, b, a]
let baseParsed: [number, number, number, number] = [255, 255, 255, 0.07]
let activeParsed: [number, number, number, number] = [255, 255, 255, 0.4]
let cachedBaseColor = ''
let cachedActiveColor = ''

function buildGrid(width: number, height: number): void {
  dots = []
  const cols = Math.ceil(width / SPACING) + 1
  const rows = Math.ceil(height / SPACING) + 1
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * SPACING, y: r * SPACING })
    }
  }
  dirty = true
}

function parseColor(color: string): [number, number, number, number] {
  const m = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/)
  if (m) {
    return [parseFloat(m[1]!), parseFloat(m[2]!), parseFloat(m[3]!), m[4] !== undefined ? parseFloat(m[4]) : 1]
  }
  return [255, 255, 255, 0.07]
}

function refreshColors(): void {
  const style = getComputedStyle(document.documentElement)
  const base = style.getPropertyValue('--color-dot').trim() || 'rgba(255,255,255,0.07)'
  const active = style.getPropertyValue('--color-dot-active').trim() || 'rgba(255,255,255,0.4)'
  if (base !== cachedBaseColor || active !== cachedActiveColor) {
    cachedBaseColor = base
    cachedActiveColor = active
    baseParsed = parseColor(base)
    activeParsed = parseColor(active)
    dirty = true
  }
}

function renderFrame(): void {
  if (!dirty) {
    rafId = requestAnimationFrame(renderFrame)
    return
  }
  dirty = false

  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const { width, height } = canvas
  ctx.clearRect(0, 0, width, height)

  const [br, bg, bb, ba] = baseParsed
  const [ar, ag, ab, aa] = activeParsed
  const baseColorStr = cachedBaseColor || `rgba(${br},${bg},${bb},${ba})`

  // Batch draw all inactive dots in one path
  ctx.beginPath()
  ctx.fillStyle = baseColorStr
  for (const dot of dots) {
    const dx = dot.x - mouseX
    const dy = dot.y - mouseY
    const dist2 = dx * dx + dy * dy
    if (dist2 >= INFLUENCE_R2) {
      ctx.moveTo(dot.x + BASE_RADIUS, dot.y)
      ctx.arc(dot.x, dot.y, BASE_RADIUS, 0, Math.PI * 2)
    }
  }
  ctx.fill()

  // Draw only active dots (near mouse) individually
  for (const dot of dots) {
    const dx = dot.x - mouseX
    const dy = dot.y - mouseY
    const dist2 = dx * dx + dy * dy
    if (dist2 < INFLUENCE_R2) {
      const dist = Math.sqrt(dist2)
      const linear = 1 - dist / INFLUENCE_RADIUS
      const t = linear * linear * (3 - 2 * linear)

      const radius = BASE_RADIUS + (ACTIVE_RADIUS - BASE_RADIUS) * t
      const r = Math.round(br + (ar - br) * t)
      const g = Math.round(bg + (ag - bg) * t)
      const b = Math.round(bb + (ab - bb) * t)
      const a = +(ba + (aa - ba) * t).toFixed(3)

      ctx.beginPath()
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`
      ctx.fill()
    }
  }

  rafId = requestAnimationFrame(renderFrame)
}

function onMouseMove(e: MouseEvent): void {
  mouseX = e.clientX
  mouseY = e.clientY
  dirty = true
}

function onResize(): void {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  buildGrid(canvas.width, canvas.height)
}

// Watch for theme changes via MutationObserver on data-theme attribute
let themeObserver: MutationObserver | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  buildGrid(canvas.width, canvas.height)
  refreshColors()

  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  themeObserver = new MutationObserver(() => refreshColors())
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  rafId = requestAnimationFrame(renderFrame)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
  themeObserver?.disconnect()
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-0"
  />
</template>
