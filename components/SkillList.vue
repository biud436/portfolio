<template>
  <section class="page-section bg-white" id="skill-list">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">My Skills</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row">
        <div class="row col-sm" id="skill-list">
          <div class="row">
            <skill-component
              imgsrc="/assets/img/skills/HTML.png"
              normal="HTML"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/CSS3.png"
              normal="CSS3"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/JS.png"
              normal="ES5/ES6"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/TS.png"
              normal="타입스크립트"
              status="familiar"
            ></skill-component>
          </div>
          <div class="row mt-2">
            <skill-component
              imgsrc="/assets/img/skills/JSP.png"
              normal="JSP"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/SASS.png"
              normal="SASS"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/AWS.png"
              normal="AWS EC2"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/MYSQL.png"
              normal="MySQL/MariaDB"
              status="familiar"
            ></skill-component>
          </div>
          <div class="row mt-2">
            <skill-component
              imgsrc="/assets/img/skills/WEBPACK.png"
              normal="웹팩"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/NODEJS.png"
              normal="Node.js"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/EXPRESS.png"
              normal="Express"
              status="familiar"
            ></skill-component>
          </div>
          <div class="row mt-2">
            <skill-component
              imgsrc="/assets/img/skills/SPRING-BOOT.png"
              normal="스프링 부트"
              status="beginner"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/DOCKER.png"
              normal="도커"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/NGINX.png"
              normal="Nginx"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/NESTJS.png"
              normal="Nest.js"
              status="familiar"
            ></skill-component>
            <skill-component
              imgsrc="/assets/img/skills/VUEJS.png"
              normal="Vue.js"
              status="familiar"
            ></skill-component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style lang="scss"></style>
