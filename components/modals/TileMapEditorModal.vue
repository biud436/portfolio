<template>
  <div>
    <h2 class="text-uppercase mb-2 text-2xl font-bold">웹 기반 타일맵 에디터</h2>
    <p class="item-intro text-muted">
      타일맵을 편집하고 내보낼 수 있는 도구입니다.
    </p>
    <div class="aspect-video w-full">
      <iframe
        class="h-full w-full"
        width="727"
        height="409"
        src="https://www.youtube.com/embed/q9t3xOL30bI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p>
      요즘은 크로스 플랫폼 구동을 위하여 프로그램이 웹기반으로 개발되기도
      합니다.
    </p>
    <p>
      예를 들면, 네이버 워드, 구글 Docs, 한글 웹버전, Visual Studio Code, Atom
      등 많은 프로그램이 이를 입증합니다.
    </p>
    <p>
      Electron과 CSS 등의 웹기술을 활용하면 크로스 플랫폼 프로그램을 보다 더
      쉽게 만들 수 있습니다.
    </p>
    <p>이 프로젝트는 타입스크립트로 작성되었고, 웹팩으로 번들링되었습니다.</p>
    <p>
      또한 펜, 사각형, 원형 툴과 총 4개의 레이어를 지원하며, 채우기 기능은
      Flood-Fill 알고리즘을 이용하여 빠른 채우기가 가능합니다.
    </p>
    <p>
      이외에도 Dark 테마와 Light 테마 변경 기능을 제공하고, Electron의 fs 모듈을
      통해 타일맵 데이터를 JSON으로 내보낼 수 있습니다.
    </p>
    <ul class="list-inline">
      <li>2020.10.01</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
