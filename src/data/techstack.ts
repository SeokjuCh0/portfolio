import type { Locale } from '../composables/useLocale'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export interface TechItem {
  name: string
  icon?: string
  category: string
}

export const techStack: TechItem[] = [
  // Languages & Frameworks
  { name: 'Python',       icon: `${CDN}/python/python-original.svg`,           category: 'Languages & Frameworks' },
  { name: 'Vue.js',       icon: `${CDN}/vuejs/vuejs-original.svg`,             category: 'Languages & Frameworks' },
  { name: 'TypeScript',   icon: `${CDN}/typescript/typescript-original.svg`,   category: 'Languages & Frameworks' },
  { name: 'JavaScript',   icon: `${CDN}/javascript/javascript-original.svg`,   category: 'Languages & Frameworks' },
  { name: 'FastAPI',      icon: `${CDN}/fastapi/fastapi-original.svg`,         category: 'Languages & Frameworks' },
  { name: 'Spring Boot',  icon: `${CDN}/spring/spring-original.svg`,           category: 'Languages & Frameworks' },

  // Database
  { name: 'PostgreSQL',   icon: `${CDN}/postgresql/postgresql-original.svg`,   category: 'Database' },
  { name: 'MySQL',        icon: `${CDN}/mysql/mysql-original.svg`,             category: 'Database' },
  { name: 'Qdrant',       icon: 'https://cdn.simpleicons.org/qdrant/DC244C',     category: 'Database' },

  // Infrastructure
  { name: 'Nginx',        icon: `${CDN}/nginx/nginx-original.svg`,             category: 'Infrastructure' },
  { name: 'Docker',       icon: `${CDN}/docker/docker-original.svg`,           category: 'Infrastructure' },
  { name: 'Portainer',    icon: 'https://cdn.simpleicons.org/portainer/13BEF9',  category: 'Infrastructure' },
  { name: 'Linux',        icon: `${CDN}/linux/linux-original.svg`,             category: 'Infrastructure' },

  // AI & ML
  { name: 'OpenAI',       icon: 'https://cdn.simpleicons.org/openai/412991',     category: 'AI & ML' },
  { name: 'PyTorch',      icon: `${CDN}/pytorch/pytorch-original.svg`,         category: 'AI & ML' },

  // Tools
  { name: 'Git',          icon: `${CDN}/git/git-original.svg`,                 category: 'Tools' },
  { name: 'Tailwind CSS', icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, category: 'Tools' },

  // Version Control
  { name: 'SVN',          icon: `${CDN}/subversion/subversion-original.svg`,     category: 'Version Control' },
  { name: 'GitLab',       icon: `${CDN}/gitlab/gitlab-original.svg`,           category: 'Version Control' },
  { name: 'GitHub',       icon: `${CDN}/github/github-original.svg`,           category: 'Version Control' },
]

export const techCategories = [
  'Languages & Frameworks',
  'Database',
  'Infrastructure',
  'AI & ML',
  'Tools',
  'Version Control',
] as const

export const techCategoryLabels: Record<string, Record<Locale, string>> = {
  'Languages & Frameworks': { en: 'Languages & Frameworks', ko: '언어 & 프레임워크' },
  'Database':               { en: 'Database',               ko: '데이터베이스' },
  'Infrastructure':         { en: 'Infrastructure',         ko: '인프라' },
  'AI & ML':                { en: 'AI & ML',                ko: 'AI & ML' },
  'Tools':                  { en: 'Tools',                  ko: '도구' },
  'Version Control':        { en: 'Version Control',        ko: '버전 관리' },
}
