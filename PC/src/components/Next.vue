<template>
	<div class="localall">
		<!--导航-->
		<div class="local">

			<el-row :gutter="10">
				<el-col :md="7" class="local_left">
					<div class="localbox">
						<div class="local_item">
							<span class="local_itemleft">海外冬季目的地精选</span>
							<span class="el-icon-arrow-right"></span>
						</div>
						<div class="local_item">
							<span class="local_itemleft">国内冬季目的地推荐</span>
							<span class="el-icon-arrow-right"></span>
						</div>
						<div class="local_item">
							<span class="local_itemleft">奔向海岛</span>
							<span class="el-icon-arrow-right"></span>
						</div>
						<div class="local_item">
							<span class="local_itemleft">主题推荐</span>
							<span class="el-icon-arrow-right"></span>
						</div>
						<div class="local_input">
							<el-input placeholder="请输入想去的地方，如：成都" prefix-icon="el-icon-search" v-model="input21">
							</el-input>
						</div>
						<div class="local_img">
							<img src="../../static/img/icon.jpg" />
							<a href="">立即注册</a>
						</div>
						<div class="local_ibox">
							<ul>
								<li v-for="(item ,index) in cont1" :key="index">
									<p class="content">
										<b>{{item.content_num}}</b>
										<a href="">{{item.content_local}}</a>
										<span class="cont3">
											{{item.content_cont}}
										</span>
									</p>

								</li>

							</ul>
						</div>
					</div>
				</el-col>

				<el-col :md="17">
					<div class="localbo">
						<div class="block">

							<el-carousel height="340px"> 
								<el-carousel-item v-for="item in lunbo" :key="item">
									<img :src="item" />
								</el-carousel-item>
							</el-carousel>
						</div>
					</div>
				</el-col>

			</el-row>
		</div>
		<div class="localdown">
			<el-row :gutter="10">
				<el-col :md="5">
					<div class="down_left">
						<h3>旅游攻略导航</h3></div>
					<div class="downoption">
						<div class="downoption1">
							<el-select v-model="value" placeholder="国内" style="display: inline;">
								<el-option style="display: inline;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="downoption2">
							<el-select v-model="value" placeholder="国外" style="display: inline;">
								<el-option style="display: inline;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
						<div class="downoption3">
							<el-select v-model="value" placeholder="主题">
								<el-option style="display: inline;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>

						</div>
						<div class="downimg">
							<a href="/gonglve/mdd-10045.html" title="婺源" target="_blank">
								<img src="http://n4-q.mafengwo.net/s9/M00/9F/8D/wKgBs1bYF7qAWc7mAATom0f7cX859.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90" alt="婺源">
							</a>
							<p class="time">&nbsp;更新日期:2018-11-03</p>
							<div class="">
								<span class="el-icon-download download">
                            		1649956人下载
                            	</span>

							</div>
						</div>
						<div class="downul">
							<div class="local_ibox">
								<ul>
									<li v-for="(item ,index) in cont1" :key="index">
										<p class="content" style="width: 100px;height: 60px;line-height: 60px;">
											<b style="color: #FF9D00;font-size: 14px;">{{item.content_num}}</b>
											<a href="" style="font-size: 16px;color: #333;">{{item.content_local}}</a>

										</p>

									</li>

								</ul>
							</div>
						</div>

					</div>
				</el-col>
				<el-col :md="19">
					<div class="down_right"><strong>推荐攻略</strong></div>
					<div class="rightbox">
						<div class="">
							<span class="type"><i class="el-icon-info"></i>来自 <strong>自由行攻略</strong></span>
						</div>

						<div class="right_tit1">
							欧洲5家廉航大测评+特价机票抢购避雷Tips
							<span class="stat"><span class="num">0</span> 浪浪体验过<i class="icon-cart"></i></span>
						</div>
						<div class="info">欧盟EMTM旅游管理硕士项目在读学生，专业角度解读欧盟航空法理赔细则，全网最准确最易懂的中文退改签赔付流程图！更多旅游资讯请关注微博@Candy__凯迪 微信公众号凯迪de心情日记</div>
						<div class="right_img">
							<img src="http://p3-q.mafengwo.net/s11/M00/1E/6D/wKgBEFsNNP6AAG9qAADVVbEwtV852.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<img src="http://n3-q.mafengwo.net/s11/M00/1D/CA/wKgBEFsNNLuAQyu0AAC3NayzAUY87.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<img src="http://p4-q.mafengwo.net/s11/M00/1D/CA/wKgBEFsNNLyAVGkfAAB6_P9QsHA382.png?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<span class="rightkan">
								1270 &nbsp;浏览
								
							</span>

						</div>
					</div>

					<div class="rightbox">
						<div class="">
							<span class="type"><i class="el-icon-info"></i>来自 <strong>游记</strong></span>
						</div>

						<div class="right_tit1">
							关西旅行超强攻略——含交通卡推荐、京都町屋推荐
							<span class="stat"><span class="num">7</span> 浪浪体验过<i class="icon-cart"></i></span>
						</div>
						<div class="info">关西是很多人选择日本游玩的第一站，这里是日本传统文化最浓厚的地区，有古老的寺庙、惊艳的艺伎，欲罢不能的美食。如果能够入住传统的京都町屋，就仿佛穿越到了唐朝，体验感更强！</div>
						<div class="right_img">
							<img src="http://n1-q.mafengwo.net/s11/M00/A0/1F/wKgBEFqlBkCAbx7VAAXbtH5Zf6463.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<img src="http://b3-q.mafengwo.net/s11/M00/8B/E6/wKgBEFqk7bOAclkxAAjz6k78YP4138.png?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<img src="http://b3-q.mafengwo.net/s11/M00/8D/B8/wKgBEFqk79iAOy_LAAVf3csJD4o796.png?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							<span class="rightkan">
								156 &nbsp;浏览
								
							</span>

						</div>
					</div>

					<div class="rightbox">
						<div class="">
							<span class="type"><i class="el-icon-info"></i>来自 <strong>游记</strong></span>
						</div>

						<div class="right_tit1">
							关西旅行超强攻略——含交通卡推荐、京都町屋推荐
							<span class="stat"><span class="num">7</span> 浪浪体验过<i class="icon-cart"></i></span>
						</div>

						<div class="right_img" >
							<div class="tupian">
								<img src="http://n1-q.mafengwo.net/s11/M00/A0/1F/wKgBEFqlBkCAbx7VAAXbtH5Zf6463.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							</div>

							<div class="neirong">
								关西是很多人选择日本游玩的第一站，这里是日本传统文化最浓厚的地区，有古老的寺庙、惊艳的艺伎，欲罢不能的美食。如果能够入住传统的京都町屋，就仿佛穿越到了唐朝，体验感更强！

							</div>

							<div class="xiao" style="float: right;">
								<img src="http://b4-q.mafengwo.net/s1/M00/04/AA/wKgBm02UbTfOVxQBAAAqkDaeldw99.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90">

								<span class="tou">失心疯 &nbsp;16902浏览，246评论</span>

							</div>

						</div>
					</div>
					
					<div class="rightbox">
						<div class="">
							<span class="type"><i class="el-icon-info"></i>来自 <strong>游记</strong></span>
						</div>

						<div class="right_tit1">
							关西旅行超强攻略——含交通卡推荐、京都町屋推荐
							<span class="stat"><span class="num">7</span> 浪浪体验过<i class="icon-cart"></i></span>
						</div>

						<div class="right_img" >
							<div class="tupian">
								<img src="http://n1-q.mafengwo.net/s11/M00/A0/1F/wKgBEFqlBkCAbx7VAAXbtH5Zf6463.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
							</div>

							<div class="neirong">
								关西是很多人选择日本游玩的第一站，这里是日本传统文化最浓厚的地区，有古老的寺庙、惊艳的艺伎，欲罢不能的美食。如果能够入住传统的京都町屋，就仿佛穿越到了唐朝，体验感更强！

							</div>

							<div class="xiao" style="float: right;">
								<img src="http://b4-q.mafengwo.net/s1/M00/04/AA/wKgBm02UbTfOVxQBAAAqkDaeldw99.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90">

								<span class="tou">失心疯 &nbsp;16902浏览，246评论</span>

							</div>

						</div>
					</div>

				</el-col>

			</el-row>

		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'Next',
		mounted() {　　},
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
						top_num: "45"
					},
					{
						url: "http://b2-q.mafengwo.net/s12/M00/1C/88/wKgED1vlHN6AUeW3ABlgI8_UXco46.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						city: "南疆",
						head_img: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						username: "记得要微笑",
						watchnums: "222/36",
						top_num: "45"
					},
					{
						url: "http://p1-q.mafengwo.net/s12/M00/99/B6/wKgED1vlgj6ASjH2AAityZ1Bmso32.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90",
						title: "带着爸妈去旅行~日本游记",
						content: "“ 南疆 之旅，其实就是一场从 天山 山脉奔向 昆仑山 脉，穿越茫茫草原、戈壁沙漠、雪山河谷，邂逅西域多民族古今历史人文之旅。” —— 新疆 自驾行• 南疆 段有感 新疆境内自驾行程（35天...",
						city: "南疆",
						head_img: "http://n3-q.mafengwo.net/s10/M00/CB/29/wKgBZ1kD_x2Ad-EcAABeidrCS-017.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90",
						username: "记得要微笑",
						watchnums: "222/26",
						top_num: "45"
					},*/
				],
				options: [{
					value: '选项1',
					label: '东南亚(73)'
				}, {
					value: '选项2',
					label: '欧洲(102)'
				}, {
					value: '选项3',
					label: '南极洲(1)'
				}, {
					value: '选项4',
					label: '北美洲(39)'
				}, {
					value: '选项5',
					label: '东亚(29)'
				}],
				value: '',
				input2: '',
				input21: '',
				input22: '',
				input23: '',
				cont1: [{
						content_num: "1",
						content_local: "北海道",
						content_cont: "在白雪皑皑中泡温泉"
					},
					{
						content_num: "2",
						content_local: "冰岛",
						content_cont: "亲近极北之地的莫测极光"
					},
					{
						content_num: "3",
						content_local: "澳大利亚",
						content_cont: "在南半球过个暖洋洋的圣诞节"
					},
					{
						content_num: "4",
						content_local: "洛杉矶",
						content_cont: "阳光加州，避寒圣地"
					},
					{
						content_num: "5",
						content_local: "北海道",
						content_cont: "在白雪皑皑中泡温泉"
					},
				],
				lunbo: [
					"https://b1-q.mafengwo.net/s10/M00/AE/EE/wKgBZ1j4lV2AeFDJAAFAQnzrrk044.jpeg",
					"https://p2-q.mafengwo.net/s12/M00/6D/03/wKgED1vr9xuADjk5AAWjRyklo-4124.png",
					"https://n4-q.mafengwo.net/s10/M00/FA/11/wKgBZ1m3p0aAENn-AAa2xjc81AI321.png",
					"https://b3-q.mafengwo.net/s10/M00/B7/6A/wKgBZ1m3WL2AGbvYAAHNn8YumW420.jpeg",
					"https://n2-q.mafengwo.net/s10/M00/6F/B3/wKgBZ1h4nkiAURQzAAHf0nrnc6I29.jpeg"
				]
			}
		},
		methods: {

			show() {

			}
		}
	}
