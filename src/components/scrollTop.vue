<template><aside id="scrollTop" @mouseover="showPTop" @mouseleave="hidePTop" @click="scrollTop"><img src="../assets/img/index/scrollTop.svg" :class="Top" /><p :class="Top">top</p></aside>
</template>
<script>
export default {
  name: 'scrollTop',
  data: function () {
    return {
      Top: ''
    }
  },
  methods: {
    showPTop: function () {
      this.Top = 'showTop'
    },
    hidePTop: function () {
      this.Top = 'hideTop'
    },
    scrollTop: function () {
      this.$emit('changePage', 1)
    }
  }
}
</script>
<style scoped lang="scss">
#scrollTop {
  position:fixed;
  bottom:100px;
  right:5px;
  width:40px;
  height:40px;
  overflow:hidden;
  cursor: pointer;
  background-color:rgba(239,216,216,0.1);
  img {position:relative;opacity:0.4;width:40px;height:40px;}
  p {position:relative;width:40px;height:40px;font-size:1.3rem;line-height:2rem;}
}
.showTop {transition:all 1.2s;transition-delay: 0s;transform: translateY(-40px);}

.hideTop {transition:all 1.2s;transform: translateY(0px);}
</style>
