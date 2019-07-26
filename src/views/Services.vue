<template>
   <section>
   <section class="decoration"></section>
   <section class="serviceIntro">
         <h1>web development</h1>
         <p>I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development.</p>
   </section>
   <section class="bgImg">
       <img src="../assets/img/index/img-here1.png">
       <img src="../assets/img/index/img-here2.png">
       <img src="../assets/img/index/img-here3.png">
       <img src="../assets/img/index/img-here4.png">
       <img src="../assets/img/index/img-here6.png">
       <img src="../assets/img/index/img-here1.png">
    </section>
   </section>
</template>
<script>
export default {
  name: 'service'
}
</script>
<style scoped lang="scss">
.decoration{
  margin-left:-6vw;
  width:100vw;
  height:74px;
  position:fixed;
  background-color:rgba(256,256,256,0.1);
  z-index:1;
}
.serviceIntro{
  position:fixed;
  margin-left:-6vw;
  width:100vw;
  height:40vh;
  text-align:center;
  background-color:rgba(75,77,78,0.1);
  h1{
    font-size:2rem;
    margin-top:18vh;
    margin-bottom:1vh;
  }
  p{
    width:46vw;
    padding-left:27vw;
    opacity:0.7;
  }
}
.bgImg{
   position:fixed;
   margin-left:-6vw;
   top:40vh;
   padding-left:6vw;
   background-color:rgba(71,72,72,0.16);
   img{
     float:left;
     width:29.33vw;
     height:30vh;
   }
   img:nth-child(even){
     opacity:0.7;
   }
}
.bgImg:after{
  content:'';
  display:block;
  width:2vw;
  height:2vh;
  position:absolute;
  top: 45vh;
  left: 45vw;
  background-image:url("../assets/img/index/look.png");
  background-size:99% 99%;
}
</style>
