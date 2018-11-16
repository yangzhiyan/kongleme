<template>

	<div class="strategy">
			<el-row :gutter="10">
				<el-col :md="7" class="state_left">
					<div class="grid-content bg-purple-light">
						<div class="hd-box">
							<span id="hd-title">旅游攻略推荐</span>
							<a href="" class="hd-right">更多></a>
						</div>
						<div class="clear">
							
						</div>
						<div class="tui">
							<div class="state_img">
								<img src="https://b1-q.mafengwo.net/s9/M00/26/F6/wKgBs1g-l0GAX2DFAAHb9eOlKn407.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100" alt="">
								<span class="mark">自由行攻略</span>
							</div>
						</div>
						<div class="ping">
							<ul class="pingcon">
								<li>
									<a href="" class="pinname" >李志兰  </a>点评了&nbsp;胡志明市的
									<a href="" class="pincont">艾瑞斯酒店 I</a>
								</li>
								<li>
									<a href="" class="pinname">Kelly </a>点评了&nbsp; 胡志明市的
									<a href="" class="pincont">乡村小故事</a>
								</li>
								<li>
									<a href="" class="pinname">石妙春</a>点评了&nbsp; 胡志明市的
									<a href="" class="pincont">艾瑞斯酒店 I</a>
								</li>
								<li>
									<a href="" class="pinname">小崽崽</a>点评了&nbsp; 胡志明市的
									<a href="" class="pincont">路途之美景</a>
								</li>


							</ul>
						</div>

						<div class="hd-box">
							<span class="hd-title">
								未知旅行实验室
							</span>
							<a href="" class="hd-right">查看更多></a>
						</div>
						<div class="clear"></div>
						<div class="block">
							<el-carousel height="228px">
								<el-carousel-item v-for="item in msg" :key="item.id">
									<img :src="item.imgsrc" />
									<div class="fontdiv">
										<p>
											<a >{{item.title}}</a>
										</p>
										<span>{{item.content}}</span>
										
									</div>
								</el-carousel-item>
							</el-carousel>

							<div class="hd-box">
								<span class="hd-title">最新活动</span>
								<a href="" class="hd-right">更多></a>
							</div>
							<div class="state_img">
								<img src="https://b1-q.mafengwo.net/s9/M00/26/F6/wKgBs1g-l0GAX2DFAAHb9eOlKn407.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100" alt="">
								<span class="mark">自由行攻略</span>
							
							</div>
						</div>

					</div>
				</el-col>

				<el-col :md="17" class="state_right">
					<el-row class="border">
						<el-col :md="7">
						<div class="grid-content bg-purple">
							<div class="hot">热门游记&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<el-button type="warning" plain>筛选</el-button>
							</div>
						</div>

					</el-col>

					<el-col :md="11">
						<div class="grid-content bg-purple">
							<a href="" class="announce"> 最新发表</a>
						</div>

					</el-col>
					<el-col :md="6" >
						<div class="grid-content write">
							<el-button type="warning">写游记</el-button>
						</div>
					</el-col>
					</el-row>
					
					<el-col :md="24" >
						<div class="grid-content strategybox" v-for="(item ,index) in arr1 " :key="index">
							<div class="stra_img">
								<img :src="item.url" alt="">
							</div>

							<div class="stra_cont">
								<div>
									<p class="cont_tit">
										<a href="" target="_blank">{{item.title}}</a>
									</p>
									<p>
										<a href="" target="_blank" class="content">{{item.content}}</a>
									</p>
								</div>
								<div class="stra_xiao">
									<span class="el-icon-location">{{item.city}}，by&nbsp;</span>
									<img :src="item.head_img" alt="">
									<span><a href="">{{item.username}}</a></span>

									<span class="el-icon-view">{{item.watchnums}}</span>
										<span class="zan">赞:&nbsp;{{item.top_num}}</span>
								</div>
							</div>
							
						</div>
						<div class="fenye">
							<div class="block1">
							
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
								</el-pagination>
							</div>
					</div>
					</el-col>

					
				</el-col>

			</el-row>


	</div>
</template>

