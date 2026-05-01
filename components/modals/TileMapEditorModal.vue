<template>
  <article>
    <p class="eyebrow">Initial Editor</p>
    <h2 class="section-title !text-2xl sm:!text-3xl">웹 기반 타일맵 에디터</h2>
    <p class="mt-2 text-zinc-400">타일맵을 편집·내보낼 수 있는 도구.</p>

    <div class="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-zinc-800">
      <iframe
        class="size-full"
        src="https://www.youtube.com/embed/q9t3xOL30bI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="mt-6 space-y-4 text-zinc-300">
      <p>
        Electron 과 CSS 같은 웹 기술로 크로스 플랫폼 데스크톱 앱을 만들 수 있다는
        점에서 출발한 프로젝트입니다.
      </p>
      <p>
        타입스크립트로 작성하고 웹팩으로 번들링했으며, 펜·사각형·원형 툴과 4개
        레이어를 지원합니다. 채우기는 Flood-Fill 알고리즘으로 구현했습니다.
      </p>
      <p>
        Dark / Light 테마와 Electron fs 모듈을 통한 JSON 내보내기를 지원합니다.
      </p>
    </div>

    <p class="mt-6 text-xs uppercase tracking-wider text-zinc-500">2020.10.01</p>
  </article>
</template>

<script setup lang="ts"></script>
