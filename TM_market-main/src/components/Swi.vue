<template>
	<div class="Swiper">
		<ul
			class="item_body"
			:style="{
				transform: 'translate(' + -mark * 750 + 'px,0)',
				width: listWidth,
			}"
			v-on:mouseover="stop()"
			v-on:mouseout="play()"
		>
			<li class="item" v-for="item in items" :key="item.id">
				<img :src="item.picUrl" />
			</li>
		</ul>
		<ul class="btns">
			<li
				:class="['btn', { active: index === mark }]"
				v-for="(item, index) in items"
				:key="index"
				@click="move(index)"
			>
				{{ index + 1 }}
			</li>
		</ul>
		<div class="right" v-on:click="moveR">&gt;</div>
		<div class="left" @click="moveL">&lt;</div>
	</div>
</template>

<script>
export default {
	name: "Swi",
	data() {
		return {
			timer: null,
			mark: 0,
		};
	},

	props: {
		items: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		listLength() {
			return this.items.length - 1;
		},
		listWidth() {
			return this.items.length * 750 + "px";
		},
	},
	methods: {
		autoplay() {
			this.mark++;
			if (this.mark > this.listLength) {
				this.mark = 0;
			}
		},
		play() {
			this.timer = setInterval(this.autoplay, 3000);
		},
		stop() {
			clearInterval(this.timer);
		},
		// 点击小圆点
		move(index) {
			console.log(index);
			console.log(this);
			this.mark = index;
		},
		// 右点
		moveR() {
			// console.log(this.index);
			this.mark++;
			console.log(this.mark);

			if (this.mark > this.listLength) {
				this.mark = 0;
			}
		},
		// 左点
		moveL() {
			this.mark--;
			if (this.mark < 0) {
				this.mark = this.listLength;
			}
		},
	},
};
</script>

<style scoped>
.Swiper {
	width: 750px;
	height: 290px;
	position: relative;
	overflow: hidden;
}

.Swiper:hover .left,
.Swiper:hover .right {
	display: block;
}

ul li {
	list-style: none;
}

.item_body {
	width: 2250px;
	padding: 0;
	/* display: flex; */
	transition: transform 0.4s;
}

.item {
	width: 750px;
	height: 300px;
	float: left;
	text-align: center;
	line-height: 200px;
}

.btns {
	z-index: 1;
	position: absolute;
	right: 3%;
	bottom: 10px;
	padding: 0;
}

.btn {
	width: 18px;
	height: 18px;
	background-color: rgb(53, 53, 53);
	border-radius: 50%;
	float: left;
	margin-left: 10px;
	color: white;
	text-align: center;
	font-size: 12px;
}

.active {
	background-color: red;
}

.right,
.left {
	position: absolute;
	width: 30px;
	height: 40px;
	text-align: center;
	color: gray;
	top: 50%;
	margin-top: -20px;
	cursor: pointer;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 40px;
	color: #fff;
	background: #000;
	text-decoration: none;
	opacity: 0.3;
}

.left {
	display: none;
	left: 5px;
	user-select: none;
}

.right {
	display: none;
	right: 5px;
	user-select: none;
}

img {
	width: 100%;
	height: 100%;
}
</style>
