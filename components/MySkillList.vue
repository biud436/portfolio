<template>
  <div class="page-section bg-white">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">My Skills</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row">
        <nuxt-content :document="mySkillList" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mySkillList: {},
    };
  },
  async mounted() {
    this.mySkillList = await this.$content('skills', 'skillList').fetch();
  },
};
</script>
<style lang="scss"></style>
