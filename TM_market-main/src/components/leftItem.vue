<template>
	<div>
		<div class="content">
			<div class="sideBar">
				<li v-for="(i, index) in itemValue" :key="index">
					<div class="sideBar-box">
						<b class="icon-trigon"></b>

						<p class="sideBar-nav-title">
							<i class="iconfont" :class="i.fontType"></i>
							<a style="font-size: 14px;font-weight: bold;">{{
								i.value.title
							}}</a>
							<i class=" iconfont icon-jiantouyou"> </i>
						</p>

						<p class="sideBar-nav-list">
							<a
								href="###"
								class="sideBar-nav-list-a"
								v-for="(t, index) in i.value.simpleText"
								:key="index"
							>
								{{ t }}
							</a>
						</p>

						<div class="subViewContainer" :style="toppx(i.order)">
							<div class="subview">
								<div
									class="subview-li"
									v-for="(p, index) in itemValue.jksp.bdValue"
									:key="index"
								>
									<h4>{{ p.title }}</h4>
									<p>
										<a v-for="(p, index) in p.text" :key="index">{{ p }}</a>
									</p>
								</div>
								<div class="promo">
									<div class="promo-brands">
										<h4>{{ itemValue.jksp.pp.title }}</h4>
										<p>
											<a
												v-for="(p, index) in itemValue.jksp.pp.text"
												:key="index"
												>{{ p }}</a
											>
										</p>
									</div>
									<div class="promo-acts">
										<h4>{{ itemValue.jksp.pphd.title }}</h4>
										<p>
											<a
												v-for="(p, index) in itemValue.jksp.pphd.text"
												:key="index"
												>{{ p }}</a
											>
										</p>
									</div>
									<a
										class="promo-banner"
										href="//pages.tmall.com/wow/chaoshi/act/mcjknzp?spm=a3204.7084713.1996500281.113.P9kmck&amp;acm=lb-zebra-26901-329726.1003.4.456608&amp;scm=1003.4.lb-zebra-26901-329726.OTHER_14434855470411_456608"
										data-spm-anchor-id="a3204.7084713.1996500281.113"
										><img
											src="//img.alicdn.com/tfs/TB1lyxzSXXXXXaPapXXXXXXXXXX-196-90.jpg"
									/></a>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="bottomNavi">
					<div class="bottomNav">
						<p
							class="sideBar-nav-title"
							style="padding-left: 30px;padding-top: 10px;"
						>
							<i class="iconfont icon-chong" style="font-size: 20px;"></i
							>充值缴费
						</p>

						<p class="sideBar-nav-list" style="padding-left: 30px;">
							<a href="###" class="sideBar-nav-list-a">信用卡还款</a>
							<a href="###" class="sideBar-nav-list-a">转账</a>
							<a href="###" class="sideBar-nav-list-a">充话费</a>
							<a href="###" class="sideBar-nav-list-a">点券</a>
						</p>
					</div>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
