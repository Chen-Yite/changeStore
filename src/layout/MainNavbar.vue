<template>
  <navbar
    position="fixed"
    type="primary"
    class="top-nav-bar"
    :transparent="false"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
       億豐
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Jillion Group Limited.
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link 
          class="navbar-brand" to="/">
          主頁
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="navbar-brand" to="/about-us">
          關於
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="navbar-brand" to="/faq">
          問題
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="navbar-brand" to="/contact-us">
          聯絡我們
        </router-link>
      </li>
      
      <drop-down
        tag="li"
        :title="localization"
        icon="now-ui-icons design_image"
        class="nav-item"
      >
        <nav-link to="/">
          ENG
        </nav-link>
        <nav-link to="/">
          繁體
        </nav-link>
        <nav-link to="/">
          簡體
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  },
  data() {
    return {
      localization: 'ENG'
    }
  }
};
</script>

<style scoped>
  .navbar {
    background-color: #B59B53 !important;
  }

  .navbar-brand {
    color: #fff !important;
  }

  .navbar .nav-link {
    color: #fff !important;
  }
</style>
