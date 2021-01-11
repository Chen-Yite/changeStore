<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/jillion_shop_front.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">
            <!-- 億豐找換店，人民幣港幣找換 -->
            {{ $t('landing-page.first-tab.landing-paragraph') }}
          </h1>
          <div class="text-center">
            {{ $t('landing-page.first-tab.mso-license-number') }} 11-09-00222
          </div>
          <div class="text-center">
             <a href="https://wa.link/w4ltgd" class="btn btn-primary btn-icon btn-round btn-whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <div class="text-center money-exchange-logos">
              <div class="logo-left">
                <img src="../assets/img/HongKongCustoms.svg" style="width: 55px; height55px;" />
                <div>
                  {{ $t('landing-page.second-tab.license') }}
                  <!-- 金錢服務經營者牌照 -->
                </div>
              </div>
              <div class="logo-right">
                <img src="../assets/img/HongKongCustoms.svg" style="width: 55px; height55px;" />
                <div>MSO</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"></h2>
            <h5 class="description">
              {{ $t('landing-page.second-tab.first-paragraph') }}
              <!-- 億豐找換竭誠為你服務。找換店設於葵芳廣場，全力為客戶提供可靠人民幣兌換服務。緊貼最新匯價，精益求精！ -->
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  {{ $t('landing-page.second-tab.small-section') }}
                  <!-- "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly" -->
                  <!-- <br />
                  <br />
                  <small>-NOAA</small> -->
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3>
                {{ $t('landing-page.second-tab.second-paragraph-title') }}
                <!-- 找換店位置方便，在葵涌廣場地下，地鐵站B2 出口右轉斜對。 -->
              </h3>
              <p>
                {{ $t('landing-page.second-tab.second-paragraph-one-text') }}
                <!-- The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice. -->
              </p>
              <p>
                {{ $t('landing-page.second-tab.second-paragraph-two-text') }}
                <!-- For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade. -->
              </p>
              <p>
                {{ $t('landing-page.second-tab.second-paragraph-three-text') }}
                <!-- The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  
  .btn-whatsapp {
    background-color: #24CD63 !important;
  }

  .money-exchange-logos {
    display: inline-flex;
  }

  .logo-left {
    margin-right: 4vw;
  }
</style>
