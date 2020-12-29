<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/">
                <!-- 主頁  -->
                {{ $t('nav.home-page') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/about"> 
              <!-- 關於  -->
              {{ $t('nav.about-us') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="navbar-brand" to="/faq"> 
              <!-- 問題 -->
              {{ $t('FAQ') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="navbar-brand" to="/contact_us">
                <!-- 聯絡我們 -->
                {{ $t('nav.contact-us') }}
              </router-link>
            </li>

        </ul>
      </nav>
      <div class="copyright">
        版權所有 &copy; {{ year }}, 億豐集團有限公司留所有權利。
        
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
