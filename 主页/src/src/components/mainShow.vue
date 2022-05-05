<template>
	<div id="mainShow">
		<div class="left">
			<div>全部商品分类</div>
			<li>图书、童书</li>
			<li>电子书</li>
			<li>创意文具</li>
			<li>服饰、内衣</li>
			<li>鞋靴、箱包</li>
			<li>运动户外</li>
			<li>运动户外</li>
			<li>孕、婴、童</li>
			<li>家居、家纺、汽车</li>
			<li>家具、家装、康体</li>
			<li>个人护理、清洁</li>
			<li>食品、茶酒</li>
			<li>珠宝饰品</li>
			<li>手机、数码、电脑办公</li>
			<li>家用电器</li>
			<li>当当礼品卡、生活服务</li>
			<li></li>
		</div>
		<div class="middle">
			<div>
				<li>图书</li>
				<li>电子书</li>
				<li>童装童鞋</li>
				<li>女装</li>
				<li>食品</li>
				<li>母婴玩具</li>
			</div>
			<div :class="father">
				<div class="show_button">
					<div @click="counter--, lefti(counter)" class="left_button"></div>
					<img :src="main_pictures[0]" :class="main0" />
					<img :src="main_pictures[1]" :class="main1" />
					<img :src="main_pictures[2]" :class="main2" />
					<img :src="main_pictures[3]" :class="main3" />
					<img :src="main_pictures[4]" :class="main4" />
					<img :src="main_pictures[5]" :class="main5" />
					<img :src="main_pictures[6]" :class="main6" />
					<img :src="main_pictures[7]" :class="main7" />
					<div @click="counter++, right(counter)" class="right_button"></div>
				</div>
				<div>
					<li @mouseenter="enter(0)" :class="li1">1</li>
					<li @mouseenter="enter(1)" :class="li2">2</li>
					<li @mouseenter="enter(2)" :class="li3">3</li>
					<li @mouseenter="enter(3)" :class="li4">4</li>
					<li @mouseenter="enter(4)" :class="li5">5</li>
					<li @mouseenter="enter(5)" :class="li6">6</li>
					<li @mouseenter="enter(6)" :class="li7">7</li>
					<li @mouseenter="enter(7)" :class="li8">8</li>
				</div>
				<div class="bottom_show_button">
					<div class="leftt_button" @click="change_bottom()"></div>
					<div class="rightt_button" @click="change_bottom()"></div>
					<div
						v-for="item in bottom_pictures_1"
						v-bind:key="item"
						:class="bottom1"
					>
						<img :src="item" class="b_img" />
					</div>
					<div
						v-for="item in bottom_pictures_2"
						v-bind:key="item"
						:class="bottom2"
					>
						<img :src="item" class="b_img" />
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<img :src="right_pictures[0]" />
			<div class="news" @mouseenter="newss()" :class="newsdark">信息公告</div>
			<div class="service" @mouseenter="services()" :class="servicedark">
				服务公告
			</div>
			<div class="news_box" :class="show_news">
				<li v-for="key in news_texts" v-bind:key="key">{{ key }}</li>
			</div>
			<div class="service_box" :class="service_news">
				<li v-for="key in service_texts" v-bind:key="key">{{ key }}</li>
			</div>
			<div class="right_button_">
				<div class="right_left_button" @click="n--, right_left_right(n)"></div>
				<div class="right_right_button" @click="n++, right_left_right(n)"></div>
				<div class="shell" :style="{ left: left }">
					<img :src="right_pictures[0]" :class="buttom_1" />
					<img :src="right_pictures[1]" :class="buttom_2" />
					<img :src="right_pictures[2]" :class="buttom_3" />
				</div>
				<div>
					<li :class="right_li1"></li>
					<li :class="right_li2"></li>
					<li :class="right_li3"></li>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "mainShow",
	data() {
		return {
			main_pictures: " ",
			img_one: "",
			img_two: "",
			img_three: "",
			img_four: "",
			father: "",
			buttom_1: "show",
			buttom_2: "show",
			buttom_3: "show",
			counter: 0,
			n: 0,
			left: 0,
			bottom_pictures_1: " ",
			right_pictures: " ",
			news_texts: " ",
			service_texts: " ",
			show_news: "show",
			service_news: "no_show",
			bottom1: "show",
			bottom2: "no_show",
			main0: "show",
			main1: "no_show",
			main2: "",
			main3: "",
			main4: "",
			main5: "",
			main6: "",
			main7: "",
			li1: "red",
			li2: "grey",
			li3: "grey",
			li4: "grey",
			li5: "grey",
			li6: "grey",
			li7: "grey",
			li8: "grey",
			right_li1: "red",
			right_li2: "grey",
			right_li3: "grey",
			newsdark: "",
			servicedark: "dark",
			index: 0,
		};
	},
	mounted() {
		axios
			.get("http://127.0.0.1:3000/books/main_show")
			.then((res) => {
				(this.main_pictures = res.data.main_pictures),
					(this.bottom_pictures_1 = res.data.bottom_pictures_1),
					(this.bottom_pictures_2 = res.data.bottom_pictures_2),
					(this.right_pictures = res.data.right_pictures),
					(this.news_texts = res.data.news_texts),
					(this.service_texts = res.data.service_texts);
			})
			.catch(function(error) {
				console.log(error);
			}),
			setInterval(() => {
				this.index++;
				this.desc();
				this.add();
				this.position();
			}, 3000);
	},
	methods: {
		position: function() {
			this.left = this.n * -100 + "%";
		},
		add: function() {
			if (this.index >= 2) {
				this.index = 0;
			} else {
				this.index++;
			}
		},
		desc: function() {
			if (this.index < 1) {
				this.index = 2;
			} else {
				this.index--;
			}
		},
		/*
                changePage:function(n) {
                    while(n<0)
                    {
                        n+=8
                    }
                    while(n>=8)
                    {
                        n-=8
                    }
                    
                    if(n==1){
                        this.main0="show";
                        this.show1=true;
                    }
                    else if(n==2){
                        this.main1="show";
                        this.show2=true;
                    }
                    else if(n==3){
                        this.main2="show";
                        this.show3=true;
                    }
                    else if(n==4){
                        this.main3="show";
                        this.show4=true;
                    }
                    else if(n==5){
                        this.main4="show";
                        this.show5=true;
                    }
                    else if(n==6){
                        this.main5="show";
                        this.show6=true;
                    }
                    else if(n==7){
                        this.main6="show";
                        this.show7=true;
                    }
                    else if(n==8){
                        this.main7="show";
                        this.show8=true;
                    }
                },*/
		enter: function(num) {
			this.main0 = "no_show";
			this.main1 = "no_show";
			this.main2 = "no_show";
			this.main3 = "no_show";
			this.main4 = "no_show";
			this.main5 = "no_show";
			this.main6 = "no_show";
			this.main7 = "no_show";
			this.li1 = "grey";
			this.li2 = "grey";
			this.li3 = "grey";
			this.li4 = "grey";
			this.li5 = "grey";
			this.li6 = "grey";
			this.li7 = "grey";
			this.li8 = "grey";
			if (num == 0) {
				this.main0 = "show";
				this.li1 = "red";
			} else if (num == 1) {
				this.main1 = "show";
				this.li2 = "red";
			} else if (num == 2) {
				this.main2 = "show";
				this.li3 = "red";
			} else if (num == 3) {
				this.main3 = "show";
				this.li4 = "red";
			} else if (num == 4) {
				this.main4 = "show";
				this.li5 = "red";
			} else if (num == 5) {
				this.main5 = "show";
				this.li6 = "red";
			} else if (num == 6) {
				this.main6 = "show";
				this.li7 = "red";
			} else if (num == 7) {
				this.main7 = "show";
				this.li8 = "red";
			}
		},
		right: function(counter) {
			while (counter < 0) {
				counter += 8;
			}
			while (counter > 8) {
				counter -= 8;
			}
			this.main0 = "no_show";
			this.main1 = "no_show";
			this.main2 = "no_show";
			this.main3 = "no_show";
			this.main4 = "no_show";
			this.main5 = "no_show";
			this.main6 = "no_show";
			this.main7 = "no_show";
			this.li1 = "grey";
			this.li2 = "grey";
			this.li3 = "grey";
			this.li4 = "grey";
			this.li5 = "grey";
			this.li6 = "grey";
			this.li7 = "grey";
			this.li8 = "grey";
			if (counter == 1) {
				this.main0 = "show";
				this.li1 = "red";
			} else if (counter == 2) {
				this.main1 = "show";
				this.li2 = "red";
			} else if (counter == 3) {
				this.main2 = "show";
				this.li3 = "red";
			} else if (counter == 4) {
				this.main3 = "show";
				this.li4 = "red";
			} else if (counter == 5) {
				this.main4 = "show";
				this.li5 = "red";
			} else if (counter == 6) {
				this.main5 = "show";
				this.li6 = "red";
			} else if (counter == 7) {
				this.main6 = "show";
				this.li7 = "red";
			} else if (counter == 8) {
				this.main7 = "show";
				this.li8 = "red";
			}
		},
		lefti: function(counter) {
			while (counter < 0) {
				counter += 8;
			}
			while (counter > 8) {
				counter -= 8;
			}
			this.main0 = "no_show";
			this.main1 = "no_show";
			this.main2 = "no_show";
			this.main3 = "no_show";
			this.main4 = "no_show";
			this.main5 = "no_show";
			this.main6 = "no_show";
			this.main7 = "no_show";
			this.li1 = "grey";
			this.li2 = "grey";
			this.li3 = "grey";
			this.li4 = "grey";
			this.li5 = "grey";
			this.li6 = "grey";
			this.li7 = "grey";
			this.li8 = "grey";
			if (counter == 1) {
				this.main0 = "show";
				this.li1 = "red";
			} else if (counter == 2) {
				this.main1 = "show";
				this.li2 = "red";
			} else if (counter == 3) {
				this.main2 = "show";
				this.li3 = "red";
			} else if (counter == 4) {
				this.main3 = "show";
				this.li4 = "red";
			} else if (counter == 5) {
				this.main4 = "show";
				this.li5 = "red";
			} else if (counter == 6) {
				this.main5 = "show";
				this.li6 = "red";
			} else if (counter == 7) {
				this.main6 = "show";
				this.li7 = "red";
			} else if (counter == 8) {
				this.main7 = "show";
				this.li8 = "red";
			}
		},
		newss: function() {
			this.show_news = "show";
			this.newsdark = "";
			this.servicedark = "dark";
			this.service_news = "no_show";
		},
		services: function() {
			this.newsdark = "dark";
			this.servicedark = "";
			this.show_news = "no_show";
			this.service_news = "show";
		},
		change_bottom: function() {
			if (this.bottom1 == "show") {
				this.bottom1 = "no_show";
				this.bottom2 = "show";
			} else {
				this.bottom1 = "show";
				this.bottom2 = "no_show";
			}
		},
		right_left_right: function(n) {
			this.buttom_1 = "no_show";
			this.buttom_2 = "no_show";
			this.buttom_3 = "no_show";
			this.right_li1 = "grey";
			this.right_li2 = "grey";
			this.right_li3 = "grey";
			while (n >= 3) n -= 3;
			while (n < 0) n += 3;
			if (n == 0) {
				this.buttom_1 = "show";
				this.right_li1 = "red";
			} else if (n == 1) {
				this.buttom_2 = "show";
				this.right_li2 = "red";
			} else if (n == 2) {
				this.buttom_3 = "show";
				this.right_li3 = "red";
			}
		},
		show_button: function() {},
	},
};
</script>

