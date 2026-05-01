# 포트폴리오 사이트

개인 포트폴리오 사이트입니다. 경력, 프로젝트, 기술 스택 등을 소개합니다.

## 목차

- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [개발](#개발)
- [빌드](#빌드)
- [배포](#배포)

## 기술 스택

- **프레임워크**: Nuxt 4.0.0
- **UI 라이브러리**: Vue 3.5
- **스타일링**: Tailwind CSS 3.4
- **상태 관리**: Pinia 2.2
- **콘텐츠 관리**: @nuxt/content 3.0
- **애니메이션**: Anime.js, Vanta
- **3D**: Three.js 0.160
- **언어**: TypeScript 5.6
- **Node.js**: >= 22.12.0

## 프로젝트 구조

```
.
├── components/          # Vue 컴포넌트
├── pages/              # 페이지 (index)
├── layouts/            # 레이아웃
├── composables/        # 재사용 가능한 로직
├── content/
│   ├── career/         # 경력 정보
│   ├── projects/       # 프로젝트 정보
│   └── skills/         # 기술 정보
├── public/             # 정적 자산 (이미지 등)
├── assets/             # CSS 및 기타 자산
└── nginx/              # Nginx 설정
```

## 시작하기

### 요구사항

- Node.js >= 22.12.0
- npm >= 10.0.0

### 설치

```bash
npm install
```

## 개발

개발 서버를 실행합니다:

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 에 접속합니다.

## 빌드

정적 사이트로 빌드합니다:

```bash
npm run generate
```

생성된 파일은 `.output/public` 디렉토리에 저장됩니다.

Cloudflare Pages 배포를 위한 빌드:

```bash
npm run build:cloudflare
```

## 배포

이 저장소는 Github Action을 사용하여 **Cloudflare Pages**에 자동 배포됩니다.

빌드 후 생성된 `dist` 폴더가 배포 대상입니다.