<script>
	export default {
		 methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
   
    
    },
      mounted(){
      	var _this = this;
      	this.ajax.get('http://localhost:8888/test')
					.then(function(response) {
						console.log(response);
						_this.arr1 = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
      },
		data() {
			return {
				arr1: [/*{
						url: "http://p1-q.mafengwo.net/s12/M00/99/B6/wKgED1vlgj6ASjH2AAityZ1Bmso32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						city: "南疆",
						head_img: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						username: "记得要微笑",
						watchnums: "222/79",
						top_num:"45"
					},
					{
						url: "http://b2-q.mafengwo.net/s12/M00/1C/88/wKgED1vlHN6AUeW3ABlgI8_UXco46.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						city: "南疆",
						head_img: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						username: "记得要微笑",
						watchnums: "222/36",
						top_num:"45"
					},
					{
						url: "http://p1-q.mafengwo.net/s12/M00/99/B6/wKgED1vlgj6ASjH2AAityZ1Bmso32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						city: "南疆",
						head_img: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						username: "记得要微笑",
						watchnums: "222/26",
						top_num:"45"
					},*/
				],
				msg: [{
						id: "01",
						imgsrc: "https://b1-q.mafengwo.net/s12/M00/10/F2/wKgED1vs82GAIP2QAAEjIAZ-_w412.jpeg",
						title: "漫长的北非下午茶",
						content: "这顿下午茶从5点一直喝到了晚上8点。瓦尔格拉的下午绝对比北京的要长。"
					},
					{
						id: "02",
						imgsrc: "https://p4-q.mafengwo.net/s12/M00/37/7E/wKgED1vr2JmAWooxAAEb1neAnp861.jpeg",
						title: "爱沙尼亚森林历险记",
						content: "在现代城市中生活久了，人变得只想索取好的部分。走进森林，见日出的美，见森林的危险，这才是完整的森林之歌吧。。"
					},
					{
						id: "03",
						imgsrc: "https://p1-q.mafengwo.net/s12/M00/2A/99/wKgED1vj92qAd_o1AAEa3ki0lSs81.jpeg",
						title: "格鲁吉亚酒司令",
						content: "谢尔盖告诉我，站起来的这个人就是“酒司令”，格鲁吉亚语称为“Tamada”，一般由年长或职位高或能喝酒的男人担当。"
					},
					{
						id: "04",
						imgsrc: "https://n1-q.mafengwo.net/s12/M00/A4/60/wKgED1vgLOuAFs0eAADGMtxqhUA51.jpeg",
						title: "四谷怪谈",
						content: "这么一个平和的地方，说早一点，却因为一个叫做阿岩的女鬼闻名全国，这就是人们口口相传的《四谷怪谈》了。"
					},
					{
						id: "05",
						imgsrc: "https://p4-q.mafengwo.net/s12/M00/A0/BC/wKgED1vqMeqAJ5HeAAETxEMRX0E63.jpeg",
						title: "远东飘散家之味",
						content: "没错，如今这个城市所在的地方，自从清朝以来就被中国称为海参崴，直到1860年《中俄北京条约》的签订。"
					}
				],
				 currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4

			};
		}
	};
</script>

<style>
	* {
		list-style-type: none;
		text-decoration: none;
		padding: 0px;
		margin: 0px;
	}
	
	.clear {
		clear: both;
	}
	
	.strategy {
		width: 1000px;
		margin: auto;
		position: relative;
	}
	.strategy .state_left,.strategy .state_right {
		margin-top: -50px;
	}
	.strategy .tui {
		margin-top: 30px;
	}
	
	.strategy  .hd-box {
		width: 263px;
		height: 45px;
		line-height: 45px;
	}

	
	.strategy .hd-box #hd-title{
		display: inline-block;
		text-align: left;
		float: left;
		color: #333;
		font-size: 16px;
		font-weight: 600;
		
		
	}
	
	.strategy .hd-right {
		float: right;
		color: #999;
		font-size: 14px;
		margin-top: 5px;
		margin-right: 10px;
	}
	.strategy .write{
		float: right;
		height: 45px;
		line-height: 45px;
	}
	.strategy .mark {
		position: absolute;
		top: 87px;
		left: 8px;
		padding: 0 6px;
		color: #fff;
		line-height: 24px;
		background-color: #ff6262;
		font-size: 12px;
	}
	/*热门*/
	.strategy .hot {
		border-bottom: 3px solid #ff9d00;
		height: 45px;
		width: 180px;
		line-height: 45px;
		margin-bottom: 5px;
		font-size: 18px;

	}
	/*发表*/
	.strategy .announce{
		display:inline-block;
		width: 100px;
		line-height: 45px;
		text-decoration: none;
		color: #333;
		font-size: 18px;
	}
	.strategy .announce:hover{
		color:#FF9D00;
	}
	.strategy .strategybox{
		margin-top: 10px;
	}

	.strategy .stra_cont {
		float: right;
		width: 425px;
		height: 150px;
		text-align: left;
		margin-left: 20px;
		margin-bottom: 28px;
		font-size: 14px;
	}
	
	.strategy .stra_cont .content {
		display: inline-block;
		text-decoration: none;
		text-align: left;
		color: #333;
		width: 435px;
		height: 80px;
		font-size: 14px;
		margin-top: 10px;
	}
	
	.strategy .stra_img img{
		float: left;
		width: 220px;
		height: 150px;
		margin-bottom: 28px;
	}
	
	.strategy .stra_xiao {
		font-size: 12px;
		color: #333;
	}
	.strategy .stra_xiao span{
		display: inline-block;
		width: 90px;
		height: 40px;
		line-height: 45px;
	}
	.strategy .cont_tit {
		font-size: 18px;
		list-style: none;
	}
	.strategy .cont_tit a:hover {
		color: #ff9d00;
	}
	
	/* /点评/ */
	
	.strategy .ping {
		text-align: left;
		font-size: 14px;
		color: #333;
		margin: 30px 0px;
		height: 110px;
	
	}
	.strategy .ping	.pinname,.pincont{
		color: #FF9D00;
		font-size: 16px;
	}
	.strategy .ping	.pinname:hover,.pincont:hover{
		text-decoration: underline;
	}
	.strategy .ping li {
	display: inline-block;
	width: 260px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   
	}
	/* /轮播/  */
	
	.block {
		width: 260px;
	}
	
	.el-carousel__button {
		width: 15px;
		height: 8px;
		border-radius: 4px;
	}
	
	.el-carousel__indicators {
		position: relative;
		top: -120px;
		left: 270px;
	}
	
	.fontdiv {
		text-align: left;
	}
	
	.fontdiv p {
		font-size: 16px;
		font-weight: 100;
		position: relative;
		top: 0px;
		color: black;
		text-align: left;
	}
	
	.fontdiv span {
		height: 60px;
		line-height: 20px;
		font-size: 14px;
		overflow: hidden;
		position: relative;
		top: 0px;
	}
	.block1{
		float: right;
	}
</style>