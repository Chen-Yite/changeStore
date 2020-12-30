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
<<<<<<< HEAD
          <h1 class="title">
            {{ $t('faq.title') }}
          </h1>
=======
          <h1 class="title">{{ $t('nav.FAQ') }}</h1>
>>>>>>> 213cbfbdc0f616b2c6d7ba1c554d5deb193e2174
        </div>
      </div>
    </div>
    <div class="section section-faq">
      <div class="container">
        <div class="faq-question-and-answer">
          <div class="faq-question">
<<<<<<< HEAD
            <!-- 問: 億豐找換店有幾多間分店？ -->
            {{ $t('faq.first-question.question') }}
          </div>
          <div class="faq-answer">
            <!-- 答: 億豐找換店只有一間在葵涌廣場。客戶可以到分行地址查看各分行之營業時間。 -->
            {{ $t('faq.first-question.answer') }}
=======
            {{ $t('Faq-page.Q1') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A1') }}
>>>>>>> 213cbfbdc0f616b2c6d7ba1c554d5deb193e2174
          </div>
        </div>
        <br /><br />
        <div class="faq-question-and-answer">
          <div class="faq-question">
<<<<<<< HEAD
            <!-- 問: 億豐找換店可靠嗎？ -->
            {{ $t('faq.second-question.question') }}
          </div>
          <div class="faq-answer">
            <!-- 答: 我們是一心一意要做好找換店。用心地希望把人民幣港幣找換做到最好，每月有幾萬計的交易。以真誠的態度獲取眾多客戶的信任。 -->
            {{ $t('faq.second-question.answer') }}
=======
            {{ $t('Faq-page.Q2') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A2') }}
>>>>>>> 213cbfbdc0f616b2c6d7ba1c554d5deb193e2174
          </div>
        </div>
        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
<<<<<<< HEAD
            <!-- 問: 為何只專注人民幣對港幣找換？ -->
            {{ $t('faq.third-question.question') }}
          </div>
          <div class="faq-answer">
            <!-- 答: 我們都是經常去大陸旅行的朋友，所以對人民幣港幣的對換可以算是。 -->
            {{ $t('faq.third-question.answer') }}
=======
            {{ $t('Faq-page.Q3') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A3') }}
>>>>>>> 213cbfbdc0f616b2c6d7ba1c554d5deb193e2174
          </div>
        </div>

        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
<<<<<<< HEAD
            <!-- 問: 我們的營業時間是？ -->
            {{ $t('faq.fourth-question.question') }}
          </div>
          <div class="faq-answer">
            <!-- 答: 我們營業時間是星期一至星期日，公眾假期照常營業。 -->
            {{ $t('faq.fourth-question.answer') }}
=======
            {{ $t('Faq-page.Q4') }}
          </div>
          <div class="faq-answer">
            {{ $t('Faq-page.A4') }}
>>>>>>> 213cbfbdc0f616b2c6d7ba1c554d5deb193e2174
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
