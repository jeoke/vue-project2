<template>
    <section class="page" v-if="option" :class="{'page-before':option.index < currentIndex,
                                                'page-after':option.index > currentIndex,
                                                'page-current':option.index === currentIndex}">
      <slot></slot>
    </section>
</template>
<script>
export default {
  name: 'fullPage',
  props: {
    currentIndex: Number
  },
  data: function () {
    return {
      option: null
    }
  }
}
</script>
<style scoped lang="scss">
.page{
    position:absolute;
    top: 0;
    left: 0;
    overflow:hidden;
    transition:transform 1s ease 0s;
}
.page-after{
    transform: translateY(100%);
    z-index: 0;
}
.page-before{
    z-index: 0;
    transform: translateY(-100%);
}
</style>
