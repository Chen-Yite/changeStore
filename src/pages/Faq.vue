<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg4.jpg'); height: 80vh;"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t('nav.FAQ') }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-faq">
      <div class="container">
        <div class="faq-question-and-answer">
          <div class="faq-question">
            {{ $t('Faq-page.Q1') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A1') }}
          </div>
        </div>
        <br /><br />
        <div class="faq-question-and-answer">
          <div class="faq-question">
            {{ $t('Faq-page.Q2') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A2') }}
          </div>
        </div>
        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
            {{ $t('Faq-page.Q3') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A3') }}
          </div>
        </div>

        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
            {{ $t('Faq-page.Q4') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A4') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Collapse, CollapseItem, Button, FormGroupInput } from '@/components';

export default {
  name: 'faq',
  bodyClass: 'faq-page',
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
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
  .faq-main {
    width: 70vw;
  }

  .faq-question {
    height: 7vh;
    background-color: #efecec;
    padding: 3px;
  }

  .faq-answer {
    height: 7vh;
    padding: 3px;
    background-color: #f9f9f9;
  }
</style>
