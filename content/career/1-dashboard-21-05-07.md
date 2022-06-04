# 데이터 관제 서버 개발

---

## 개발 기간

2021.05 ~ 2021.07 (3개월)

## 사용 기술

- Nest.js (Node.js Express)
- SequelizeORM
- Redis
- Socket.io
- Docker
- AWS EC2 (Linux Ubuntu Server)
- Vue.js

## 프로젝트 기여도

100% (풀스택)

## 백엔드 서버

- 도커와 NGINX Reverse Proxy, 깃허브 웹훅을 사용하여 웹 서버 자동 빌드 및 배포 시스템 구현
- CI/CD 서버 구현 (Nest.js)
- 깃 웹훅 서버와 NGINX 블루-그린 배포 전략을 이용한 무중단 배포 시스템 구현
- 웹 백엔드 개발(Nest.js + SequelizeORM)
- 레디스 연동(Docker + Redis)
- 웹소켓 서버 구현
- Open API 발급 시스템 구현(JWT + Redis)
- 로그 조회 기능 구현
- 인증서 자동 갱신 및 발급 시스템 구현(Ruby로 쉘 스크립트 구성)
- AWS EC2 AMI 이미지 구성, AWS RDS 연동
- 메일 전송 시스템 구현(Nodemailer)

## 프론트엔드

- 관리자가 고객의 API 사용량을 조회할 수 있도록 구현
  - In-Memory DB (Redis)에 횟수를 카운팅하고, 배치 스케줄러를 통해 일정 시간마다 사용량을 RDBMS에 갱신하는 기능 구현
- 실시간 온도 관제를 위해 구글 차트와 Socket.io를 이용하여 실시간 차트 그래프 구현
- 실시간 채팅을 통해 원격지에 있는 라즈베리파이 기기를 재부팅하고 관리할 수 있는 제어 시스템 개발
- 서비스 중단 및 서버 재시작을 알려주는 실시간 알림 서비스 구현

## 라즈베리파이 클라이언트 개발

- 라즈베리파이를 통한 패시브 태그 센서 데이터 트래킹 시스템 구현
- 동작하지 않은 센서를 감지하여 되살리는 헬스 체크 기능 구현
- SQLite3를 사용하여 기기 liveness probe 확인
