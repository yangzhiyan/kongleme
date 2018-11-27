<template>
	<div class="choose">
		<div class="choose-nav">
			<a href="javascript:void(0)" @mouseover="over(0)" @click="click(0)" :class="{hovera:navover[0].flag,cur:navover[0].cur}">全部</a>
			<a href="javascript:void(0)" @mouseover="over(1)" @click="click(1)" :class="{hovera:navover[1].flag,cur:navover[1].cur}">门票</a>
			<a href="javascript:void(0)" @mouseover="over(2)" @click="click(2)" :class="{hovera:navover[2].flag,cur:navover[2].cur}">一日游</a>
			<a href="javascript:void(0)" @mouseover="over(3)" @click="click(3)" :class="{hovera:navover[3].flag,cur:navover[3].cur}">多日游</a>
			<a href="javascript:void(0)" @mouseover="over(4)" @click="click(4)" :class="{hovera:navover[4].flag,cur:navover[4].cur}">私家定制团</a>
			<a href="javascript:void(0)" @mouseover="over(5)" @click="click(5)" :class="{hovera:navover[5].flag,cur:navover[5].cur}">当地体验</a>
			<a href="javascript:void(0)" @mouseover="over(6)" @click="click(6)" :class="{hovera:navover[6].flag,cur:navover[6].cur}">酒店套餐</a>
			<a href="javascript:void(0)" @mouseover="over(7)" @click="click(7)" :class="{hovera:navover[7].flag,cur:navover[7].cur}">演出展览</a>
			<a href="javascript:void(0)" @mouseover="over(8)" @click="click(8)" :class="{hovera:navover[8].flag,cur:navover[8].cur}">接送机/站</a>
			<a href="javascript:void(0)" @mouseover="over(9)" @click="click(9)" :class="{hovera:navover[9].flag,cur:navover[9].cur}">包车/拼车</a>
			<a href="javascript:void(0)" @mouseover="over(10)" @click="click(10)" :class="{hovera:navover[10].flag,cur:navover[10]}.cur">交通卡票</a>
			<a href="javascript:void(0)" @mouseover="over(11)" @click="click(11)" :class="{hovera:navover[11].flag,cur:navover[11]}.cur">租车</a>
			<div class="clear">
				
			</div>
		</div>
		<div class="choosebox">
			<div class="row">
				<span class="rowleft">服务类型：</span>
  				<el-checkbox-group v-model="checkList.fuwu" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="纯玩无购物"></el-checkbox>
    				<el-checkbox label="含接送"></el-checkbox>
    				<el-checkbox label="中文导游"></el-checkbox>
    				<el-checkbox label="其他"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row">
				<span class="rowleft">热门景点：</span>
  				<el-checkbox-group v-model="checkList.jingdian" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="室内"></el-checkbox>
    				<el-checkbox label="周边"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row">
				<span class="rowleft">热门线路：</span>
  				<el-checkbox-group v-model="checkList.xianlu" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="武侯祠+杜甫草堂+锦里+宽窄巷子"></el-checkbox>
    				<el-checkbox label="武侯祠+杜甫草堂+锦里+宽窄巷子+大熊猫基地"></el-checkbox>
    				<el-checkbox label="青城山+都江堰"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row">
				<span class="rowleft">游玩线路：</span>
  				<el-checkbox-group v-model="checkList.youwan" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="成都市区及周边"></el-checkbox>
    				<el-checkbox label="稻城亚丁"></el-checkbox>
    				<el-checkbox label="色达"></el-checkbox>
    				<el-checkbox label="九寨沟"></el-checkbox>
    				<el-checkbox label="成都+重庆"></el-checkbox>
    				<el-checkbox label="稻城亚丁+色达/四姑娘山"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row">
				<span class="rowleft">热门玩法：</span>
  				<el-checkbox-group v-model="checkList.wanfa" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="旅拍"></el-checkbox>
    				<el-checkbox label="温泉"></el-checkbox>
    				<el-checkbox label="其他"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear">
  					
  				</div>
			</div>
			<div class="row" v-show="flag">
				<span class="rowleft">热门演出：</span>
  				<el-checkbox-group v-model="checkList.yanchu" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="蜀风雅韵"></el-checkbox>
    				<el-checkbox label="芙蓉国粹"></el-checkbox>
    				<el-checkbox label="放水大典"></el-checkbox>
    				<el-checkbox label="其他"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row" v-show="flag">
				<span class="rowleft">用车线路：</span>
  				<el-checkbox-group v-model="checkList.car" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="稻城亚丁"></el-checkbox>
    				<el-checkbox label="九寨沟+黄龙"></el-checkbox>
    				<el-checkbox label="色达"></el-checkbox>
    				<el-checkbox label="四姑娘山"></el-checkbox>
    				<el-checkbox label="海螺沟"></el-checkbox>
    				<el-checkbox label="其他线路"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row" v-show="flag">
				<span class="rowleft">使用范围：</span>
  				<el-checkbox-group v-model="checkList.fanwei" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="大熊猫基地"></el-checkbox>
    				<el-checkbox label="峨眉山+乐山"></el-checkbox>
    				<el-checkbox label="青城山+都江堰"></el-checkbox>
    				<el-checkbox label="其他"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear"></div>
			</div>
			<div class="row" v-show="flag">
				<span class="rowleft">优惠类型：</span>
  				<el-checkbox-group v-model="checkList.youhui" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="APP立减"></el-checkbox>
    				<el-checkbox label="第N件减"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear">
  					
  				</div>
			</div>
			<div class="row" v-show="flag">
				<span class="rowleft">预定时限：</span>
  				<el-checkbox-group v-model="checkList.time" class="rowcheck" @change="change()">
    				<el-checkbox label="不限" checked></el-checkbox>
    				<el-checkbox label="可订今日"></el-checkbox>
    				<el-checkbox label="可订明日"></el-checkbox>
  				</el-checkbox-group>
  				<div class="clear">
  					
  				</div>
			</div>
		</div>
		<div class="checkmore" v-show="!flag">
			<a href="javascript:void(0)" title="" @click="detailcheck()"><span>显示更多选项<i></i></span></a>
		</div>
		<div class="checkless" v-show="flag">
			<a href="javascript:void(0)" title="" @click="detailcheck()"><span>收起<i></i></span></a>
		</div>
		<div class="row-select">
			<span>您已选择：</span>
			<div class="select-check">
				<el-tag v-for="(tag,index) in tags" :key="index" closable @close="close(index)">
  					{{tag.name}}
				</el-tag>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>
