<template>
<div class="leftlunbo">
  <el-row :gutter="10">
    <el-col :md="7">
      <div class="left-lunbo block">
        <div class="tit">
          <h2>旅行家专栏</h2>
          <span><a href="#">专栏首页</a></span>
        </div>
        <el-carousel height="260px">
          <el-carousel-item v-for="item in msg" :key="item.id">
            <img :src="item.imgsrc" />
            <div class="fontdiv">
              <p><a>{{item.title}}</a></p>
              <span>{{item.content}}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</div>

  
</template>

<script>
  export default {
    name:"Leftlunbo",
    data(){
      return {
        msg:[
          {
            id:"01",
            imgsrc:"https://n3-q.mafengwo.net/s12/M00/BE/E5/wKgED1vpDw2AFN5DAAGOmPCoPT482.jpeg",
            title:"北京天文馆",
            content:"我终于去了那个有着圆圆穹顶的老馆，当灯光全部黑下来的时候，整个穹顶完全就是一个夜空。"
          },
          {
            id:"02",
            imgsrc:"https://n1-q.mafengwo.net/s12/M00/FF/52/wKgED1vk_2iAGNTLAAGTojx-lDg38.jpeg",
            title:"小城莺歌",
            content:"小城北面山坡上有一颗如鹦巨石，被称为“莺歌石”，莺歌因它而得名。"
          },
          {
            id:"03",
            imgsrc:"https://p1-q.mafengwo.net/s12/M00/2A/99/wKgED1vj92qAd_o1AAEa3ki0lSs81.jpeg",
            title:"格鲁吉亚酒司令",
            content:"谢尔盖告诉我，站起来的这个人就是“酒司令”，格鲁吉亚语称为“Tamada”，一般由年长或职位高或能喝酒的男人担当。"
          },
          {
            id:"04",
            imgsrc:"https://n1-q.mafengwo.net/s12/M00/A4/60/wKgED1vgLOuAFs0eAADGMtxqhUA51.jpeg",
            title:"四谷怪谈",
            content:"这么一个平和的地方，说早一点，却因为一个叫做阿岩的女鬼闻名全国，这就是人们口口相传的《四谷怪谈》了。"
          },
          {
            id:"05",
            imgsrc:"https://p4-q.mafengwo.net/s12/M00/A0/BC/wKgED1vqMeqAJ5HeAAETxEMRX0E63.jpeg",
            title:"远东飘散家之味",
            content:"没错，如今这个城市所在的地方，自从清朝以来就被中国称为海参崴，直到1860年《中俄北京条约》的签订。"
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .leftlunbo a{
    color: rgb(100, 98, 98);
    text-decoration: none;
  }
  .leftlunbo .tit {
    text-align: left;
  }
  .leftlunbo .tit h2 {
    display: inline-block;
    font-size: 18px;
    font-weight: 100;
    color: #333;
    padding: 0px 5px 14px;
  }
  .leftlunbo .tit a {
    color: rgb(100, 98, 98);
    text-decoration: underline;
    font-size: 14px;
    display: inline-block;
    position: relative;
    left: 100px;

  }
  .leftlunbo .left-lunbo {
    width: 260px;
  }
  .leftlunbo .left-lunbo .el-carousel__button {
    width: 15px;
    height: 8px;
    border-radius: 4px;
  }
  .leftlunbo .left-lunbo .el-carousel__indicators {
    position: relative;
    top: -150px;
    left: 270px;
  }
  .leftlunbo .left-lunbo .fontdiv {
    text-align: left;
  }
  .leftlunbo .left-lunbo .fontdiv p {
    font-size: 16px;
    font-weight: 100;
    padding: 6px 0px;
    text-align: left;
  }
  .leftlunbo .left-lunbo .fontdiv p a {
    color: black;
  }
  .leftlunbo .left-lunbo .fontdiv p a:hover {
    text-decoration: underline;
  }
  .leftlunbo .left-lunbo .fontdiv span {
    height: 60px;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
    color: rgb(68, 67, 67);
  }
</style>