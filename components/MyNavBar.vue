<template>
  <nav class="navbar navbar-expand-lg navbar-dark col-12" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top"></a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ml-1"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio"
              >Portfolio</a
            >
          </li>
          <!-- <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Profile</a></li> -->
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style lang="css">
#mainNav {
  background: #1f1f1f;
}
</style>
