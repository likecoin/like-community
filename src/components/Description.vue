<template>
  <section id="description">
    <div class="details">
      <div v-html="$t('Description.sentence')" />
    </div>
    <div class="links">
      <div class="link poc">
        <a
         href="https://meme.likecoin.foundation"
         target="_blank"
         rel="noopener noreferrer"
        >
          {{ $t('Description.button.demo') }}
        </a>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'description',
};
</script>

<style lang="scss">
@import "../styles/variable.scss";

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

  .links {
    flex: 1;
    .link {
      flex: 1;
      text-align: left;
      padding: 16px;
      display: flex;
      font-size: 24px;
      align-items: center;

      transition: opacity .2s ease-in-out;

      &.poc {
        background-image: linear-gradient(58deg, $like-gradient-2, $like-green);
        margin-bottom: 8px;
      }

      &:hover {
        opacity: 0.8;
      }

      > a {
        color: $like-white;
        cursor: pointer;
        text-decoration: underline;

        line-height: 28px;
      }
    }
  }
}

@media (max-width: 1024px) {
  body #description {
    margin-top: 44px;
  }
}

@media (max-width: 768px) {
  body #description {
    flex-direction: column;
    margin-top: 36px;
    padding: 0;

    .details {
      flex: 1;
      line-height: 28px;
      font-size: 18px;
    }

    .links {
      margin: 12px 0;
      .link {
        width: 244px;
        margin: 12px 0;
        justify-content: center;
        height: 44px;
        font-size: 22px;
      }
    }
  }
}

@media (max-width: 500px) {
  body #description {
    padding: 0 16px;
  }
}
</style>
