<template>
  <section id="skills" class="section">
    <div class="section-inner">
      <div class="text-center">
        <span class="eyebrow">My Skills</span>
        <h2 class="section-title">기술 스택</h2>
        <p class="section-subtitle">사용해 본 도구와 라이브러리.</p>
      </div>

      <ul
        class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <SkillComponent
          v-for="skill in skills"
          :key="skill.imgsrc"
          :imgsrc="skill.imgsrc"
          :normal="skill.normal"
          :status="skill.status"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { imgsrc: '/assets/img/skills/HTML.png', normal: 'HTML', status: 'familiar' },
  { imgsrc: '/assets/img/skills/CSS3.png', normal: 'CSS3', status: 'familiar' },
  { imgsrc: '/assets/img/skills/JS.png', normal: 'ES5/ES6', status: 'familiar' },
  { imgsrc: '/assets/img/skills/TS.png', normal: '타입스크립트', status: 'familiar' },
  { imgsrc: '/assets/img/skills/JSP.png', normal: 'JSP', status: 'familiar' },
  { imgsrc: '/assets/img/skills/SASS.png', normal: 'SASS', status: 'familiar' },
  { imgsrc: '/assets/img/skills/AWS.png', normal: 'AWS EC2', status: 'familiar' },
  { imgsrc: '/assets/img/skills/MYSQL.png', normal: 'MySQL/MariaDB', status: 'familiar' },
  { imgsrc: '/assets/img/skills/WEBPACK.png', normal: '웹팩', status: 'familiar' },
  { imgsrc: '/assets/img/skills/NODEJS.png', normal: 'Node.js', status: 'familiar' },
  { imgsrc: '/assets/img/skills/EXPRESS.png', normal: 'Express', status: 'familiar' },
  { imgsrc: '/assets/img/skills/NESTJS.png', normal: 'Nest.js', status: 'familiar' },
  { imgsrc: '/assets/img/skills/VUEJS.png', normal: 'Vue.js', status: 'familiar' },
  { imgsrc: '/assets/img/skills/SPRING-BOOT.png', normal: '스프링 부트', status: 'beginner' },
  { imgsrc: '/assets/img/skills/DOCKER.png', normal: '도커', status: 'familiar' },
  { imgsrc: '/assets/img/skills/NGINX.png', normal: 'Nginx', status: 'familiar' },
]
</script>
