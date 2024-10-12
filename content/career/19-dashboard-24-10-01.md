# 20. Cleaning Monitoring System

고온 세척 시설에서 박스의 온도 및 세척 상태를 체크하기 위한 Medium Range RFID Reader Backend 프로그램입니다.

Windows에서 Medium Range RFID Reader를 C++/C# 언어를 이용하여 기기 정보 및 태그 UID, 내/외부 온도를 측정하여 웹 서버로 전송하는 프로그램을 개발하였습니다.

---

## 개발 기간

2024.08 ~ 진행 중 (약 2개월)

## 사용 기술

- Low-level Programming / Hardware Integration:
  - C++
  - C# (.NET Framework)
  - libcurl
  - nlohmann/json
  - Windows API
  - C++ STL
  - vcpkg
  - FEIG SDK
  - Visual Studio 2022
- Backend: NestJS, Yarn Berry + PnP, TypeORM, WebSocket
- Frontend: React, Recharts, MUI, SWR, Zod, Axios

## 프로젝트 인원 구성 및 기여도

풀스택 1명

## 담당 업무

- C++ 과 USB 드라이버를 이용하여 기기(하드웨어)와 통신해 온도 데이터 취득
  - 게임 업데이트 루프 패턴을 도입하여 30프레임(0.5초) 간격으로 NFC 태그 정보 취득
  - Inventory 후 ADC 데이터를 주기적으로 읽는 기능 구현
  - `libcurl`를 통해 BFF 서버로 RAW 데이터 전송. DTO 객체에 JSON 직렬화 기능 추가
  - 부모 프로세스에서 프로세스의 생명 주기를 제어하여 항상 프로그램이 실행 상태에 있을 수 있도록 함
- BFF 서버 / 웹 클라이언트 화면 구현
  - 온도 서버에서 온도 변환 데이터 취득 후 웹소켓으로 실시간으로 데이터 전송
  - 웹소켓으로 전달 받은 세척 상태 / 온도 / 시간 정보를 화면에 표시 및 구현
