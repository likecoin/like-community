<template>
  <section id="uses" class="page">
    <md-layout md-align="center">
      <img class="use-banner" src="../assets/use_banner.png" />
    </md-layout>
    <md-layout md-align="center">
      <span class="section-title">{{ $t('Uses.title') }}</span>
    </md-layout>
    <md-layout md-align="center" class="use-cases">
      <md-layout
        class="use"
        v-for="(use, index) in uses"
        :key="index"
        md-flex="40"
        md-flex-xsmall="100"
        v-scroll-reveal="SCROLL_REVEAL_OPTIONS"
      >
        <md-layout class="header">
          <img :src="imgUrl(use.icon)" />
          <h4>{{ $t(use.title) }}</h4>
        </md-layout>
        <ul>
          <li v-for="(item, index) in use.content" :key="index">
            {{ $t(item) }}
          </li>
        </ul>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import {
  SCROLL_REVEAL_OPTIONS,
  USES_CONTENT,
} from '../constants';

const images = require.context('../assets/');

export default {
  name: 'uses',
  data() {
    return {
      uses: [1, 2, 3, 4].map(index => ({
        icon: `uses-${index}.svg`,
        title: `Uses.cases.${index}.title`,
        content: USES_CONTENT[index].map(item => (`Uses.cases.${index}.description.${item}`)),
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.use-banner {
  width: 731px;
  height: 473px;

  margin-top: 24px;
}

#uses {
  position: relative;
  padding-bottom: 24px;
  .section-title {
    font-size: 2.28em;
    color: #4a4a4a;
  }
  .use-cases {
    .use {
      width: 314px;
      background-color: #fff;
      margin: 16px 24px;
      min-height: 240px;

      display: flex;
      flex-direction: column;

      padding: 20px;
      font-size: 16px;
      border-radius: 10px;

      .header {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        margin-left: 12px;

        max-height: 64px;
        h4 {
          margin-left: 24px;
          text-align: left;
        }
      }


      ul {
        text-align: left;
        margin-left: 24px;
        li {
          margin: 8px;

          &::before {
            content: "•";
            width: 1em;
            margin-left: -1em;
            position: absolute;
          }
        }
      }
    }
  }
  .use:nth-of-type(1) li::before {
    color: $oice-red;
  }
  .use:nth-of-type(2) li::before {
    color: $oice-blue;
  }
  .use:nth-of-type(3) li::before {
    color: $oice-green;
  }
  .use:nth-of-type(4) li::before {
    color: $oice-gray;
  }
}
@media (max-width: 1024px) {
  #uses {
    .use-cases {
      width: 100%;
      margin-left: 0;
    }
  }
}
@media (max-width: 600px) {
  #uses {
    .use {
      margin-bottom: 0;
      ul {
        margin-top: 12px;
        min-height: initial;
      }
    }
  }
  .use-banner {
    width: 100%;
    height: 100%;
  }
}
</style>
