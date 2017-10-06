<template>
  <div :class="['separator', className]" />
</template>


<script>
export default {
  name: 'separator',
  props: ['className'],
};
</script>

<style lang="scss" scoped>
.separator {
  margin: 0;
  width: 100%;
  height: 2px;

  &.toolbar {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;

    background-image: linear-gradient(to right, #a8ff97, #69ecf2 30%, #77caf6 51%, #b792ff 77%, #fe7ba1);
  }
  &.intro {
    background-image: linear-gradient(to left, #f97cca, #d60b0b);
  }
  &.uses {
    background-image: linear-gradient(to right, #a8ff97, #69ecf2 30%, #77caf6 51%, #b792ff 77%, #fe7ba1);
  }
  &.how {
    background-color: #e8e8e8;
    height: 1px;
  }
  &.team {
  	background-image: linear-gradient(to left, #a8ff97, #69ecf2 30%, #77caf6 51%, #b792ff 77%, #fe7ba1);
  }
}
</style>
