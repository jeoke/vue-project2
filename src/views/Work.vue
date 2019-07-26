<template>
  <section>
    <section class="decoration"></section>
    <section id="kill" class="clearFix">
    <section class="killIntro">
    <section id="projectIntro">
      <h1>React动态简历</h1>
      <p>promise的使用</p>
      <p>webpack相关配置</p>
      <p>reactDOM操作</p>
      <p>react生命周期</p>
      <address><em>项目地址:</em>&nbsp;https://github.com/jeoke/ReactResume</address>
    </section>
    </section>
    <section class="inLine killIntro">
    </section>
    </section>
    <section class="decoration proControll">
        <span>PREVIOUS PROJECT</span><span id="centerIco"></span><span>NEXT PROJECT</span>
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
</template>

<script>
export default {
  name: 'work'
}
</script>

<style scoped lang="scss">
.decoration{
  margin-left:-6vw;
  width:100vw;
  height:82px;
  position:fixed;
  background-color:rgba(256,256,256,0.1);
}
.decoration.proControll{
  background-color:rgba(75,77,78,0.14);
  bottom:20.0011vh;
  span{
    display:block;
    float:left;
    cursor:pointer;
  }
  span:nth-child(1){
    margin-left:11vw;
    margin-top:30px;
  }
  span:nth-child(1):before{
      content:'<';
      display:block;
      width:20px;
      height:20px;
      position:absolute;
      top:30px;
      left:9vw;
  }
  #centerIco{
    background-image:url('../assets/img/simplePage/centerIco.png');
    width:30px;
    height:30px;
    margin-top:28px;
    margin-left:25vw;
  }
  span:nth-child(3){
    margin-top:-28px;
    margin-left:80vw;
  }
  span:nth-child(3):after{
     content:'>';
     display:block;
     width:30px;
     height:30px;
     position:absolute;
     top:30px;
     left:90vw;
  }
}
#kill{
  position:fixed;
  width: 100vw;
  height: 70vh;
  margin-left: -6vw;
  background-color:rgba(75,77,78,0.1);
  section.killIntro{
    float: left;
    padding-left: 6.5vw;
    padding-bottom: 8vh;
    width: 43.5vw;
    text-align: left;
    text-align: left;
    h1{
        padding-top:25vh;
        padding-bottom:2vh;
        font-size:2rem;
    }
    p{
        font-size:1.2rem;
        line-height:1.9rem;
    }
    address{
        font-size:1.3rem;
        line-height:4rem;
    }
  }
}
#projectIntro{
    margin-left:3vw;
}
.inLine{
  margin-top:10vh;
  background-color:rgba(75,77,78,0.1);
  height:52vh;
}
.footer{
  position:fixed;
  bottom:0px;
  margin-left: -6vw;
  height:20vh;
  width:100vw;
  color: rgba(259,259,259,0.5);
  background-color:rgba(33,33,33,0.5);
  section{
    float:left;
    padding-left:15vw;
  }
  h3{
    padding-top:5vh;
  }
  section p:nth-child(1){
    padding-top:6vh;
  }
}
.replaceFt{
  height:20vh;
  width:88vw;
}
</style>
