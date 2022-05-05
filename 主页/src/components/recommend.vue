<template>
  <div id="recommend">
    <div>为您推荐</div>
    <div>
      <li v-for="item in info">
        <img :src="item.src" />
        <span>{{ item.name }}</span>
        <span>{{ item.cost }}</span>
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recommend",
  data() {
    return {
      info: " ",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/books/recommend_part")
      .then((response) => {
        this.info = response.data.items;
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  list-style: none;
  padding: 0px;
  margin: 0px;
}
#recommend {
  width: 1200px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#recommend > div:nth-of-type(1) {
  width: 1200px;
  height: 45px;
  border-bottom: 3px solid rgb(255, 40, 50);
  color: rgb(255, 40, 50);
  font: 700 21px/45px "Microsoft";
}
#recommend > div:nth-of-type(2) {
  width: 1200px;
  border-top: 1px solid rgba(230, 230, 230);
  margin-top: 8px;
}
#recommend > div:nth-of-type(2) > li {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: 160px;
  height: 250px;
}
#recommend > div:nth-of-type(2) > li:hover {
  width: 160px;
  height: 250px;
  margin-top: 8px;
  margin-left: 19px;
  margin-right: 19px;
  box-shadow: inset 0 0 2px 2px rgb(230, 230, 230);
  border: 1px solid rgb(230, 230, 230);
}
#recommend > div:nth-of-type(2) > li > img {
  margin: 5px;
  width: 150px;
  height: 180px;
}
#recommend > div:nth-of-type(2) > li > span:nth-of-type(1) {
  width: 145px;
  height: 25px;
  padding-left: 5px;
  font: 12px/25px "Microsoft";
}
#recommend > div:nth-of-type(2) > li > span:nth-of-type(2) {
  width: 145px;
  height: 25px;
  padding-left: 5px;
  font: 17px/25px "Microsoft";
  color: rgb(255, 40, 50);
}
</style>
