<template>
  <navbar
    position="fixed"
    type="primary"
    class="top-nav-bar"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand company-logo" to="/">
        <!-- 億豐 -->
        <img class="logo" src="img/jillion_logo.png">
        <p>{{ $t('nav.company-name') }}</p>
      </router-link>
      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">Jillion Forex</div>
      </el-popover> -->
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link">
          <router-link class="navbar-brand" to="/">
            <!-- 主頁  -->
            {{ $t('nav.home-page') }}
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <router-link class="navbar-brand" to="/business_domain"> 
          <!-- 關於  -->
          {{ $t('nav.business-domain') }}
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <router-link class="navbar-brand" to="/about"> 
          <!-- 關於  -->
          {{ $t('nav.about-us') }}
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <router-link class="navbar-brand" to="/faq"> 
          <!-- 問題 -->
          {{ $t('nav.faq') }}
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
        <router-link 
          class="navbar-brand" to="/contact_us">
          <!-- 聯絡我們 -->
          {{ $t('nav.contact-us') }}
        </router-link>
        </a>
      </li>
      <a class="nav-link">
      <drop-down
        tag="li"
        :title="localization"
        class="nav-item"
      >
        <nav-link class="dropdown-item" :to="$route.name=='index'?'/':$route.name"> 
          <a class="language-options" @click="changeLanguage('繁體')">繁體</a> 
        </nav-link>
        <nav-link class="dropdown-item" :to="$route.name=='index'?'/':$route.name"> 
          <a class="language-options" @click="changeLanguage('簡體')">簡體</a> 
        </nav-link>
        <nav-link class="dropdown-item" :to="$route.name=='index'?'/':$route.name"> 
          <a class="language-options" @click="changeLanguage('ENG')">ENG</a> 
        </nav-link>
      </drop-down>
      </a>
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
      localization: "繁體"
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
          i18nLangShort = "zh-hant";
      }
      this.localization = lang;
      Vue.i18n.set(i18nLangShort);
      this.$store.commit('setLanguage', i18nLangShort);
    }
  }
};
</script>
<style scoped>

.company-logo p {
  font-size: 20px;
}

.logo {
  height: 7vh;
  margin-right: 3px;
}

.navbar-collapse .collapse .show {
  background-color: #000 !important;
}

.navbar {
  background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  box-shadow: black 0 -60px 110px -50px inset;
}

.navbar-nav .dropdown-menu .router-link-active {
  background-color: #2c2c2c;
}

.navbar-brand {
  color: #fff !important;
}

.navbar .nav-link {
  color: #fff !important;
  font-size: 1.2em !important;
}

.language-options {
  font-size: 1.2em !important;
}

</style>
