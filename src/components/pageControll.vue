<template>
    <aside>
        <ul v-if="option.navBar" class="controll">
            <li v-for="index in pageNumber" @click="changePage(index)" :class="{current: option.hightLight && index === currentIndex}" class="controll-items" :key='index'></li>
        </ul>
    </aside>
</template>
<script>
export default {
  name: 'pageControll',
  props: {
    currentIndex: Number,
    pageNumber: Number,
    option: {
      type: Object,
      default: function () {
        return {
          hightLight: true,
          navBar: true,
          loop: true
        }
      }
    }
  },
  methods: {
    changePage: function (index) {
      this.$emit('changePage', index)
    }
  },
  created () {
    if (this.option.navBar === 'undefined') { this.option.navBar = true }
  },
  computed: {
    nextIndex: function () {
      if (this.currentIndex === this.pageNumber) {
        if (this.option.loop) { return 1 } else { return this.pageNumber }
      } else { return this.currentIndex + 1 }
    },
    prevIndex: function () {
      if (this.currentIndex === 1) {
        if (this.option.loop) { return this.pageNumber } else { return 1 }
      } else { return this.currentIndex - 1 }
    }
  },
  mounted () {
    let that = this
    let timer = null
    let start = 0
    function scrollHandler (direction) {
      if (timer != null) { return }
      if (direction === 'down') {
        that.changePage(that.nextIndex)
      } else {
        that.changePage(that.prevIndex)
      }
      timer = setTimeout(function () {
        clearTimeout(timer)
        timer = null
      }, 1600)
    }
    if (window.hasOwnProperty('onmousewheel')) {
      window.addEventListener('mousewheel', function (event) {
        let direction = event.detail > 0 ? 'up' : 'down'
        scrollHandler(direction)
      }, false)
    } else {
      window.addEventListener('DOMMouseScroll', function (event) {
        let direction = event.detail > 0 ? 'up' : 'down'
        scrollHandler(direction)
      }, false)
    }
    window.addEventListener('touchstart', function (event) {
      start = event.touches[0].clentY
    }, false)
    window.addEventListener('touchmove', function (event) {
      event.preventDefault()
    }, false)
    window.addEventListener('touchend', function (event) {
      if (start) {
        start = 0
      }
      let gap = event.changedTouches[0].clientY - start
      let direction
      if (gap > 50) { direction = 'up' } else if (gap < -50) { direction = 'down' }
      scrollHandler(direction)
    }, false)
  }
}
</script>

<style scoped lang="scss">
.controll{
  position:fixed;
  right:2vw;
  top:45vh;
}
.controll-items{
  cursor: pointer;
  list-style:none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: rgba(239,216,216, 0.8);
  transition: background-color 0.3s ease 0s;
}
</style>
