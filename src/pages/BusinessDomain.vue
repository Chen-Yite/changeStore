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
          <h1 class="title">業務範圍
            {{ $t('nav.contact-us') }}
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
              <p>1. 滙款</p>
              <ul>
                <li>
                  國內匯款至香港，香港匯款至國內
                </li>
                <li>
                  香港匯款至世界各國
                </li>
              </ul>
              <p>2. 外幣兌換</p>
              <ul>
                <li>
                  人民幣
                </li>
                <li>
                  美金
                </li>
                <li>
                  歐元
                </li>
              </ul>
              <p>3. 電匯</p>
              <ul>
                <li>
                  代客電匯至歐美部份國家 (因受條件限制)
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
  name: 'business-domain',
  bodyClass: 'business-domain-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  created() {
    // console.log('created', this.$store.state.curLanguage);
    Vue.i18n.set(this.$store.state.curLanguage.short);
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
