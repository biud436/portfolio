<template>
  <article>
    <p class="eyebrow">게임 엔진</p>
    <h2 class="section-title !text-2xl sm:!text-3xl">Initial2D</h2>
    <p class="mt-2 text-zinc-400">C++ 기반 2D 게임 엔진.</p>

    <img
      class="mt-6 w-full rounded-xl border border-zinc-800 object-cover"
      src="/assets/img/portfolio/pp6.png"
      alt="Initial2D 스크린샷"
    />

    <div class="mt-8 overflow-hidden rounded-xl border border-zinc-800">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-zinc-800 bg-zinc-950/60">
            <th
              class="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400"
            >
              구분
            </th>
            <th
              class="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400"
            >
              내용
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="row[0]"
            :class="i % 2 ? 'bg-zinc-950/40' : ''"
            class="border-b border-zinc-800/60 last:border-b-0"
          >
            <td class="px-4 py-2 text-zinc-300">{{ row[0] }}</td>
            <td class="px-4 py-2 text-zinc-200">{{ row[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script setup lang="ts">
const rows: [string, string][] = [
  ['Version', 'Beta'],
  ['Platform', 'Windows'],
  ['언어', 'C++, Lua'],
  ['Engine Type', '자체 개발'],
  ['Graphics', 'Windows GDI'],
  ['이미지 포맷', 'PNG (libpng), BMP'],
  ['오디오', '대부분 포맷 (SDL Audio)'],
  ['하드웨어 가속', 'false'],
  ['Script Engine', 'Lua 5.0.3'],
  ['Map Editor', '개발 중 (Electron)'],
  ['Data Type', 'JSON / SQLite'],
  ['암호화', 'false'],
  ['멀티 쓰레딩', 'false'],
  ['프로세스 실행', 'true'],
  ['Bitmap Font', 'true'],
  ['타일맵 지원', 'true'],
]
</script>
