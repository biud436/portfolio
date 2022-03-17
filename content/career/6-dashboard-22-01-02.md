# 아일랜드 프로젝트

---

## 개발 기간

2022.02.14 ~ 현재 진행중

## 개발 부분

- Jest를 이용한 Mock를 작성하여 기능 단위로 테스트 진행.
- entities 폴더에 ORM 용 object mapper model 추가
- AuthGuard 데코레이터와 JWT 전략 추가
- Roles 데코레이터와 권한 별 처리 추가
- 인증 API 추가 완료
- 상태를 유지해야 하는 정보는 Redis 이용 (인증 번호, 인증 OK 상태)
- 회원 가입
- 이메일로 비밀번호 찾기
- 임시 비밀번호 발급
- 몽고 DB 연동
- @ValidColumn, @UrlColumn, @IntervalColumn 등 다수의 커스텀 데코레이터 생성
- 개인 정보 대칭키 AES-256을 이용한 암호화 및 복호화 처리 진행 (전화번호)
- JEST를 통한 암호화에 대한 사전 테스트 코드를 작성하였음
- 회원 가입 시, 휴대폰 번호를 AES-256 (대칭키 알고리즘)으로 암호화 처리하였음
- 암호화 모듈에 필요한 KEY(32Bytes), IV (초기화 벡터) 값은 설정 파일로부터 로드하고, DB와는 분리된 환경에 키 값 저장 필요
- 의존성 주입(DI)을 통해 AES256Provider 클래스를 어디에서든지 사용 가능
- 테스트 Mock 라이브러리인 ts-mockito 라이브러리 추가
- 아이디 및 비밀번호가 일치하지 않을 때 각각 다른 오류 출력
- 이메일로 인증 번호 요청 시, response로 인증 값이 전달되지 않게 변경
- 로그아웃 처리가 되지 않는 문제 수정
- 특정 컬럼에 대한 기본값 처리 추가