<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/jillion_shop_front.jpg')"
      >
      </parallax>
      <div class="first-tab content-center">
        <div class="container">
          <h1 class="title">
            <!-- 億豐找換店，人民幣港幣找換 -->
            {{ $t('landing-page.first-tab.landing-paragraph') }}
          </h1>
          <div class="text-center">
            {{ $t('landing-page.first-tab.mso-license-number') }} 11-09-00222
          </div>
          <!-- <div class="text-center">
             <a href="https://wa.link/w4ltgd" class="btn btn-primary btn-icon btn-round btn-whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div> -->
        </div>
      </div>
    </div>
    <section class="second-tab intro-paragraph bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-xs-10 ml-auto mr-auto text-center">
            <h5 class="px-auto second-tab-inner description">
              {{ $t('landing-page.second-tab.first-paragraph') }}
            </h5>
          </div>
        </div>
      </div>
    </section>
    <section class="third-tab three-sixty-camera text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-xs-10 ml-auto mr-auto text-center">
            <h5 class="px-auto third-tab-inner description">
              <!--  360 camera URL -->
              qwer weqweqwxwxw
            </h5>
          </div>
        </div>
      </div>
    </section>
    <section class="fourth-tab features-icons text-center bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 fourth-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/fast_logo.png" style="width: 75px; height: 75px;" />
              </p>
              <h3>{{ $t('landing-page.second-tab.logo-one') }}</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 fourth-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/custom_logo.svg" style="width: 75px; height: 85px;" />
              </p>
              <h3>{{ $t('landing-page.second-tab.logo-two') }}</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3 fourth-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/reliable_logo.png" style="width: 75px; height: 75px;" />
              </p>
              <h3>{{ $t('landing-page.second-tab.logo-three') }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Showcases -->
    <section class="fourth-tab showcase">
      <div class="container-fluid p-0">
        <div class="row no-gutters">

          <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/rmb-image.jpg');"></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>{{ $t('landing-page.third-tab.tab-one.header') }}</h2>
            <p class="lead mb-0">{{ $t('landing-page.third-tab.tab-one.paragraph') }}</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6 text-white showcase-img" style="background-image: url('img/all_currency_image_2.jpg');"></div>
          <div class="col-lg-6 my-auto showcase-text">
            <h2>{{ $t('landing-page.third-tab.tab-two.header') }}</h2>
            <p class="lead mb-0">{{ $t('landing-page.third-tab.tab-two.paragraph') }}</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/shopping_mall_outside.png');"></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>{{ $t('landing-page.third-tab.tab-three.header') }}</h2>
            <p class="lead mb-0">{{ $t('landing-page.third-tab.tab-two.paragraph') }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="fifth-tab testimonials text-center bg-light">
      <div class="testimonials-inner container">
        <h2 class="mb-5">{{ $t('landing-page.fourth-tab.tab-title') }}</h2>
        <div class="row">
          <div class="testimonial-item col-lg-4 col-12">
            <div class="mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="">
              <h5>{{ $t('landing-page.fourth-tab.tab-one.header') }}</h5>
              <p class="font-weight-light mb-0">"{{ $t('landing-page.fourth-tab.tab-one.paragraph') }}"</p>
            </div>
          </div>
          <div class="testimonial-item col-lg-4 col-12">
            <div class="mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="">
              <h5>{{ $t('landing-page.fourth-tab.tab-two.header') }}</h5>
              <p class="font-weight-light mb-0">"{{ $t('landing-page.fourth-tab.tab-two.paragraph') }}"</p>
            </div>
          </div>
          <div class="testimonial-item col-lg-4 col-12">
            <div class="mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="">
              <h5>{{ $t('landing-page.fourth-tab.tab-three.header') }}</h5>
              <p class="font-weight-light mb-0">"{{ $t('landing-page.fourth-tab.tab-three.paragraph') }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import Vue from 'vue';

export default {
  name: 'index',
  bodyClass: 'index_page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
    }
  }
};
</script>
<style scoped>
  section {
    max-width: 100vw !important;
  }

  .section-about-us {
    background-color: #dcdcdc;
  }
  
  .blockquote-custom {
    width: 350px;
    height: 40vh;
  }

  .btn-whatsapp {
    background-color: #24CD63 !important;
  }

  .money-exchange-logos {
    display: inline-flex;
  }

  .logo-left {
    margin-right: 4vw;
  }

  .first-tab {
    padding: 12vh 0;
  }

  .second-tab-inner {
    padding-top: 15vh;
    padding-bottom: 15vh;
  }

  .fourth-tab-inner {
    padding-top: 15vh;
    padding-bottom: 15vh;
  }

  @media only screen and (min-width: 600px) {
    .third-tab {
      height: 45vh;
    }
  }

  .third-tab {
    background-color: #e6d8ac;
  }

  @media only screen and (max-width: 600px) {
    .third-tab-inner {
      padding: 8vh 0!important;
    }
  }

  .third-tab-inner {
    padding: 15vh 0;
  }

  @media only screen and (min-width: 600px) {
    .fifth-tab {
      height: 45vh;
    }
  }

  .testimonials-inner {
    padding: 3vh 0;
  }

  .showcase-img {
    height: 45vh;
  }

  .showcase-img img {
    height: 65vh;
    width: 50vw;
  }

  .showcase-text {
    height: 45vh;
    padding: 20px;
  }

  .showcase-text h2 {
    padding: 0 25px;
  }

  .showcase-text p {
    font-size: 18px;
    padding: 0 25px;
  }
</style>
