import type { Locale } from '../composables/useLocale'

export interface Project {
  id: string
  title: string
  description: string
  role: string
  techStack: string[]
  highlights: string[]
  link?: string
}

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      id: 'web-infra',
      title: 'Web Infrastructure from Scratch',
      description: 'Designed and built a complete 3-tier architecture (Vue.js + FastAPI + Nginx DMZ) from zero. Internal/external network segmentation to protect sensitive data, with SSO integration, domain configuration, and SSL/TLS certificates all delivered in a short timeframe.',
      role: 'Full Stack & Infrastructure',
      techStack: ['Nginx', 'SSL/TLS', 'Reverse Proxy', 'Network Segmentation', 'DMZ Design', 'SSO', 'Vue.js', 'FastAPI'],
      highlights: [
        'Built 3-tier architecture (frontend · backend · Nginx DMZ) from zero',
        'Internal/external network segmentation for data confidentiality',
        'Nginx reverse proxy blocking direct backend access',
        'SSO integration, domain setup, and SSL/TLS certificates configured',
      ],
    },
    {
      id: 'fullstack-app',
      title: 'Research Trend Analysis Service',
      description: 'A researcher-facing interface built with Vue.js and FastAPI. Provides paper analysis and summarization alongside research trend analysis, giving users a clear view of the latest developments, international standing, and technology gaps in their field.',
      role: 'Frontend & Backend',
      techStack: ['Vue.js 3', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Perplexity API', 'Gemini API'],
      highlights: [
        'Paper analysis and summarization service designed and implemented',
        'Research trend analysis with technology gap visualization',
        'Prompt engineering across OpenAI · Perplexity · Gemini APIs',
        'Researcher interface for querying latest trends and international benchmarks',
      ],
    },
    {
      id: 'ai-agent',
      title: 'Knowledge Base & RAG System',
      description: 'A dual-structure Knowledge Base combining internal data with external academic sources. DOI metadata extraction for internal records, plus arXiv, Scopus, and OpenAlex API integration for external data. Vectorized with OpenAI embeddings and stored in Qdrant to complete a full RAG pipeline.',
      role: 'AI System Design & Development',
      techStack: ['Qdrant', 'OpenAI API', 'arXiv API', 'Scopus API', 'OpenAlex API', 'Python', 'FastAPI', 'MySQL', 'PostgreSQL'],
      highlights: [
        'Dual-structure Knowledge Base — internal KB + external KB designed from scratch',
        'DOI metadata extraction for automated internal document ingestion',
        'arXiv · Scopus · OpenAlex API integration for external paper collection',
        'OpenAI embedding vectorization → Qdrant storage RAG pipeline',
      ],
    },
    {
      id: 'data-pipeline',
      title: 'Research Data Collection & Normalization Pipeline',
      description: 'Automated paper data collection from arXiv, Scopus, and OpenAlex APIs. Collected data normalized into MySQL and PostgreSQL, then fed into an OpenAI embedding vectorization pipeline. Prior BERT/XLNet fine-tuning experience informed the preprocessing design.',
      role: 'Data Engineering',
      techStack: ['Python', 'MySQL', 'PostgreSQL', 'arXiv API', 'Scopus API', 'OpenAlex API', 'OpenAI Embeddings', 'Qdrant'],
      highlights: [
        'Automated data collection across 3 external APIs (arXiv · Scopus · OpenAlex)',
        'Dual DB normalization design with MySQL + PostgreSQL',
        'OpenAI embedding vectorization → Qdrant ingestion pipeline',
        'Preprocessing design informed by BERT/XLNet fine-tuning experience',
      ],
    },
  ],
  ko: [
    {
      id: 'web-infra',
      title: '웹 인프라 처음부터 구축',
      description: '제로베이스에서 완전한 3-tier 아키텍처(Vue.js + FastAPI + Nginx DMZ)를 설계하고 구축했습니다. 민감한 데이터 보호를 위한 내/외부 네트워크 분리, SSO 연동, 도메인 설정, SSL/TLS 인증서까지 짧은 기간 내에 완성했습니다.',
      role: '풀스택 & 인프라',
      techStack: ['Nginx', 'SSL/TLS', 'Reverse Proxy', 'Network Segmentation', 'DMZ Design', 'SSO', 'Vue.js', 'FastAPI'],
      highlights: [
        '3-tier 아키텍처(프론트엔드 · 백엔드 · Nginx DMZ) 제로베이스 구축',
        '데이터 기밀성 보호를 위한 내/외부 네트워크 분리',
        'Nginx 리버스 프록시로 백엔드 직접 접근 차단',
        'SSO 연동, 도메인 설정, SSL/TLS 인증서 구성',
      ],
    },
    {
      id: 'fullstack-app',
      title: '연구 트렌드 분석 서비스',
      description: 'Vue.js와 FastAPI로 구축한 연구원 대상 인터페이스입니다. 논문 분석 및 요약과 함께 연구 트렌드 분석을 제공하여, 사용자가 해당 분야의 최신 동향, 국제적 위치, 기술 격차를 명확히 파악할 수 있게 합니다.',
      role: '프론트엔드 & 백엔드',
      techStack: ['Vue.js 3', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Perplexity API', 'Gemini API'],
      highlights: [
        '논문 분석 및 요약 서비스 설계 및 구현',
        '기술 격차 시각화를 포함한 연구 트렌드 분석',
        'OpenAI · Perplexity · Gemini API 프롬프트 엔지니어링',
        '최신 트렌드 및 국제 벤치마크 조회를 위한 연구원 인터페이스',
      ],
    },
    {
      id: 'ai-agent',
      title: 'Knowledge Base & RAG 시스템',
      description: '내부 데이터와 외부 학술 소스를 결합한 이중 구조 Knowledge Base입니다. 내부 문서의 DOI 메타데이터 추출과 함께 arXiv, Scopus, OpenAlex API 연동으로 외부 데이터를 수집합니다. OpenAI 임베딩으로 벡터화하여 Qdrant에 저장하는 전체 RAG 파이프라인을 구현했습니다.',
      role: 'AI 시스템 설계 및 개발',
      techStack: ['Qdrant', 'OpenAI API', 'arXiv API', 'Scopus API', 'OpenAlex API', 'Python', 'FastAPI', 'MySQL', 'PostgreSQL'],
      highlights: [
        '이중 구조 Knowledge Base — 내부 KB + 외부 KB 직접 설계 및 구축',
        '내부 문서 자동 수집을 위한 DOI 메타데이터 추출',
        '외부 논문 수집을 위한 arXiv · Scopus · OpenAlex API 연동',
        'OpenAI 임베딩 벡터화 → Qdrant 저장 RAG 파이프라인',
      ],
    },
    {
      id: 'data-pipeline',
      title: '연구 데이터 수집 및 정규화 파이프라인',
      description: 'arXiv, Scopus, OpenAlex API에서 논문 데이터를 자동으로 수집합니다. 수집한 데이터를 MySQL과 PostgreSQL에 정규화하여 저장하고, OpenAI 임베딩 벡터화 파이프라인으로 연결합니다. 이전 BERT/XLNet 파인튜닝 경험이 전처리 설계에 반영되었습니다.',
      role: '데이터 엔지니어링',
      techStack: ['Python', 'MySQL', 'PostgreSQL', 'arXiv API', 'Scopus API', 'OpenAlex API', 'OpenAI Embeddings', 'Qdrant'],
      highlights: [
        '3개 외부 API(arXiv · Scopus · OpenAlex) 자동 데이터 수집',
        'MySQL + PostgreSQL 이중 DB 정규화 설계',
        'OpenAI 임베딩 벡터화 → Qdrant 수집 파이프라인',
        'BERT/XLNet 파인튜닝 경험을 반영한 전처리 설계',
      ],
    },
  ],
}
