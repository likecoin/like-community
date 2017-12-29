<template>
  <section id="description">
    <div class="details">
      <div v-html="$t('Description.sentence')" />
    </div>
    <div class="link">
      <a href="https://meme.likecoin.foundation">{{ $t('Description.button.demo') }}</a>
    </div>
  </section>
</template>


<script>
export default {
  name: 'description',
};
</script>

<style lang="scss">
@import "../styles/index.scss";

#description {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 68px;
  padding: 0 40px;

  .details {
    text-align: left;
    padding-right: 16px;

    font-size: 20px;
    line-height: 30px;
    flex: 2;

    > div {
      max-width: 528px;
      span {
        &.highlight {
          color: $like-red;
        }
        &.bold {
          font-weight: bold;
        }
      }
    }
  }

  .link {
    background-image: linear-gradient(58deg, #3a2a6c, #2a666c);
    flex: 1;
    height: 60px;
    text-align: left;
    padding: 16px;
    display: flex;
    font-size: 24px;
    align-items: center;

    > a {
      color: $like-white;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

@media (max-width: 1024px) {
  #description {
    margin-top: 44px !important;
  }
}

@media (max-width: 768px) {
  body #description {
    flex-direction: column;
    margin-top: 36px !important;
    padding: 0;

    .details {
      flex: 1;
      line-height: 28px;
      font-size: 18px;
    }

    .link {
      width: 244px;
      margin: 24px 0;
      justify-content: center;
      height: 44px;
      font-size: 22px;
    }
  }
}

@media (max-width: 500px) {
  body #description {
    padding: 0 16px;
  }
}
</style>