import "../iconfont/iconfont.css";
export default {
	name: "leftItem",
	data() {
		return {
			itemValue: {
				jksp: {
					className: "item",
					order: 0,
					fontType: "icon-jipiao-copy",
					value: {
						title: "进口食品",
						simpleText: ["牛奶", "零食", "饼干", "方便面", "粮油"],
					},
					bdValue: {
						jknn: {
							title: "进口牛奶",
							text: [
								"进口纯牛奶",
								"进口酸奶",
								"进口成人奶粉",
								"进口含乳饮料",
								"进口有机牛奶",
								"进口酸奶粉",
							],
						},
						jkly: {
							title: "进口粮油/速食/调料",
							text: [
								"进口橄榄油",
								"进口其他油",
								"进口大米",
								"进口方便面",
								"进口意面",
								"其他速食",
								"进口罐头",
								"进口调味料",
								"进口调味酱",
							],
						},
						jkcf: {
							title: "进口厨房用品",
							text: [
								"进口厨房用品",
								"进口餐具/水杯",
								"进口厨具/锅具",
								"进口一次性用品",
							],
						},
						jkls: {
							title: "进口零食",
							text: [
								"进口蜜饯果干",
								"进口薯片/膨化",
								"进口坚果",
								"进口糖果",
								"进口果冻布丁",
								"进口海产品",
								"进口肉干",
								"进口巧克力",
							],
						},
						jkmy: {
							title: "进口母婴用品",
							text: [
								"进口纸尿裤",
								"进口母婴洗护",
								"进口婴儿奶粉",
								"进口辅食",
								"进口婴幼儿营养品",
							],
						},
						jkbg: {
							title: "进口饼干/糕点",
							text: [
								"进口饼干",
								"进口糕点",
								"进口面包干",
								"进口威化",
								"进口苏打饼干",
								"进口曲奇",
							],
						},
						jkjy: {
							title: "进口酒饮",
							text: [
								"进口葡萄酒",
								"进口啤酒",
								"进口起泡酒",
								"进口洋酒",
								"进口果汁",
								"进口水",
								"进口咖啡饮料",
								"进口碳酸饮料",
							],
						},
						jkbj: {
							title: "进口冲调保健",
							text: [
								"进口咖啡",
								"进口茶/蜂蜜",
								"进口谷物冲饮",
								"进口奶茶",
								"进口茶叶",
								"进口保健品",
								"进口维生素",
							],
						},
						jkhl: {
							title: "进口个人护理",
							text: [
								"进口洗发水",
								"进口护发",
								"进口沐浴",
								"进口私处洗液",
								"进口牙膏",
								"进口牙刷",
								"进口漱口水",
								"进口面部护理",
							],
						},
					},
					pp: {
						title: "品牌",
						text: [
							"安佳牛奶",
							"中原G7",
							"家乐氏",
							"巴黎水",
							"汤姆农场",
							"小老板",
						],
					},
					pphd: {
						title: "品牌活动",
						text: ["德亚牛奶", "进口谷物冲饮料"],
					},
				},
				spyl: {
					className: "item",
					order: 1,
					fontType: "icon-yinliao",
					value: {
						title: "食品饮料",
						simpleText: ["牛奶", "坚果", "饼干", "方便面", "粮油"],
					},
				},
				lyfs: {
					className: "item",
					order: 2,
					fontType: "icon-liangyou",
					value: {
						title: "粮油副食",
						simpleText: ["油", "调料", "大米", "方便面", "火腿肠"],
					},
				},
				mrxh: {
					className: "item",
					order: 3,
					fontType: "icon-kouhong",
					value: {
						title: "美容洗护",
						simpleText: ["洗发", "沐浴", "牙膏", "洁面", "卫生巾"],
					},
				},
				jjjd: {
					className: "item",
					order: 4,
					fontType: "icon-jiandao",
					value: {
						title: "家居家电",
						simpleText: ["毛巾", "家电", "玻璃杯", "衣架", "锅"],
					},
				},
				jtqj: {
					className: "item",
					order: 5,
					fontType: "icon-cezhi",
					value: {
						title: "家庭清洁",
						simpleText: ["纸", "洗衣", "洗洁精", "垃圾袋", "洁厕"],
					},
				},
				myyp: {
					className: "item",
					order: 6,
					fontType: "icon-naiping",
					value: {
						title: "母婴用品",
						simpleText: ["纸尿裤", "奶粉", "湿巾", "洗护", "玩具"],
					},
				},
			},
		};
	},
	methods: {
		toppx(order) {
			return order < 3 ? "" : "top:-" + (order - 3) * 72.2 + "px";
		},
	},
};
</script>

<style scoped>
i {
	color: #e22a40;
}
li {
	list-style: none;
}

body {
	font-family: 微软雅黑;
}

* {
	margin: 0;
	padding: 0;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
}

.content {
	width: 245px;
	height: 700px;
}

.content .nav {
	height: 42px;
	line-height: 42px;
}

.content .nav li.nav-extra {
	width: 242px;
	text-align: center;
	background: #2f2f2f;
	color: #fff;
	font-size: 16px;
}

.sideBar {
	width: 238px;
	height: auto;
	border: 2px solid #eee;
	border-top: none;
	border-bottom: none;
}

.sideBar > li {
	height: 72px;
	border-bottom: 1px solid #eee;
}

.sideBar > li > .sideBar-box {
	height: 42px;
	display: block;
	position: relative;
	width: 195px;
	padding: 15px 15px 15px 50px;
	margin-left: -20px;
	text-decoration: none;
	border-left: 1px solid #fff;
	-webkit-transition: all 0.1s ease-out;
	transition: all 0.1s ease-out;
}

