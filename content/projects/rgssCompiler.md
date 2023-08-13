## 사용한 기술

- Node.js
- VSCode Extension API
- Typescript
- Ruby

## 동작 플랫폼

Visual Studio Code (Windows 및 MacOS only)에서만 동작

## 소개

RPG Maker의 코드를 자동으로 컴파일하는 Visual Studio Code Extension 입니다.
`Scripts.rxdata`와 `Scripts.rvdata2` 파일을 역직렬화(deserialize)하고 `zlib`로 압축 해제하여 스크립트를 불러올 수 있고,
또한 단축키 CTRL + s(CMD + s)를 통해 자동으로 루비 직렬화 파일을 만들 수 있습니다.
F5 버튼(fn + F5)를 통해 스크립트 파일들을 압축하여 게임 플레이를 바로 할 수 있습니다.

이것은 맥에서 스크립트를 편집하고 게임을 플레이 하기 위해 개발되었습니다.

## 개발 기간

2022.03.06 ~ 2022.03.09 (3일)
