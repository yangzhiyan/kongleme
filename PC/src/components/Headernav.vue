<template>
  <div class="header">
      <!-- {{this.vlogin = this.$route.params.vlogin}}
    {{this.userid = this.$route.params.userid}} -->
    <div style="display:none">
        {{this.vlogin = this.$route.params.vlogin}}
        {{this.userid = this.$route.params.userid}}
    </div>
      <!-- 头部icon -->
      <div class="header-title"><a class="header-icon" href=""></a></div>

      <!-- 头部导航栏 -->
      <div class="header-nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1" class="nav-under"><a href="/#/" >首页</a></el-menu-item>

            <el-menu-item index="2" class="nav-under"><a href="/#/target" >目的地</a></el-menu-item>

            <el-menu-item index="3" class="nav-under"><a href="/#/next">旅游攻略</a></el-menu-item>

            <el-submenu index="4" class="nav-over">
            <template slot="title"><a href="/#/local" >旅行商城</a></template>
            <el-menu-item index="4-1"><a href="/#/travelcont"> 自由行</a></el-menu-item>
            <el-menu-item index="4-2">跟团游</el-menu-item>
            <el-menu-item index="4-3"><a href="/#/local">当地游</a></el-menu-item>
            <el-menu-item index="4-4">国内机票</el-menu-item>
            <el-menu-item index="4-4">签证</el-menu-item>
            <el-menu-item index="4-4">保险</el-menu-item>
            </el-submenu>

            <el-menu-item index="5" class="nav-under"><a href="https://www.ele.me" target="_blank">酒店</a></el-menu-item>

            <el-submenu index="6" class="nav-over">
            <template slot="title" ><a href="https://www.ele.me" target="_blank">社区</a></template>
            <el-menu-item index="6-1">问答</el-menu-item>
            <el-menu-item index="6-2">周边</el-menu-item>
            <el-menu-item index="6-3">浪了么俱乐部</el-menu-item>
            <el-menu-item index="6-4">结伴</el-menu-item>
            </el-submenu>

            <el-menu-item index="7" class="nav-under"><a href="https://www.ele.me" target="_blank">APP</a></el-menu-item>
             </el-menu>
      </div>
        <!-- 头：右边登录部分2 -->
      <div v-if="vlogin" class="login-info">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-submenu index="1">
            <template slot="title" class="right-info message"><span class="el-icon-bell"></span>消息</template>
            <el-menu-item index="1-1">私信</el-menu-item>
            <el-menu-item index="1-2">系统通知</el-menu-item>
            <el-menu-item index="1-3">问答消息</el-menu-item>
            <el-menu-item index="1-4">回复消息</el-menu-item>
            <el-menu-item index="1-5">好友动态</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title" class="right-info"><img class="header-img" src="http://n1-q.mafengwo.net/s12/M00/35/98/wKgED1uqIreAU9QZAAAXHQMBZ74008.png?imageMogr2%2Fthumbnail%2F%2132x32r%2Fgravity%2FCenter%2Fcrop%2F%2132x32%2Fquality%2F90" alt="头像"></template>
            <el-menu-item index="2-1"><span class="el-icon-news"></span>欢迎 {{this.userid = this.$route.params.userid}}</el-menu-item>
            <el-menu-item index="2-2"><span class="el-icon-news"></span>我的信息</el-menu-item>
           
            <el-menu-item index="2-3"><span class="el-icon-edit-outline"></span>写游记</el-menu-item>
            <el-menu-item index="2-4"><span class="el-icon-share"></span>我的足迹</el-menu-item>
            <el-menu-item index="2-5"><span class="el-icon-star-off"></span>我的收藏</el-menu-item>
            
            <el-menu-item index="2-6"><span class="el-icon-setting"></span>设置</el-menu-item>
            <el-menu-item index="2-7"><span class="el-icon-back"></span>退出</el-menu-item>

        </el-submenu>
        </el-menu> 
      </div>
      <!-- 头：右边登录部分1 -->
      <div v-else  class="header-login">
          <ul class="header-right">
              <li class="h-r"><a class="icon3 icon-sina i-right" href=""></a></li>
              <li class="h-r"><a class="icon3 icon-qq i-right" href=""></a></li>
              <li class="h-r"><a class="icon3 icon-wx i-right" href=""></a></li>
              <li class="h-r">
                <router-link to='/login' class='log-reg login gang i-right'>登录</router-link>
                </li>
              <li class="h-r gang gang-1">|</li>
              <li class="h-r">
              <router-link to='/reg' class='log-reg regist gang i-right'>注册</router-link>
                </li>
          </ul>
      </div>

    
  </div>
