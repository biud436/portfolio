<template>
  <div>
    <master-header />
    <skill-list />
    <portfolio />
    <clients />
    <contact />
    <my-footer />
    <project-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyNavBar from '../components/MyNavBar.vue';
import MasterHeader from '../components/MasterHeader.vue';
import SkillList from '../components/SkillList.vue';
import Portfolio from '../components/Portfolio.vue';
import Clients from '../components/Clients.vue';
import Contact from '../components/Contact.vue';
import MyFooter from '../components/MyFooter.vue';
import ProjectList from '../components/ProjectList.vue';

export default Vue.extend({
  layout: 'main',
  components: {
    MyNavBar,
    MasterHeader,
    SkillList,
    Portfolio,
    Clients,
    Contact,
    MyFooter,
    ProjectList,
  },
});
</script>
<style lang="scss"></style>
