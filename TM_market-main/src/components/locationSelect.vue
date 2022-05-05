<template>
	<div>
		<div class="headerMain por">
			<div class="nav">
				<div class="firstitem">
					<h3 class="cq">
						重庆
						<i class="iconfont icon-jiantouyou jiantou"></i>
					</h3>		
				</div>
				<div class="diqu">
					<div class="title" style="margin-top: 10px;">
						<p class="hotCity">热门城市:</p>
						<ul>
							<li>北京</li>
							<li>上海</li>
							<li>杭州</li>
							<li>广州</li>
							<li>天津</li>
							<li>苏州</li>
							<li>成都</li>
							<li>深圳</li>
							<li>南京</li>
							<li>重庆</li>
							<li>南昌</li>
							<li>武汉</li>
						</ul>
					</div>
					<div class="con">
						<ul class="list">
							<li class="item" @mouseover="change(0)" :style="isSelected(0)">
								<span>ABCDE</span>
							</li>
							<li class="item" @mouseover="change(1)" :style="isSelected(1)">
								<span>FGHJ</span>
							</li>
							<li class="item" @mouseover="change(2)" :style="isSelected(2)">
								<span>KLMNP</span>
							</li>
							<li class="item" @mouseover="change(3)" :style="isSelected(3)">
								<span>QRSTW</span>
							</li>
							<li class="item" @mouseover="change(4)" :style="isSelected(4)">
								<span>XYZ</span>
							</li>
						</ul>
					</div>
					<div class="list-Item" style="display: block;" v-show="isShow(0)">
						<div class="letter">
							<div class="caps">A</div>
							<ul>
								<li class="head">阿坝</li>
								<li>安庆</li>
								<li>安顺</li>
								<li>鞍山</li>
								<li>阿尔山</li>
								<li>安康</li>
								<li class="head">安阳</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">B</div>
							<ul>
								<li class="head">百色</li>
								<li>滨州</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>白银</li>
								<li>白沙</li>
								<li class="head">巴中</li>
								<li>保亭</li>
								<li>包头</li>
								<li>毕节</li>
								<li>白山</li>
								<li>宝鸡</li>
								<li class="head">亳州</li>
								<li>保山</li>
								<li>本溪</li>
								<li>巴彦淖尔</li>
								<li>北京</li>
								<li>白城</li>
								<li class="head">北海</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">C</div>
							<ul>
								<li class="head">常德</li>
								<li>楚雄</li>
								<li>常州</li>
								<li>昌吉</li>
								<li>长沙</li>
								<li>长治</li>
								<li class="head">昌江</li>
								<li>澄迈</li>
								<li>重庆</li>
								<li>朝阳</li>
								<li>崇左</li>
								<li>长春</li>
								<li class="head">承德</li>
								<li>滁州</li>
								<li>沧州</li>
								<li>赤峰</li>
								<li>池州</li>
								<li>郴州</li>
								<li class="head">成都</li>
								<li>潮州</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">E</div>
							<ul>
								<li class="head">恩施</li>
								<li>鄂尔多斯</li>
								<li>鄂州</li>
							</ul>
						</div>
					</div>
					<div class="list-Item" style="display: block;" v-show="isShow(1)">
						<div class="letter">
							<div class="caps">F</div>
							<ul>
								<li class="head">福州</li>
								<li>抚顺</li>
								<li>阜新</li>
								<li>抚州</li>
								<li>防城港</li>
								<li>佛山</li>
								<li class="head">阜阳</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">G</div>
							<ul>
								<li class="head">广元</li>
								<li>甘南</li>
								<li>桂林</li>
								<li>固原</li>
								<li>贵阳</li>
								<li>广州</li>
								<li class="head">贵港</li>
								<li>广安</li>
								<li>甘孜</li>
								<li>赣州</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">H</div>
							<ul>
								<li class="head">葫芦岛</li>
								<li>衡水</li>
								<li>呼和浩特</li>
								<li>菏泽</li>
								<li>怀化</li>
								<li>黄冈</li>
								<li class="head">淮南</li>
								<li>汉中</li>
								<li>呼伦贝尔</li>
								<li>红河</li>
								<li>淮安</li>
								<li>河池</li>
								<li class="head">衡阳</li>
								<li>鹤壁</li>
								<li>黄石</li>
								<li>邯郸</li>
								<li>淮北</li>
								<li>海口</li>
								<li class="head">惠州</li>
								<li>鹤岗</li>
								<li>黄山</li>
								<li>贺州</li>
								<li>杭州</li>
								<li>合肥</li>
								<li class="head">河源</li>
								<li>哈尔滨</li>
								<li>黑河</li>
								<li>湖州</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">J</div>
							<ul>
								<li class="head">金昌</li>
								<li>焦作</li>
								<li>锦州</li>
								<li>吉安</li>
								<li>嘉兴</li>
								<li>景德镇</li>
								<li class="head">揭阳</li>
								<li>九江</li>
								<li>鸡西</li>
								<li>酒泉</li>
								<li>晋城</li>
								<li>荆州</li>
								<li class="head">佳木斯</li>
								<li>济南</li>
								<li>金华</li>
								<li>吉林</li>
								<li>晋中</li>
								<li>嘉峪关</li>
								<li class="head">济源</li>
								<li>荆门</li>
								<li>江门</li>
								<li>济宁</li>
							</ul>
						</div>
					</div>
					<div class="list-Item" style="display: block;" v-show="isShow(2)">
						<div class="letter">
							<div class="caps">K</div>
							<ul>
								<li class="head">开封</li>
								<li>昆明</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">L</div>
							<ul>
								<li class="head">丽江</li>
								<li>洛阳</li>
								<li>临高</li>
								<li>陵水</li>
								<li>乐东</li>
								<li>六盘水</li>
								<li class="head">聊城</li>
								<li>六安</li>
								<li>柳州</li>
								<li>宁夏</li>
								<li>临汾</li>
								<li>娄底</li>
								<li class="head">拉萨</li>
								<li>临沧</li>
								<li>龙岩</li>
								<li>吕梁</li>
								<li>陇南</li>
								<li>兰州</li>
								<li class="head">乐山</li>
								<li>来宾</li>
								<li>漯河</li>
								<li>泸州</li>
								<li>连云港</li>
								<li>廊坊</li>
								<li class="head">莱芜</li>
								<li>辽源</li>
								<li>丽水</li>
								<li>临沂</li>
								<li>辽阳</li>
								<li>凉山</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">M</div>
							<ul>
								<li class="head">眉山</li>
								<li>梅州</li>
								<li>茂名</li>
								<li>马鞍山</li>
								<li>牡丹江</li>
								<li>绵阳</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">N</div>
							<ul>
								<li class="head">南宁</li>
								<li>南阳</li>
								<li>南充</li>
								<li>南平</li>
								<li>宁波</li>
								<li>内江</li>
								<li class="head">南通</li>
								<li>怒江</li>
								<li>南京</li>
								<li>南昌</li>
								<li>宁德</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">P</div>
							<ul>
								<li class="head">萍乡</li>
								<li>普洱</li>
								<li>攀枝花</li>
								<li>平凉</li>
								<li>莆田</li>
								<li>盘锦</li>
								<li class="head">濮阳</li>
								<li>平顶山</li>
							</ul>
						</div>
					</div>
					<div class="list-Item" style="display: block;" v-show="isShow(3)">
						<div class="letter">
							<div class="caps">Q</div>
							<ul>
								<li class="head">潜江</li>
								<li>齐齐哈尔</li>
								<li>黔西南</li>
								<li>庆阳</li>
								<li>泉州</li>
								<li>琼中</li>
								<li class="head">七台河</li>
								<li>曲靖</li>
								<li>琼海</li>
								<li>衢州</li>
								<li>秦皇岛</li>
								<li>清远</li>
								<li class="head">钦州</li>
								<li>青岛</li>
								<li>黔东南</li>
								<li>黔南</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">R</div>
							<ul>
								<li class="head">日照</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">S</div>
							<ul>
								<li class="head">石家庄</li>
								<li>神农架</li>
								<li>汕头</li>
								<li>汕尾</li>
								<li>苏州</li>
								<li>宿州</li>
								<li class="head">绥化</li>
								<li>三门峡</li>
								<li>宿迁</li>
								<li>遂宁</li>
								<li>朔州</li>
								<li>双鸭山</li>
								<li class="head">松原</li>
								<li>三亚</li>
								<li>深圳</li>
								<li>商丘</li>
								<li>石嘴山</li>
								<li>绍兴</li>
								<li class="head">沈阳</li>
								<li>商洛</li>
								<li>三明</li>
								<li>四平</li>
								<li>随州</li>
								<li>上海</li>
								<li class="head">十堰</li>
								<li>韶关</li>
								<li>邵阳</li>
								<li>上饶</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">T</div>
							<ul>
								<li class="head">天门</li>
								<li>通化</li>
								<li>台州</li>
								<li>屯昌</li>
								<li>唐山</li>
								<li>铁岭</li>
								<li class="head">天水</li>
								<li>太原</li>
								<li>铜仁</li>
								<li>泰安</li>
								<li>泰州</li>
								<li>铜川</li>
								<li class="head">天津</li>
								<li>铜陵</li>
								<li>通辽</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">W</div>
							<ul>
								<li class="head">吴忠</li>
								<li>乌鲁木齐</li>
								<li>威海</li>
								<li>文昌</li>
								<li>万宁</li>
								<li>五指山</li>
								<li class="head">文山</li>
								<li>温州</li>
								<li>乌海</li>
								<li>乌兰察布</li>
								<li>武汉</li>
								<li>梧州</li>
								<li class="head">无锡</li>
								<li>潍坊</li>
								<li>芜湖</li>
								<li>武威</li>
								<li>渭南</li>
							</ul>
						</div>
					</div>
					<div class="list-Item" style="display: block;" v-show="isShow(4)">
						<div class="letter">
							<div class="caps">X</div>
							<ul>
								<li class="head">仙桃</li>
								<li>锡林郭勒</li>
								<li>孝感</li>
								<li>宣城</li>
								<li>忻州</li>
								<li>厦门</li>
								<li class="head">徐州</li>
								<li>湘潭</li>
								<li>襄阳</li>
								<li>新乡</li>
								<li>新安</li>
								<li>湘西</li>
								<li class="head">西宁</li>
								<li>咸宁</li>
								<li>咸阳</li>
								<li>新余</li>
								<li>西双版纳</li>
								<li>西安</li>
								<li class="head">许昌</li>
								<li>信阳</li>
								<li>邢台</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">Y</div>
							<ul>
								<li class="head">延安</li>
								<li>运城</li>
								<li>阳泉</li>
								<li>雅安</li>
								<li>扬州</li>
								<li>玉溪</li>
								<li class="head">云浮</li>
								<li>伊春</li>
								<li>营口</li>
								<li>盐城</li>
								<li>岳阳</li>
								<li>延边朝鲜族</li>
								<li class="head">宜春</li>
								<li>宜昌</li>
								<li>烟台</li>
								<li>榆林</li>
								<li>玉林</li>
								<li>宜宾</li>
								<li class="head">银川</li>
								<li>益阳</li>
								<li>永州</li>
								<li>阳江</li>
								<li>鹰潭</li>
							</ul>
						</div>
						<div class="letter">
							<div class="caps">Z</div>
							<ul>
								<li class="head">舟山</li>
								<li>自贡</li>
								<li>株洲</li>
								<li>驻马店</li>
								<li>中山</li>
								<li>张家口</li>
								<li class="head">中卫</li>
								<li>张家界</li>
								<li>珠海</li>
								<li>资阳</li>
								<li>遵义</li>
								<li>漳州</li>
								<li class="head">淄博</li>
								<li>郑州</li>
								<li>周口</li>
								<li>湛江</li>
								<li>张掖</li>
								<li>昭通</li>
								<li class="head">枣庄</li>
								<li>镇江</li>
								<li>肇庆</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "../iconfont/iconfont.css"
