<template>
	<div class="info" :id="itemValue.id">
		<h3>{{ itemValue.title }}</h3>
		<div style="border-top:2px solid black;" class="container">
			<div class="recommend" :style="itemValue.itemColor">
				<div class="words">
					<a
						class="item"
						v-for="(i, index) in itemValue.wordsValue"
						:key="index"
					>
						<span class="inner">
							<b class="text">
								{{ i }}
							</b>
						</span>
					</a>
				</div>
			</div>
			<div class="goodslist">
				<a
					class="goodsinfo"
					v-for="(i, index) in itemValue.goodsinfo"
					:key="index + 'item'"
				>
					<div class="wrap">
						<img :src="i.srcimg" />
						<h3></h3>
						<p class="title">{{ i.title }}</p>
						<p class="price">
							<i class="yen">¥</i><span class="goodsPrice">{{ i.price }}</span>
						</p>
						<div class="Btn">
							<button class="icon iconfont icon-gouwuche-copy shopbtn" @click="addGoodsInfo(i)"></button>
						</div>
						<i class="product-mask"></i>
					</div>
				</a>
			</div>
			<div class="pprecomd" style="width: 150px;height: 30px;">
				<img
					src="//img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png"
					alt=""
					style="z-index: 10;"
				/>
				<img
					v-for="(i, index) in itemValue.imgsrc"
					:src="i"
					alt=""
					width="150"
					height="263"
					style="top:-15px;position:relative;z-index: -1;"
					:key="index + 'img'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "recommendItem",
	data() {
		return {};
	},
	props: [
		"itemValue",
		"addGoodsInfo"
	],
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

.info {
	width: 1190px;
	margin: 0 auto;
}

.recommend {
	width: 240px;
	float: left;
}

.container {
	width: 1190px;
	position: relative;
}

.words {
	height: 200px;
	padding: 30px 0 30px 20px;
}

.item {
	margin: 0 10px 10px 0;
	line-height: 1.2;
	float: left;
	width: 57px;
	height: 57px;
	text-align: center;
	color: #2f2f2f;
	background-color: #fff;
	border-radius: 57px;
	position: relative;
	border: 1px solid white;
	display: table;
	font-size: 12px;
}

.item:hover {
	background-color: transparent;
	cursor: pointer;
	border: 1px solid rgb(94, 94, 94);
}

.item:hover .text {
	color: white;
	text-decoration: underline;
}

.inner {
	display: table-cell;
	vertical-align: middle;
	line-height: 1.2;
	text-align: center;
	color: #2f2f2f;
}

.text {
	font-weight: 400;
	max-width: 40px;
	margin: 0 auto;
	overflow: hidden;
	max-height: 2.4em;
	font-size: 12px;
	line-height: 1.2;
	text-align: center;
	color: #2f2f2f;
}

.goodslist {
	margin: 0 150px 0 240px;
	overflow: hidden;
	width: 804px;
}

.goodsinfo {
	float: left;
	width: 200px;
	color: #2f2f2f;
	height: 278px;
	overflow: hidden;
	border-right: 1px solid #e7e7e7;
	margin-right: -1px;
}

.wrap {
	margin: 20px;
	position: relative;
}

.wrap img {
	margin: 0 auto 10px;
	display: block;
}

.title {
	color: #666;
	margin-bottom: 5px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
}

.wrap h3 {
	height: 18px;
}

.price {
	font-size: 18px;
	font-weight: 700;
	font-family: arial;
	line-height: 1.231;
	margin-top: 10px;
}

.yen {
	font-size: 0.5em;
	font-style: normal;
	vertical-align: top;
	font-weight: 400;
}

.goodsPrice {
	font-size: 18px;
	font-weight: 700;
	font-family: arial;
	line-height: 1.231;
}

.shopbtn {
	width: 30px;
	height: 30px;
	border-radius: 30px;
	color: white;
	font-size: 20px;
	line-height: 20px;
	background: 0 0;
	border: none;
	cursor: pointer;
	outline: 0;
	text-align: center;
}

.Btn {
	width: 30px;
	height: 30px;
	background-color: red;
	border-radius: 30px;
	position: absolute;
	bottom: 0;
	right: 0;
	margin-top: 10px;
}

.pprecomd {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 39px;
}
</style>
