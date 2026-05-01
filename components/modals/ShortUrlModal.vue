<template>
  <article>
    <p class="eyebrow">Short URL</p>
    <h2 class="section-title !text-2xl sm:!text-3xl">짧은 주소 변환 서비스</h2>
    <p class="mt-2 text-zinc-400">Node.js + Express + GitHub Pages 조합.</p>

    <img
      class="mt-6 w-full rounded-xl border border-zinc-800 object-cover"
      src="/assets/img/portfolio/shorturl.png"
      alt="Short URL 스크린샷"
    />

    <div class="mt-6 space-y-4 text-zinc-300">
      <p>
        DB 에 원본 주소와 MD5 해시 변환 주소를 저장하고, 접속 시 DB 를 확인하여
        리다이렉션하는 서비스입니다.
      </p>
    </div>

    <p class="mt-6 text-xs uppercase tracking-wider text-zinc-500">
      2021.01.13 — 2021.01.14
    </p>
  </article>
</template>

<script setup lang="ts"></script>
