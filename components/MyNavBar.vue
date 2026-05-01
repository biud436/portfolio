<template>
  <nav
    id="mainNav"
    class="navbar navbar-expand-lg navbar-dark col-12"
    :class="{ 'navbar-shrink': shrunk }"
  >
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top" @click="onClick"></a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        :aria-expanded="open"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        Menu
        <Icon name="fa6-solid:bars" class="ml-1" />
      </button>
      <div
        id="navbarResponsive"
        class="navbar-collapse"
        :class="{ show: open }"
      >
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              href="#portfolio"
              @click="onClick"
              >Portfolio</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              href="#contact"
              @click="onClick"
              >Profile</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { shrunk } = useNavbarShrink(100)
const { handleClick } = useSmoothScroll()
const open = ref(false)

function onClick(e: MouseEvent) {
  handleClick(e)
  open.value = false
}
</script>

<style>
#mainNav {
  background: #1f1f1f;
}
</style>
