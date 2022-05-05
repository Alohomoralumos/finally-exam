<template>
	<div
		class="center-Content"
		style="display:flex;margin:0 auto;width:1190px;justify-content: flex-end;border-top:1px solid black"
	>
		<leftItem />
		<div class="navContent">
			<Swi style="margin-top:5px" :items="centerContentValue.items" />
			<div class="marketShow">
				<div class="row1" v-if="centerContentValue.bottomSrc">
					<img
						v-for="(i, index) in centerContentValue.bottomSrc.row1"
						:key="index + 'row1'"
						:src="i"
					/>
				</div>
				<div class="row2" v-if="centerContentValue.bottomSrc">
					<img
						v-for="(i, index) in centerContentValue.bottomSrc.row2"
						:key="index + 'row2'"
						:src="i"
					/>
				</div>
			</div>
		</div>
		<div style="display:flex;justify-content: flex-end;" class="rightShow">
			<div style="width:200px;height:31px;"></div>
			<img
				v-for="(i, index) in centerContentValue.rightImgSrc"
				:key="index + 'right'"
				:src="i"
			/>
		</div>
	</div>
</template>

<script>
import leftItem from "./leftItem.vue";
import Swi from "./Swi.vue";
export default {
	name: "centerContent",

	components: { leftItem, Swi},

	data() {
		return {};
	},
	props: ["centerContentValue"],
	mounted() {},

	methods: {},
};
</script>

<style scoped>
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
.marketShow img {
	transition: 0.1s linear;
}
.marketShow img:hover {
	transform: scale(1.2);
}
.rightShow {
	width: 200px;
	flex-wrap: wrap;
	height: 300px;
}
.rightShow img {
	width: 188px;
	height: 170px;
}
</style>