<script scoped>
	export default{
		name:'DetaiChoose',
		data(){
			return {
				tags:[],
				flag:false,
				checkList: {
					fuwu:[],
					jingdian:[],
					xianlu:[],
					youwan:[],
					wanfa:[],
					yanchu:[],
					car:[],
					fanwei:[],
					youhui:[],
					time:[]
				},
				navover:[{
					flag:false,
					cur:true
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				},{
					flag:false,
					cur:false
				}]
			}
		},
		methods:{
			over(index){
				for (var index1 in this.navover) {
					this.navover[index1].flag = false;
				}
				if(this.navover[index].cur == true){
					this.navover[index].flag = false;
				}else{
					this.navover[index].flag = true;
				}
			},
			click(index){
				for (var index1 in this.navover) {
					this.navover[index1].cur = false;
				}
				this.navover[index].cur = true;
			},
			change(){
				this.tags=[];
				for (var index1 in this.checkList) {
					for(var i=1;i<this.checkList[index1].length;i++){
						this.tags.push({name:this.checkList[index1][i]});
					}
				}
			},
			detailcheck(){
				this.flag = !this.flag;
			},
			close(index){
				this.tags.splice(index,1);
			}
		}
	}
</script>
<style>
	.clear {
		clear: both;
	}
	a{
		text-decoration: none;
	}
	.choose .choose-nav a{
		margin-top: -1px;
    	height: 39px;
    	float: left;
    	padding: 3px 10px 0;
    	color: #333;
	}
	.choose .choose-nav{
		border-bottom: 1px solid #e5e5e5;
   		background-color: #f4f4f4;
    	line-height: 39px;
    	font-size: 14px;
	}
	.choose .hovera{
		text-decoration: underline;
	}
	.choose .cur {
		padding: 0 10px;
    	border-top: 3px solid #ff9d00;
    	font-weight: bold;
    	background-color: #fff;
    	font-size: 16px;
	}
	.choose .choosebox{
		padding: 0 12px;
	}
	.choose .row {
		padding: 8px 0 8px 80px;
    	line-height: 24px;
    	border-bottom: 1px solid #e5e5e5;
	}
	.choose .rowleft{
		float: left;
		margin-left: -80px;
	}
	.choose .rowcheck{
		float: left;
		width: 850px;
	}
	.choose .choosebox .el-checkbox__label{
		color: #333!important;
	}
	.choose .choosebox .el-checkbox__input.is-checked .el-checkbox__inner{
		background-color: #ff9d00;
		border-color: #ff9d00;
	}
	.choose .checkmore,.checkless {
		text-align: center;
		margin-top: -1px;
	}
	.choose .checkmore a,.checkless a{
		width: 100%;
		height: 100%;
		display: block;
    	border-top: 1px solid #e5e5e5;
    	position: relative;
    	color: #666;
    	line-height: 18px;
	}
	.choose .checkmore a span,.checkless a span{
		color: #ff9d00;
    	text-decoration: none;
    	display: inline-block;
    	line-height: 30px;
    	padding: 0 35px 0 15px;
    	position: relative;
	}
	.choose .checkmore a span i ,.checkless a span i{
		background-image: url('../../../static/img/detail.png');
		display: inline-block;
		background-repeat: no-repeat;
		position: absolute;
		background-position: 0 -45px;
		width: 11px;
		height: 10px;
		top: 10px;
		right: 15px;
	}
	.choose .row-select{
		margin: 0 12px 12px;
    	padding-left: 80px;
    	line-height: 24px;
	}
	.choose .row-select>span{
		float: left;
    	margin-left: -80px;
    	display: inline;
	}
	.choose .select-check{
		float: left;
	}
</style>