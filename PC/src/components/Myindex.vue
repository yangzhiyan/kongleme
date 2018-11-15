<template>

	<div class="strategy">
		<el-row :gutter="10">
			<el-col :md="7" class="state_left">
				<div class="grid-content bg-purple-light">
						<h3 class="hd-title">旅游攻略推荐</h3>
						<a href="" class="hd-right">更多</a>
					</div>
					<div class="tui">
						<div class="state_img">
							<img src="https://b1-q.mafengwo.net/s9/M00/26/F6/wKgBs1g-l0GAX2DFAAHb9eOlKn407.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100" alt="">
							<span class="mark">自由行攻略</span>
						</div>
					</div>
					<div class="ping">
						<ul>
							<li>
								<a href="">蚂蜂窝用 点评了&nbsp; </a>胡志明市的
								<a href="">艾瑞斯酒店 I</a>
							</li>
							<li>
								<a href="">蚂蜂窝用 点评了&nbsp; </a>胡志明市的
								<a href="">艾瑞斯酒店 I</a>
							</li>
							<li>
								<a href="">蚂蜂窝用 点评了&nbsp; </a>胡志明市的
								<a href="">艾瑞斯酒店 I</a>
							</li>
							<li>
								<a href="">蚂蜂窝用 点评了&nbsp; </a>胡志明市的
								<a href="">艾瑞斯酒店 I</a>
							</li>

							<li>
								<a href="">蚂蜂窝用 点评了&nbsp; </a>胡志明市的
								<a href="">艾瑞斯酒店 I</a>
							</li>
						</ul>
					</div>

					<div class="hd-box">
						<h3 class="hd-title">
							未知旅行实验室
						</h3>
						<a href="" class="hd-right">查看更多</a>
					</div>
					<div class="clear"></div>
					<div class="block">
						<el-carousel height="228px">
							<el-carousel-item v-for="item in msg" :key="item.id">
								<img :src="item.imgsrc" />
								<div class="fontdiv">
									<p>
										<a>{{item.title}}</a>
									</p>
									<span>{{item.content}}</span>
								</div>
							</el-carousel-item>
						</el-carousel>

						<div class="hd-box">
							<h3 class="hd-title">最新活动</h3>
							<a href="" class="hd-right">更多</a>
						</div>
						<div class="state_img">
							<img src="https://b1-q.mafengwo.net/s9/M00/26/F6/wKgBs1g-l0GAX2DFAAHb9eOlKn407.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100" alt="">
							<span class="mark">自由行攻略</span>
						</div>
					</div>
			</el-col>

			<el-col :md="17" class="state_right">
				<el-row class="border">
					<el-col :md="7">
					<div class="grid-content bg-purple">
						<div class="hot">热门游记
							<el-button type="warning" plain>筛选</el-button>
						</div>
					</div>

				</el-col>

				<el-col :md="11">
					<div class="grid-content bg-purple">
						<a href=""> 最新发表</a>
					</div>

				</el-col>
				<el-col :md="6" >
					<div class="grid-content write">
						<el-button type="warning">写游记</el-button>
					</div>
				</el-col>
				</el-row>
				
				<el-col :md="24" >
					<div class="grid-content" v-for="(item ,index) in arr1 " :key="index">
						<div class="stra_img">
							<img :src="item.url" alt="">
						</div>

						<div class="stra_cont">
							<div>
								<p class="cont_tit">
									<a href="" target="_blank">{{item.title}}</a>
								</p>
								<p>
									<a href="" target="_blank">{{item.content}}</a>
								</p>
							</div>
							<div class="stra_xiao">
								<span class="el-icon-location">{{item.location}}，by</span>
								<span><img src="item.user_url" alt=""></span>
								<span><a href="">{{item.user_name}}</a></span>

								<span class="el-icon-view">{{item.contnum}}</span>
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
      }
    },
		data() {
			return {
				title: [{
						tit: "旅游攻略推荐",
						qita: "更多"
					},
					{
						tit: "旅游攻略推荐",
						qita: "更多"
					},
				],
				arr1: [{
						url: "http://p1-q.mafengwo.net/s12/M00/99/B6/wKgED1vlgj6ASjH2AAityZ1Bmso32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						location: "南疆",
						user_url: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						user_name: "记得要微笑",
						contnum: "222/79"
					},
					{
						url: "http://b2-q.mafengwo.net/s12/M00/1C/88/wKgED1vlHN6AUeW3ABlgI8_UXco46.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						location: "南疆",
						user_url: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						user_name: "记得要微笑",
						contnum: "222/36"
					},
					{
						url: "http://p1-q.mafengwo.net/s12/M00/99/B6/wKgED1vlgj6ASjH2AAityZ1Bmso32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						location: "南疆",
						user_url: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						user_name: "记得要微笑",
						contnum: "222/26"
					},
				],
				msg: [{
						id: "01",
						imgsrc: "https://n3-q.mafengwo.net/s12/M00/BE/E5/wKgED1vpDw2AFN5DAAGOmPCoPT482.jpeg",
						title: "北京天文馆",
						content: "我终于去了那个有着圆圆穹顶的老馆，当灯光全部黑下来的时候，整个穹顶完全就是一个夜空。"
					},
					{
						id: "02",
						imgsrc: "https://n1-q.mafengwo.net/s12/M00/FF/52/wKgED1vk_2iAGNTLAAGTojx-lDg38.jpeg",
						title: "小城莺歌",
						content: "小城北面山坡上有一颗如鹦巨石，被称为“莺歌石”，莺歌因它而得名。"
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
		padding: 0px;
		margin: 0px;
	}
	
	.clear {
		clear: both;
	}
	
	.strategy {
		width: 1000px;
		margin: 0px auto 0px;
	}
	.strategy .state_left,.strategy .state_right {
		margin-top: -60px;
	}
	.strategy .tui {
		margin-top: 30px;
	}
	
	.hd-box {
		height: 40px;
	}
	
	.grid-content {
		float: left;
	}
	
	.hd-title {
		display: inline-block;
		float: left;
	}
	
	.hd-right {
		float: right;
		color: #999;
		font-size: 12px;
		margin-top: 5px;
		margin-right: 10px;
	}
	.write{
		float: right;
	}
	.mark {
		position: absolute;
		top: 57px;
		left: 8px;
		padding: 0 6px;
		color: #fff;
		line-height: 24px;
		background-color: #ff6262;
		font-size: 12px;
	}
	
	.hot {
		border-bottom: 3px solid #ff9d00;
		height: 45px;
		margin-bottom: 5px;
	}
	
	.tn-img {
		float: left;
	}
	
	.tn-right {
		float: left;
	}
	
	.stra_cont {
		float: right;
		width: 425px;
		height: 150px;
		text-align: left;
		margin-left: 20px;
		margin-bottom: 30px;
		font-size: 12px;
	}
	
	.stra_cont a {
		text-decoration: none;
		text-align: left;
		color: #333;
	}
	
	.stra_img {
		float: left;
		width: 220px;
		height: 150px;
	}
	
	.stra_xiao {
		font-size: 12px;
		color: #333;
	}
	
	.cont_tit {
		font-size: 14px;
		list-style: none;
	}
	/* /点评/ */
	
	.ping {
		text-align: left;
		font-size: 14px;
		color: #333;
		margin: 30px 0px;
		height: 110px;
	}
	ping li{
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
		top: -152px;
		left: 187px;
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