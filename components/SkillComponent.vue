<template>
  <div class="col-sm">
    <div class="card" @mouseenter="hover" @mouseleave="leave">
      <img
        class="card-img-top"
        width="256"
        height="256"
        :src="imgsrc"
        alt="Skill icon"
      />
      <div class="card-body">
        <p class="card-text text-center">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imgsrc: string
  normal: string
  status: string
}>()

const text = ref(props.normal)

function hover() {
  text.value = props.status
}

function leave() {
  text.value = props.normal
}
</script>
