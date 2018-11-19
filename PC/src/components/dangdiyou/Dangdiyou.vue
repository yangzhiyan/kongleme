<template>
<div>
    <div class="h-n">
        <Headernav></Headernav> 
    </div>
    
    <div id="all">
        <!-- 头部导航 -->
        <div class="header1">
            <ul class="header1-cont">
                <li><a href="">自由行</a></li>
                <li><a href="">跟团游</a></li>
                <li class="on"><a href="">当地游</a></li>
                <li><a href="">国内机票</a></li>
                <li><a href="">签证</a></li>
                <li><a href="">全球WiFi</a></li>
                <li><a href="">邮轮</a></li>
                <li><a href="">旅游保险</a></li>
            </ul>
        </div>
        <!-- 主题内容 -->
        <div class="container">
            <!-- 头部搜索 -->
            <div class="brand-bar">
                <div class="bb-hd">
                    <div class="bb-title">
                        <i class="bb-icon"></i> 
                        <span>当地游</span> 
                    </div>
                </div>
                <dir class="bb-search">
                    <input @focus="iptfos" class="bb-search-ipt" type="text" name="" id="" placeholder="请输入目的地/产品名称">
                    <a href="" class="bb-search-btn"><span class="el-icon-search"></span></a>
                </dir>
            </div>
            <!-- 头部内容 -->
            <div class="local-top">
                <!-- 左边导航条 -->
                <div class="top-aside">
                    <div class="top-aside-son">
                        <div class="item item1">
                            <i class="item-icon item-icon1"></i>
                            <h3>国内旅游</h3>
                            <p>
                                <span>桂林</span>
                                <span>丽江</span>
                                <span>厦门</span>
                                <span>三亚</span>
                                <span>北海</span>
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                        <div class="item item2">
                            <i class="item-icon item-icon2"></i>
                            <h3>日本</h3>
                            <p>
                                <span>东京</span>
                                <span>大阪</span>
                                <span>京都</span>
                                <span>北海道</span>
                                <!-- <span>冲绳</span> -->
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                        <div class="item item3">
                            <i class="item-icon item-icon3"></i>
                            <h3>东南亚 泰国</h3>
                            <p>
                                <span>普吉岛</span>
                                <span>清迈</span>
                                <span>巴厘岛</span>
                                <span>新加坡</span>
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                        <div class="item item4">
                            <i class="item-icon item-icon4"></i>
                            <h3>香港 澳门 台湾</h3>
                            <p>
                                <span>香港</span>
                                <span>澳门</span>
                                <span>台湾</span>
                                <span>垦丁</span>
                                <span>花莲</span>
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                        <div class="item item5">
                            <i class="item-icon item-icon5"></i>
                            <h3>欧洲 法国 德国</h3>
                            <p>
                                <span>法国</span>
                                <span>西班牙</span>
                                <span>迪拜</span>
                                <span>意大利</span>
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                        <div class="item item-last">
                            <i class="item-icon item-icon6"></i>
                            <h3>美洲 澳洲 非洲</h3>
                            <p>
                                <span>美国</span>
                                <span>澳大利亚</span>
                                <span>新西兰</span>
                                <!-- <span>摩洛哥</span> -->
                            </p>
                            <i class="el-icon-arrow-right jiantou"></i>
                        </div>
                    </div>
                </div>
                <!-- 右边轮播 -->
                <div class="top-content">
                    <img src="../../../static/img/ddy-lunbo.jpeg" alt="">
                </div>
            </div>
            <!-- 品类导航 -->
            <div class="slide-row">
                <div class="slide-box">
                    <ul class="slide-nav">
                        <li class="slide-nav-item1">
                            <i class="icon1"></i>
                            <p>门票</p>
                        </li>
                        <li class="slide-nav-item2">
                            <i class="icon2"></i>
                            <p>一日游</p>
                        </li>
                        <li class="slide-nav-item3">
                            <i class="icon3"></i>
                            <p>多日游</p>
                        </li>
                        <li class="slide-nav-item4">
                            <i class="icon4"></i>
                            <p>当地体验</p>
                        </li>
                        <li class="slide-nav-item5">
                            <i class="icon5"></i>
                            <p>酒店套餐</p>
                        </li>
                        <li class="slide-nav-item6">
                            <i class="icon6"></i>
                            <p>演出展示</p>
                        </li>
                        <li class="slide-nav-item7">
                            <i class="icon7"></i>
                            <p>美食</p>
                        </li>
                        <li class="slide-nav-item8">
                            <i class="icon8"></i>
                            <p>接送机/站</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 正在热卖 -->
            <div class="hotsale">
                <div class="hotsale-hd">
                    <h2>正在热卖</h2>
                    <span class="first1">境内推荐</span>
                    <span>港澳台必玩</span>
                    <span>日本新加坡</span>
                    <span>泰越柬</span>
                    <span>欧美</span>
                    <span>澳新</span>
                    <span>中东非</span>
                </div>
                <div class="hotsale-cont">
                    <ul>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img1"></div>
                                <div class="caption">
                                    <h3>专属网红玩法·三亚3天2晚纯玩0购游 下单送1晚酒店</h3>
                                    <span class="price"><b>￥618</b>起</span>
                                    <span class="yishou">已售152</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img2"></div>
                                <div class="caption">
                                    <h3>三亚天涯海角门票</h3>
                                    <span class="price"><b>￥76</b>起</span>
                                    <span class="yishou">已售68152</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img3"></div>
                                <div class="caption">
                                    <h3>薇旅行·老产品·新玩法 总销售2W+亲爱的泸沽湖·宝藏摄影师全程单反</h3>
                                    <span class="price"><b>￥600</b>起</span>
                                    <span class="yishou">已售20</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img4"></div>
                                <div class="caption">
                                    <h3>早鸟优惠 老司机带你600元寻北漠河（精华2日游+住宿＋门票）</h3>
                                    单送1晚酒店</h3>
                                    <span class="price"><b>￥519</b>起</span>
                                    <span class="yishou">已售102</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img5"></div>
                                <div class="caption">
                                    <h3>早鸟优惠·这是一条一价全包极致奢华的7天6晚东北高端冰雪之旅</h3>
                                    <span class="price"><b>￥2880</b>起</span>
                                    <span class="yishou">已售340</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img6"></div>
                                <div class="caption">
                                    <h3>第二人免费 可订长恨歌 兵马俑+华清宫纯玩一日游</h3>
                                    <span class="price"><b>￥218</b>起</span>
                                    <span class="yishou">已售33</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img7"></div>
                                <div class="caption">
                                    <h3>专属网红玩法·三亚3天2晚纯玩0购游 下单送1晚酒店</h3>
                                    <span class="price"><b>￥149</b>起</span>
                                    <span class="yishou">已售46512</span>
                                </div>
                            </a>
                        </li>
                        <li class="hot-box hot-box1">
                            <a href="">
                                <div class="img img2"></div>
                                <div class="caption">
                                    <h3>三亚天涯海角门票</h3>
                                    <span class="price"><b>￥78</b>起</span>
                                    <span class="yishou">已售68097</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 度过完美假期 -->
            <div class="mod-recommend">
                <!-- 头部 -->
                <div class="mod-hd hotsale-hd">
                    <h2>度过完美假期</h2>
                    <span class="first1">苏梅岛</span>
                    <span>新加坡</span>
                    <span>清迈</span>
                    <span>普吉岛</span>
                    <span>洛杉矶</span>
                    <span>三亚</span>
                    <span>丽江</span>
                    <span>东京</span>
                    <span>香港</span>
                    <span>台北</span>
                </div>
                <!-- 产品展示区 -->
                <div class="mod-bd">
                    <ul class="mod-ul">
                        <li class="mod-li mod-li1">
                            <div class="img">
                                <img src="../../../static/img/mod1.jpeg" alt="">
                            </div>
                            <div class="hd">苏梅岛</div>
                        </li>
                        <li class="mod-li mod-li2">
                            <div class="img">
                                <img src="../../../static/img/mod2.jpeg" alt="">
                            </div>
                            <div class="hd">南园岛</div>
                        </li>
                        <li class="mod-li mod-li2">
                            <div class="img">
                                <img src="../../../static/img/mod3.jpeg" alt="">
                            </div>
                            <div class="hd">新加坡</div>
                        </li>
                        <li class="mod-li mod-li2">
                            <div class="img">
                                <img src="../../../static/img/mod4.jpeg" alt="">
                            </div>
                            <div class="hd">普吉岛</div>
                        </li>
                        <li class="mod-li mod-li2">
                            <div class="img">
                                <img src="../../../static/img/mod5.jpeg" alt="">
                            </div>
                            <div class="hd">南园岛</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
