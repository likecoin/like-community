<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "./styles/index.scss";

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #462405;
}
</style>
