<template>
  <section>
  <fullPage :currentIndex="currentIndex">
  <section class="animate">
  </section>
  <section class="intro">
    <section>
      <h1>We Design and Develop</h1>
      <p>we are a new design studio based in USA.we have over 20 years of combined expence.and know a thing or two about designing websites and mobie apps</p>
      <div>contact us</div>
    </section>
  </section>
  <section id="about">
    <section>
      <h1>About Us</h1>
      <p>Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.
      </p>
      <img src="../assets/img/index/signature.png">
      </section>
  </section>
  </fullPage>
  <fullPage :currentIndex="currentIndex">
  <section class="animate move-right">
  <section id="kill" :key='2' class="clearFix">
    <section class="killIntro killDescript">
      <h1>Professional Skill</h1>
      <p>UI design</p>
      <p>WEB development</p>
      <p>WECHAT development</p>
    </section>
    <section class="inLine killIntro">
    </section>
    <section class="killSec">
       <div>Project completed</div>
       <div>Working Hours</div>
       <div>Positive Feedbacks</div>
       <div>Happy  Clients</div>
    </section>
    <section class="bgImg">
       <img src="../assets/img/index/img-here1.png">
       <img src="../assets/img/index/img-here2.png">
       <img src="../assets/img/index/img-here3.png">
       <img src="../assets/img/index/img-here4.png">
       <img src="../assets/img/index/img-here5.png">
       <img src="../assets/img/index/img-here6.png">
       <img src="../assets/img/index/img-here7.png">
       <img src="../assets/img/index/img-here8.png">
    </section>
  </section>
  </section>
  </fullPage>
  <fullPage :currentIndex="currentIndex">
    <section class="animate move-right">
    <section class="tip">
      <p>LOAD MORE WORK</p>
    </section>
    <section class="workIntro">
      <h1>Our Work Process</h1>
      <p>Was years it seasons was there form he in in them together over that, </p>
      <p>third sixth gathered female creeping bearing behold years.</p>
    </section>
    <section class="audioIntro">
      <audio></audio>
    </section>
    <section class="workContent">
      <div>
        <img src="../assets/img/index/diamond.png">
        <h3>UI DESIGN</h3>
        <p>Be set fourth land god darkness make it wherein own</p>
      </div>
      <div>
        <img src="../assets/img/index/arc.png">
        <h3>WEB DEVELOPMENT</h3>
        <p>A she'd them bring void moving third she'd kind fill</p>
      </div>
      <div>
        <img src="../assets/img/index/phone.png">
        <h3>APP/MOBILE</h3>
        <p>Dominion man second spirit he,earth they're creeping</p>
      </div>
      <div>
        <img src="../assets/img/index/joy.png">
        <h3>GAME DESIGN</h3>
        <p>Morning his saying moveth it multiply appear life be</p>
      </div>
      <div>
        <img src="../assets/img/index/plane.png">
        <h3>SEO/MARKETING</h3>
        <p>Give won't after land fill creeping meat you, may</p>
      </div>
      <div>
        <img src="../assets/img/index/star2.png">
        <h3>PHOTOGRAPHY</h3>
        <p>Creepeth one seas cattle grass give moving saw give</p>
      </div>
      <div>
        <img src="../assets/img/index/wand.png">
        <h3>GRAPHIC DESIGN</h3>
        <p>Open, great whales air rule for, fourth life whales</p>
      </div>
      <div>
        <img src="../assets/img/index/bucket.png">
        <h3>ILLUSTRATIONS</h3>
        <p>Whales likeness hath, man kind for them air two won't</p>
      </div>
    </section>
    </section>
  </fullPage>
  <fullPage :currentIndex="currentIndex">
  <section id="moreIntro" class="move-right animate">
    <section id="swiperIntro">
    <section>
      <p>“Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”</p>
    </section>
    <section>
      <p>“If you want to know more message about working process,please contact us at the moment,we will tell you more detail about other projects,for exmple:BAIDU GRAPHIC DEVELOPMENT,SERVER SILDE RENDER,WEEX DEVEPLOMENT ”</p>
    </section>
    <section>
      <p>"join us,You can enjoy collective welfare and social welfare,just like this:OVERSEAS TRVELLING,legal holidays,have a dinner party,learning enviroment "</p>
    </section>
    </section>
    <section id="imgIntro">
      <img src="../assets/img/index/img_0009s_0000s_0000_1.png">
      <img src="../assets/img/index/img_0009s_0000s_0001_2.png">
      <img src="../assets/img/index/img_0009s_0000s_0002_3.png">
      <img src="../assets/img/index/img_0009s_0000s_0003_4.png">
      <img src="../assets/img/index/img_0009s_0000s_0004_5.png">
    </section>
  </section>
  </fullPage>
  <fullPage :currentIndex="currentIndex">
    <section class="animate move-right">
    <section id="contact">
       <h1>Need a Project?</h1>
       <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
       <form action="" method="post">
       <input type="text" placeholder="Your Name">
       <input type="test" placeholder="Your Email">
       <input type="text" placeholder="Your Title">
       <textarea placeholder="Your Content"></textarea>
       <div>Send Message</div>
       </form>
    </section>
    <section class="footer">
      <section>
        <h3>VUE SSR PROJECT.Int</h3>
        <p>®2019.ALL rights reserved.</p>
        <p>Make by keassion</p>
      </section>
      <section>
        <p>keassion@gmail.com</p>
        <p>jeokaren@outlook.com</p>
      </section>
      <section>
        <p>more contact</p>
        <p>join us</p>
        <p>about</p>
        <p>HOME</p>
      </section>
    </section>
    <section class ="replaceFt"></section>
    </section>
  </fullPage>
  <scrollTop @changePage="changePage" v-if="currentIndex !== 1"/>
  <pageControll :pageNumber='pageNumber' :currentIndex='currentIndex' @changePage='changePage'/>
  </section>
