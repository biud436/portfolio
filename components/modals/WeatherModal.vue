<template>
  <article>
    <p class="eyebrow">날씨</p>
    <h2 class="section-title !text-2xl sm:!text-3xl">주간 날씨</h2>
    <p class="mt-2 text-zinc-400">
      월-금까지의 데이터를 차트로 보여주는 사이트입니다.
    </p>

    <img
      class="mt-6 w-full rounded-xl border border-zinc-800 object-cover"
      src="/assets/img/portfolio/weather.png"
      alt="날씨 스크린샷"
    />

    <div class="mt-6 space-y-4 text-zinc-300">
      <p>월요일부터 금요일까지의 날씨 데이터를 차트로 시각화합니다.</p>
      <p>
        물방울 모양 아이콘과 풍향·기온 차트는 HTML 캔버스 API 로 직접
        그렸습니다.
      </p>
    </div>

    <p class="mt-6 text-xs uppercase tracking-wider text-zinc-500">2020.09.15</p>
  </article>
</template>

<script setup lang="ts"></script>
