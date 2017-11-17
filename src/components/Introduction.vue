<template>
  <section id="intro" class="page">
    <md-layout md-gutter md-column md-align="center">
      <md-layout md-align="center">
        <img alt="like-coin" class="main-icon" src="../assets/like-coin-white.svg"/>
      </md-layout>
      <md-layout class="section-title" md-align="center">
        {{ $t('Introduction.title') }}
      </md-layout>
      <md-layout class="description" md-align="center">
        {{ $t('Introduction.description') }}
      </md-layout>
      <md-layout class="icon-bar" md-align="center">
        <md-button
          class="md-icon-button"
          v-for="(platform, index) in platforms"
          :key="index"
          :href="platform.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon :name="platform.name" />
        </md-button>
      </md-layout>
      <md-layout md-hide-small class="idol left-idol">
        <img src="../assets/oice-girl.png" />
      </md-layout>
      <md-layout md-hide-small class="idol right-idol">
        <img src="../assets/hwei.png" />
      </md-layout>
    </md-layout>
  </section>
</template>


<script>
const platforms = [
  // {
  //   name: 'slack',
  //   url: '',
  // },
  {
    name: 'telegram',
    url: 'https://t.me/likecoin',
  },
  {
    name: 'github',
    url: 'https://github.com/lakoo',
  },
  // {
  //   name: 'reddit',
  //   url: '',
  // },
  {
    name: 'medium',
    url: 'https://medium.com/likecoin',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/likecoinico',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/groups/likecoin/',
  },
];

export default {
  name: 'introduction',
  data() {
    return { platforms };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

.idol {
  position: absolute;
  height: 100%;
  top: 88px;
  > img {
    object-fit: contain;
  }
  max-height: 1024px;
}

.left-idol {
  left: -168px;
}

.right-idol {
  right: -100px;
  transform: scaleX(-1);
}

#intro {
  color: white;
  background-image: linear-gradient(227deg, #a8ff97, #69ecf2 30%, #77caf6 51%, #b792ff 77%, #fe7ba1);

  padding-top: 112px;
  padding-bottom: 24px;

  position: relative;

  overflow: hidden;

  .section-title {
    font-weight: 600;
    color: #fff;
    -webkit-text-fill-color: initial;

    z-index: 1;
  }
  .description {
    font-size: 1.8em;

    z-index: 1;
  }

  .icon-bar {
    margin: 24px 0;
    .md-button {
      color: rgba(255, 255, 255, 0.6);
    }
    .md-button.md-icon-button:not([disabled]):hover {
      color: #fff;
    }
    .fa-icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media (max-width: 1280px) {
  .section-title {
    align-self: center;
    max-width: 500px;
  }
}

@media (max-width: 1024px) {
  .section-title {
    align-self: center;
    max-width: 500px;
  }
}

@media (max-width: 960px) {
  .idol {
    display: none;
  }
}

@media (max-width: 600px) {
  #intro {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
  }
}
</style>
