<template>
    <div>
        <TopList />
        <SideMenu />
      <Nuxt />
    </div>
  </template>
  
  <script>
import TopList from '~/components/TopList.vue';
import SideMenu from '../components/SideMenu.vue';
  export default {
    head() {
        return {
            bodyAttrs: {
                id: "default-layout"
            }
        };
    },
    components: { TopList, SideMenu }
}
  </script>