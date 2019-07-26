<template>
 <section>
   <section id="chartIntro">
    <ul>
       <li><router-link to="/process/Nativejs"><div>原生JS</div></router-link></li>
       <li><router-link to="/process/reactUse"><div>react技术栈</div></router-link></li>
       <li><router-link to="/process/vueUse"><div>vue技术栈</div></router-link></li>
       <li><router-link to="/process/WeexUse"><div>weex端</div></router-link></li>
       <li><router-link to="/process/service side"><div>服务器端</div></router-link></li>
    </ul>
    </section>
      <router-view />
   </section>
</template>
<script>
export default {
  name: 'process'
}
</script>
<style lang="scss">
#chartIntro {
    width:11vw;
    height:300px;
    position:fixed;
    top:0;
    right:0.2vw;
    div{
      color:#989494;
      padding:15px 5px 5px 5px;
      height:40px;
      font-size:1.2rem;
      background-color:rgba(248,223,223,0.5);
    }
    li:nth-child(1){
      margin-top:20vh;
    }
    li{
    	list-style:none;
    	position:relative;
    }
    a:hover,a:active,a:link,a:visited{
      text-decoration: none;
      color:#333;
      width:20px;
    }
    div:before{
    	content:'';
    	position:absolute;
    	top:0px;
    	left:50%;
    	right:50%;
    	height:4px;
    	background-color:rgba(248,223,223,1);
    	box-sizing: border-box;
    	transition-property:left top;
    	transition-duration:1s;
    	transition-timing-function:ease-in-out;
    }
    li:hover div{
    	background-color:#eadedb;
    }
    li:hover div:before{
    	background-color:#7b7272;
    	left:0;
    	right:0;
    }
}
</style>
