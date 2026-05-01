PostgreSQL, MySQL, SQLite 를 다룰 수 있는 TypeScript ORM 입니다. 운영 환경에서 그대로 쓸 수 있는 수준을 목표로 잡고 만들었고, npm 에 `@stingerloom/orm` 으로 배포 중입니다. 현재 v0.20.0 까지 릴리스했습니다.

## 멀티 테넌시

가장 직접 부딪혀 보고 싶었던 주제였습니다. SaaS 환경에서 한 인스턴스가 여러 테넌트의 데이터를 안전하게 다루려면 메타데이터 분리와 런타임 컨텍스트 격리를 함께 해결해야 합니다.

Docker 의 OverlayFS 가 파일 시스템을 레이어로 쌓는 구조에서 아이디어를 가져와, 베이스 메타데이터 위에 테넌트별 메타데이터를 얹는 계층형 모델로 만들었습니다. 컨텍스트는 AsyncLocalStorage 로 격리해서 요청과 요청 사이에 데이터가 새지 않도록 했습니다.

## 타입 안전한 Query DSL

쿼리 인터페이스는 Proxy 로 구현했습니다. 빌드 단계의 코드 생성 없이도 모든 컬럼에 IDE 자동완성이 동작하고, 집계 / 윈도우 함수 / CASE-WHEN / 서브쿼리 / JSON path 까지 모두 타입 안전한 표현식으로 자유롭게 합성됩니다.

```ts
const u = qAlias(User, 'u')
em.repository(User)
  .createQueryBuilder()
  .select(u.id, u.email, count(u.id).as('count'))
  .where(u.email.like('%@example.com'))
  .groupBy(u.tenantId)
  .having(count(u.id).gt(10))
  .getMany()
```

별도 codegen 단계를 두지 않고도 이 정도 추론을 잡아낼 수 있는지 시연해 보고 싶었습니다.

## 그 외 갖춘 것들

- **Unit of Work** — Identity Map, dirty checking, cascade, 배치 flush, lazy proxy, 비관적 락. `em.extend(bufferPlugin())` 한 줄로 활성화됩니다.
- **스키마 Diff 마이그레이션** — 라이브 DB 상태와 엔티티 정의를 비교해 마이그레이션 SQL 을 자동 생성합니다. `safe`, `dry-run` 모드를 별도로 제공합니다.
- **드라이버 추상화** — 세 가지 DB 가 동일한 `EntityManager` 인터페이스를 공유합니다. 드라이버를 바꿔도 쿼리 코드를 다시 쓰지 않습니다. MariaDB 특화 최적화도 별도로 들어가 있습니다.

GitHub Actions 로 CI 를 돌리고 있고 문서는 GitHub Pages 로 따로 운영 중입니다.