<Footer1></Footer1>
</div>
</template>

<script>
import Headernav from "../Headernav.vue";
import Footer1 from "../Footer1.vue";
export default {
  name: "Dangdiyou",
  components: {
    Headernav,
    Footer1
  },
  data() {
    return {};
  },
  methods:{
      iptfos:function(){
          console.log(this)
      }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#all{
    width: 1000px;
    margin: 0 auto;
    font-size: 12px;
}
ul,li,ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  display: inline-block;
  height: 37px;
  padding: 0 6px;
  color: #666;
}
a:hover{
    color: #ff9d00;
}
.h-n{
    border: 1px solid rgb(185, 181, 181);
    border-top-color: transparent;
    box-shadow: 1px 1px 1px 1px rgb(238, 237, 237);
}
.header1-cont {
  height: 37px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  margin-left: 235px;
}
.header1-cont > li {
  float: left;
  display: inline;
  margin-right: 10px;
  padding: 0 6px;
}

.header1-cont li + li:before {
  content: "";
  position: absolute;
  margin: 13px 0 0 -10px;
  width: 1px;
  height: 15px;
  background-color: #e0e0e0;
}
.header1-cont .on a {
    border-bottom: 3px solid #fc9d27;
    color: #ff9d00;
}
.brand-bar{
    width: 1000px;
    height: 40px;
    padding: 15px 0;
    background: url("../../../static/img/ddy-hd-bg.jpg") no-repeat;
    margin: 10px 0 0 0;
    /* border: 1px solid red; */
}
.brand-bar .bb-hd{
    float: left;
    width: 185px;
    font-size: 24px;
}
.brand-bar .bb-hd .bb-icon{
    display: inline-block;
    width: 31px;
    height: 32px;
    background: url("../../../static/img/ddy.png") no-repeat -30px -120px;
    margin: 2px 10px 0 0;
}
.brand-bar .bb-hd .bb-title>span{
    display: inline-block;
    position: relative;
    top: -6px;
    color: rgb(26, 25, 25);
}
.bb-search{
    width: 660px;
    height: 30px;
    background-color: #ff9d00;
    border-radius: 3px;
    padding: 5px;
    overflow: hidden;
}
.bb-search .bb-search-ipt{
    float: left;
    width: 547px;
    height: 20px;
    overflow: hidden;
    line-height: 20px;
    border: 0 none;
    border-radius: 2px;
    padding: 5px 12px;
    font-size: 16px;
    /* transition: border .2s ease-in 0s; */
    color: #333;
    box-shadow: inset 0 0 3px rgba(255,157,0,0.9);
}

