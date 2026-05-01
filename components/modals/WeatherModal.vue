<template>
  <div>
    <h2 class="text-uppercase mb-2 text-2xl font-bold">날씨</h2>
    <p class="item-intro text-muted">
      월-금까지의 날씨 데이터를 차트로 보여주는 사이트입니다.
    </p>
    <img
      class="img-fluid d-block mx-auto"
      src="/assets/img/portfolio/weather.png"
      alt=""
    />
    <p>이 사이트는 월요일부터 금요일까지의 데이터를 차트로 보여주는 사이트입니다.</p>
    <p>
      물방울 모양의 아이콘과 풍향과 기온 차트는 HTML 캔버스 API를 이용하여 직접
      그렸습니다.
    </p>
    <ul class="list-inline">
      <li>Date: 2020.09.15</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
