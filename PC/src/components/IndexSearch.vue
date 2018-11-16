<template>
	<div class="search">
		<ul class="search-ul">
			<li @click="seali('sea1','div1')">
				<i :style="{backgroundPosition:seaul.sea1}"></i>
				<span>全部</span>
			</li>
			<li @click="seali('sea2','div2')">
				<i :style="{backgroundPosition:seaul.sea2}"></i>
				<span>酒店</span>
			</li>
			<li @click="seali('sea3','div3')">
				<i :style="{backgroundPosition:seaul.sea3}"></i>
				<span>目的地</span>
			</li>
			<li @click="seali('sea4','div4')">
				<i :style="{backgroundPosition:seaul.sea4}"></i> 旅行商城
			</li>
			<div class="clear">

			</div>
		</ul>
		<div class="search-input" v-show="flag.div1">
			<el-input v-model="ruleForm.name" placeholder="搜目的地/攻略/酒店/旅行特价"></el-input>
			<el-button type="primary" @click.native="setdata()"><i class="sear-ico"></i></el-button>
			<div class="clear">

			</div>
		</div>
		<div class="search-hotel" v-show="flag.div2">
			<div class="hotel-input">
				<el-input v-model="ruleForm.name" placeholder="请输入国家、地区、城市名称"></el-input>
				<div class="clear">

				</div>
			</div>
			<div class="block">
				<el-date-picker v-model="value1" type="date" placeholder="未定">
				</el-date-picker>
			</div>
			<div class="block">
				<el-date-picker v-model="value2" type="date" placeholder="未定">
				</el-date-picker>
			</div>
			<el-button type="primary"><i class="sear-ico"></i></el-button>
			<div class="clear"></div>
		</div>
		<div class="search-input" v-show="flag.div3">
			<el-input v-model="ruleForm.name" placeholder="我要去..."></el-input>
			<el-button type="primary"><i class="sear-ico"></i></el-button>
			<div class="clear">

			</div>
		</div>
		<div class="search-input" v-show="flag.div4">
			<el-input v-model="ruleForm.name" placeholder="产品名称/目的地/优惠"></el-input>
			<el-button type="primary"><i class="sear-ico"></i></el-button>
			<div class="clear">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'IndexSearch',
		data() {
			return {
				seaul: {
					sea1: "-60px -140px",
					sea2: "-60px -110px",
					sea3: "-60px -110px",
					sea4: "-60px -110px"
				},
				flag: {
					div1: true,
					div2: false,
					div3: false,
					div4: false
				},
				ruleForm: {
					name: ""
				},
				value1: "",
				value2: ""
			}
		},
		methods: {
			seali(sea, di) {
				for(var index in this.seaul) {
					this.seaul[index] = "-60px -110px";
				}
				this.seaul[sea] = "-60px -140px";
				for(var index1 in this.flag) {
					this.flag[index1] = false;
				}
				this.flag[di] = true;
			},
			setdata() {
				this.ajax.post('http://192.168.7.136:8888/indexsearch', this.ruleForm.name)
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.search {
		position: absolute;
		bottom: 45px;
		left: 50%;
		margin-left: -320px;
		width: 632px;
		z-index: 5;
		padding: 15px;
		background-color: #000;
		background-color: rgba(0, 0, 0, .6);
		border-radius: 4px;
		padding-right: 0px;
	}
	
	.search-ul i {
		background-image: url('../../static/img/kongleme.png');
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
		margin: 5px 5px 0 0;
		display: inline-block;
		position: relative;
		top: 3px;
	}
	
	.search-ul li {
		float: left;
		display: inline;
		margin-right: 30px;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		color: #fff;
	}
	
	.search .el-input {
		width: 546px;
		height: 46px;
		float: left;
	}
	
	.search .el-input__inner {
		height: 46px;
	}
	
	.sear-ico {
		display: inline-block;
		margin-top: 11px;
		width: 24px;
		height: 24px;
		background-image: url('../../static/img/kongleme.png');
		background-position: 0 -110px!important;
		overflow: hidden;
		vertical-align: top;
		position: absolute;
		top: 0;
		left: 12px;
	}
	
	.search .el-button {
		display: block;
		height: 46px;
		background-color: #ff9d00;
		border-radius: 4px;
		text-align: center;
		padding: 0px;
		width: 50px;
		border-color: #ff9d00;
		position: relative;
		float: left;
		margin-left: 7px;
	}
	
	.search-input {
		margin-top: 10px;
	}
	
	.search-hotel {
		margin-top: 10px;
	}
	
	.hotel-input {
		float: left;
		width: 260px;
	}
	
	.hotel-input .el-input {
		width: 260px;
		height: 46px;
	}
	.search .block {
		width: 140px;
	}
	.block .el-input__inner {
		width: 140px;
		height: 46px;
	}
	
	.block .el-input {
		width: 140px;
	}
	
	.search-hotel .block {
		float: left;
		margin-left: 3px;
	}
</style>