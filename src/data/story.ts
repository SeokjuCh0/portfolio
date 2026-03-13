import type { Locale } from '../composables/useLocale'

export interface StoryAct {
  id: string
  act: number
  title: string
  subtitle: string
  quote: string
  details: string[]
  jobMatch: string
}

export const storyActs: Record<Locale, StoryAct[]> = {
  en: [
    {
      id: 'foundation',
      act: 1,
      title: 'Foundation',
      subtitle: 'A developer who understands data',
      quote: 'With a background in data analysis, I understand the full lifecycle of data — collection, cleaning, and utilization. Fine-tuning BERT and XLNet on patent domains gave me hands-on intuition for how NLP models work, and shaped my approach to working with structured research data.',
      details: [
        'Data analysis background — pipeline design and end-to-end data understanding',
        'Fine-tuned BERT/XLNet on patent domain data — direct NLP model training experience',
        'Python-based data collection, cleaning, and analysis',
      ],
      jobMatch: 'Literature data collection & analysis systems, NLP model application',
    },
    {
      id: 'challenge',
      act: 2,
      title: 'Challenge',
      subtitle: 'From zero to 3-tier system, fast',
      quote: 'Starting from scratch, I designed and built a complete 3-tier architecture using Vue.js, FastAPI, and Nginx as a DMZ layer. Internal/external network segmentation, SSO integration, SSL/TLS certificates — a secure infrastructure protecting sensitive data, delivered in a short timeframe.',
      details: [
        '3-tier architecture — Vue.js (frontend) + FastAPI (backend) + Nginx (DMZ)',
        'Internal/external network segmentation to protect sensitive research data',
        'Nginx reverse proxy blocking direct backend access, SSO and SSL/TLS configured',
      ],
      jobMatch: 'IT system operations, security infrastructure design, DB interface development',
    },
    {
      id: 'evolution',
      act: 3,
      title: 'Evolution',
      subtitle: 'Designing Knowledge Bases and accelerating work with RAG',
      quote: 'I built a dual-structure Knowledge Base combining internal data with external sources. Integrating arXiv, Scopus, and OpenAlex APIs, vectorizing with OpenAI embeddings, and storing in Qdrant — I designed the full RAG pipeline end-to-end, enabling real-time trend analysis and technology gap discovery.',
      details: [
        'Dual-structure Knowledge Base — internal KB + external KB designed and built from scratch',
        'arXiv · Scopus · OpenAlex API integration → MySQL/PostgreSQL normalization → Qdrant vector DB',
        'Research trend analysis and paper summarization service with researcher-facing interface',
      ],
      jobMatch: 'RAG system development, Knowledge Base design, AI-assisted research services',
    },
  ],
  ko: [
    {
      id: 'foundation',
      act: 1,
      title: '기반 구축',
      subtitle: '데이터를 이해하는 개발자',
      quote: '데이터 분석 기반으로 수집, 정제, 활용까지 데이터의 전체 생명주기를 이해합니다. 특허 도메인에서 BERT와 XLNet을 파인튜닝하며 NLP 모델의 동작 원리를 직접 경험했고, 이는 구조화된 연구 데이터를 다루는 저의 접근 방식을 형성했습니다.',
      details: [
        '데이터 분석 배경 — 파이프라인 설계 및 엔드투엔드 데이터 이해',
        'BERT/XLNet 특허 도메인 파인튜닝 — 직접적인 NLP 모델 학습 경험',
        'Python 기반 데이터 수집, 정제, 분석',
      ],
      jobMatch: '문헌 데이터 수집 및 분석 시스템, NLP 모델 적용',
    },
    {
      id: 'challenge',
      act: 2,
      title: '도전',
      subtitle: '제로에서 3-tier 시스템 구축까지',
      quote: '처음부터 Vue.js, FastAPI, Nginx DMZ 레이어를 활용한 완전한 3-tier 아키텍처를 설계하고 구축했습니다. 내/외부 네트워크 분리, SSO 연동, SSL/TLS 인증서까지 — 민감한 데이터를 보호하는 보안 인프라를 짧은 기간 내에 완성했습니다.',
      details: [
        '3-tier 아키텍처 — Vue.js (프론트엔드) + FastAPI (백엔드) + Nginx (DMZ)',
        '민감한 연구 데이터 보호를 위한 내/외부 네트워크 분리',
        'Nginx 리버스 프록시로 백엔드 직접 접근 차단, SSO 및 SSL/TLS 설정',
      ],
      jobMatch: 'IT 시스템 운영, 보안 인프라 설계, DB 인터페이스 개발',
    },
    {
      id: 'evolution',
      act: 3,
      title: '진화',
      subtitle: 'Knowledge Base 설계와 RAG 가속',
      quote: '내부 데이터와 외부 소스를 결합한 이중 구조 Knowledge Base를 구축했습니다. arXiv, Scopus, OpenAlex API를 연동하고, OpenAI 임베딩으로 벡터화하여 Qdrant에 저장 — 전체 RAG 파이프라인을 엔드투엔드로 설계하여 실시간 트렌드 분석과 기술 격차 발견을 가능하게 했습니다.',
      details: [
        '이중 구조 Knowledge Base — 내부 KB + 외부 KB 직접 설계 및 구축',
        'arXiv · Scopus · OpenAlex API 연동 → MySQL/PostgreSQL 정규화 → Qdrant 벡터 DB',
        '연구 트렌드 분석 및 논문 요약 서비스 (연구원 대상 인터페이스)',
      ],
      jobMatch: 'RAG 시스템 개발, Knowledge Base 설계, AI 기반 연구 서비스',
    },
  ],
}

