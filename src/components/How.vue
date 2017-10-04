<template>
  <section id="how" class="page">
    <md-layout md-align="center">
      <span class="section-title">{{ $t('How.title') }}</span>
    </md-layout>
    <md-layout md-align="center">
      <span class="section-description" v-html="$t('How.description')" />
    </md-layout>
    <md-layout md-align="center">
      <div class="layers">
        <md-layout
          class="layer"
          v-for="(layer, index) in layers"
          :key="index"
          v-scroll-reveal="SCROLL_REVEAL_OPTIONS"
          :style="{ zIndex: (4 - index) }"
        >
          <md-layout md-flex="20" class="layer-image">
            <img :src="imgUrl(layer.icon)" />
          </md-layout>
          <div class="details">
            <h4 :class="{ special: index === 1 }">{{ $t(layer.title) }}</h4>
            <div class="description">
              <div class="item" v-for="(item, index) in layer.items" :key="index">
                {{ $t(item) }}
              </div>
            </div>
          </div>
        </md-layout>
      </div>
    </md-layout>
  </section>
</template>

<script>
import { SCROLL_REVEAL_OPTIONS } from '../constants';

const images = require.context('../assets/');

const LAYER_ITEMS = {
  1: ['creativeCommonLibraries', 'oiceVisualNovel', 'onlineMedia', 'liveStreamer'],
  2: ['likecoin', 'wallet', 'paymentAPI', 'paymentSDK'],
  3: ['ethereumVM', 'smartContracts', 'metaData', 'contentFingerprint'],
  4: ['creativeCommonPhotoNode', 'oiceNode', 'artistsNode'],
};

export default {
  name: 'how',
  data() {
    return {
      layers: [1, 2, 3, 4].map(index => ({
        icon: `layer-${index}.svg`,
        title: `How.layers.${index}.title`,
        items: LAYER_ITEMS[index].map(item => `How.layers.${index}.description.${item}`),
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

#how {
  margin-top: 36px;
  .section-description {
    max-width: 1024px;
    font-size: 14px;
  }
  .layers {
    display: flex;
    flex-direction: column;

    margin: 48px 0 36px;

    .layer {
      align-items: center;

      &:first-child {
        .layer-image {
          margin-top: 12px;
        }
      }
      &:not(:first-child) {
        margin-top: -36px;
      }
      &:not(:last-child) .details {
        border-bottom: 1px solid #e7e7e7;
      }

      .layer-image {
        width: 216px;
      }
      .details {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-left: 24px;
        width: 780px;
        height: 78px;

        h4 {
        	font-size: 18px;
        	font-weight: 600;
          text-align: left;
          width: 153px;
          margin-left: 4px;

          &.special {
            background-image: linear-gradient(85deg, #568c4b, #61dbe0 30%, #4790b6 51%, #b792ff 77%, #fe7ba1);

            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .description {
          display: flex;
          flex-direction: row;
          margin-left: 24px;

          > .item {
            font-size: 16px;
            max-width: 153px;
            margin-right: 24px;
            text-align: left;
          }
        }

      }
    }

  }
}

@media (max-width: 1080px) {
  #how {
    .layers {
      .layer {
        margin-top: -24px;
        flex-direction: row;
        flex-wrap: nowrap;
        .details {
          width: 660px;
          padding: 10px 0;
          flex-direction: column;
          align-items: flex-start;
          height: auto;
          h4 {
            width: auto;
          }
          .description {
            margin-left: 4px;
            .item {
              max-width: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  #how {
    .layers {
      .layer {
        margin-top: 0 !important;
        .layer-image {
          position: relative;
          img {
            max-width: initial !important;
            position: absolute;
            top: -50px;
            left: -84px;
            opacity: 0.8;
          }
        }
        .details {
          width: 80%;
          z-index: 5;
          .description {
            margin-top: 8px;
            flex-direction: column;
          }
        }
      }
      &:nth-child(2) .layer-image {
        margin-left: -20px;
      }
    }
  }
}
</style>
