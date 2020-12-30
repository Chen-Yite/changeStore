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
          <h1 class="title">{{ $t('nav.business-domain') }}
          </h1>
          <!-- <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round btn-whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div> -->
        </div>
      </div>
    </div>
    <div class="section section-domain-business">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"></h2>
            <h3 class="description">
              {{ $t('landing-page.first-tab.landing-paragraph') }}
              <p>{{ $t('BusinessDomain-page.second-tab.Titl1') }}</p>
              <ul>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l1') }}
                </li>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l2') }}
                </li>
              </ul>
              <p>{{ $t('BusinessDomain-page.second-tab.Titl2') }}</p>
              <ul>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l3') }}
                </li>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l4') }}
                </li>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l5') }}
                </li>
              </ul>
              <p>{{ $t('BusinessDomain-page.second-tab.Titl3') }}</p>
              <ul>
                <li>
                  {{ $t('BusinessDomain-page.second-tab.l6') }}
                </li>
              </ul>
            </h3>
          </div>
        </div>
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
<style>
  .btn-whatsapp {
    background-color: #24CD63 !important;
  }
</style>
