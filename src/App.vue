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

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #f8f8f8;
  color: #4a4a4a;
}

.fa-icon {
  width: auto;
  height: 2em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 600px) {
  body.md-theme-default {
    font-size: 62.5%;
  }
}
</style>
