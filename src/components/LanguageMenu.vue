<template>
  <md-menu md-align-trigger>
    <md-button md-menu-trigger>{{ $t('Navigation.language.title') }}</md-button>

    <md-menu-content>
      <md-menu-item
        @click="changeLocale(item)"
        v-for="(item, index) in languages"
        :key="index"
      >
        {{ $t(`Navigation.language.items.${item}`)}}
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
import { LANGUAGES } from '../constants';

export default {
  name: 'language-menu',
  data() {
    return {
      languages: LANGUAGES.filter(lang => lang !== this.$locale.current()),
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.languages = LANGUAGES.filter(lang => lang !== locale);
    },
  },
};
</script>

<style lang="scss" scoped>
.md-menu-content {
  z-index: 999;
}

.md-menu {
  button {
    color: #4a4a4a;
    font-weight: 600;
  }
}

</style>
