<template>
	<div class="detail">
		<detai-choose></detai-choose>
		<div class="sales-content">
			<el-tabs type="border-card">
	  			<el-tab-pane label="综合排序">
	  				<div class="list-wrap">
	  					<a href="" title="" class="item" v-for="item in 4" :key="item">
	  						<div class="div-img">
	  							<img src="http://b1-q.mafengwo.net/s11/M00/A0/FA/wKgBEFtgFaaAYrgTABDBkYZI3B8883.gif?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100" alt="" height="150px" width="200px">
	  							<span class="mark-type">
	  								<strong>成都</strong>
	  								<span>门票</span>
	  							</span>
	  						</div>
	  						<div class="details">
	  							<div class="info">
	  								<p>月售1849</p>
	  								<h3>官方电子票 成都大熊猫基地门票 赠电子讲解/萌萌国宝(可购买蜀风雅韵 芙蓉国粹+熊猫联票)</h3>
	  								<div class="s-tag">
	  									<span>憨态可掬</span>
	  									<span>刷码入园</span>
	  									<span>国宝大熊猫</span>
	  									<span>特色变脸演出</span>
	  								</div>	
	  								<p>
	  									<span class="t">店铺: 四川春秋旅行</span>
	  								</p>
	  							</div>
	  							<div class="extra">
	  								<div class="action">
	  									<span class="btn">立即预定</span>
	  								</div>
	  								<span class="price">
	  									<b>￥</b>
	  									<strong>51</strong>
	  									<span>起</span>
	  								</span>
	  								<span class="promo-txt">
	  									<em>促销</em>
	  									<span>每1人减3</span>
	  								</span>
	  							</div>
	  						</div>
	  						<div class="clear"></div>
	  					</a>
	  					<div class="fenye">
							<div class="block1">
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="total">
								</el-pagination>
							</div>
						</div>
	  				</div>
	  			</el-tab-pane>
  			<el-tab-pane label="近期销量优先">近期销量优先</el-tab-pane>
  			<el-tab-pane label="价格">价格
			</el-tab-pane>
  			<el-tab-pane label="出发时间">出发时间</el-tab-pane>
		</el-tabs>
		</div>
		<div class="clear">
			
		</div>
	</div>

</template>
<script>
	import DetaiChoose from './DetaiChoose.vue'
	export default{
		data(){
			return {
				activeIndex: '1',
				listwrap:{

				},
				total:200,
				currentPage1:1
			}
		},
		name:'Detail',
		components:{
			DetaiChoose
		},
		methods:{
			handleCurrentChange(){
				console.log(66)
			},
			handleSizeChange(){
				
			}
		}
	}
</script>
<style>
	.clear {
		clear: both;
	}
	.detail {
		width: 1000px;
		margin: 0 auto;
	}
	.detail .el-tabs__content{
		padding: 0;
		width: 700px;
	}

	.sales-content {
    	width: 700px;
    	margin-bottom: 30px;
	}
	.list-wrap .item {
		display: block;
    	padding: 20px 0;
    	color: #666;
	}
	.list-wrap .div-img {
		float: left;
    	display: inline;
    	margin-right: 20px;
    	width: 200px;
    	height: 150px;
    	overflow: hidden;
    	position: relative;
	}
	.list-wrap .mark-type{
		    position: absolute;
    	left: 0;
    	top: 0;
    	padding: 1px;
    	line-height: 18px;
    	font-size: 12px;
    	background-color: #12bcc4;
   	 	color: #12bcc4
	}
	.list-wrap .mark-type strong {
		float: left;
    	padding: 0 10px;
    	color: #fff;
    	font-weight: normal
	}
	.list-wrap .mark-type span {
		float: left;
    	padding: 0 8px;
    	background-color: #fff;
	}
	.list-wrap .details{
		float: right;
    	width: 480px;
	}
	.list-wrap .info {
		height: 120px;
    	overflow: hidden
	}
	.list-wrap .details p {
		line-height: 16px;
	}
	.list-wrap h3{
		margin: 5px 0;
    	font-weight: bold;
    	font-size: 18px;
    	color: #333;
    	line-height: 24px;
    	max-height: 48px;
    	overflow: hidden;
	}
	.list-wrap .s-tag {
		margin-bottom: 5px;
	}
	.list-wrap .s-tag span {
		display: inline-block;
    	border: 1px solid;
    	color: #3aaeff;
    	line-height: 14px;
    	padding: 0 3px;
    	font-size: 12px;
	}
	.list-wrap .details p .t {
		margin-right: 20px;
		font-size: 12px;
	}
	.list-wrap .extra {
		height: 30px;
    	line-height: 30px;
	}
	.list-wrap .action {
		float: right;
    	width: 100px;
    	height: 30px;
    	position: relative;
	}
	.list-wrap .btn {
		display: inline-block;
    	width: 98px;
    	height: 28px;
    	border: 1px solid #ff9d00;
    	text-align: center;
    	font-size: 16px;
    	border-radius: 2px;
    	color: #ff9d00;
    	line-height: 28px;
	}
	.list-wrap .price {
		margin-right: 5px;
    	color: #ff9d00;
    	font-size: 14px;
	}
	.list-wrap .price b {
		font-size: 18px;
	}
	.list-wrap .price strong {
		font-size: 28px;
	}
	.list-wrap .promo-txt {
		font-size: 14px;
	}
	.list-wrap .promo-txt em {
		margin-right: 5px;
	    font-style: normal;
	    background-color: #ff4b37;
	    color: #fff;
	    line-height: 17px;
	    padding: 0 2px;
	}
</style>