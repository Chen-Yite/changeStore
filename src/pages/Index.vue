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
    <section class="intro-paragraph bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="second-tab col-md-8 ml-auto mr-auto text-center">
            <h5 class="second-tab-inner description">
              {{ $t('landing-page.second-tab.first-paragraph') }}
            </h5>
          </div>
        </div>
      </div>
    </section>
    <section class="third-tab features-icons text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 third-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/fast_logo.png" style="width: 75px; height: 75px;" />
              </p>
              <h3>滙款方便</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 third-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/custom_logo.svg" style="width: 75px; height: 85px;" />
              </p>
              <h3>MSO牌照</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3 third-tab-inner">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <p class="lead mb-0">
                <img src="img/reliable_logo.png" style="width: 75px; height: 75px;" />
              </p>
              <h3>效率特高</h3>
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
            <h2>直接銀行帳戶匯款</h2>
            <p class="lead mb-0">我們擁有MSO牌照，找換店有自己設立的銀行帳户可以直接過錢去你户口，流程快捷簡單</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6 text-white showcase-img" style="background-image: url('img/all_currency_image_2.jpg');"></div>
          <div class="col-lg-6 my-auto showcase-text">
            <h2>誠信可靠</h2>
            <p class="lead mb-0">每一位客戶都是我們的珍貴財產，我們是用心去對待每一位客户，用我們最大真誠的態度去協助客户解決他們的需求</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/shopping_mall_outside.png');"></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>位置方便</h2>
            <p class="lead mb-0">找換店位於葵涌廣場地下，地鐵站B2出口，客人只需在B2出口步行5分鐘即可到達本店</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="fifth-tab testimonials text-center bg-light">
      <div class="testimonials-inner container">
        <h2 class="mb-5">客户評價</h2>
        <div class="row">
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="">
              <h5>Json Law</h5>
              <p class="font-weight-light mb-0">"億豐真的很方便，服務態度很好，又快捷，不用半天就能把錢匯到國內。客服也很有心的解答我任何的疑惑"</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="">
              <h5>Fred Siu</h5>
              <p class="font-weight-light mb-0">"我是從事貿易的，經常要將錢滙出滙入中國，億豐是我做滙款的首選，億豐滙款快捷，一天內就可以將錢滙到國內"</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
              <img class="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="">
              <h5>Sarah Kwok</h5>
              <p class="font-weight-light mb-0">"之前過年時通過億豐找換了人民幣，到店舖時員工的服務態度很好，我打電話去資詢時他們用心去解答我的每一個問題，提供的資訊詳盡，找換的較率快捷"</p>
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
<style>
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

  .second-tab {
    padding: 15vh;
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
