<template>
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="baokuan">
        <h2>爆款热卖</h2>
        <a href="#" v-for="item in msg" :key="item.id">
            <div class="bkcard" >
                <img :src=item.imgsrc alt="">
                <div class="text">
                    <h3>{{item.title}}</h3>
                    <div>
                    <span>￥<strong>{{item.price}}</strong>起</span>   
                    </div>
                </div>
            </div>
        </a> 
    </div>
  </el-col>
</el-row>
  
</template>

<script>
    export default {
      name:"Baokuan",
      data: () => ({
        msg:[
            // {
            //     id:"01",
            //     imgsrc:"https://p4-q.mafengwo.net/s10/M00/8D/73/wKgBZ1npqdSAQ1gVAA6nIJkTtQg676.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90",
            //     title:"[北京送签]新加坡旅游电子签证（上市公司品质保证+无条件拒签全退+赠送保险+限时免费照片打印+快速出签+使馆指定旅行社）",
            //     price:"299"
            // },
            // {
            //     id:"02",
            //     imgsrc:"https://p4-q.mafengwo.net/s11/M00/2C/A1/wKgBEFtz0XyAbKYlABwN2RVDRGk020.gif?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90",
            //     title:"[广州送签]日本单次旅游签证(限时买2送3日本WIFI+拒签全退+简化资料+可加急5工+迟1天出签赔100元)",
            //     price:"199"
            // },
            // {
            //     id:"03",
            //     imgsrc:"https://n4-q.mafengwo.net/s10/M00/52/E0/wKgBZ1kw1dqAfil6ABFhmn6JmxQ69.jpeg?imageMogr2%2Fthumbnail%2F%21440x270r%2Fgravity%2FCenter%2Fcrop%2F%21440x270%2Fquality%2F90",
            //     title:"英国伦敦 比斯特购物村Bicester Village扫货一日游（中文导游+购物狂欢+参团即赠9折卡+奢华大巴）",
            //     price:"69"
            // }

        ]
      }),


    mounted:function(){
      let _this = this;
      _this.ajax.get(
          'http://localhost:8888/test'
      ).
      then(function(res){
          console.log(res);
          _this.msg = res.data;
      });
    }
   }
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
 a {
     text-decoration: none;
     color: black;
 }
  .baokuan{
      width: 720px;
  }
  .baokuan h2 {
      font-weight: 100;
      font-size: 20px;
      padding: 0px 24px 14px;
      text-align: left;
  }
  .baokuan .bkcard {
      width: 220px;
      height: 330px;
      float: left;
      margin-left: 20px;
  }
  .baokuan .bkcard img {
      width: 100%;
  }
  .baokuan .bkcard h3 {
      height: 40px;
      color: rgb(68, 67, 67);
      background-color: #fff;
      overflow: hidden;
      font-size: 14px;
      font-weight: 100;
      position: relative;
      left:0px;
      top: 2px;
      z-index: 1000;
      line-height: 22px;
      text-align: left;
      padding: 10px 5px 5px;
  }

  .baokuan .bkcard:hover h3 {
    position: relative;
    top: -50px;
    height: 80px;
    color: #ff9d00;
    background-color: #F8F8F8;
  }
  .baokuan .bkcard:hover .text {
    background-color: #F8F8F8;
  }
  .text {
      position: relative;
  }
  .text div {
      position: absolute;
      top: 68px;
      right: 10px;
      color: #ff9d00;
  } 
</style>