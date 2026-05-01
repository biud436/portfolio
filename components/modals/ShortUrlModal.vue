<template>
  <div>
    <h2 class="text-uppercase mb-2 text-2xl font-bold">Short URL</h2>
    <p class="item-intro text-muted">짧은 주소 변환 서비스입니다.</p>
    <img
      class="img-fluid d-block mx-auto"
      src="/assets/img/portfolio/shorturl.png"
      alt=""
    />
    <p>
      짧은 주소 변환 서비스는 Node.js Express와 깃허브 페이지를 이용하였습니다.
    </p>
    <p>
      DB에 원본 주소와 MD5로 변환된 주소가 저장되며 접속 시 DB를 확인하여
      리다이렉션하는 서비스입니다.
    </p>
    <ul class="list-inline">
      <li>Date: 2021.01.13 ~ 2021.01.14</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
