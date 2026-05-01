<template>
  <article>
    <p class="eyebrow">쇼핑몰</p>
    <h2 class="section-title !text-2xl sm:!text-3xl">쇼핑몰 클론</h2>
    <p class="mt-2 text-zinc-400">실제 사이트 클론으로 시작한 팀 프로젝트.</p>

    <img
      class="mt-6 w-full rounded-xl border border-zinc-800 object-cover"
      src="/assets/img/portfolio/portfolio1.png"
      alt="쇼핑몰 스크린샷"
    />

    <div class="mt-6 space-y-4 text-zinc-300">
      <p>
        ES6 import/export 를 적극 활용하여 협업 가능한 모듈 구조를 주도했고, 자주
        쓰이는 기능(로그인, 메뉴, 최근 상품, 카테고리)을 컴포넌트 패턴으로
        정리하여 자바 패키지처럼 간단히 로드하도록 설계했습니다.
      </p>
      <p>
        대부분의 데이터는 AJAX 로 동적 생성되며, 스크롤 시 과도한 요청을 막기
        위해 underscore.js 의 throttle 을 적용했습니다.
      </p>
      <p>
        소셜 로그인(네이버 / 카카오 / 페이스북) OAuth, 페이스북 댓글, MVC2 패턴
        문의 게시판, SHA-256 단방향 암호화, 카카오페이 결제 검증, 세션 기반
        장바구니, JWT + SMTP 인증 비밀번호 찾기 등을 구현했습니다.
      </p>
      <p>
        오라클 클라우드 우분투 서버에 톰캣 / 마리아DB / HTTPS 인증서를 구성해
        24시간 가동 중입니다.
      </p>
    </div>

    <dl
      class="mt-6 grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 sm:grid-cols-2"
    >
      <div>
        <dt class="text-xs uppercase tracking-wider text-zinc-500">기간</dt>
        <dd class="mt-1 text-sm text-zinc-200">2020.10 — 2021.01</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-wider text-zinc-500">기술</dt>
        <dd class="mt-1 text-sm text-zinc-200">
          HTML5, CSS/SCSS, JavaScript, Java/JSP
        </dd>
      </div>
      <div class="sm:col-span-2">
        <dt class="text-xs uppercase tracking-wider text-zinc-500">라이브러리</dt>
        <dd class="mt-1 text-sm text-zinc-200">
          jQuery · 아임포트(카카오페이) · 네이버 / 카카오 / 페이스북 로그인 ·
          페이스북 댓글 · EmailJS · Java Mail + JWT
        </dd>
      </div>
    </dl>
  </article>
</template>

<script setup lang="ts"></script>
