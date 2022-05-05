<template>
	<div id="e-books_part">
        <div>
            <div>图书&nbsp;.&nbsp;电子书</div>
            <div @mouseenter="change(1)" :class="black1">最新上架</div>
            <div @mouseenter="change(2)" :class="black2">独家畅品</div>
            <div @mouseenter="change(3)" :class="black3">重点推荐</div>
            <div @mouseenter="change(4)" :class="black4">电子书</div>
        </div>
        <div>
            <div id="first" :class="show1">
                <div class="left">
                    <img :src="left_pictures[0].src">
                    <div>
                        <span v-for="key in options[0].text" v-bind:key="key">{{key}}</span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img :src="right_pictures[0].src"></img>
                        <span>{{right_pictures[0].text}}</span>
                    </div>
                    <li v-for="key in one_items" v-bind:key="key">
                        <img :src="key.src">
                        <span>{{key.name}}</span>
                        <span>{{key.cost}}</span>
                    </li>
                </div>
            </div>
            <div id="second" :class="show2">
                <div class="left">
                    <img :src="left_pictures[1].src">
                    <div>
                        <span v-for="text in options[1].text" v-bind:key="text">{{text}}</span>
                        <span>全部分类></span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img :src="right_pictures[1].src"></img>
                        <span>{{right_pictures[1].text}}</span>
                    </div>
                    <li v-for="key in two_items" v-bind:key="key">
                        <img :src="key.src">
                        <span>{{key.name}}</span>
                        <span>{{key.cost}}</span>
                    </li>
                </div>
            </div>
            <div id="third" :class="show3">
                <div class="left">
                    <img :src="left_pictures[2].src">
                    <div>
                        <span v-for="text in options[2].text" v-bind:key="text">{{text}}</span>
                        <span>全部分类></span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img :src="right_pictures[2].src"></img>
                        <span>{{right_pictures[2].text}}</span>
                    </div>
                    <li v-for="key in three_items" v-bind:key="key">
                        <img :src="key.src">
                        <span>{{key.name}}</span>
                        <span>{{key.cost}}</span>
                    </li>
                </div>
            </div>
            <div id="forth" :class="show4">
                <div class="left">
                    <img :src="left_pictures[3].src">
                    <div>
                        <span v-for="text in options[3].text" v-bind:key="text">{{text}}</span>
                        <span>全部分类></span>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img :src="right_pictures[3].src"></img>
                        <span>{{right_pictures[3].text}}</span>
                    </div>
                    <li v-for="key in four_items" v-bind:key="key">
                        <img :src="key.src">
                        <span>{{key.name}}</span>
                        <span>{{key.cost}}</span>
                    </li>
                </div>
            </div>
        </div>
        <div>
            <div>
                <span>图书畅销榜</span>
                <span>童书新书榜</span>
            </div>
            <div>
                <li>{{bestseller_brief[0]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[1]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[2]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[3]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[4]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[5]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[6]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[7]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[8]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{bestseller_brief[9]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
            </div>
            <div>
                <li>{{children_book[0]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[1]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[2]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[3]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[4]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[5]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[6]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[7]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[8]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
                <li>{{children_book[9]}}</li>
                <div>
                    <img>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "e-books_part",
  data() {
    return {
      one_items: " ",
      two_items: " ",
      three_items: " ",
      four_items: " ",
      left_pictures: " ",
      right_pictures: " ",
      show1: "show",
      show2: "miss",
      show3: "miss",
      show4: "miss",
      black1: "black",
      black2: "white",
      black3: "white",
      black4: "white",
      options: " ",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/books/e-books_part")
      .then((response) => {
        (this.one_items = response.data.items),
          (this.two_items = response.data.datas),
          (this.three_items = response.data.keys),
          (this.four_items = response.data.ebooks),
          (this.right_pictures = response.data.texts),
          (this.left_pictures = response.data.pictures),
          (this.options = response.data.options),
          (this.bestseller_brief = response.data.bestseller_brief),
          (this.children_book = response.data.children_book);
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
  methods: {
    change: function (n) {
      this.show1 = "miss";
      this.show2 = "miss";
      this.show3 = "miss";
      this.show4 = "miss";
      if (n == 1) this.show1 = "show";
      else if (n == 2) this.show2 = "show";
      else if (n == 3) this.show3 = "show";
      else this.show4 = "show";
      this.black1 = "white";
      this.black2 = "white";
      this.black3 = "white";
      this.black4 = "white";
      if (n == 1) this.black1 = "black";
      else if (n == 2) this.black2 = "black";
      else if (n == 3) this.black3 = "black";
      else this.black4 = "black";
    },
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
#e-books_part {
  width: 1200px;
  margin-left: 40px;
}
#e-books_part > div:nth-of-type(1) {
  width: 950px;
  height: 42px;
  border-bottom: 2px solid black;
}
#e-books_part > div:nth-of-type(1) > div:nth-of-type(1) {
  float: left;
  width: 460px;
  height: 42px;
  font: 700 20px/40px "Microsoft";
  color: rgb(50, 50, 50);
}
.white {
  float: left;
  border: 1px solid rgb(230, 230, 230);
  width: 120px;
  height: 40px;
  text-align: center;
  font: 15px/40px "Microsoft";
  color: rgb(108, 108, 108);
  background-color: rgb(245, 245, 245);
}
.left > img {
  width: 250px;
  height: 350px;
}
.left {
  float: left;
  width: 250px;
  height: 500px;
}
.right {
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
}
.right > li:nth-of-type(n) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 173px;
  height: 173px;
  border-right: 1px solid rgb(230, 230, 230);
  border-top: 1px solid rgb(230, 230, 230);
}
.right > li:nth-of-type(n) > img {
  width: 173px;
  height: 173px;
}
.right > li:nth-of-type(n) > span:nth-of-type(n) {
  width: 170px;
  height: 25px;
  font: 10px/25px "Microsoft";
}
.right > li:nth-of-type(n) > span:nth-of-type(2) {
  color: red;
  font: 14px/25px "Microsoft";
}
.right > div:nth-of-type(1) {
  border: 1px solid rgb(230, 230, 230);
  width: 346px;
  height: 240px;
}
.right > div:nth-of-type(1) > img {
  width: 346px;
  height: 190px;
}
.right > div:nth-of-type(1) > span {
  display: block;
  width: 346px;
  height: 48px;
  color: white;
  text-align: center;
  font: 16px/50px "Microsoft";
  background-color: rgb(169, 221, 139);
}
.show {
  display: block;
}
.miss {
  display: none;
}
.black {
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  width: 116px;
  height: 42px;
  background-color: white;
  font: 700 15px/40px "Microsoft";
  float: left;
  text-align: center;
  color: rgb(108, 108, 108);
}
</style>