.bb-search .bb-search-btn{
    float: left;
    width: 82px;
    height: 40px;
    background-color: #ff9d00;
    text-align: center;
    border-radius: 0 4px 4px 0;
    margin: -5px -5px -5px 0;
}
.bb-search .bb-search-btn>span{
    display: inline-block;
    margin-top: 8px;
    width: 23px;
    height: 23px;
    color: white;
    font-size: 24px;
    font-weight: 900;
}

.local-top{
    width: 1000px;
    height: 405px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid green; */
}
.local-top .top-aside{
    width: 260px;
    height: 405px;
    display: inline-block;
}
.local-top .top-aside>.top-aside-son{
    width: 256px;
    height: 399px;
    border: 2px solid #ff9d00;
    background-color: #fff;
    padding-bottom: 2px;
}
.top-aside-son>.item{
    width: 186px;
    padding: 11px 20px 10px 50px;
    height: 45px;
    background-color: #fff;
    line-height: 20px;
    font-size: 12px;
    position: relative;
    border-bottom: 1px solid #f1f1f1;
}
.top-aside-son>.item-last{
    border-bottom: none;
}
.item>.item-icon{
    float: left;
    margin: -25px 0 0 -36px;
    width: 30px;
    height: 30px;
    background: url("../../../static/img/ddy.png") no-repeat;
    position: absolute;
    top: 40px;
    left: 45px;
}
.item>.item-icon1{
    background-position: 0 0;
}
.item>.item-icon2{
    background-position: 0 -30px;
}
.item>.item-icon3{
    background-position: 0 -60px;
}
.item>.item-icon4{
    background-position: 0 -90px;
}
.item>.item-icon5{
    background-position: 0 -120px;
}
.item>.item-icon6{
    background-position: 0 -150px;
}
.item>h3{
    margin: 0 0 3px;
    height: 24px;
    font-weight: normal;
    font-size: 16px;
    color: #333;
    line-height: 24px;
}
.item>p>span{
    display: inline-block;
    margin-right: 8px;
    /* margin-top: 24px; */
    color: #666;
}
.jiantou{
    position: absolute;
    top: 25px;
    right: 6px;
    font-size: 20px;
    color: rgb(153, 152, 152);
}

