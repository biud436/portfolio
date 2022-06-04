# NFC 온도 측정 앱 개발

---

## 개발 기간

2021.02.08 ~ 2021.03.05 (1개월)

## 사용 기술

- Spring Boot + MyBatis + Tomcat 9
- Bootstrap 5
- MySQL
- AWS EC2 (Linux Ubuntu Server)
- Let's Encrypt + Certbot
- Android WebView (Android Studio)

<p align="center">
<img src="/img/android-front.png" alt="android-front" />
</p>

## 프로젝트 기여도

100% (앱 + 웹 백엔드 + 웹 프론트 + 안드로이드 네이티브 웹뷰)

## 개발 부분

- Spring Boot로 개발한 웹 서버로 회원 가입, 로그인, 위도 및 경도, 온도 정보를 특정 위경도 범위 내로 조회하는 서버 구현
- NFC Temperature Sensor를 통해 온도와 위경도 정보를 조회하고 서버로 전송하는 앱 구현
- 네이티브 앱으로 기능을 전부 구현하고,자바스크립트 인터페이스를 통해 웹뷰와 앱간 통신으로 데이터를 전달하는 기능 구현
