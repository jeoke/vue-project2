<template>
  <div id="app">
    <header>
    <nav id="nav" ref="navBounce" class="navBounce" :class="navAnimation"  @mouseleave="navHidden">
      <img :src="logo">
      <router-link to="/"><div id="homeNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
      <router-link to="/about"><div id="aboutNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
      <router-link to="/work"><div id="workNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
      <router-link to="/process"><div id="processNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
      <router-link to="/services"><div id="servicesNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
      <router-link to="/contact"><div id="contactNav" :style="{backgroundImage:'url('+ navUrl +')'}"></div></router-link>
    </nav>
    <section @mouseover="navShow" id="bggroud"></section>
    </header>
    <router-view />
  </div>
</template>

<script>
import navUrl from '@/assets/img/index/navImg.png'
import logo from '@/assets/logo.png'
export default {
  name: 'app',
  data: function () {
    return {
      navUrl: navUrl,
      logo,
      navAnimation: ''
    }
  },
  methods: {
    navShow: function (e) {
      console.log(e.clientY)
      if (e.clientY < 74) {
        this.navAnimation = 'navShow'
      } else {
        this.navHidden()
      }
    },
    navHidden: function () {
      this.navAnimation = 'navHidden'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow:hidden;
  background-image: url("./assets/img/index/bg.png");
  background-size: 100% 100%;
  background-repeat: repeat;
  width: 88vw;
  height: 100vh;
  margin-left: 6vw;
  text-align: center;
  position:relative;
}
*{
  margin: 0px;
  padding: 0px;
}
#nav {
  z-index:3;
  width:88vw;
  text-align: right;
  padding-top: 30px;
  background-color:rgba(75,77,77,0.01);
  img{
    float: left;
    margin-left: 3px;
    width: 22px;
    height: 13px;
  }
  div {
    display: inline-block;
    padding: 20px;
    background-size: 630% 27%;
    background-repeat: no-repeat;
    width: 3.3vw;
  }
  #homeNav{
    background-position-x: 2vw;
  }
  #aboutNav{
    background-position-x: -3.3vw;
  }
  #workNav{
    background-position-x: -8.3vw;
  }
  #processNav{
    background-position-x: -13.9vw;
  }
  #servicesNav{
    background-position-x: -20.43vw;
  }
  #contactNav{
    background-position-x: -36.5vw;
  }
}
.navBounce{
  position: absolute;
  top: -74px;
  transition: all 1s ease-in-out;
}
.navShow{
  transform:translateY(74px);
}
.navHidden{
  transform:translateY(-74px);
}
#bggroud{
  position:absolute;
  top:0;
  z-index:2;
  width: 88vw;
  height: 74px;
}
</style>
