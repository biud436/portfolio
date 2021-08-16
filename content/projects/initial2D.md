## 사용한 기술

`C++, Lua, Zlib, libpng, SDL2, SDL Audio, OpenAL, TinyXML, GDI, JSON, SQLite3`

## 동작 플랫폼

Windows

## 소개

`Windows API`를 이용한 C++ 2D 게임 엔진입니다. XML 파일과 JSON
파일을 로드하여 데이터를 읽거나 저장할 수 있습니다. 또한
Finite State Machine(FSM) 패턴과 싱글턴 패턴을 활용하여
스테이지 전이 기능을 갖추고 있습니다. 그래픽 엔진은 Windows
GDI를 사용하였고 Sprite는 Vector2D 통해 회전, 이동, 크기
조절이 가능합니다. 이미지는 LibPNG와 Zlib를 통해 직접 PNG
파일을 비트맵 파일을 추출하는 방식을 사용합니다. 또한 폰트
파일에서 윤곽선 정보를 직접 추출하여 부드러운 폰트 묘화 기능도
지원하고 있습니다. 비트맵 폰트를 통해 미리 그려진 비트맵
폰트를 그릴 수도 있습니다. Input과 Audio를 통해 키입력을
받거나 마우스 입력을 할 수 있고 사운드도 재생할 수 있습니다.
쓰레드와 프로세스 실행 기능을 갖추고 있어 내부적으로
프로그램을 실행할 수도 있습니다. 사용자는 루아 스크립트 엔진을
통해 스크립트를 작성하여 소스 코드 컴파일 없이 로직을 구성할
수 있습니다.