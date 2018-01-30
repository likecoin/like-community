<template>
  <section id="intro">
    <div class="title heading">
      <h1>{{ $t('Introduction.title') }}</h1>
    </div>
    <div class="icon">
      <img alt="like-coin" class="main-icon" src="../assets/likecoin.svg"/>
    </div>
    <div class="title description">
      <h2>{{ $t('Introduction.description') }}</h2>
    </div>
  </section>
</template>


<script>
export default {
  name: 'introduction',
};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

#intro {
  display: flex;

  margin-top: 48px;
  padding: 0 48px;

  border-radius: 8px;
	background-image: linear-gradient(238deg, $like-light-blue, $like-gradient-1);

  > * {
    flex: 1;
  }

  > .title {
    display: flex;
    align-items: center;

    text-align: left;
  }

  > .icon {
    margin: -50px 0;
    > img {
      width: 100%;
    }
  }

  .description {
    padding-left: 16px;
  }
}

@media (max-width: 1024px) {
  body #intro {
    margin-top: 24px;

    h1 {
      font-size: 36px;
    }

    .icon {
      margin: unset;
    }
  }
}


@media (max-width: 950px) {
  body #intro {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 20px;
    }
  }
}

@media (max-width: 768px) {
  body #intro {
    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 18px;
    }
  }
}

@media (max-width: 500px) {
  body #intro {
    flex-direction: column;

    padding: 0 24px;

    .title {
      margin-top: 12px;

      text-align: center;
    }

    .description {
      margin-bottom: 12px;
      padding-left: 16px;
    }
  }
}
</style>
