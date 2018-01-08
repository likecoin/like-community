<template>
  <div class="container">
    <div class="landing">
      <div class="upper-left-corner" />

      <site-header />

      <introduction />
      <description />
    </div>

    <team />

    <div class="footer">
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
        <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
      </a>
      This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
    </div>
  </div>

</template>

<script>
import SiteHeader from './Header';
import Introduction from './Introduction';
import Description from './Description';
import Team from './Team';

export default {
  name: 'like',
  components: {
    SiteHeader,
    Introduction,
    Description,
    Team,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

$large-padding: 64px;
$mid-padding: 24px;
$small-padding: 16px;

.container {
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 1440px;
  margin: 0 auto;

  overflow: hidden;

  > * {
    margin-right: $large-padding;
    margin-left: $large-padding;
  }
}

.landing {
  position: relative;

  .upper-left-corner {
    position: absolute;
    z-index: -1;

    width: calc(66.66% + 64px);
    height: calc(100% + 84px);
    margin-left: -$large-padding;

    background-color: $like-gray-1;
  }
}

.footer {
  margin: 44px 0 22px;
}


@media (max-width: 768px) {
  body .container {
    > * {
      margin-right: $mid-padding;
      margin-left: $mid-padding;
    }
    .landing .upper-left-corner {
      height: calc(100% + 50px);
      margin-left: -$mid-padding;
    }
  }
}

@media (max-width: 500px) {
  body .container {
    > * {
      margin-right: $small-padding;
      margin-left: $small-padding;
    }

    .landing .upper-left-corner {
      height: calc(100% + 50px);
      margin-left: -$small-padding;
    }
  }
}
</style>
