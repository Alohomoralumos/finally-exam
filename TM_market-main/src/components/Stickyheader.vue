<template>
	<div :style="showBorder">
		<div class="Stickyheader">
			<div class="nav">
				<li class="nav-extra">所有商品分类</li>
			</div>
			<div class="navContent">
				<a class="navitem" style="border-right: 1px #d9d9d9 solid;">
					首页
				</a>
				<a class="navitem">
					企业采购
				</a>
			</div>
			<div
				style="width:500px;display:flex;justify-content: flex-end;flex-grow:1"
			>
				<shopCar
					:buyItemValue="shopCarValue"
					style="position:relative;top:5px"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import shopCar from "./shopCar.vue";
export default {
	name: "Stickyheader",

	components: { shopCar },
	data() {
		return {};
	},
	props: ["shopCarValue", "showBorder"],
	mounted() {},

	methods: {},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.Stickyheader {
	display: flex;
	width: 1190px;
	margin: 0 auto;
	background-color: white;
}
.nav {
	height: 42px;
	line-height: 42px;
	list-style: none;
	left: -5px;
	position: relative;
}

.nav li.nav-extra {
	width: 242px;
	text-align: center;
	background: #2f2f2f;
	color: #fff;
	font-size: 16px;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
	font-weight: 700;
}
.navContent {
	display: block;
}
.navitem {
	font-size: 16px;
	color: #333;
	line-height: 36px;
	margin-left: -1px;
	padding: 0 25px;
	text-decoration: none;
	font-weight: 700;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
	height: 42px;
	cursor: pointer;
}
.navitem:hover {
	color: red;
}
</style>
