<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<style scoped>
@media screen and (max-width: 991px) {
  .sidebar-collapse .navbar-collapse:before {
      background: linear-gradient(#000 0%, #000 80%) !important; 
  }
}
</style>
<script>
  export default {};
</script>
