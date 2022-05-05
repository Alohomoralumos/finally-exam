<template>
	<div class="bottomItem">
		<img
			src="//gw.alicdn.com/tfs/TB1wr5SmUY1gK0jSZFMXXaWcVXa-336-120.png"
			class="logo"
			width="112px"
			height="40px"
		/>
		<dl>
			<dt>
				<span><a>购物指南</a></span>
			</dt>
			<dd>
				<a><i></i>购物流程</a>
				<a><i></i>配送时效说明</a>
				<a><i></i>配送区域及费用</a>
				<a><i></i>购买生鲜须知</a>
				<a><i></i>发票流程</a>
				<a><i></i>商品限购说明</a>
			</dd>
		</dl>
		<dl>
			<dt>
				<span><a>售后服务</a></span>
			</dt>
			<dd>
				<a><i></i>退货规则</a>
				<a><i></i>退货指南</a>
				<a><i></i>保质期说明</a>
				<a><i></i>联系客服</a>
			</dd>
		</dl>
		<dl>
			<dt>
				<span><a>自助服务</a></span>
			</dt>
			<dd>
				<a><i></i>订单物流查询</a>
				<a><i></i>我的购物车</a>
				<a><i></i>我的现金券</a>
				<a><i></i>购物常见问题</a>
				<a class="chaoshi-highlight"><i></i>建议反馈</a>
			</dd>
		</dl>

		<dl>
			<dt>
				<span><a>商家服务</a></span>
			</dt>
			<dd>
				<a><i></i>关于天猫超市</a>
				<a class="chaoshi-highlight"><i></i>入驻天猫超市</a>
				<a><i></i>商家常见问题</a>
				<a><i></i>淘鲜达招商</a>
			</dd>
		</dl>

		<dl class="tmall-mobile" style="height:100px">
			<dt>随时随地逛</dt>
			<dd>
				<a class="join"
					><img
						src="//gtms03.alicdn.com/tps/i3/T1zuSAFRJbXXaSJVsE-115-115.png"
						alt="随时随地逛"
				/></a>
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	name: "bottomItem",
	data() {
		return {};
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
	font-size: 12px;
}
.bottomItem {
	padding-left: 170px;
	width: 1020px;
	background-position: 0 bottom;
	position: relative;
	padding-top: 22px;
	height: 190px;
	margin: auto;
	border-top: 1px solid #ededed;
	background: url(//img.alicdn.com/tfs/TB1dl28RXXXXXbzaFXXXXXXXXXX-136-50.png)
		45px bottom/68px 25px no-repeat;
	text-align: center;
}
.bottomItem .logo {
	position: absolute;
	top: 22px;
	left: 0;
}
dl {
	width: 150px;
	float: left;
	text-align: center;
	padding-left: 52px;
}
dt {
	color: #646464;
	font-size: 16px;
	font-weight: 700;
	height: 30px;
	line-height: 30px;
	text-align: left;
	cursor: pointer;
}
dt > span > a {
	width: 100px;
	overflow: hidden;
	text-align: left;
	height: 20px;
	line-height: 20px;
	font-size: 16px;
	font-weight: 700;
}
dd {
	text-align: left;
}
dd > a {
	width: 100px;
	overflow: hidden;
	text-align: left;
	height: 20px;
	line-height: 20px;
	color: #8b8b8b;
	display: inline-block;
	cursor: pointer;
}
dt:hover {
	text-decoration: underline;
}
dd > a:hover {
	text-decoration: underline;
}
</style>