</script>

<style scoped>
	* {
		text-decoration: none;
		margin: 0px;
		padding: 0px;
	}
	/*导航*/
	
	/* .nav {
		border-bottom: 1px solid #bdbbbb;
		height: 60px;
		width: 100%;
		margin-bottom: 16px;
	} */
	/*中间*/
	.localall .el-carousel__container {
		width: 700px;
	}
	.localall .carousel__item {
		width: 700px;
	}
	.localall .local {
		width: 1000px;
		margin: 0 auto;
	}
	/*左边*/
	
	.localall .local_left .localbox {
		width: 260px;
		height: 165px;
		border: 1px solid #ddd;
		border-bottom: 0px solid white;
		position: relative;
	}
	
	.localall .local_left .local_item {
		width: 260px;
		height: 40px;
		border-bottom: 1px solid #ddd;
		font-size: 14px;
		color: #808080;
	}
	
	.localall .local_left .local_item .local_itemleft {
		display: inline-block;
		width: 220px;
		height: 40px;
		line-height: 40px;
		padding-left: 8px;
	}
	
	.localall .local_left .local_img {
		height: 80px;
		line-height: 80px;
		color: #FF9D00;
		font-size: 18px;
		height: 80px;
		line-height: 80px;
		border-bottom: 1px solid #BDBBBB;
	}
	
	.localall .local_left .local_img a {
		color: #FF9D00;
		display: inline-block;
	}
	
	.localall .local_left .local_img img {
		width: 150px;
		height: 50px;
		margin-top: 20px;
	}
	/*要隐藏的数据*/
	
	.localall .local_left .local_ibox {
		border: 1px solid #ddd;
		width: 350px;
		height: 340px;
		position: absolute;
		top: -2px;
		left: 260px;
		padding: 16px;
		display: none;
		background-color: #FFFFFF;
		z-index: 1000;
	}
	
	.localall .local_left .content {
		padding: 2px;
		color: #BDBBBB;
		font-size: 14px;
	}
	
	.localall .local_left .content b {
		display: inline-block;
		font-size: 18px;
		font-weight: 600;
		font-style: italic;
		color: #FF9D00;
		width: 30px;
	}
	
	.localall .local_left .content a {
		color: #333333;
	}
	
	.localall .local_left .content .cont3 {
		padding-left: 10px;
	}
	/*input*/
	
	.localall .local_input {
		margin-top: 24px;
		border: 2px solid #FF9D00;
	}
	/*localdown部分*/
	
	.localall .localdown {
		width: 1000px;
		margin: 0 auto;
		margin-top: 16px;
	}
	
	.localall .down_left {
		width: 165px;
		height: 40px;
		line-height: 40px;
	}
	
	.localall .down_left h3 {
		border-bottom: 1px solid #BDBBBB;
		height: 34px;
		width: 100px;
		font-size: 16px;
		color: #333;
		padding-bottom: 4px;
	}
	
	.localall .downoption {
		width: 60px;
		font-size: 12px;
		padding-left: 0px;
	}
	
	.localall .downoption1 {
		margin-top: 10px;
		color: #333;
	}
	
	.localall .downoption2 {
		position: absolute;
		top: 50px;
		left: 68px;
		width: 60px;
	}
	
	.localall .downoption3 {
		position: absolute;
		top: 50px;
		left: 130px;
		width: 60px;
	}
	/*downimg*/
	
	.localall .downimg {
		width: 130px;
		height: 184px;
		padding-top: 20px;
	}
	
	.download {
		margin-top: 8px;
		border: 1px solid #999999;
		display: inline-block;
		height: 24px;
		line-height: 24px;
		width: 120px;
		border-radius: 10px;
		text-align: center;
		background-color: #DCDCDC;
	}
	
	.localall .el-select {
		width: 60px;
	}
	
	.localall .el-input--suffix .el-input__inner {
		padding: 5px;
	}
	
	.localall .down_right {
		border-bottom: 1px solid #eee;
		height: 40px;
		line-height: 40px;
	}
	
	.localall .down_right strong {
		color: #333;
		font-size: 20px;
		font-weight: 500;
	}
	/*downul*/
	
	.localall .downul .local_ibox {
		margin-top: 70px;
	}
	
	.localall .rightbox {
		padding-top: 18px;
	}
	
	.localall .type i {
		display: inline-block;
		width: 18px;
		height: 18px;
	}
	
	.localall .rightbox .type {
		display: inline-block;
		line-height: 20px;
		font-size: 12px;
		color: #666;
	}
	
	.localall .type strong {
		font-weight: normal;
		color: #ff9d00;
	}
	
	.localall .rightbox .right_tit1 {
		margin: 15px 0px;
		font-size: 20px;
		color: #333;
	}
	
	.localall .rightbox .right_tit1:hover {
		color: #FF9D00;
	}
	
	.localall .rightbox .stat {
		float: right;
		padding: 0 15px;
		line-height: 30px;
		border: 1px solid #ff9d00;
		border-radius: 15px;
		font-size: 14px;
		background-color: #fff;
		color: #666;
	}
	
	.localall .rightbox .info {
		color: #808080;
		font-size: 14px;
		cursor: pointer;
	}
	
	.localall .right_img {
		border-bottom: 1px solid #DCDCDC;
		width: 790px;
		height: 205px;
	}
	
	.localall .right_img img {
		padding: 30px 6px;
		cursor: pointer;
	}
	
	.localall .rightkan {
		display: inline-block;
		font-size: 12px;
		color: #999999;
		cursor: pointer;
		width: 70px;
		height: 22px;
		line-height: 22px;
		border: 1px solid #BDBBBB;
		border-radius: 4px;
		padding-left: 2px;
	}
	/*tou*/
	
	.localall .tou {
		position: relative;
		top: -40px;
		font-size: 12px;
		padding-right: 8px;
	}
	
	.localall .xiao img {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		display: inline;
	}
	
	.localall .neirong {
		float: left;
		width: 540px;
		height: 70px;
		padding: 10px;
		padding-top: 40px;
	}
	
	.localall .tupian {
		width: 230px;
		height: 190px;
		float: left;
	}
</style>