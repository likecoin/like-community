<template>
  <section id="team">
    <md-layout md-align="center">
      <span class="section-title">{{ $t('Team.title') }}</span>
    </md-layout>
    <md-layout md-align="center">
      <md-layout md-flex="85" md-flex-medium="80" md-flex-xsmall="100">
        <md-layout
          md-flex="33"
          md-flex-xsmall="100"
          class="team-player"
          v-for="(teamPlayer, index) in teamPlayers"
          :key="index"
        >
          <img v-lazy="imgUrl(teamPlayer.icon)" />
          <div class="name">{{ $t(teamPlayer.name) }}</div>
          <div class="title">{{ $t(teamPlayer.title) }}</div>
          <p>{{ teamPlayer.description }}</p>
        </md-layout>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
const images = require.context('../assets/');

// order for team players
const personnels = ['kin', 'aludirk', 'david', 'william', 'chung', 'edmond', 'joshua', 'gladys'];

export default {
  name: 'team',
  data() {
    return {
      teamPlayers: personnels.map(p => ({
        icon: `${p}.jpg`,
        name: `Team.player.${p}.name`,
        title: `Team.player.${p}.title`,
      })),
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

#team {
  background-color: #fff;

  .section-title {
    font-size: 3.5em;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  	background-image: linear-gradient(304deg, #f97cca, #d60b0b);
  }

  .team-player {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 208px;

    img {
      width: 180px;
      height: 180px;
      
      object-fit: contain;
      border-radius: 50%;

      opacity: 0;

      transition: opacity 0.5s ease-in-out;
    }

    img[lazy=loaded] {
      opacity: 1;

      transform: initial;
    }

    .name {
      font-size: 18px;
      font-weight: 600;
      margin-top: 16px;
    }

    .title {
      font-size: 16px;
    }

    p {
      margin: 16px 0;
      text-align: left;
      max-width: 208px;
      font-size: 16px;
    }
  }
}

@media (max-width: 600px) {
  #team .team-player img {
    width: 70%;
    height: auto;
  }
}
</style>
