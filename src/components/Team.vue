<template>
  <section id="team">
    <div>
      <div class="section-title-wrapper">
        <span class="title">{{ $t('Team.title') }}</span>
      </div>
    </div>

    <div class="team-row founder">
      <div class="section-title-wrapper">
        <span class="title">{{ $t('Team.founder.title') }}</span>
      </div>

      <div class="cards" v-if="isFounderFitScreenSize">
        <div
          class="card"
          v-for="(founder, index) in founders"
          :key="index"
        >
          <div class="icon">
            <img v-lazy="imgUrl(founder.icon)" />
          </div>

          <div class="details">
            <div class="name">{{ $t(founder.name) }}</div>
            <div class="description">{{ $t(founder.title) }}</div>
          </div>

          <div class="platforms">
            <md-button
              class="md-icon-button platform"
              target="_blank"
              rel="noopener noreferrer"
              v-for="(platform, index) in founder.platforms"
              :href="platform.value"
              :key="index"
            >
              <img alt="platform.key" v-lazy="imgUrl(`icons/${platform.key}-dark.svg`)" />
              <!-- <img :src="platform" /> -->
              <!-- <icon :name="platform.key" /> -->
            </md-button>
          </div>
        </div>
      </div>


      <div class="carousel" v-else>
        <!-- swiper -->
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide
            v-for="(founder, index) in founders"
            :key="index"
          >
            <div
              class="card"
            >
              <div class="icon">
                <img v-lazy="imgUrl(founder.icon)" />
              </div>

              <div class="details">
                <div class="name">{{ $t(founder.name) }}</div>
                <div class="description">{{ $t(founder.title) }}</div>
              </div>

              <div class="platforms">
                <md-button
                  class="md-icon-button platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-for="(platform, index) in founder.platforms"
                  :href="platform.value"
                  :key="index"
                >
                  <img alt="platform.key" v-lazy="imgUrl(`icons/${platform.key}-dark.svg`)" />
                  <!-- <img :src="platform" /> -->
                  <!-- <icon :name="platform.key" /> -->
                </md-button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev">
          <icon name="chevron-left" />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <icon name="chevron-right" />
        </div>
      </div>

      <hr />

      <div class="experience">
        <div class="description">
          <div>
            <img alt="Lakoo" src="../assets/team/lakoo.png" width="36" height="36" />
            <div class="header big">{{ $t('Team.founder.label.lakoo') }}</div>
          </div>
          <div>
            <img alt="Teon" src="../assets/team/teon.png" width="88" height="69" />
            <div class="teon">
              <div class="header small">{{ $t('Team.founder.label.teonCore') }}</div>
              <div class="header sub">{{ $t('Team.founder.label.teonTop') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
/* eslint-disable */

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';

const images = require.context('../assets/');

// order for team players
const founders = [
  {
    key: 'kin',
    platforms: [
      {
        key: 'telegram',
        value: 'https://t.me/ckxpress',
      },
      {
        key: 'twitter',
        value: 'https://twitter.com/ckxpress',
      },
      {
        key: 'linkedin',
        value: 'https://www.linkedin.com/in/ckxpress',
      },
    ],
  },
  {
    key: 'aludirk',
    platforms: [
      {
        key: 'github',
        value: 'https://github.com/Aludirk',
      },
    ],
  },
  {
    key: 'william',
    platforms: [
      {
        key: 'github',
        value: 'https://github.com/williamchong007',
      },
    ],
  },
  {
    key: 'chung',
    platforms: [
      {
        key: 'github',
        value: 'https://github.com/nnkken',
      },
    ],
  },
];

function getPersonelDetails(obj) {
  return ({
    ...obj,
    icon: `${obj.key}.png`,
    name: `Team.player.${obj.key}.name`,
    title: `Team.player.${obj.key}.title`,
  });
}

function getSwiperObject() {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const swiperWidth = windowWidth - 208;
  const numFounderInCarousel = Math.floor(swiperWidth / 186);
  const isFounderFitScreenSize = numFounderInCarousel >= founders.length;

  const slidesPerView = swiperWidth / 230;
  return {
    isFounderFitScreenSize,
    swiperOptions: {
      slidesPerView: numFounderInCarousel < 1 ? 1 : numFounderInCarousel,
      spaceBetween: 16,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  };
}

// console.log('getSwiperOptions %o', getSwiperOptions());

export default {
  name: 'team',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      ...getSwiperObject(),
      founders: founders.map(getPersonelDetails),
    };
  },
  methods: {
    imgUrl(path) {
      return images(`./${path}`);
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      console.log('resize');
      const newSwiperObject = getSwiperObject();
      console.log('newSwiperObject %o', newSwiperObject);
      Object.keys(newSwiperObject).forEach(key => {
        this[key] = newSwiperObject[key];
      });
      console.log('vm %o', this, this.vm);
      this.$forceUpdate();

    });
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.$refs, this.swiper);
    // this.swiper.slideTo(4, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

#team {
  margin-top: 60px;

  .team-row {
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    background-color: $like-gray-2;
    padding: 0 40px;

    .section-title-wrapper {
      width: 258px;
      margin-top: -20px;
      padding: unset;


      > .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
      }
    }

    .cards {
      display: flex;
      flex-direction: row;
      margin: 16px 0 24px;

      .card {
        flex-basis: auto; /* default value */
        flex-grow: 1;

        &:first-child {
          margin-left: 0 !important;
        }
      }
    }

    .card {
    	border-radius: 6px;
    	background-color: $like-white;

      // flex: 1;
      margin: 8px;

      min-width: 180px;
      max-width: 230px;

      padding: 20px 0;

      .icon > img {
        border-radius: 50%;

        width: 112px;
        height: 112px;
      }

      .details {
        margin: 16px 0;

        > .name {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        > .description {
          color: $like-gray-4;
          font-size: 16px;
          font-weight: 300;
        }
      }

      .platforms {
        margin: 4px;
        display: inline-flex;
        max-width: 100%;

        .platform {
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }

    hr {
      grid-column: padding-start / padding-end;
      border-top: 2px solid $like-gray-3;
      width: 100%;
    }

    .experience {
      display: flex;
      padding: 16px 16px;

      color: $like-gray-4;

      .title {
        font-size: 18px;

        padding-right: 20px;
        min-width: 120px;

        align-self: center;
      }

      .description {
        display: flex;
        flex-wrap: wrap;

        > div {
          display: flex;
          align-items: center;

          margin-right: 32px;

          > * {
            display: inline-block;
          }

          > img {
            margin-right: 12px;
          }

          .header {
            text-align: left;
            &.big { font-size: 20px; }
            &.small { font-size: 18px; }
            &.sub { font-size: 12px;}
          }
        }
      }
    }

  }
}

.carousel {
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    background-color: $like-light-blue;

    width: 40px;
    height: 40px;

    line-height: 40px;
  }

  .swiper-button-prev {
    margin-left: -48px;
  }
  .swiper-button-next {
    margin-right: -48px;
  }
  .swiper-button-disabled {
    display: none;
  }

  .card {
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

@media (max-width: 768px) {
  body #team {
    margin-top: 24px;

    .team-row {
      padding: 0 12px !important;
    }
    .experience {
      flex-direction: column;
      .title {
        margin-bottom: 8px;
      }
      .description > div {
        margin-top: 12px;
      }
      .header.big {
        font-size: 18px !important;
      }
      .header.small {
        font-size: 16px !important;
      }
    }
  }
}

@media (max-width: 500px) {
  .section-title-wrapper {
    width: unset !important;
  }

  .card {
    max-width: unset !important;
  }
}
</style>
