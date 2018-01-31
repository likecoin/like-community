<template>
  <div class="card">
    <div class="icon">
      <img v-lazy="imgUrl(teamMember.icon)" />
    </div>

    <div class="details">
      <div class="name">{{ $t(teamMember.name) }}</div>
      <div class="description">{{ $t(teamMember.title) }}</div>
    </div>

    <div class="platforms">
      <md-button
        class="md-icon-button platform"
        target="_blank"
        rel="noopener noreferrer"
        v-for="(platform, index) in teamMember.platforms"
        :href="platform.value"
        :key="index"
      >
        <img alt="platform.key" v-lazy="imgUrl(`icons/${platform.key}-dark.svg`)" />
      </md-button>
    </div>
  </div>
</template>


<script>
import { imgUrl } from '../utils';


export default {
  name: 'team-member-card',
  props: ['teamMember'],
  methods: {
    imgUrl,
  },
};
</script>

<style lang="scss">
@import "../styles/variable.scss";

$card-min-width: 188px;
$card-max-width: 230px;

$card-icon-size: 112px;

.card {
  min-width: $card-min-width;
  max-width: $card-max-width;
  min-height: 276px;
  margin: 8px;
  padding: 20px 0;

  border-radius: 6px;
  background-color: $like-white;

  &.dummy {
    width: $card-min-width;

    background-color: transparent;
  }

  .icon > img {
    width: $card-icon-size;
    height: $card-icon-size;

    border-radius: 50%;
  }

  .details {
    margin: 16px 0;

    > .name {
      margin-bottom: 4px;

      font-size: 20px;
      font-weight: 600;
    }
    > .description {
      color: $like-gray-4;

      font-size: 16px;
      font-weight: 300;
    }
  }

  .platforms {
    display: inline-flex;

    max-width: 100%;
    margin: 4px;

    .platform {
      &:hover {
        opacity: 0.7;
      }
    }
  }
}

</style>
