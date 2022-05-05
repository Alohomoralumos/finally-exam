<template>
	<div>
		<div class="topItem">
			<div class="leftItem">
				<div class="miniItem">
					<span class="icon iconfont icon-fangwu"></span>
					天猫首页
				</div>
				<div class="miniItem">
					喵，欢迎来天猫
				</div>
				<div class="miniItem" @click="logShow=true" v-show="!islog">
					请登录
				</div>
				<div class="miniItem" v-show="islog">
					欢迎,{{current}}!
				</div>
				<div class="logBd" v-show="logShow" @mouseleave="logShow=false;logName='';logPassworld=''">
					<input type="text" style="width:80%" v-model="logName" />
					<input type="password" style="width:80%" v-model="logPassworld" />
					<button
						type="submit"
						style="width:40px;height:30px"
						@click="userLogin"
					>
						登录
					</button>
				</div>
				<div class="miniItem" @click="signShow=true" v-show="!islog">
					免费注册
				</div>
				<div class="miniItem" @click="logout" v-show="islog">
					退出登录
				</div>
				<div class="signBd" v-show="signShow" @mouseleave="signShow=false;userName='';userPassword=''">
					<input type="text" style="width:80%" v-model="userName" />
					<input type="password" style="width:80%" v-model="userPassword" />
					<button
						type="submit"
						style="width:40px;height:30px"
						@click="signUser"
					>
						注册
					</button>
				</div>
			</div>
			<div class="rightItem">
				<div class="miniItem showItem">
					<div>我的淘宝</div>
					<b></b>
					<div class="Item_bd myTB_bd">
						<div class="item">
							已买到的宝贝
						</div>
						<div class="item">
							已卖出的宝贝
						</div>
					</div>
				</div>
				<div class="miniItem">
					<span class="icon iconfont icon-gouwuche-copy"></span>
					购物车
				</div>
				<div class="miniItem showItem" style="width: 60px;">
					收藏夹
					<b></b>
					<div class="Item_bd collectItem">
						<div class="item">
							收藏的宝贝
						</div>
						<div class="item">
							收藏的店铺
						</div>
					</div>
				</div>
				<div
					style="background-color: #dadada;width: 1px;height: 15px;margin-left: 20px;"
				></div>
				<div class="miniItem">
					<span class="icon iconfont icon-shouji1"></span>
					手机版
				</div>
				<div class="miniItem">
					淘宝网
				</div>
				<div class="miniItem showItem">
					商家支持
					<b></b>
					<div class="Item_bd supportItem">
						<div class="supportTitle">
							商家:
						</div>
						<div class="item supportitem1">商家中心</div>
						<div class="item supportitem1">天猫规则</div>
						<div class="item supportitem1">商家入驻</div>
						<div class="item supportitem1">运营服务</div>
						<div class="item supportitem1">商家品控</div>
						<div class="item supportitem1">商家工具</div>
						<div class="item supportitem1">天猫智库</div>
						<div class="item supportitem1">喵言喵语</div>
						<div
							style="width: 100%;height: 0.8px;background-color: #bab4b4;"
						></div>
						<div class="supportTitle">
							帮助:
						</div>
						<div class="item supportitem2">商家服务的大厅</div>
						<div class="item supportitem2">问商友</div>
						<div
							style="width: 100%;height: 0.8px;background-color: #bab4b4;"
						></div>
					</div>
				</div>
				<div class="miniItem showItem" style="width:80px">
					<span class="icon iconfont icon-caidan"></span>
					网站导航
					<b></b>
					<div class="turItem Item_bd">
						<div class="leftbd turbd">
							<h2>热点推荐 Hot</h2>
							<ul>
								<li class="item">天猫超市</li>
								<li class="item">喵鲜生</li>
								<li class="item">科技新品</li>
								<li class="item">女装新品</li>
								<li class="item">酷玩街</li>
								<li class="item">内衣新品</li>
								<li class="item">试美妆</li>
								<li class="item">运动新品</li>
								<li class="item">时尚先生</li>
								<li class="item">精明妈咪</li>
								<li class="item">吃乐会</li>
								<li class="item">企业采购</li>
								<li class="item">会员积分</li>
								<li class="item">天猫国际</li>
								<li class="item">品质频道</li>
							</ul>
						</div>
						<div
							style="height: 100px;width: 0.8px;background-color: #f6f6f6;position: relative;left: -20px;"
						></div>
						<div class="centerbd turbd">
							<h2>行业市场market</h2>
							<ul>
								<li class="item">美妆</li>
								<li class="item">电器</li>
								<li class="item">女装</li>
								<li class="item">男装</li>
								<li class="item">女鞋</li>
								<li class="item">男鞋</li>
								<li class="item">内衣</li>
								<li class="item">箱包</li>
								<li class="item">运动</li>
								<li class="item">母婴</li>
								<li class="item">家装</li>
								<li class="item">医药</li>
								<li class="item">食品</li>
								<li class="item">配饰</li>
								<li class="item">汽车</li>
							</ul>
						</div>
						<div
							style="height: 100px;width: 0.8px;background-color: #f6f6f6;position: relative;left: -20px;"
						></div>
						<div class="rightbd turbd">
							<h2>服务指南 Help</h2>
							<ul>
								<li class="item">帮助中心</li>
								<li class="item">品质保障</li>
								<li class="item">特色服务</li>
								<li class="item">七天退换货</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "../iconfont/iconfont.css";
