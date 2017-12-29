<template>
  <div id="header">
    <div class="title">{{ $t('Header.title') }}</div>
    <div class="icon-bar">
      <md-button
        class="md-icon-button"
        v-for="(platform, index) in platforms"
        :key="index"
        :href="platform.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img v-lazy="imgUrl(`${platform.name}.svg`)" />
      </md-button>
      <!-- <a class="md-icon-button language">En</a> -->
    </div>

  </div>
</template>


<script>
const images = require.context('../assets/icons/');

const platforms = [
  {
    name: 'telegram',
    url: 'https://t.me/likecoin',
  },
  {
    name: 'medium',
    url: 'https://medium.com/likecoin',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/likecoin_fdn',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/groups/likecoin/',
  },
  {
    name: 'github',
    url: 'https://github.com/likecoin/',
  },
];

export default {
  name: 'header',
  data() {
    return {
      platforms,
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

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 48px 8px;

  .title {
    font-size: 18px;
    color: $like-dark-blue;
  }

  .icon-bar {
    display: flex;
    align-items: center;

    .language {
      margin-left: 16px;
      cursor: pointer;
      color: $like-dark-blue;
    }
  }
}

@media (max-width: 768px) {
  #header {
    flex-direction: column;
    margin: 24px 0 12px;

    .title {
      display: none;
    }
  }
}
</style>
