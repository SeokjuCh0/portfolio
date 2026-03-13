import type { Locale } from '../composables/useLocale'

export interface Skill {
  name: string
  icon?: string
}

export interface SkillCategory {
  id: string
  title: Record<Locale, string>
  icon: string
  color: 'orange' | 'lime' | 'blue' | 'purple'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: { en: 'Backend & API', ko: '백엔드 & API' },
    icon: '⚡',
    color: 'orange',
    skills: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Spring Boot' },
      { name: 'REST API' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Qdrant' },
    ],
  },
  {
    id: 'frontend',
    title: { en: 'Frontend', ko: '프론트엔드' },
    icon: '🎨',
    color: 'lime',
    skills: [
      { name: 'Vue.js 3' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'infra',
    title: { en: 'Infra & DevOps', ko: '인프라 & DevOps' },
    icon: '🔧',
    color: 'blue',
    skills: [
      { name: 'Nginx' },
      { name: 'SSL/TLS' },
      { name: 'Reverse Proxy' },
      { name: 'CI/CD' },
      { name: 'Network Segmentation' },
      { name: 'Docker' },
      { name: 'SSO Integration' },
      { name: 'DMZ Design' },
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI & Data', ko: 'AI & 데이터' },
    icon: '🤖',
    color: 'purple',
    skills: [
      { name: 'Claude Code' },
      { name: 'OpenAI API' },
      { name: 'Perplexity API' },
      { name: 'Gemini API' },
      { name: 'RAG Systems' },
      { name: 'Vector DB' },
      { name: 'Prompt Engineering' },
      { name: 'BERT/XLNet Fine-tuning' },
      { name: 'Multi-Agent' },
    ],
  },
]
