<template>
	<div id="app">
		
	</div>
</template>

<script>
import Headerlayout from "./components/headerLayout.vue";
import topItem from "./components/topItem.vue";
import centerContent from "./components/centerContent.vue";
import recommendItem from "./components/recommendItem.vue";
import shortcut from "./components/shortcut.vue";
import bottomItem from "./components/bottomItem.vue";
import Stickyheader from "./components/Stickyheader.vue";
import lift from "./components/lift.vue";
import axios from "axios";
export default {
	name: "App",
	components: {
		Headerlayout,
		topItem,
		centerContent,
		recommendItem,
		shortcut,
		bottomItem,
		Stickyheader,
		lift,
	},
	methods: {
		addGoodsInfo(value) {
			this.shopCarValue.push({
				imgsrc: value.srcimg,
				goodsnumber: 1,
				goodsprice: value.price,
				kg: value.kg,
				id: "goods",
			});
		},
		reduce(order) {
			this.shopCarValue[order].goodsnumber--;
			if (this.shopCarValue[order].goodsnumber === 0) {
				this.shanchu(order);
			}
		},
		plus(order) {
			this.shopCarValue[order].goodsnumber++;
		},
		shanchu(order) {
			this.shopCarValue.splice(order, 1);
		},
		handleScroll() {
			this.topDistance = document.documentElement.scrollTop;
			console.log(this.topDistance);
		},
		flitrecmod(val) {
			let arr = [];
			for (let i = 0; i < val.length; i++) {
				arr.push({
					title: val[i].title,
					id: val[i].id,
				});
			}
			return arr;
		},
	},
	data() {
		return {
			centerContentValue: {},
			recomdValue: [],
			shopCarValue: [],
			topDistance: 0,
			showBorder: "",
			liftShow: false,
		};
	},
	watch: {
		topDistance(val) {
			if (val >= 196) {
				this.showBorder = "border-bottom:1px solid black;";
			} else {
				this.showBorder = "";
			}
			if (val > 800) {
				this.liftShow = true;
			} else {
				this.liftShow = false;
			}
		},
	},
	created() {
		axios("http://localhost:8080/centerContentValue.json").then((res) => {
			this.centerContentValue = res.data;
		});
		axios("http://localhost:8080/recomdValue.json").then((res) => {
			this.recomdValue = res.data;
		});
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		this.$bus.$on('reduce', this.reduce);
		this.$bus.$on("plus",this.plus);
		this.$bus.$on("shanchu",this.shanchu);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<style>
</style>
