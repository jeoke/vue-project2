<template>
  <section>
  <section class="aboutIntro">
         <h1>Amelia Woods</h1>
         <p>I am a Graphic & Web Designer based in New York, specializing in User Interface Design and Development.</p>
  </section>
  <section id="about">
    <section id="kill" class="clearFix">
    <section class="inLine killIntro">
    </section>
    <section class="killIntro">
      <h1>About Us</h1>
      <p>Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.
      </p>
      <img src="../assets/img/index/signature.png">
    </section>
    </section>
   </section>
   </section>
</template>
<script>
export default {
  name: 'about'

}
</script>
<style scoped lang="scss">
.aboutIntro{
    width:88vw;
    height:45vh;
    background-color:rgba(33,33,33,0.6);
    text-align: center;
    color:rgba(260,260,260,0.77);
    h1{
       font-size:2rem;
       padding-top: 14vh;
       padding-bottom: 1vh;
    }
    p{
        padding-left:20vw;
        width:50vw;
        font-size:1.2rem;
    }
}
#kill{
  width: 100vw;
  height: 50vh;
  background-color:rgba(75,77,78,0.03);
  section.killIntro{
    float:left;
    padding-left: 2.5vw;
    padding-right: 8.5vw;
    padding-bottom: 8vh;
    width: 30vw;
    text-align: left;
  }
  h1{
    padding-left:10vw;
    font-size:2rem;
    padding-top:15vh;
    padding-bottom:2vh;
  }
  p{
    padding-left:10vw;
    font-size:1rem;
    padding-bottom:2vh;
  }
  img{
    padding-left:10vw;
  }
}
.inLine{
  background-color:rgba(75,77,78,0.15);
  height:69vh;
}
</style>