</template>

<script>
export default {
  name: "Headernav",
  data() {
    //props:{"vLogin"}
    return {
        vlogin:false,
        userId:"",
        activeIndex: "1"
    };
  },
  methods: {
      
  },
   updated: function () {
    this.vlogin = this.$route.params.vlogin;
    this.userId = this.$route.params.userId;
  }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.clear{
    clear: both;
}
a{
    text-decoration: none;
}
.is-opened {
    position: relative;
    top: -6px;
}
.header{
    width: 1000px;
    height: 60px;
    margin: 0 auto;

}
.header .header-title{
    float: left;
    width: 136px;
    height: 36px;
    padding: 16px 0px 6px 0px;
}
.header .header-icon{
    display: inline-block;
    width: 120px;
    height: 36px;
    background-image: url("../../static/img/icon.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
}
.header .header-nav{
    float: left;
    width: 600px;
}
.header .el-carousel__item {
    position: fixed;
    z-index: 1000;
}
.header .header-login{
    width: 185px;
    height: 26px;
    padding: 16px 0px;
    float: right;
}
.header .header-right>.h-r{
    display: inline;
}
.header .i-right{
    color: #ff9d00 !important;
}
.header .icon3{
    display: inline-block;
    width: 26px;
    height: 26px;
    background-image: url("../../static/img/kongleme.png");
    background-repeat: no-repeat;
}
.header .icon-sina{
    background-position: 0 -50px;
}
.header .icon-sina:hover{
    background-position: 0 -80px;
}
.header .icon-qq{
    background-position: -30px -50px;
}
.header .icon-qq:hover{
    background-position: -30px -80px;
}
.header .icon-wx{
    background-position: 0 -165px;
}
.header .icon-wx:hover{
    background-position: -30px -165px;
}

.header .log-reg{
    width: 28px;
    height: 16px;
}
.header .log-reg:hover{
    text-decoration: underline;
}
.header .gang{
    display: inline-block;
    font-size: 14px;
    position: relative;
    top:-5px;
}
.header .gang-1{
    color: gray;
}

.header .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 3px solid #ff9d00;
    background-color: #ff9d00;
    color: #fff;
}
.header .el-menu--horizontal>.el-menu-item:hover{
    color: #ff9d00;
    
}
.header .el-menu.el-menu--horizontal {
    border-bottom: none;
}
.header .nav-under{
    display: inline-block;
    width: 70px;
    text-align: center;
}
.header .nav-under:hover{
    border-bottom: 3px solid #ff9d00 !important;
}
.header .nav-over:hover{
    /* border-top: 2px solid #ff9d00 !important; */
    border-left: 1px solid gainsboro;
    border-right: 1px solid gainsboro;    
}
.header .nav-over a:hover{
    color: #ff9d00 !important;
}
.header .el-submenu__title>a{
    color: #909399;
}

/* login-info */
.header .login-info{
    float: right;
    width: 220px;
    height: 58px;
    /* border: 1px solid red; */
}
.header .header-img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
.header .header-img:hover{
    border: 2px solid #ff9d00;
}
.header .el-submenu__title i:hover{
    color: #ff9d00 ;
}
.header .message:hover{
    color: #ff9d00 !important;
}
</style>
