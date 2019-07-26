<template>
   <section>
     <section id="contact">
       <section id="contactIntro">
        <h2>Contact Info</h2>
        <p>To give give beginning divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subdue. Life days creature upon first heaven gathering dry.</p>
        <p><em>Address:</em><span> 10111 Santa Monica Boulevard, LA</span></p>
        <p><em>Phone:</em><span>+44 987 065 908</span></p>
        <p><em>Email: </em><span>info@Example.com</span></p>
        <p><em>Fax: </em><span>+44 987 065 909</span></p>
       </section>
       <form action="" method="post">
          <input type="text" placeholder="Your Name">
          <input type="test" placeholder="Your Email">
          <input type="text" placeholder="Your Title">
          <textarea placeholder="Your Content"></textarea>
       <div>Send Message</div>
       </form>
     </section>
     <section id="container"></section>
   </section>
</template>
<script>
import rMap from '@/components/baiduMap'
export default {
  name: 'contact',
  data: function () {
    return {
      ak: 'RXH6j3RfhESZvjxF1IFR8LBT3hL2SU5R'
    }
  },
  mounted () {
    this.$nextTick(function () {
      var that = this
      rMap(that.ak).then(Bmap => {
        console.log(Bmap)
        var map = new Bmap.Map('container')
        var point = new Bmap.Point(114.545673, 30.396584)
        map.centerAndZoom(point, 16)
        map.enableScrollWheelZoom(true)
      })
    })
  }
}
</script>

<style scoped lang="scss">
#contact{
  position:relative;
  background-color:rgba(75,77,78,0.03);
  height:60vh;
  width:100vw;
  text-align:left;
  #contactIntro{
        width:33vw;
        display:inline-block;
        padding-left:7vw;
        h2{
            padding-bottom:2vh;
        }
        p{
            line-height:3vh;
        }
        p:nth-child(2){
            padding-bottom:2vh;
        }
        span,p{
            opacity:0.9;
        }
  }
  form{
    position:relative;
    top:10vh;
    left:3vw;
    display:inline-block;
    width:44vw;
    height:30vh;
    font-size:1rem;
    input{
      width:17vw;
      height:6vh;
      border:1px solid #8B8B8B;
      color:#000;
      background-color:rgba(259,259,259,0.1);
      padding-left:1.5vw;
      margin-left:3vw;
      border:none;
    }
    input:nth-child(3){
      width: 38.6vw;
      margin-left: 3vw;
      margin-top: 2vw;
    }
    textarea{
      font-size:1.5rem;
      padding-top:1vh;
      line-height:1.5rem;
      padding-left:1.5vw;
      margin-top: 2vw;
      background-color:rgba(259,259,259,0.1);
      margin-left: 3vw;
      width:38.5vw;
      height:14vh;
      border:none;
    }
    div{
      background-image:url("../assets/img/index/button-bg.png");
      position:relative;
      left:16vw;
      width:9vw;
      height:6vh;
      margin-top:2vh;
      line-height:6vh;
      font-size:0.77rem;
      opacity:0.7;
      border-radius:4px;
      text-align:center;
    }
  }
}
#container{
    height:35vh;
    width:50vw;
    margin-top:2vh;
    margin-left:20vw;
    border-radius:20px;
}
</style>