</template>

<script>
import scrollTop from '@/components/scrollTop'
import fullPage from '@/components/fullPage'
import pageControll from '@/components/pageControll'
function afterEnterPage ($child) {
  $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right')
}
function beforeLeavePage ($child) {
  let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right'
  $child.$el.querySelector('.animate').classList.add(moveType)
}
export default {
  name: 'home',
  props: {
    msg: String
  },
  data: function () {
    return {
      currentIndex: 1,
      option: [{
        afterEnter: afterEnterPage,
        beforeLeave: beforeLeavePage
      }, {
        afterEnter: afterEnterPage,
        beforeLeave: beforeLeavePage
      }, {
        afterEnter: afterEnterPage,
        beforeLeave: beforeLeavePage
      }, {
        afterEnter: afterEnterPage,
        beforeLeave: beforeLeavePage
      }, {
        afterEnter: afterEnterPage,
        beforeLeave: beforeLeavePage
      }]
    }
  },
  computed: {
    pageNumber: function () {
      return this.option.length
    }
  },
  methods: {
    changePage (index) {
      let beforeIndex
      beforeIndex = this.currentIndex - 1
      this.currentIndex = index
      let leaveFunction = this.option[beforeIndex].beforeLeave
      typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex])
      let nextIndex = index - 1
      let enterFunction = this.option[nextIndex].afterEnter
      // this.$nextTick(function () {
      typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex])
    // })
    }
  },
  mounted () {
    this.$children.forEach((child, index) => {
      if (child.option === null) {
        let childOption = this.option[index]
        this.$set(childOption, 'index', index + 1)
        child.option = childOption
      }
    }
    )
  },
  components: {
    scrollTop,
    fullPage,
    pageControll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
      font-size:2rem;
      line-height: 3rem;
}
p{
  line-height: 1.4rem;
  opacity: 0.8;
}
.intro {
  width: 100vw;
  height: 45vh;
  padding-top: 4vh;
  margin-left: -6vw;
  background-color:rgba(75,77,78,0.05);
  section{
    width: 30vw;
    margin-top: 5vh;
    margin-left: 60vw;
    text-align: left;
    div{
      background-image:url(../assets/img/index/button-bg.png);
      width: 10vw;
      height: 4vh;
      padding: 0.3rem;
      text-align: center;
      line-height: 2rem;
      margin-top: 12px;
      margin-left: -4px;
      opacity: 0.7;
    }
  }
}
#about{
  width: 100vw;
  height: 35vh;
  margin-left: -6vw;
  text-align: center;
  section{
    width:50vw;
    height:30vh;
    margin-left:auto;
    margin-right:auto;
    margin-top: 10vh;
  }
  img{
    margin-top:3vh;
  }
}
.killDescript{
  height:22vh;
}
#kill{
  width: 100vw;
  height: 100vh;
  background-color:rgba(75,77,78,0.03);
  section.killIntro{
    float:left;
    padding-top: 3vh;
    padding-left: 8.5vw;
    padding-right: 8.5vw;
    padding-bottom: 8vh;
    width: 30vw;
    text-align: left;
    p{
      background-image:url('../assets/img/index/processBar.png');
      background-repeat: no-repeat;
      border-bottom:1px solid #ccc;
      line-height: 3rem;
      font-size: 1.3rem;
      opacity: 0.8;
    }
    p:nth-child(2){
      background-position: 0 100%;
      background-size:40% 2%;
    }
    p:nth-child(3){
      background-position: 0 100%;
      background-size:80% 2%;
    }
    p:nth-child(4){
      background-position: 0 100%;
      background-size:20% 2%;
    }
  }
}
.inLine{
  background-color:rgba(75,77,78,0.03);
  height:30vh;
}
.killSec{
  position:relative;
  float:left;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width:88vw;
  height:5vh;
  opacity:0.7;
  background-image:url("../assets/img/index/killSec.png");
  div{
    float:left;
    padding-top: 1.5vh;
    color:white;
    padding-left:12vw;
    width:8.9vw;
    font-size:0.8rem;
  }
  div:nth-child(1):before{
    content:'';
    position:absolute;
    top:5vh;
    left:7vw;
    display:block;
    background-image:url("../assets/img/index/portfolio.png");
    height:40px;
    width:40px
  }
  div:nth-child(2):before{
    content:'';
    position:absolute;
    top:5vh;
    left:28vw;
    display:block;
    background-image:url("../assets/img/index/clock.png");
    height:40px;
    width:40px
  }
  div:nth-child(3):before{
    content:'';
    position:absolute;
    top:5vh;
    left:47vw;
    display:block;
    background-image:url("../assets/img/index/star.png");
    height:40px;
    width:40px
  }
  div:nth-child(4):before{
    content:'';
    position:absolute;
    top:5vh;
    left:69vw;
    display:block;
    background-image:url("../assets/img/index/like.png");
    height:40px;
    width:40px
  }
}

