## 사용한 기술

- TypeScript (strict mode)
- Node.js
- PostgreSQL / MySQL / SQLite
- reflect-metadata (데코레이터 메타데이터)
- AsyncLocalStorage (테넌트 컨텍스트 격리)
- Proxy 기반 Query DSL

## 동작 플랫폼

Node.js — 프레임워크 비종속(NestJS / Fastify / Express / Hono 등)

## 소개

StingerLoom 프레임워크에서 분리하여 **독립형 OSS 패키지**로 발전시킨 데코레이터 기반 TypeScript ORM 입니다. 어떤 Node.js 환경에서도 사용할 수 있도록 설계했고, npm 에 `@stingerloom/orm` 으로 배포 중입니다.

핵심 특징:

- **데코레이터 우선 설계** — 엔티티, 관계, 라이프사이클 훅, 검증을 모두 TypeScript 데코레이터로 정의. 컬럼 타입은 자동 추론됩니다.
- **타입 안전한 Query DSL (Proxy 기반, 코드 생성 없음)** — `qAlias(Entity, "u")` 만 호출하면 IDE 자동완성으로 모든 컬럼에 접근 가능. `.eq / .gt / .like / .in`, 집계(`.count() / .sum() / .avg()`), CAST, 날짜 함수, 윈도우 함수, CASE/WHEN, 서브쿼리, JSON path 까지 모두 타입 안전한 표현식으로 `where() / having() / select()` 에서 자유롭게 합성됩니다.
- **Unit of Work 플러그인** — Identity Map, dirty checking, cascade, 배치 flush, lazy proxy, 비관적 락(pessimistic lock) 을 `em.extend(bufferPlugin())` 한 줄로 활성화. 동일 PK 반복 조회는 single-level 캐시가 round-trip 을 건너뜁니다.
- **계층형 멀티 테넌시** — Docker OverlayFS 에서 영감을 받은 메타데이터 레이어링 + AsyncLocalStorage 컨텍스트 격리. 설계상 cross-tenant leakage 가 발생하지 않도록 만들었습니다.
- **세 가지 DB, 하나의 API** — MySQL(MariaDB 특화 최적화 포함) / PostgreSQL / SQLite 가 같은 `EntityManager` 인터페이스를 공유. 쿼리 재작성 없이 드라이버만 교체 가능합니다.
- **스키마 Diff 마이그레이션** — 실제 DB 상태와 엔티티 메타데이터를 비교해 마이그레이션 코드를 자동 생성. `true / "safe" / "dry-run"` 세 가지 synchronize 모드 지원.
- **NestJS 1st-party 모듈** — `@InjectRepository`, `@InjectEntityManager`, 다중 DB named connection 을 별도 어댑터 없이 제공합니다.

## 개발 기간

2026.02 ~ 현재 · 활발히 개발 중 · 최신 릴리스 v0.20.0
