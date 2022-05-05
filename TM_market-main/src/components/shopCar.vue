<template>
	<div style="display:flex;justify-content: flex-end;">
		<div class="shopCar">
			<div class="shopCarHeader">
				<div class="shopCarIcon">
					<span
						class="icon iconfont icon-gouwuche-copy"
						style="font-size: 20px;"
					></span>
				</div>
				<a class="price">
					<strong> ${{ totalPrice }} </strong>
					元
				</a>
				<a class="heavy">
					<strong>
						{{ totalKg }}
					</strong>
					kg
				</a>
				<s class="arrow"></s>
			</div>
			<div class="shopCarContainer">
				<div class="topDes">
					<div class="item">商品</div>
					<div class="item">数量</div>
					<div class="item">价格</div>
					<div class="item">删除</div>
				</div>
				<div class="tmcs">
					天猫超市
				</div>
				<div class="buyItem" v-for="(b, index) in buyItemValue" :key="b.id+index">
					<img :src="b.imgsrc" />
					<div class="itemNumber">
						<div class="reduce btn" @click="reduceTest(index)">-</div>
						<input
							type="text"
							:value="b.goodsnumber"
							class="numb"
							readonly="readonly"
						/>
						<div class="plus btn" @click="plusTest(index)">+</div>
					</div>
					<div class="price">
						${{ (b.goodsnumber * b.goodsprice).toFixed(2) }}
					</div>
					<div class="deleteBtn" @click="shanchuTest(index)">×</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "shopCar",

	data() {
		return {
		};
	},
	props: [
		"buyItemValue",
		"reduce",
		"plus",
		"shanchu"
	],
	methods: {
		reduceTest(order){
			this.$bus.$emit('reduce',order);
		},
		plusTest(order){
			this.$bus.$emit('plus',order);
		},
		shanchuTest(order){
			this.$bus.$emit('shanchu',order);
		}
	},
	computed: {
		totalPrice() {
			let num = 0;
			for (let i = 0; i < this.buyItemValue.length; i++) {
				num +=
					this.buyItemValue[i].goodsnumber * this.buyItemValue[i].goodsprice;
			}
			return num.toFixed(2);
		},
		totalKg() {
			let kg = 0;
			for (let i = 0; i < this.buyItemValue.length; i++) {
				kg += this.buyItemValue[i].goodsnumber * this.buyItemValue[i].kg;
			}
			return kg.toFixed(2);
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

.shopCar {
	float: right;
	position: relative;
	top: -3px;
	width: 200px;
	height: 31px;
	margin: 3px 0;
	background: #bf0000;
	z-index: 103;
	margin-left: auto;
	transition: 0.2s ease-in 0.2s;
}

.shopCar:hover {
	width: 240px;
}

.shopCarHeader {
	height: 33px;
	line-height: 33px;
	color: #fff;
	cursor: pointer;
	padding: 0 18px;
	position: relative;
	font-size: 12px;
	display: flex;
	align-items: center;
}

.price {
	color: #fcff00;
	font-family: arial;
	font-size: 12px;
	outline: 0;
	display: flex;
}

.price strong {
	font-size: 22px;
	font-weight: bolder;
	vertical-align: middle;
}

.heavy {
	color: #fff;
	text-decoration: none;
	display: flex;
	margin-left: 10px;
}

.heavy strong {
	font-style: normal;
	font-weight: 400;
}

.arrow {
	width: 0;
	height: 0;
	border: 5px solid transparent;
	border-top-color: transparent;
	border-top-color: #fff;
	background: 0 0;
	right: 8px;
	top: 15px;
	overflow: hidden;
	transition: all 0.2s ease-in 0.2s;
	cursor: pointer;
	position: absolute;
}

.shopCar:hover .arrow {
	top: 8px;
	border: 5px solid transparent;
	border-bottom-color: transparent;
	border-bottom-color: #fff;
}

.shopCarIcon {
	width: 33px;
	height: 33px;
	background-color: black;
	border: 3px solid white;
	border-radius: 33px;
	text-align: center;
	position: absolute;
	left: -30px;
	font-size: 16px;
}

.shopCarContainer {
	border-left: 4px red solid;
	border-right: 4px red solid;
	border-bottom: 4px red solid;
	height: 0px;
	transition: 0.2s ease-in 0.4s;
	opacity: 0;
	overflow: hidden;
	z-index: 999;
	background-color: white;
}

.shopCar:hover .shopCarContainer {
	height: 300px;
	opacity: 1;
}

.topDes {
	background: #f4f4f4;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	text-align: center;
	display: flex;
	justify-content: space-between;
}

.topDes .item {
	width: 46px;
	color: #666;
}

.tmcs {
	background-color: #fff8e2;
	font-size: 12px;
}

.buyItem {
	width: 232px;
	height: 46px;
	background-color: white;
	display: flex;
	align-items: center;
}

.buyItem img {
	width: 40px;
	height: 40px;
}

.itemNumber {
	display: flex;
	align-items: center;
	margin-left: 20px;
}

.btn {
	width: 15px;
	height: 15px;
	text-align: center;
	border: 1px solid #dbdbdb;
	font-size: 12px;
	cursor: pointer;
	user-select: none;
}

.btn:hover {
	border: 1px solid black;
}

.numb {
	width: 24px;
	height: 13px;
	text-align: center;
	outline: none;
}

.buyItem .price {
	word-break: break-all;
	word-wrap: break-word;
	overflow: hidden;
	color: #bf0000;
	line-height: 30px;
	width: 60px;
	text-align: center;
	display: inline-block;
	vertical-align: middle;
	font-size: 12px;
}

.deleteBtn {
	text-align: center;
	display: inline-block;
	vertical-align: middle;
	width: 40px;
	color: #666;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	margin-left: 5px;
}

.deleteBtn:hover {
	color: gray;
}
</style>