.top-content{
    display: inline-block;
    width: 720px;
    height: 400px;
    /* margin: -15px 0px; */
    /* position: absolute;
    right: 228px; */
    /* border: 1px solid greenyellow; */
}
/* 品类导航 */
.slide-row{
    width: 1000px;
    height: 102px;
    margin-bottom: 50px;
    position: relative;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    /* border: 1px solid red; */
}
.slide-box {
    height: 102px;
    width: 998px;
    border-left: 1px solid #f1f1f1;
    border-right: 1px solid #f1f1f1;
}
.slide-nav{
    height: 100%;
}
.slide-nav>li{
    float: left;
    width: 124px;
    height: 100%;
    /* flex: 1; */
    margin-left: -1px;
    background-color: #fafafa;
    border-bottom: 2px solid;
    border-left: 1px solid #f1f1f1;
    /* border: 1px solid black; */
}
.slide-nav>li:hover{
    cursor: pointer;
    color: white;
}
.slide-nav>li>i{
    display: inline-block;
    margin: 25px 0 0;
    width: 35px;
    height: 35px;
    background: url("../../../static/img/local-nav-icon.png") no-repeat;
    overflow: hidden;
}
.slide-nav .slide-nav-item1{
    color: #f97a2c;
}
.slide-nav .slide-nav-item1:hover{
    background-color: #f97a2c; 
}
.slide-nav li>.icon1{
    background-position: 0 -35px;
}
.slide-nav li>.icon1:hover{
    background-position: -35px -35px;    
}
.slide-nav .slide-nav-item2{
    color: #21c9c3;
}
.slide-nav .slide-nav-item2:hover{
    background-color: #21c9c3; 
}
.slide-nav li>.icon2{
    background-position: 0 -105px;
}
.slide-nav li>.icon2:hover{
    background-position: -35px -105px;    
}
.slide-nav .slide-nav-item3{
    color: #41c3ff;
}
.slide-nav .slide-nav-item3:hover{
    background-color: #41c3ff; 
}
.slide-nav li>.icon3{
    background-position: 0 -315px;
}
.slide-nav li>.icon3:hover{
    background-position: -35px -315px;    
}
.slide-nav .slide-nav-item4{
    color: #f97a2c;
}
.slide-nav .slide-nav-item4:hover{
    background-color: #f97a2c; 
}
.slide-nav li>.icon4{
    background-position: 0 -140px;
}
.slide-nav li>.icon4:hover{
    background-position: -35px -140px;    
}
.slide-nav .slide-nav-item5{
    color: #2296f0;
}
.slide-nav .slide-nav-item5:hover{
    background-color: #2296f0; 
}
.slide-nav li>.icon5{
    background-position: 0 -420px;
}
.slide-nav li>.icon5:hover{
    background-position: -35px -420px;    
}
.slide-nav .slide-nav-item6{
    color: #ec5775;
}
.slide-nav .slide-nav-item6:hover{
    background-color: #ec5775; 
}
.slide-nav li>.icon6{
    background-position: 0 -210px;
}
.slide-nav li>.icon6:hover{
    background-position: -35px -210px;    
}
.slide-nav .slide-nav-item7{
    color: #e8552d;
}
.slide-nav .slide-nav-item7:hover{
    background-color: #e8552d; 
}
.slide-nav li>.icon7{
    background-position: 0 -175px;
}
.slide-nav li>.icon7:hover{
    background-position: -35px -175px;    
}
.slide-nav .slide-nav-item8{
    color: #6159ef;
    width: 129px;
}
.slide-nav .slide-nav-item8:hover{
    background-color: #6159ef; 
}
.slide-nav li>.icon8{
    background-position: 0 -280px;
}
.slide-nav li>.icon8:hover{
    background-position: -35px -280px;    
}
/* 正在热卖 */
.hotsale{
    width: 1000px;
    height: 564px;
    margin: 0 auto;
    margin-bottom: 50px;
    /* border: 1px solid #21c9c3; */
}
.hotsale-hd{
    height: 30px;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    line-height: 30px;
}
.hotsale-hd>h2{
    float: left;
    width: 170px;
    font-size: 24px;
    font-weight: normal;
    color: #333;
}
.hotsale-hd>span{
    display: inline-block;
    font-size: 16px;
    padding: 0 6px;
    border-radius: 2px;
    color: #333;
    margin-right: 10px;
}
.hotsale-hd>span:hover{
    background-color: #f97a2c;
    color: white;
    cursor: pointer;
}
.hotsale-hd .first1{
    color: white;
    background-color: #f97a2c;
}
.hotsale-cont{
    width: 1000px;
    height: 498px;
}
.hotsale-cont .hot-box{
    float: left;
    width: 234px;
    height: 234px;
    display: inline;
    margin: 0 15px 15px 0;
    /* border: 1px solid #c7c7c7; */
}
.hotsale-cont .hot-box>a{
    display: block;
    font-size: 14px;
    background-color: transparent;
    text-decoration: none;
    color: #ff9d00;
    cursor: pointer;
}
.hotsale-cont .hot-box a>.img{
    height: 134px;
    width: 238px;
    text-align: center;
    position: relative;
    left: -6px;
}
.hotsale-cont .hot-box a>.img1{
    background:url("../../../static/img/hot1.gif") no-repeat center center;
}
.hotsale-cont .hot-box a>.img2{
    background:url("../../../static/img/hot2.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.img3{
    background:url("../../../static/img/hot3.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.img4{
    background:url("../../../static/img/hot4.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.img5{
    background:url("../../../static/img/hot5.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.img6{
    background:url("../../../static/img/hot6.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.img7{
    background:url("../../../static/img/hot7.jpeg") no-repeat center center;
}
.hotsale-cont .hot-box a>.caption{
    width: 216px;
    height: 75px;
    border: 1px solid #f1f1f1;
    padding: 5px 10px 18px;
    margin-left: -6px;
    position: absolute;
    background-color: #fff;
    /* transition: height .2s ease-in-out .1s; */
    /* display: flex;             */
    /* align-items: flex-start;   */
    
}
.hotsale-cont .hot-box a>.caption:hover{
    cursor: pointer;
    background-color: #f1f1f1;
    /* height: 115px;
    transition: height 1s;   */
    /* transform: scaleY(2) */
    /* max-height: 115px; 
    transition: max-height 0.2s;  */
}
.hot-box a>.caption>h3{
    width: 216px;
    height: 40px;
    height: 40px;
    margin-bottom: 15px;
    font-weight: normal;
    color: #000;
    line-height: 21px;
    font-size: 14px;
    overflow: hidden;
}
.hot-box a>.caption>.price>b{
    font-size: 22px;
    margin-right: 5px;
}
.hot-box a>.caption>.yishou{
    margin-left: 70px; 
    font-size: 12px;
    color: #666;
}
.mod-recommend{
    width: 1000px;
    height: 670px;
    margin-bottom: 50px;
    /* border: 1px blue solid; */
}
.mod-recommend .mod-bd{
    width: 1000px;
    height: 604px;
    /* border: 1px salmon solid; */
}
.mod-bd>ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: -20px;
}
.mod-bd>ul>li{
    float: left;
    height: 280px;
    position: relative;
    margin-bottom: 22px;
    margin-right: 22px;
    /* border: 1px yellow solid; */
}
.mod-bd>ul>.mod-li1{
    width: 657px;   
}
.mod-bd>ul>.mod-li2{
    width: 310px;   
}
.mod-bd>ul>li img:hover{
    /* width: 100%; */
    cursor: pointer;
    /* transform: scale(1.2,1.2); */
}
.mod-bd>ul>li .hd{
    color: #fff;
    font-size: 30px;
    text-shadow: 1px 1px 2px rgba(0,0,0,.3);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -45px;
}
</style>

