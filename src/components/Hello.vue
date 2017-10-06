<template>
  <div>
    <md-layout md-hide-xsmall>
      <md-toolbar class="nav">
        <md-button v-for="(item, index) in navigations" :key="index" v-scroll-to="`#${item}`">
          {{ $t(`Navigation.${item}`) }}
        </md-button>
        <language-menu />
        <separator class="toolbar" />
      </md-toolbar>
    </md-layout>
    <md-layout md-hide-small-and-up>
      <md-toolbar md-hide-small class="mobile-nav">
        <md-button class="md-icon-button" @click="mobileNavOpen = !mobileNavOpen">
          ☰
        </md-button>
        <md-layout :class="['mobile-nav-items', { open: mobileNavOpen }]">
          <md-button
            class="mobile-nav-item"
            v-for="(item, index) in navigations"
            :key="index"
            v-scroll-to="`#${item}`"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            {{ $t(`Navigation.${item}`) }}
          </md-button>
          <language-menu />
        </md-layout>
      </md-toolbar>
    </md-layout>
    <introduction />
    <separator class="intro" />
    <why ref="why" />
    <how ref="how" />
    <separator class="how" />
    <uses ref="uses" />
    <separator class="uses" />
    <team ref="team" />
    <separator class="team" />
    <div class="footer">
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
        <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
      </a>
      This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
    </div>
  </div>
</template>

<script>
import Introduction from './Introduction';
import Why from './Why';
import How from './How';
import Uses from './Uses';
import Team from './Team';

import LanguageMenu from './LanguageMenu';
import Separator from './Separator';

const navigations = ['why', 'how', 'uses', 'team'];

export default {
  name: 'like',
  components: {
    Introduction,
    Why,
    How,
    Uses,
    Team,
    LanguageMenu,
    Separator,
  },
  data() {
    return {
      mobileNavOpen: false,
      navigations,
    };
  },
  methods: {
    scrollTo(name) {
      const element = this.$refs[name];
      if (element) {
        const top = element.$el.offsetTop;
        window.scrollTo(0, top);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/index.scss";

.nav {
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.5) !important;
  position: absolute;
  width: 100%;
  padding: 0 24px;

  display: flex;
  justify-content: flex-end;
}

.nav-icon {
  width: 480px;
  height: 480px;
  // position: absolute;
  top: 8px;
  left: 24px;
  padding: 24px;
  color: #000;
}

.nav {
  > .md-button {
    width: 88px;
    color: #4a4a4a;
    font-weight: 600;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #9b9b9b !important;
    }
  }
}

.footer {
  padding: 12px 0;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.main-icon {
  height: 400px;
  width: auto;
}

.icon-bar {
  font-size: 52px;
}

@media (max-width: 960px) {
  .nav {
    min-height: 48px;
  }
}

@media (max-width: 600px) {
  .md-toolbar.mobile-nav {
    min-height: 36px;
    flex-direction: column;
    width: 100%;
    position: absolute;
    z-index: 999;
    color: #4a4a4a;
    background-color: transparent;
    .md-icon-button {
      margin-right: 0;
    }
    .mobile-nav-items {
      width: 100%;

      flex-direction: column;

      background-color: rgba(255, 255, 255, 0.95);
      border-radius: 10px;

      transition: all 0.2s ease-in-out;

      &:not(.open) {
        opacity: 0;
        pointer-events: none;
        margin-top: -180px;
      }

      > .mobile-nav-item:not(:last-child) {
        border-bottom: 1px solid #e7e7e7;
      }
    }
  }
}
</style>
