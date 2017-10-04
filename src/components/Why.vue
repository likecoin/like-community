<template>
  <section id="why" class="page">
    <md-layout md-align="center">
      <span class="section-title" v-html="$t('Why.title')" />
    </md-layout>
    <!-- <md-layout md-align="center">
      <img class="section-image" src="../assets/why_banner.png" />
    </md-layout> -->
    <md-layout md-align="center">
      <md-layout
        class="rationale"
        v-for="(why, index) in whys"
        :key="index"
        md-flex-xsmall="100"
        v-scroll-reveal="SCROLL_REVEAL_OPTIONS"
      >
        <img :src="imgUrl(why.icon)" />
        <p>{{ $t(why.content) }}</p>
      </md-layout>
    </md-layout>
   </section>
</template>

<script>
import { SCROLL_REVEAL_OPTIONS } from '../constants';

const images = require.context('../assets/');

export default {
  name: 'why',
  data() {
    return {
      whys: [1, 2, 3].map(index => ({
        icon: `why-${index}.svg`,
        content: `Why.description.${index}`,
      })),
      SCROLL_REVEAL_OPTIONS,
    };
  },
  methods: {
    imgUrl(path) {
      return images(`./${path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

#why {
  margin: 24px 0;
  .rationale {
    width: 314px;
    max-width: 314px;
    background-color: #fff;
    margin: 8px 12px;

    display: flex;
    flex-direction: column;

    padding: 24px;
    border-radius: 10px;

    p {
      font-size: 1.2em;
      text-align: left;
    }
  }
}

@media (max-width: 600px) {
  #why {
    .section-image {
      margin-bottom: 0;
    }
    .rationale {
      padding: 0 24px;
      p {
        font-size: 1.5em;
        -webkit-margin-before: 0;
        text-align: center;
      }
    }
  }
}
</style>