export interface JobMatch {
  requirement: string
  match: string
}

export const jobMatches: Record<Locale, JobMatch[]> = {
  en: [
    { requirement: 'Vector database setup and operations', match: 'Qdrant vector DB + OpenAI embedding pipeline built from scratch' },
    { requirement: 'Local LLM deployment and DB interface', match: 'FastAPI backend + MySQL/PostgreSQL normalization + Qdrant integration' },
    { requirement: 'RAG-based information retrieval systems', match: 'Dual-structure Knowledge Base + full RAG pipeline implementation' },
    { requirement: 'AI agent research assistance services', match: 'Research trend analysis and paper summarization service designed and built' },
    { requirement: 'Literature data collection and analysis', match: 'arXiv · Scopus · OpenAlex API integration + DOI metadata extraction automation' },
    { requirement: 'IT system operations', match: '3-tier architecture (Vue.js + FastAPI + Nginx DMZ) + SSO · SSL/TLS · network segmentation' },
    { requirement: 'NLP model application and fine-tuning', match: 'BERT/XLNet patent domain fine-tuning + Prompt Engineering (OpenAI · Perplexity · Gemini)' },
  ],
  ko: [
    { requirement: '벡터 데이터베이스 구축 및 운영', match: 'Qdrant 벡터 DB + OpenAI 임베딩 파이프라인 직접 구축' },
    { requirement: '로컬 LLM 배포 및 DB 인터페이스', match: 'FastAPI 백엔드 + MySQL/PostgreSQL 정규화 + Qdrant 연동' },
    { requirement: 'RAG 기반 정보 검색 시스템', match: '이중 구조 Knowledge Base + 전체 RAG 파이프라인 구현' },
    { requirement: 'AI 에이전트 연구 지원 서비스', match: '연구 트렌드 분석 및 논문 요약 서비스 설계/구축' },
    { requirement: '문헌 데이터 수집 및 분석', match: 'arXiv · Scopus · OpenAlex API 연동 + DOI 메타데이터 추출 자동화' },
    { requirement: 'IT 시스템 운영', match: '3-tier 아키텍처 (Vue.js + FastAPI + Nginx DMZ) + SSO · SSL/TLS · 네트워크 분리' },
    { requirement: 'NLP 모델 적용 및 파인튜닝', match: 'BERT/XLNet 특허 도메인 파인튜닝 + 프롬프트 엔지니어링 (OpenAI · Perplexity · Gemini)' },
  ],
}
