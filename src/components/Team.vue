<template>
  <section id="team">
    <div>
      <div class="section-title-wrapper">
        <span class="title">{{ $t('Team.title') }}</span>
      </div>
    </div>

    <div class="team-row">
      <div class="cards" v-if="!shouldShowSwiper">
        <team-member-card
          v-for="(founder, index) in teamMembers"
          :key="index"
          :teamMember="founder"
        />
        <div
          class="card dummy"
          v-for="n in numDummyItem"
        />
      </div>

      <div class="carousel" v-else>
        <!-- swiper -->
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide
            v-for="(founder, index) in teamMembers"
            :key="index"
          >
            <team-member-card
              :teamMember="founder"
            />
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
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import TeamMemberCard from './TeamMemberCard';

import teamMembers from '../constants/team';

function getTeamMemberDetails(member) {
  return ({
    ...member,
    icon: `${member.key}.png`,
    name: `Team.player.${member.key}.name`,
    title: `Team.player.${member.key}.title`,
  });
}

function getSwiperParams() {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  const containerWidth = (windowWidth > 1440) ? 1440 : windowWidth;

  const swiperWidth = containerWidth - 208;
  const numFounderInRow = Math.max(Math.floor(swiperWidth / 204), 1);

  // only show swiper when maximum item can show <= 2
  const shouldShowSwiper = numFounderInRow <= 2;
  const numDummyItem = (
    teamMembers.length > numFounderInRow &&
    teamMembers.length % numFounderInRow !== 0
  ) ?
    numFounderInRow - (teamMembers.length % numFounderInRow) :
    0;

  return {
    shouldShowSwiper,
    numDummyItem,
    swiperOptions: {
      slidesPerView: numFounderInRow,
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

export default {
  name: 'team',
  components: {
    swiper,
    swiperSlide,
    TeamMemberCard,
  },
  data() {
    return {
      ...getSwiperParams(),
      teamMembers: teamMembers.map(getTeamMemberDetails),
    };
  },
  methods: {
    onResize() {
      const newSwiperObject = getSwiperParams();
      Object.keys(newSwiperObject).forEach((key) => {
        this[key] = newSwiperObject[key];
      });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

#team {
  margin-top: 60px;

  .team-row {
    display: flex;
    flex-direction: column;

    margin-top: 16px;
    padding: 0 40px;

    background-color: $like-gray-2;

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
      flex-wrap: wrap;
      justify-content: center;

      margin: 16px 0 24px;

      .card {
        flex-basis: auto;
        flex-grow: 1;
      }
    }

    hr {
      width: 100%;

      border-top: 2px solid $like-gray-3;

      grid-column: padding-start / padding-end;
    }

    .experience {
      display: flex;

      padding: 16px 16px;

      color: $like-gray-4;

      .title {
        align-self: center;

        min-width: 120px;
        padding-right: 20px;

        font-size: 18px;
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

  .carousel {
    position: relative;

    margin-bottom: 16px;

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;

      background-color: $like-light-blue;
      background-image: none;

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
      // let carousel handles the space between and dimensions
      max-width: unset;
      margin-right: auto;
      margin-left: auto;
    }
  }
}


@media (max-width: 768px) {
  body #team {
    margin-top: 24px;

    .section-title-wrapper {
      > .title {
        font-size: 24px;
        line-height: 40px;
      }
    }

    .team-row {
      padding: 0 12px;

      .experience {
        flex-direction: column;

        .title {
          margin-bottom: 8px;
        }

        .description > div {
          margin-top: 12px;

          .header {
            &.big { font-size: 18px; }
            &.small { font-size: 16px; }
          }
        }
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
