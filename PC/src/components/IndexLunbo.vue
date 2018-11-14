<template>
  <div class="lunbo">
    <el-carousel :interval="5000" arrow="always" trigger="click" height="634px">
      <el-carousel-item v-for="(item,index) in imgurl" :key="index">
        <img :src="item.url" alt="">
        <div class="date">
          <span class="day">{{item.days}}</span><span>/Nov.2018</span>
        </div>
        <h3>{{item.words}}</h3>
      </el-carousel-item>
    </el-carousel>
    <index-search></index-search>  
  </div>
</template>
<script>
import IndexSearch from './IndexSearch.vue'
export default {
  name: 'IndexLunbo',
  components: {IndexSearch},
  data () {
    return {
      imgurl:[{
                url:'../../static/img/IndexLunbo1.jpg',
                days:14,
                words:"5k走出国门！铁路爱好者的中俄蒙铁路大回环"
              },
              {
                url:'../../static/img/IndexLunbo2.jpg',
                days:13,
                words:"迎面吹来南极的风，那些独行在塔州的小时光"
              },
              {
                url:'../../static/img/IndexLunbo3.jpg',
                days:12,
                words:"黔东南6日漫游，这里是大山深处的世外桃源"
              },
              {
                url:'../../static/img/IndexLunbo4.jpg',
                days:11,
                words:"一场惊动大使馆和公司老板的旅行，徒步纯小白暴走尼泊尔ACT"
              },
              {
                url:'../../static/img/IndexLunbo5.jpg',
                days:10,
                words:"与墨西哥有关的100个记忆（我的墨西哥彩色印象集）"
              }]
    }
  }
}
</script>
<style>
  .lunbo{
    position: relative;
  }
  .lunbo .el-carousel__indicators{
    position: absolute;
    list-style: none;
    left: 93%;
    top: 75px;
  }
  .lunbo .el-carousel__indicator{
    display: block;
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  .lunbo .el-carousel__button{
    background-image: url('../../static/img/IndexLunbo1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 62px;
    width: 110px;

  }
  .date{
    position: absolute;
    width: 180px;
    font-size: 24px;
    overflow: hidden;
    z-index: 10;
    color: #fff;
    top: 5%;
    left: 25%;
  }
  .day{
    font-size: 38px;
  }
  h3{
    font-size: 26px;
    color: #fff;
    position: absolute;
    z-index: 10;
    top: 12%;
    left: 25%;
    font-weight: normal;
  }
</style>