.sideBar-nav-title {
	color: #515151;
	font-size: 14px;
	font-weight: 700;
	height: 21px;
	line-height: 21px;
	position: relative;
	left: -10px;
}

.sideBar-nav-list {
	height: 21px;
	line-height: 21px;
	float: left;
}

.sideBar-nav-list > .sideBar-nav-list-a {
	display: inline-block;
	height: 21px;
	line-height: 30px;
	color: #999;
	font-size: 12px;
	text-decoration: none;
	margin-left: 8px;
	overflow: hidden;
}

.icon-trigon {
	width: 0;
	height: 0;
	position: absolute;
	left: 0px;
	top: 72px;
	border-style: solid;
	transform: rotate(180deg);
	border-width: 10px 10px 10px 10px;
	border-color: transparent transparent #aa2633 #aa2633;
	-webkit-transition: all 0.1s ease-out;
	transition: all 0.1s ease-out;
	display: none;
}

/*侧边div*/

.sideBar-column {
	width: 666px;
	height: 399px;
	position: absolute;
	left: 258px;
	top: 0;
	text-align: left;
	border: 3px solid #e22a40;
	-webkit-transition: all 0.1s ease-out;
	transition: all 0.1s ease-out;
	display: none;
	color: #666;
	padding: 18px;
}

.sideBar li .sideBar-box:hover {
	background: #e22a40;
}

.sideBar li .sideBar-box:hover .sideBar-nav-title {
	color: #fff;
}

.sideBar li .sideBar-box:hover .icon-trigon {
	display: block;
}

.sideBar li .sideBar-box:hover .subViewContainer {
	display: block;
}

.sideBar li .sideBar-box:hover .sideBar-nav-list-a {
	color: #f1abb1;
}

.sideBar li .sideBar-box:hover .iconfont {
	color: white;
}

.sideBar-nav-list-a:hover {
	text-decoration: underline;
}

.floatRight {
	float: right;
}

.subViewContainer {
	position: absolute;
	background-color: #fff;
	border: 3px solid #e22a40;
	width: 944px;
	max-height: 357px;
	top: 0;
	left: 100%;
	line-height: 1.2;
	z-index: 100;
	display: none;
}

.subview {
	display: block;
	height: 357px;
	position: relative;
	overflow: hidden;
}

.subview-li {
	float: left;
	border-right: 1px dotted #d3d3d3;
	padding: 16px 0 15px 25px;
	margin-right: 2px;
	width: 222px;
	height: 88px;
	overflow: hidden;
}

.subview-li p {
	overflow: hidden;
}

.subview-li h4 {
	color: #515151;
	font-size: 12px;
	font-weight: 700;
	margin: 0 0 10px;
}

.subview-li a {
	border-left: 1px solid #e7e7e7;
	padding-left: 9px;
	margin-left: -10px;
	margin-right: 18px;
	float: left;
	font-size: 12px;
	font-weight: 400;
	margin-bottom: 12px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #666;
	text-decoration: none;
}

.subview-li a:hover {
	color: red;
	text-decoration: underline;
	cursor: pointer;
}

.promo {
	position: absolute;
	right: 0;
	top: 0;
	background-color: #f7f8f8;
	width: 196px;
	border-left: 1px solid #e7e7e7;
}

.promo-brands,
.promo-acts {
	padding: 15px 20px 0;
}

.promo-brands h4,
.promo-acts h4 {
	color: #515151;
	font-size: 12px;
	font-weight: 700;
	margin-bottom: 10px;
}

.promo-brands p,
.promo-acts p {
	overflow: hidden;
}

.promo-brands a,
.promo-acts a {
	float: left;
	font-size: 12px;
	font-weight: 400;
	margin-bottom: 12px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 40%;
	color: #666;
	text-decoration: none;
}

.icon-jiantouyou {
	color: #a8a8a8;
	position: relative;
	left: 100px;
	font-size: 12px;
}

.bottomNavi {
	background-color: #f3f3f3;
}

.bottomNav {
	height: 100%;
	display: block;
	width: 100%;
	text-decoration: none;
	border-left: 1px solid #fff;
}
</style>
