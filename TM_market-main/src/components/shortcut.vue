<template>
	<div class="shortcut">
		<ul>
			<li>
				<h3><span class="icon iconfont icon-sale"></span>活动</h3>
				<p>
					<a>新人活动</a>
					<a>一站式购齐</a>
				</p>
			</li>
			<li>
				<h3>
					<span class="icon iconfont icon-zealui-icon-_58_bianqian"></span>价格
				</h3>
				<p>
					<a>0-10元</a>
					<a>10-30元</a>
					<a>30-70元</a>
					<a>70元以上</a>
				</p>
			</li>
			<li>
				<h3><span class="icon iconfont icon-basket2"></span>日用百货</h3>
				<p>
					<a>纸品争霸</a>
					<a>时尚买手</a>
					<a>美容江湖</a>
					<a>巾彩秀</a>
				</p>
			</li>
			<li>
				<h3><span class="icon iconfont icon-dangao"></span>食品</h3>
				<p>
					<a>酒水活动</a>
					<a>疯狂厨房</a>
					<a>零食欢乐购</a>
					<a>淘零食</a>
				</p>
			</li>
			<li>
				<h3><span class="icon iconfont icon-jipiao-copy"></span>进口食品</h3>
				<p>
					<a>进口洋货</a>

					<a>进口饼干</a>
					<a>进口零食</a>
					<a>进口牛奶</a>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "shortcut",

	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: tahoma, arial, "\5b8b\4f53";
}
.icon {
	color: red;
	font-size: 20px;
    position: relative;
    left: -5px;
    top: 2px;
}
.shortcut {
	background-color: #efefef;
	border-top: 1px solid #e4e4e4;
	padding: 20px 0;
	font-size: 12px;
	line-height: 1.5;
    width: 1190px;
    margin: 0 auto;
    margin-top: 50px;
}
ul {
	width: 1190px;
	overflow: hidden;
}
li {
	float: left;
	height: 95px;
	width: 197px;
	padding: 20px;
	border-left: 1px solid #e4e4e4;
	margin-left: -1px;
	list-style: none;
}
h3 {
	font-family: 微软雅黑;
	font-size: 16px;
	color: #e8394e;
}
h3 > i {
	margin-right: 5px;
	font-size: 25px;
	vertical-align: -2px;
}
p > a {
	margin-bottom: 5px;
	float: left;
	width: 50%;
	color: #444;
	text-decoration: none;
    cursor: pointer;
}
p>a:hover{
    color: red;
}
</style>