export default {
	name: "topItem",
	data() {
		return {
			signShow:false,
			logShow:false,
			userName: "",
			userPassword: "",
			logName:"",
			logPassworld:"",
			islog:false,
			current:""
		};
	},
	methods: {
		signUser() {
			if (this.userPassword && this.userName)
				window.localStorage.setItem(this.userName, this.userPassword);
				this.signShow=false;
				this.userName='';
				this.userPassword='';
				alert("注册成功")
		},
		userLogin(){
			if(localStorage.getItem(this.logName)===this.logPassworld){
				localStorage.setItem("currentUser",this.logName);
				this.islog=true;
				this.logShow=false;
				this.logName='';
				this.logPassworld='';
				this.current = localStorage.getItem("currentUser");
				alert("登陆成功");
			}
			else{
				this.logShow=false;
				alert("登陆失败")
			}
		},
		logout(){
			localStorage.removeItem("currentUser");
			this.islog=false;
			alert("退出成功")
		}
	},
	computed: {
	},
	mounted(){
		if(localStorage.getItem("currentUser")!==null)
		{
			this.current = localStorage.getItem("currentUser");
			this.islog=true;
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
}
.signBd {
	position: absolute;
	width: 200px;
	height: 100px;
	background-color: wheat;
	top: 130px;
	z-index: 999;
	left: 400px;
}
.logBd{
	position: absolute;
	width: 200px;
	height: 100px;
	background-color: wheat;
	top: 130px;
	z-index: 999;
	left: 300px;
}
.icon {
	color: red;
	font-size: 12px;
}
.topImg {
	width: 100%;
	height: 100px;
	background-color: gray;
}
.topItem {
	width: 100%;
	height: 26px;
	background-color: #f2f2f2;
	display: flex;
	font-size: 12px;
	font-weight: 400;
	color: #999;
	align-items: center;
	text-align: center;
	border-bottom: #e9e9e9 solid 0.8px;
}
.leftItem {
	margin-left: 150px;
	display: flex;
}
.miniItem {
	display: flex;
	height: min-content;
	margin-left: 20px;
	align-items: center;
	height: 26px;
	cursor: pointer;
	text-align: center;
}
.miniItem:hover {
	color: red;
	text-decoration: underline;
}
.rightItem {
	margin-left: 400px;
	display: flex;
	align-items: center;
}
b {
	position: relative;
	left: 4px;
	top: 2px;
	width: 0;
	height: 0;
	border-width: 3px;
	border-style: solid dashed dashed;
	border-color: #bbb transparent transparent;
	font-size: 0;
	line-height: 0;
	animation: ItemHidden linear 0.2s forwards;
	transform-origin: 50% 30%;
}
.showItem {
	width: 70px;
	display: flex;
	justify-content: center;
	position: relative;
}
.showItem:hover {
	background-color: white;
}
.showItem:hover b {
	animation: ItemShow linear 0.2s forwards;
}
.showItem:hover .Item_bd {
	display: block;
	cursor: auto;
}
.Item_bd {
	width: 76px;
	height: 40px;
	padding: 8px 10px;
	display: none;
	position: relative;
	left: -0.6px;
	color: #666;
	line-height: 20px;
	position: absolute;
	top: 26px;
	border-bottom: 0.8px solid #f8f8f8;
	border-left: 0.8px solid #f8f8f8;
	border-right: 0.8px solid #f8f8f8;
	background-color: white;
	z-index: 999;
}
.myTB_bd {
	width: 76px;
}
.collectItem {
	width: 62px;
}
.Item_bd .item {
	height: 20px;
	cursor: pointer;
}
.Item_bd .item:hover {
	color: red;
	text-decoration: underline;
}
.supportTitle {
	width: 100%;
	text-align: left;
	color: #666;
	font-weight: 700;
}
.supportItem {
	width: 122px;
	height: 187px;
	display: none;
	flex-wrap: wrap;
	width: 150px;
}
.showItem:hover .supportItem {
	display: flex;
	cursor: auto;
}
.supportitem1 {
	width: 48px;
	margin-right: 20px;
	height: 22px;
}
.supportitem2 {
	margin-right: 20px;
	height: 22px;
	text-align: left;
}
.turItem {
	width: 1180px;
	height: 110px;
	padding-top: 25px;
	padding-bottom: 25px;
	left: -1110px;
}
.showItem:hover .turItem {
	display: flex;
}
.turbd {
	width: 455px;
	height: 110px;
	padding-left: 30px;
	overflow: hidden;
	float: left;
	line-height: 1.4;
	list-style: none;
}
.turbd > h2 {
	color: #f56a00;
	font-size: 16px;
	padding-bottom: 8px;
	font-weight: 400;
	text-align: left;
}
.turbd > ul {
	margin-right: -20px;
	overflow: hidden;
	list-style: none;
	padding: 0;
	margin: 0;
}
.turbd > ul > li {
	width: 85px;
	float: left;
	text-align: left;
	padding-top: 6px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	position: relative;
	list-style: none;
	margin: 0;
}

.centerbd > h2 {
	color: #2263d4;
	font-size: 16px;
	padding-bottom: 8px;
	font-weight: 400;
	text-align: left;
}
.rightbd {
	width: 186px;
}
.rightbd > h2 {
	color: #666;
	font-size: 16px;
	padding-bottom: 8px;
	font-weight: 400;
	text-align: left;
}
@keyframes ItemShow {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(180deg);
	}
}
@keyframes ItemHidden {
	0% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
</style>
