<template>
  <div class="col-sm">
    <div class="card" @mouseenter="hover" @mouseleave="leave">
      <img
        class="card-img-top"
        width="256"
        height="256"
        :src="src"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text text-center">{{ getFullText }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['imgsrc', 'normal', 'status'],
  data() {
    const { normal, imgsrc } = this;

    return {
      src: imgsrc,
      text: normal,
    };
  },
  methods: {
    hover(): void {
      this.text = this.status as any;
    },
    leave(): void {
      this.text = this.normal as any;
    },
  },
  computed: {
    getFullText(): string {
      return this.text;
    },
  },
});
</script>
