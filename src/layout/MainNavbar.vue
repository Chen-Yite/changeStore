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
        <p>{{ $t('nav.company-name') }}</p>
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">Jillion Forex</div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="navbar-brand" to="/">
          主頁 
          {{ $t('nav.home-page') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="navbar-brand" to="/about"> 
        關於 
        {{ $t('nav.about-us') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="navbar-brand" to="/faq"> 
        問題
        {{ $t('FAQ') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="navbar-brand" to="/liaison">
        聯絡我們
        {{ $t('nav.contact-us') }}
        </router-link>
      </li>

      <drop-down
        tag="li"
        :title="localization"
        class="nav-item"
      >
        <nav-link class="dropdown-item" to="/"> 
          <a @click="changeLanguage('ENG')">ENG</a> 
        </nav-link>
        <nav-link class="dropdown-item" to="/"> 
          <a @click="changeLanguage('繁體')">繁體</a> 
        </nav-link>
        <nav-link class="dropdown-item" to="/"> 
          <a @click="changeLanguage('簡體')">簡體</a> 
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import Vue from 'vue';

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
  },
  created() {
    // console.log('created', this.$store.state.curLanguage);
    Vue.i18n.set(this.$store.state.curLanguage.short);
  },
  data() {
    return {
      localization: "ENG"
    };
  },
  methods: {
    changeLanguage(lang) {
      let i18nLangShort = "";
      switch (lang) {
        case 'ENG':
          i18nLangShort = "en";
          break;
        case '繁體':
          i18nLangShort= "zh-hant";
          break;
        case '簡體':
          i18nLangShort = "zh-hans";
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
      this.localization = lang;
      Vue.i18n.set(i18nLangShort);
      this.$store.commit('setLanguage', i18nLangShort);
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: #b59b53 !important;
}

.navbar-nav .dropdown-menu .router-link-active {
  background-color: #2c2c2c;
}

.navbar-brand {
  color: #fff !important;
}

.navbar .nav-link {
  color: #fff !important;
}
</style>
