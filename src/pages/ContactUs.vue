<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/store_front_2.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t('nav.contact-us') }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-domain-business">
      <div class="container">
        <div class="row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.4047312483508!2d114.12736526823251!3d22.358042848116725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f95990e3ae5f%3A0xc0e77d590640a078!2z5YSE6LGQ5om-5o-bIEppbGxpb24gRm9yZXg!5e0!3m2!1szh-TW!2stw!4v1610340814697!5m2!1szh-TW!2stw" width="108%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          
          <div class="col-md-8 ml-auto mr-auto text-center">
            <p></p>
            <p class="about">{{ $t('contact-us-page.Address') }}</p>
            <p class="about">{{ $t('contact-us-page.Tel') }}</p>
            <p class="about">{{ $t('contact-us-page.Times1') }}<br>{{ $t('contact-us-page.Times2') }}</p>
            <p class="about">{{ $t('contact-us-page.Whatsapp') }}
            <a href="#pablo" class="btn btn-primary btn-icon btn-round btn-whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style>
  .btn-whatsapp {
    background-color: #24CD63 !important;
  }

  .contactUS{
    height: 7vh;
    padding: 3px;
    background-color: #f9f9f9;
  }
</style>