<style scoped>
* {
	padding: 0px;
	margin: 0px;
	text-decoration: none;
	list-style: none;
}
#mainShow {
	margin-left: 30px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 1200px;
	height: 600px;
}
#mainShow > .left {
	width: 200px;
	height: 600px;
}
.left > img {
	width: 200px;
}
#mainShow .middle {
	position: relative;
	width: 800px;
	height: 600px;
}
#mainShow .middle > div:nth-of-type(1) {
	width: 800px;
	border-bottom: 3px solid rgb(255, 40, 50);
	height: 40px;
}
#mainShow .middle > div:nth-of-type(2) {
	width: 800px;
	height: 350px;
	overflow: hidden;
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(1) > img {
	width: 800px;
	height: 350px;
}
@keyframes animm {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@keyframes anim {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(3) {
	position: absolute;
	top: 395px;
	left: 0px;
	width: 1000px;
	height: 80px;
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(2) {
	position: absolute;
	top: 370px;
	margin-left: 280px;
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(2) > li {
	float: left;
	width: 20px;
	height: 20px;
	margin-left: 10px;
	margin-bottom: 10px;
	border-radius: 50%;
	color: white;
	font: 12px/20px "Microsoft";
	text-align: center;
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(2) > li:hover {
	background-color: rgb(255, 40, 50);
}
.grey {
	background-color: rgb(100, 100, 100);
}
.red {
	background-color: rgb(255, 40, 50);
}
#mainShow .middle > div:nth-of-type(1) > li {
	display: block;
	float: left;
	text-align: center;
	width: 70px;
	height: 40px;
	color: black;
	font: 700 15px/40px "Microsoft";
}
#mainShow .middle > div:nth-of-type(1) > li:hover {
	color: red;
}
#mainShow .middle > div:nth-of-type(2) > div:nth-of-type(3) {
	position: absolute;
}
#mainShow .middle > div:nth-of-type(2) > img:nth-of-type(1) {
	width: 800px;
	height: 350px;
}
.b_img {
	float: left;
	width: 200px;
	height: 205px;
}
#mainShow .left {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: rgb(230, 230, 230);
}
#mainShow .left > div {
	width: 190px;
	height: 40px;
	background-color: rgb(255, 40, 50);
	border-bottom: 3px solid rgb(255, 40, 50);
	font: 700 13px/40px "Microsoft";
	color: white;
	padding-left: 10px;
}
#mainShow .left > li {
	width: 190px;
	height: 33px;
	background-color: rgb(230, 230, 230);
	font: 13px/40px "Microsoft";
	padding-left: 10px;
}
#mainShow .left > li:hover {
	width: 188px;
	height: 28px;
	background-color: white;
	font: 16px/28px "Microsoft";
	border: 2px solid rgb(255, 40, 50);
	color: rgb(255, 40, 50);
	margin-top: 3px;
	margin-bottom: 3px;
	padding-left: 7px;
}
#mainShow .right {
	width: 200px;
	height: 600px;
}
#mainShow > .right > div:nth-of-type(5) {
	position: absolute;
	overflow: hidden;
	top: 430px;
}
#mainShow > .right > div:nth-of-type(5) > .shell > img {
	background-size: cover;
	width: 198px;
	height: 170px;
}
#mainShow > .right > div:nth-of-type(5) > .shell {
	width: 300%;
	height: 100%;
	display: flex;
	position: relative;
	transition: 0.2s;
}
#mainShow .right > img {
	position: absolute;
	top: 41px;
	border-top: 3px solid rgb(255, 40, 50);
	width: 200px;
	height: 200px;
}
.left_button {
	left: 0px;
}
.right_button {
	right: 0px;
}
.left_button,
.right_button {
	position: absolute;
	top: 160px;
	width: 0px;
	height: 90px;
	background-color: rgba(100, 100, 100, 0.3);
	transition: width 0.5s;
}
.show_button:hover .left_button,
.show_button:hover .right_button {
	width: 40px;
}
.no_show {
	animation: animm 1s;
	display: none;
}
.show {
	animation: anim 1s;
	display: block;
}
.right .news,
.right .service {
	position: absolute;
	top: 241px;
	display: block;
	width: 99px;
	height: 40px;
	font: 15px/40px "Microsoft";
	text-align: center;
	color: rgb(118, 118, 118);
	margin-left: 1px solid rgb(230, 230, 230);
}
.right .service {
	left: 1130px;
}
.news_box,
.service_box {
	position: absolute;
	top: 281px;
	width: 200px;
	height: 150px;
	border-bottom: 1px solid rgb(230, 230, 230);
}
.dark {
	background-color: rgb(240, 240, 240);
}
.news_box > li,
.service_box > li {
	height: 30px;
	width: 200px;
	color: red;
	font: 10px/30px "Microsoft";
}
.leftt_button,
.rightt_button {
	position: absolute;
	top: 80px;
	height: 80px;
	width: 0px;
	background-color: rgba(100, 100, 100, 0.3);
	transition: width 0.5s;
}
.bottom_show_button:hover .leftt_button,
.bottom_show_button:hover .rightt_button {
	width: 40px;
}
.leftt_button {
	left: 0px;
}
.rightt_button {
	right: 200px;
}
.right_left_button,
.right_right_button {
	position: absolute;
	background-color: rgba(100, 100, 100, 0.3);
	top: 65px;
	height: 60px;
	width: 0px;
	transition: width;
}
.left_button:hover,
.right_button:hover,
.leftt_button:hover,
.rightt_button:hover,
.right_left_button:hover,
.right_right_button:hover {
	background-color: rgba(100, 100, 100, 0.6);
}
.right_right_button {
	right: 0px;
}
.right_button_:hover .right_left_button,
.right_button_:hover .right_right_button {
	width: 40px;
}
#main_show > .right > .right_button_ > div:nth-of-type(4) {
	position: absolute;
	top: 150px;
	left: 50px;
	width: 100px;
	height: 10px;
}
#main_show > .right > .right_button_ > div:nth-of-type(4) > li {
	margin-left: 20px;
	width: 10px;
	height: 10px;
	float: left;
	border-radius: 50%;
}
</style>