.bgImg{
  position:relative;
  height: 44vh;
  width: 88vw;
  float: left;
  text-align: left;
  line-height: 0vh;
  img{
    width:22vw;
    height: 22vh;
    opacity:0.8;
  }
}
.clearFix:after{
  content:'';
  display:block;
  height:0px;
  visibility:hidden;
}
.bgImg:after{
  content:'';
  display:block;
  width:2vw;
  height:2vh;
  position:absolute;
  top: 33vh;
  left: 33vw;
  background-image:url("../assets/img/index/look.png");
  background-size:99% 99%;
}
.tip{
  text-align:center;
  background-color:rgba(75,77,77,0.1);
  height:4vh;
  width:100vw;
  padding-top:1vh;
  margin-left:-6vw;
  opacity:0.4;
}
.workIntro{
  padding-top:3vh;
  padding-bottom:4vh;
  width:100vw;
  margin-left:-6vw;
  height:15vh;
  text-align:center;
}
.audioIntro{
  width:44vw;
  height:25vh;
  margin-left:22vw;
  margin-right:22vw;
  margin-bottom:5vh;
  background:blue;
}
.workContent{
  width:88vw;
  height:44vh;
  text-align:center;
  background-color:rgba(75,77,78,0.05);
  div{
    float:left;
    width:22vw;
    height:15vh;
    margin-top:4vh;
    img{
      width:2.5vw;
      height:5vh;
    }
    p{
      padding-left:3vw;
      width:15vw;
      opacity:0.8;
      font-size:0.8rem;
      line-height:2vh;
    }
    h3{
      font-size:0.9rem;
      opacity:0.8;
      margin:0.5vh;
    }
  }
}
#moreIntro{
  height:100vh;
  width:88vw;
  img{
    width:14.24vw;
    height:17.6vh;
    padding:2.1vh;
  }
}
#swiperIntro{
  text-align:center;
  line-height:27vh;
  font-size:3.5rem;
  color:white;
  height:76vh;
  width:88vw;
  opacity:0.55;
  background-image:url("../assets/img/index/killSec.png");
  p{
    height: 74vh;
    line-height: 2rem;
    width: 64vw;
    padding-left: 22vh;
    font-size: 1.9rem;
    padding-top: 24vh;
  }
  section:nth-child(2){
       display:none;
  }
  section:nth-child(3){
       display:none;
  }
}
#imgIntro{
  height:22vh;
  width:88vw;
}
#contact{
  background-color:rgba(75,77,78,0.03);
  height:70vh;
  width:88vw;
  h1{
    padding-top:6vh;
    padding-bottom:2vh;
    line-height:2rem;
  }
  p{
    color:#8B8B8B;
    width:52vw;
    padding-left:30vh;
  }
  form{
    width:73vw;
    height:60vh;
    margin-left: 8vw;
    margin-top: 3vh;
    font-size:1rem;
    input{
      width:25vw;
      height:6vh;
      border:1px solid #8B8B8B;
      color:#000;
      background-color:rgba(259,259,259,0.2);
      padding-left:1.5vw;
      margin-left:3vw;
      border:none;
    }
    input:nth-child(3){
      width: 54.6vw;
      margin-left: 3vw;
      margin-top: 2vw;
    }
    textarea{
      border:none;
      font-size:1.5rem;
      padding-top:1vh;
      line-height:1.5rem;
      padding-left:1.5vw;
      margin-top: 2vw;
      background-color:rgba(259,259,259,0.2);
      margin-left: 3vw;
      width:54.5vw;
      height:14vh;
    }
    div{
      background-image:url("../assets/img/index/button-bg.png");
      position:relative;
      left:30vw;
      width:12vw;
      height:6vh;
      margin-top:2vh;
      line-height:6vh;
      font-size:1rem;
      opacity:0.7;
      border-radius:4px;
    }
  }
}
.footer{
  position:absolute;
  left:-5.97vw;
  height:30vh;
  width:98.6vw;
  color: rgba(259,259,259,0.5);
  background-color:rgba(33,33,33,0.8);
  section{
    float:left;
    padding-left:15vw;
  }
  h3{
    padding-top:5vh;
  }
  section p:nth-child(1){
    padding-top:9vh;
  }
}
.replaceFt{
  height:30vh;
  width:88vw;
}
.move-left {
  transform: translateX(-100%);
}
.move-right {
  transform: translateX(100%);
}
.animate {
  transition: transform 1s ease-out 0s;
}

</style>
