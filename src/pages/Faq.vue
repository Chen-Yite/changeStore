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
          <h1 class="title">FAQ</h1>
        </div>
      </div>
    </div>
    <div class="section section-faq">
      <div class="container">
        <div class="faq-question-and-answer">
          <div class="faq-question">
            問: 億豐找換店有幾多間分店？
          </div>
          <div class="faq-answer">
            答: 億豐找換店只有一間在葵涌廣場。客戶可以到分行地址查看各分行之營業時間。
          </div>
        </div>
        <br /><br />
        <div class="faq-question-and-answer">
          <div class="faq-question">
            問: 億豐找換店可靠嗎？
          </div>
          <div class="faq-answer">
            答: 我們是一心一意要做好找換店。用心地希望把人民幣港幣找換做到最好，每月有幾萬計的交易。以真誠的態度獲取眾多客戶的信任。
          </div>
        </div>
        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
            問: 為何只專注人民幣對港幣找換？
          </div>
          <div class="faq-answer">
            答: 我們都是經常去大陸旅行的朋友，所以對人民幣港幣的對換可以算是。
          </div>
        </div>

        <br /><br />
        
        <div class="faq-question-and-answer">
          <div class="faq-question">
            問: 我們的營業時間是？
          </div>
          <div class="faq-answer">
            答: 我們營業時間是星期一至星期日，公眾假期照常營業。
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
