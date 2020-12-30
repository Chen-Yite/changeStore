<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">
            <!-- 業務範圍 -->
            {{ $t('business-domain.first-tab.page-title') }}
          </h1>
        </div>
      </div>
    </div>
    <div class="section section-domain-business">
      <div class="container">
        <div class="row">
          <section>
            <div>
              <h2>{{ $t('business-domain.second-tab.first-point.title') }}</h2>
              <ul class="check-list">
                <li>{{ $t('business-domain.second-tab.first-point.point-one') }}</li>
                <li>{{ $t('business-domain.second-tab.first-point.point-two') }}</li>
              </ul>
            </div>
          </section>
        </div>
        <div class="row">
          <section>
            <div>
              <h2>{{ $t('business-domain.second-tab.second-point.title') }}</h2>
              <ul class="check-list">
                <li>{{ $t('business-domain.second-tab.second-point.point-one') }}</li>
                <li>{{ $t('business-domain.second-tab.second-point.point-two') }}</li>
                <li>{{ $t('business-domain.second-tab.second-point.point-three') }}</li>
              </ul>
            </div>
          </section>
        </div>
        <div class="row">
           <section>
            <div>
              <h2>{{ $t('business-domain.second-tab.third-point.title') }}</h2>
              <ul class="check-list">
                <li>{{ $t('business-domain.second-tab.third-point.point-one') }}</li>
              </ul>
            </div>
          </section>
        </div>
       
        <!-- {{ $t('landing-page.first-tab.landing-paragraph') }} -->
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'business_domain',
  bodyClass: 'business_domain_page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
  .check-list {
    margin: 0;
    padding-left: 1.2rem;
  }

  .check-list li {
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .check-list li:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: -2px;
      width: 5px;
      height: 11px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: #00a8a8;
      transform-origin: bottom left;
      transform: rotate(45deg);
  }


  /* Boilerplate stuff */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem; /* 18px */
    background-color: #efefef;
    color: #324047
  }

  html,
  body,
  section {
    height: 100%;
  }

  section {
    max-width: 400px;
    display: flex;
    align-items: center;
  }

  div {
    margin: auto;
  }
</style>
