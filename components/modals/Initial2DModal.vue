<template>
  <div>
    <h2 class="text-uppercase mb-2 text-2xl font-bold">Initial2D</h2>
    <p class="item-intro text-muted">C++ 2D 게임 엔진입니다.</p>
    <img
      class="img-fluid d-block mx-auto"
      src="/assets/img/portfolio/pp6.png"
      alt=""
    />
    <table class="mt-4 w-full border-collapse">
      <thead>
        <tr class="border-b">
          <th class="px-2 py-1 text-center">구분</th>
          <th class="px-2 py-1 text-center">내용</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row[0]" class="border-b">
          <td class="px-2 py-1 text-center">{{ row[0] }}</td>
          <td class="px-2 py-1 text-center">{{ row[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const rows: [string, string][] = [
  ['Version', 'Beta'],
  ['Platform', 'Windows'],
  ['사용된 언어', 'C++, Lua'],
  ['Engine Type', '자체 개발 엔진'],
  ['Graphics Device', 'Windows GDI 사용'],
  ['이미지 포맷', '*.PNG(libpng), *.BMP 지원'],
  ['오디오 재생', '*.ogg 포함 대부분 포맷 지원 (SDL Audio 사용)'],
  ['동영상 재생', '동영상 재생 불가'],
  ['하드웨어 가속 여부', 'false'],
  ['Script Engine', 'Lua v5.0.3'],
  ['Map Editor', '개발 중 (일렉트론)'],
  ['Data Type', '*.json (Game Data), *.sqlite (DB)'],
  ['암호화 지원', 'false'],
  ['멀티 쓰레딩 지원', 'false'],
  ['쓰레드 처리 지원', 'Unstable'],
  ['프로세스 실행', 'true'],
  ['Bitmap Font 지원', 'true'],
  ['GetGlyphOutline을 이용한 폰트 묘화 지원', 'true'],
  ['타일맵 지원', 'true'],
]
</script>
