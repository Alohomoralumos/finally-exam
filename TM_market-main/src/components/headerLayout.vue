<template>
	<div
		style="display:flex;margin-left:auto;margin-right:auto;width:1190px;margin-top:20px"
	>
		<span class="mlogo" style="margin-left:45px">
			<img
				src="http://gw.alicdn.com/tfs/TB1OpaTmUz1gK0jSZLeXXb9kVXa-666-243.png"
			/>
		</span>
		<locationSelect style="position:relative;top:-25px;margin-left:60px" />
		<searchBox style="margin-left:60px"/>
		<div class="rightImgShow">
			<div class="imgItem">
				<i class=" iconfont icon-chong" style="color:green"> </i>
				<div class="textDes" style="font-size:12px">一站式购齐</div>
			</div>
			<div class="imgItem">
				<i class=" iconfont icon-chong" style="color:green"> </i>
				<div class="textDes" style="font-size:12px">满88包邮</div>
			</div>
			<div style="height:30px">
				<img
					src="https://img.alicdn.com/tps/i1/TB1L25iFFXXXXXcbpXXgBrbGpXX-36-36.png"
				/>
			</div>
			<div style="height:30px">
				<img
					src="https://img.alicdn.com/tfs/TB1fc6SdKuSBuNjy1XcXXcYjFXa-36-36.png"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import locationSelect from "./locationSelect.vue";
import searchBox from "./searchBox.vue";
import "../iconfont/iconfont.css";
export default {
	name: "Headerlayout",
	components: { locationSelect,searchBox },
	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style scoped>
.mlogo {
	float: left;
	margin-right: 10px;
	font-size: 100%;
	font-weight: 400;
	line-height: 62px;
	width: 130px;
	height: 48px;
}
.mlogo img {
	widows: 100%;
	height: 100%;
}
.rightImgShow {
	display: flex;
	align-items: flex-end;
	height: 30px;
	margin-left: 30px;
}
.imgItem {
	width: 90px;
	height: 20px;
	display: flex;
	justify-items: center;
	align-items: center;
	margin-left: 10px;
}
.textDes {
	color: #666;
	font-weight: bolder;
}
</style>
