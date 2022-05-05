<template>
	<div class="lift">
		<a
			:class="itemclass[index]"
			target="_self"
			:href="'#' + i.id"
			v-for="(i, index) in flitrecmod"
			:key="index + 'lift'"
			>{{ i.title.slice(0, 4)
			}}<span class="icon iconfont icon-jiantouyou"></span
		></a>
		<a class="qrcode"
			><img src="//img.alicdn.com/tps/i1/T1dC1wFIVcXXcI6BY_-280-280.png" />
		</a>
		<a class="item" target="_self" style="border-bottom:1px solid #e7e7e7"
			>在线咨询<span class="icon iconfont icon-jiantouyou"></span
		></a>
	</div>
</template>

<script>
import "../iconfont/iconfont.css";
export default {
	name: "lift",
	props: ["topDistance", "flitrecmod"],
	data() {
		return {
			itemclass: ["item current", "item", "item", "item", "item"],
			order: 0,
		};
	},
	watch: {
		topDistance() {
			if (this.topDistance > 800) {
				if (this.topDistance > 3200) {
					this.order = 4;
				} else {
					this.order = Math.floor((this.topDistance - 800) / 580);
				}
			}
		},
        order(){
            let arr=[];
            for(let i =0 ;i<this.flitrecmod.length;i++)
            {
                if(i===this.order)
                {
                    arr.push("item current");
                }
                else{
                    arr.push("item");
                }
            }
            this.itemclass=arr;
        }
	},
	mounted() {},

	methods: {},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: tahoma, arial, "\5FAE\8F6F\96C5\9ED1", sans-serif;
	font-size: 12px;
	text-align: center;
}
.lift {
	background-color: #fff;
	font-size: 12px;
	width: 79px;
	text-align: center;
	left: 50%;
	top: 10%;
	margin-left: -680px !important;
	z-index: 110;
	position: fixed;
}
.item {
	display: block;
	border: 1px solid #e7e7e7;
	border-bottom: none;
	line-height: 22px;
	color: #666;
	text-decoration: none;
	outline: 0;
}
.qrcode {
	color: #999;
	padding: 7px 7px 2px;
	line-height: 15px;
	display: block;
	border: 1px solid #e7e7e7;
	border-bottom: none;
	text-decoration: none;
	outline: 0;
}
.qrcode img {
	width: 100%;
	border: 2px solid #33363d;
	margin-left: -2px;
	margin-top: -2px;
}
.current{
    background-color:red;
    color: white;
}
.item:hover{
    background-color:red;
    color: white;
}
</style>
