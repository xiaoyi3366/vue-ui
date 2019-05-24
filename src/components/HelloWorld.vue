<template>
<div :class="[`nav-theme-${navTherem}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      :theme="navTherem"
      v-if="navLayout==='left'"
      width="256px"
    >
      <div class="title">Ant Design Vue Pro</div>
      <SiderMenu :theme="navTherem"/>
    </a-layout-sider>
    <a-layout>
      <a-icon :type="collapsed?'menu-unfold':'menu-fold'" class="trigger" @click="collapsed = !collapsed"></a-icon>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <SittingDrawer/>
</div>
</template>

<script>
import SittingDrawer from './SittingDrawer'
import SiderMenu from './SiderMenu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      collapsed: false,
    }
  },
  computed:{
    navTherem(){
      return this.$route.query.navTherem || 'dark'
    },
    navLayout(){
      return this.$route.query.navLayout || 'left'
    },
  },
  components:{
    SittingDrawer,
    SiderMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.trigger{
  padding: 0 20px;
  line-height: 64px;
}
.trigger:hover{
  background:#eee;
}
.title {
  height: 64px;
  line-height: 64px;
  text-align: center;
  /* overflow: hidden; */
}
.nav-theme-dark >>> .title {
  color: #ffffff;
}
</style>
