import type { Locale } from '../composables/useLocale'

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Profile {
  name: string
  subtitle: Record<Locale, string>
  descriptionLines: Record<Locale, string[]>
  email: string
  initials: string
  stats: { label: Record<Locale, string>; value: number; suffix?: string }[]
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Seokju',
  subtitle: {
    en: 'Full Stack Developer',
    ko: '풀스택 개발자',
  },
  descriptionLines: {
    en: [
      'I design, build, and deploy systems that turn data into real impact.',
      'From infrastructure to AI pipelines, I make things work.',
    ],
    ko: [
      '데이터를 실질적인 가치로 만드는 시스템을 설계하고 구축합니다.',
      '인프라부터 AI 파이프라인까지, 실제로 동작하는 것을 만듭니다.',
    ],
  },
  email: 'your@email.com',
  initials: 'SJ',
  stats: [
    { label: { en: 'Projects', ko: '프로젝트' }, value: 5, suffix: '+' },
    { label: { en: 'Tech Stack', ko: '기술 스택' }, value: 15, suffix: '+' },
    { label: { en: 'API Integrations', ko: 'API 연동' }, value: 5, suffix: '+' },
    { label: { en: 'KB Systems', ko: 'KB 시스템' }, value: 2, suffix: '+' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:your@email.com', icon: 'mail' },
  ],
}