export default {
	name: "locationSelect",
	data() {
		return {
			order: 0,
			selected: "border: 1px solid #eee;border-bottom: 2px solid white;",
		};
	},
	methods: {
		change(number) {
			this.order = number;
		},
		isShow(number) {
			return number === this.order;
		},
		isSelected(number) {
			return number !== this.order ? "" : this.selected;
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.jiantou{
	color:#30b30e;
	animation: dao 1s linear forwards;
}
@keyframes dao{
	0%{
		transform: rotate(180deg);
	}
	100%{
		transform: rotate(180deg);
	}
}
.diqu {
	border: 1px solid #e5e5e5;
	position: absolute;
	background-color: #fff;
	left: 0;
	top: 11px;
	width: 480px;
	margin-top: -9px;
	margin-left: -1px;
	font-size: 14px;
	cursor: auto;
	margin-top: 51px;
	display: none;
	z-index: 10;
}

.hotCity {
	color: #999;
	padding-left: 25px;
}

.title ul {
	margin-top: 20px;
	overflow: hidden;
	display: block;
	list-style: none;
}

.title li {
	width: 10%;
	color: #333;
	margin-left: 0;
	margin-bottom: 12px;
	padding-left: 25px;
	white-space: nowrap;
	float: left;
	cursor: pointer;
	text-decoration: none;
}

.list {
	margin: 0;
	padding: 20px 25px 0;
	border-bottom: 1px solid #eee;
	list-style: none;
}

.list span {
	cursor: pointer;
}

.list .item {
	position: relative;
	top: 1px;
	display: inline-block;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	width: 19%;
	text-align: center;
	padding: 10px 0;
}

.list-Item {
	margin: 20px 0;
	width: 480px;
	display: none;
}

.list-Item .letter {
	overflow: hidden;
	position: relative;
}

.list-Item .letter .caps {
	width: 1.5em;
	top: 10px;
	color: #dd2727;
	position: absolute;
	display: inline-block;
	left: 20px;
	text-align: center;
	font-size: 14px;
}

.list-Item .letter ul {
	margin: 10px 0;
	overflow: hidden;
	display: block;
	list-style: none;
}

.list-Item .letter li {
	width: 10%;
	color: #333;
	padding-left: 20px;
	margin-left: 0;
	margin-bottom: 12px;
	white-space: nowrap;
	float: left;
	cursor: pointer;
	text-decoration: none;
	font-size: 14px;
}

.list-Item .letter .head {
	padding-left: 60px;
}

.hengge {
	width: 80px;
	height: 3px;
	background-color: white;
	position: absolute;
	top: 35px;
}

.firstitem {
	float: left;
	position: relative;
	top: 25px;
	z-index: 11;
	max-width: 464px;
	margin-top: 36px;
}

.cq {
	color: #30b30e;
	position: relative;
	position: relative;
	padding: 6px 12px;
	font-size: 16px;
	font-weight: 400;
	border: 1px solid #e5e5e5;
	line-height: 1.5;
	margin-top: -36px;
	margin-left: -1px;
	border-radius: 3px;
	cursor: pointer;
	word-wrap: break-word;
	overflow: hidden;
	width: 60px;
	z-index: 11;
}

.nav:hover .diqu {
	display: block;
}

.nav:hover .cq {
	border-bottom: 2px solid white;
}

.hen {
	background-color: white;
	width: 58px;
	height: 3px;
	position: relative;
	top: -1px;
	display: none;
}

.headerMain {
	position: relative;
	width:80px;
	height: 50px;
}
</style>
