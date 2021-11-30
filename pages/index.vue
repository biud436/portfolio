<template>
  <div>
    <master-header />
    <contact />
    <my-skill-list />
    <PortfolioCareer />
    <portfolio />
    <hobby />
    <clients />
    <my-footer />
    <project-list />
  </div>
</template>

<script>
import Vue from 'vue';
import MyNavBar from '../components/MyNavBar.vue';
import MasterHeader from '../components/MasterHeader.vue';
import SkillList from '../components/SkillList.vue';
import Portfolio from '../components/Portfolio.vue';
import Clients from '../components/Clients.vue';
import Contact from '../components/Contact.vue';
import MyFooter from '../components/MyFooter.vue';
import ProjectList from '../components/ProjectList.vue';
import PortfolioCareer from '../components/PortfolioCareer.vue';
import MySkillList from '~/components/MySkillList.vue';
import Hobby from '~/components/Hobby.vue';

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
    PortfolioCareer,
    MySkillList,
    Hobby,
  },
});
</script>
<style lang="scss"></style>
