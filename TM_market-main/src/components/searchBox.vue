<template>
	<div style="position:relative">
		<div class="searchBox">
			<div class="boxcontainer">
				<div class="inputcontainer">
					<input
						type="text"
						placeholder="搜索天猫超市商品"
						@focus="isShow = true"
						@blur="notFocus"
						v-model="searchBoxValue"
					/>
					<button>
						搜索
					</button>
				</div>
			</div>
		</div>
		<div class="resultcontainer" v-show="isShow">
			<div
				class="resultItem"
				v-for="(i, index) in resultValue"
				:key="index + 'result'"
			>
				{{ i }}
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "searchBox",

	data() {
		return {
			resultValue: [],
			isShow: false,
			isFocus: false,
			searchBoxValue: "",
		};
	},

	mounted() {},
	watch: {
		searchBoxValue() {
			if (this.searchBoxValue === "") {
				this.resultValue = [];
			} else {
				if (this.timer) {
					clearTimeout(this.timer);
				}
				this.timer = null;
				this.timer = setTimeout(() => {
					this.sendRequest(this.searchBoxValue);
				}, 1000);
			}
		},
	},
	methods: {
		handleJudge() {
			if (this.isFocus) {
				this.isShow = true;
			}
		},
		sendRequest(value) {
			axios.get("http://localhost:8080/searchData.json").then((response) => {
				this.resultValue = response.data.data.filter(item => item.indexOf(value)>=0)
			});
		},
		notFocus() {
			this.isShow = false;
			if (this.searchBoxValue === "") this.resultValue = [];
		},
		ObtoArr(object) {
			let arr = [];
			for (var i in object) {
				arr.push(object[i]); //属性
			}
			return arr;
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

input {
	border: none;
	outline: none;
}

.searchBox {
	border: solid #30b30e;
	border-color: #30b30e;
	border-width: 3px 0 3px 3px;
	width: min-content;
}

.boxcontainer {
	width: 540px;
	height: 30px;
}

.inputcontainer {
	position: relative;
	display: flex;
}

.inputcontainer > input {
	color: #000;
	margin: 0;
	z-index: 2;
	width: 439px;
	height: 20px;
	line-height: 20px;
	padding: 5px 3px 5px 5px;
	outline: 0;
	border: none;
	font-weight: 900;
}

button {
	background-color: #30b30e;
	position: absolute;
	z-index: 1;
	right: 0;
	top: 0;
	width: 90px;
	border: 0;
	font-size: 16px;
	letter-spacing: 4px;
	cursor: pointer;
	color: #fff;
	height: 30px;
	overflow: hidden;
	font-family: "\5FAE\8F6F\96C5\9ED1", arial, "\5b8b\4f53";
}

.resultcontainer {
	border: 0.8px solid #bebebe;
	width: min-content;
	z-index: 10;
	position: absolute;
	left: 1px;
	top: 30px;
}

.resultItem {
	width: 450px;
	height: 26px;
	background-color: white;
	font-weight: 700;
	color: #000;
	text-align: left;
	list-style: none;
	font-size: 12px;
	line-height: 26px;
	white-space: nowrap;
	cursor: pointer;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
}

.resultItem:hover {
	background-color: red;
	color: white;
}
</style>
