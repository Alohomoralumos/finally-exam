<template>
    <div id="rush_purchase">
        <div class="nav">
            <div>
              <img :src="a" class="img1"></img>
              <img :src="clock" class="img2"></img>
              <span>{{hour}}</span>:&nbsp;<span>{{minute}}</span>:&nbsp;<span>{{second}}</span>
              <li v-for="time in clocks" v-bind:key="time" class="time">{{time}}:00场</li>
            </div>
            <div id="container">
              <li v-for="item in info" v-bind:key="item" class="book">
                <img :src="item.src"></img> 
                <span>{{item.name}}</span>
                <span>{{item.cost}}</span>
              </li>
          </div>
        </div>
        <div class="right">
          <div>
            <span class="week">厂商周</span>
            <li :class="red1" class="li1" @mouseenter="changePage(1)"></li>
            <li :class="red2" class="li2" @mouseenter="changePage(2)"></li>
          </div>
          <div class="right_box">
            <div v-for="src in right_pictures1" v-bind:key="src" :class="page1" class="right_boxx">
              <img :src="src" class="rightsrc">
            </div>
          </div>
          <div class="right_box">
            <div v-for="src in right_pictures2" v-bind:key="src" :class="page2" class="right_boxx">
              <img :src="src" class="rightsrc">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "rush_purchase",
  data() {
    return {
      hour: "",
      minute: "",
      second: "",
      right_pictures1: " ",
      right_pictures2: " ",
      page1: "",
      page2: "no_show",
      red1: "red",
      red2: "grey",
      a: "抢购.png",
      clock: "闹钟.png",
      clocks: ["00", "08", "12", "16", "20"],
      info: " ",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/books/rush_purchase")
      .then((response) => {
        (this.info = response.data.items),
          (this.right_pictures1 = response.data.right_pictures1),
          (this.right_pictures2 = response.data.right_pictures2),
          console.log(response, this.page1, this.page2);
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
    setTimeout(() => {
      //如果为0-9，则增加0
      function addZero(i) {
        return i < 10 ? "0" + i : i;
      }
      //新建一个今天的新日期
      let todayDate = new Date();
      //获取今天的日期
      let dateString = todayDate.toLocaleDateString();
      let strArray = dateString.split("/");
      let year = strArray[0];
      let month = strArray[1];
      let day = strArray[2];
      month = addZero(month);
      day = addZero(day);
      if (todayDate.getHours() >= 20 && todayDate.getHours() < 24) {
        let nowTime = new Date();
        //创建截至日期
        const startTime = new Date(
          year + "-" + month + "-" + day + " " + "24:00:00"
        );
        const leftTime = parseInt(
          (startTime.getTime() - nowTime.getTime()) / 1000
        );
        let hour = parseInt((leftTime / (60 * 60)) % 24);
        let minute = parseInt((leftTime / 60) % 60);
        let second = parseInt(leftTime % 60);
        console.log(hour, minute, second);
        hour = addZero(hour);
        minute = addZero(minute);
        second = addZero(second);
        console.log(hour, minute, second);
        this.hour = hour + "";
        console.log(this.hour, this);
        this.minute = minute + "";
        this.second = second + "";
      } else if (todayDate.getHours() >= 0 && todayDate.getHours() < 8) {
        let nowTime = new Date();
        const startTime = new Date(
          year + "-" + month + "-" + day + " " + "08:00:00"
        );
        const leftTime = parseInt(
          (startTime.getTime() - nowTime.getTime()) / 1000
        );
        let hour = parseInt((leftTime / (60 * 60)) % 24);
        let minute = parseInt((leftTime / 60) % 60);
        let second = parseInt(leftTime % 60);
        console.log(hour, minute, second);
        hour = addZero(hour);
        minute = addZero(minute);
        second = addZero(second);
        console.log(hour, minute, second);
        this.hour = hour + "";
        this.minute = minute + "";
        this.second = second + "";
        console.log(this.hour, this);
      } else if (todayDate.getHours() >= 8 && todayDate.getHours() < 12) {
        let nowTime = new Date();
        const startTime = new Date(
          year + "-" + month + "-" + day + " " + "12:00:00"
        );
        const leftTime = parseInt(
          (startTime.getTime() - nowTime.getTime()) / 1000
        );
        let hour = parseInt((leftTime / (60 * 60)) % 24);
        let minute = parseInt((leftTime / 60) % 60);
        let second = parseInt(leftTime % 60);
        console.log(hour, minute, second);
        hour = addZero(hour);
        minute = addZero(minute);
        second = addZero(second);
        console.log(hour, minute, second);
        this.hour = hour + "";
        this.minute = minute + "";
        this.second = second + "";
        console.log(this.hour, this);
      } else if (todayDate.getHours() >= 12 && todayDate.getHours() < 16) {
        let nowTime = new Date();
        const startTime = new Date(
          year + "-" + month + "-" + day + " " + "16:00:00"
        );
        const leftTime = parseInt(
          (startTime.getTime() - nowTime.getTime()) / 1000
        );
        let hour = parseInt((leftTime / (60 * 60)) % 24);
        let minute = parseInt((leftTime / 60) % 60);
        let second = parseInt(leftTime % 60);
        console.log(hour, minute, second);
        hour = addZero(hour);
        minute = addZero(minute);
        second = addZero(second);
        console.log(hour, minute, second);
        this.hour = hour + "";
        this.minute = minute + "";
        this.second = second + "";
        console.log(this.hour, this);
      } else if (todayDate.getHours() >= 16 && todayDate.getHours() < 20) {
        let nowTime = new Date();
        const startTime = new Date(
          year + "-" + month + "-" + day + " " + "20:00:00"
        );
        const leftTime = parseInt(
          (startTime.getTime() - nowTime.getTime()) / 1000
        );
        let hour = parseInt((leftTime / (60 * 60)) % 24);
        let minute = parseInt((leftTime / 60) % 60);
        let second = parseInt(leftTime % 60);
        console.log(hour, minute, second);
        hour = addZero(hour);
        minute = addZero(minute);
        second = addZero(second);
        console.log(hour, minute, second);
        this.hour = hour + "";
        this.minute = minute + "";
        this.second = second + "";
        console.log(this.hour, this);
      }
    }, 1000);
    //倒计时模块
    /*
    ()=>{
        //如果为0-9，则增加0
        function addZero(i) {
          return i < 10 ? '0' + i : i;
        }
        //新建一个今天的新日期
        let todayDate = new Date();
        //获取今天的日期
        let dateString = todayDate.toLocaleDateString();
        let strArray = dateString.split('/');
        let year=strArray[0];
        let month=strArray[1];
        let day=strArray[2];
        let startTime='';
        month=addZero(month);
        day=addZero(day);
        if(todayDate.getHours()>=20&&todayDate.getHours()<24)
        {
          let nowTime = new Date();
          //创建截至日期
          const startTime=new Date(year+'-'+month+'-'+day+' '+'24:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          console.log(this.hour,this);
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=0&&todayDate.getHours()<8)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'08:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=8&&todayDate.getHours()<12)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'12:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=12&&todayDate.getHours()<16)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'16:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=16&&todayDate.getHours()<20)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'20:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
      }*/
  },
  methods: {
    changePage: function (n) {
      if (n == 1) {
        this.red1 = "red";
        this.red2 = "grey";
        this.page1 = "";
        this.page2 = "no_show";
      }
      if (n == 2) {
        this.red1 = "grey";
        this.red2 = "red";
        this.page1 = "no_show";
        this.page2 = "show";
      }
    },
    /*
      //倒计时模块
      countDown:()=>{
        //如果为0-9，则增加0
        function addZero(i) {
          return i < 10 ? '0' + i : i;
        }
        //新建一个今天的新日期
        let todayDate = new Date();
        //获取今天的日期
        let dateString = todayDate.toLocaleDateString();
        let strArray = dateString.split('/');
        let year=strArray[0];
        let month=strArray[1];
        let day=strArray[2];
        let startTime='';
        month=addZero(month);
        day=addZero(day);
        if(todayDate.getHours()>=20&&todayDate.getHours()<24)
        {
          let nowTime = new Date();
          //创建截至日期
          const startTime=new Date(year+'-'+month+'-'+day+' '+'24:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          console.log(this.hour,this);
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=0&&todayDate.getHours()<8)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'08:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=8&&todayDate.getHours()<12)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'12:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=12&&todayDate.getHours()<16)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'16:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
        else if(todayDate.getHours()>=16&&todayDate.getHours()<20)
        {
          let nowTime = new Date();
          const startTime=new Date(year+'-'+month+'-'+day+' '+'20:00:00');
          const leftTime=parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
          let hour = parseInt(leftTime/(60*60)%24);
          let minute = parseInt(leftTime/60%60);
          let second = parseInt(leftTime%60);
          console.log(hour,minute,second);
          hour=addZero(hour);
          minute=addZero(minute);
          second=addZero(second);
          console.log(hour,minute,second);
          this.hour=hour+'';
          this.minute=minute+'';
          this.second=second+'';
        }
      },*/
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#rush_purchase {
  margin-left: 30px;
  width: 1200px;
  height: 600px;
}
.nav {
  height: 40px;
  width: 950px;
  padding-bottom: 5px;
  border-bottom: solid 2px black;
}
.nav > div:nth-of-type(1) {
  width: 950px;
  height: 50px;
}
.img1 {
  height: 40px;
  margin-left: 20px;
  float: left;
}
.img2 {
  height: 30px;
  margin-left: 15px;
  margin-top: 7px;
}
.time {
  display: inline-block;
  width: 78px;
  height: 36px;
  margin-left: 20px;
  margin-right: 32px;
  font: 700 20px/40px "微软雅黑";
  color: rgb(102, 102, 102);
}
.time:hover {
  border-bottom: 3px solid red;
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.book {
  width: 188px;
  height: 250px;
  border: solid 1px rgb(238, 238, 238);
}
.book > img {
  width: 185px;
  height: 190px;
}
.book > span:nth-of-type(1) {
  font: 10px "Microsoft";
  color: rgb(136, 136, 136);
}
.book > span:nth-of-type(2) {
  font: 10px "Microsoft";
  color: rgb(255, 59, 68);
}
#rush_purchase > .nav > div:nth-of-type(1) > span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgb(221, 221, 221);
  border-radius: 2px;
}
#rush_purchase > .nav > span:nth-of-type(3) {
  margin-right: 50px;
}
#rush_purchase > .right {
  position: absolute;
  left: 980px;
  top: 0px;
  width: 250px;
  height: 600px;
}
#rush_purchase > .right > div:nth-of-type(1) {
  width: 250px;
  height: 46px;
  border-bottom: solid red 2px;
}
.week {
  display: block;
  width: 150px;
  height: 46px;
  font: 20px/46px "Microsoft";
  color: red;
}
.li1 {
  position: absolute;
  top: 20px;
  right: 30px;
}
.li2 {
  position: absolute;
  top: 20px;
  right: 10px;
}
.li1,
.li2 {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.grey {
  background-color: rgb(200, 200, 200);
}
.red {
  background-color: red;
}
.no_show {
  display: none;
}
.right_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.right_box > .right_boxx > .rightsrc {
  width: 250px;
  height: 120px;
}
</style>