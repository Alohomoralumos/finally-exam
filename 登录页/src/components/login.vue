<template>
  <div id="login">
        <div :class="login">
            <div id="passwordlogin" @click="change1()" :class="emclass1">密码登录</div>
            <div id="SMSlogin" @click="change2()" :class="emclass2">验证码登录</div>
        </div>
        <div :class="register">
            <div id="back" @click="back()">&#xe641;</div>
            <div id="reg">立即注册</div>
        </div>
        <div :class="box1">
            <input id="phonenumber" v-model="number" placeholder="手机号/昵称/邮箱">
            <input id="password" type="password" v-model="password" placeholder="密码">
        </div>
        <div :class="box2">
            <input id="phonenumber" v-model="number" placeholder="手机号">
            <input id="password" type="password" v-model="password" placeholder="验证码">
        </div>
        <p id="tip">{{tip_text}}</p>
        <p>登录即同意 <a href="">用户协议、隐私政策</a></p>
        <button id="l_button" @click="post_login(number,password)" :class="l">登录</button>
        <button id="r_button" @click="post_register(number,password)" :class="r">同意并注册</button>
        <p><span @click="regis()">立即注册</span>&nbsp;&nbsp;|&nbsp;&nbsp;忘记密码</p>
        <div class="footer">
            <span class="weChat">&#xe608;</span>
            <span class="pay">&#xe607;</span>
            <span class="qq">&#xe6b4;</span>
            <span class="weibo">&#xe73c;</span>
            <span class="baidu">&#xe600;</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'login',
  data() {
      return {
            password:'',
            number:'',
            tip_text:' ',
            box1:'',
            box2:'no_display',
            emclass1:"emphasize",
            emclass2:"no_emphasize",
            login:"display",
            register:"no_display",
            l:"",
            r:"no_display"
        }
        },
        methods:{
            post_login:function(number,password){
                console.log(number,password);
                // POST--login
                axios.post('http://127.0.0.1:3000/user/login',{name:number,password:password},{emulateJSON:true}).then((res)=>{
                    console.log(res);
                    this.tip_text=res.data.data;
                },function(res){
                    console.log(res.status);
                });
            },
            post_register:function(number,password){
                console.log(number,password);
                // POST--register
                axios.post('http://127.0.0.1:3000/user/register',{phonenumber:number,password:password},{emulateJSON:true}).then((res)=>{
                    console.log(res);
                },function(res){
                    console.log(res.status);
                });
            },
            change1:function(){
                this.emclass2="no_emphasize";
                this.emclass1="emphasize";
                this.box1='';
                this.box2='no_display';
                this.tip_text='';
                this.password='';
                this.number='';
                this.tip_text='';
            },
            change2:function(){
                this.emclass2="emphasize";
                this.emclass1="no_emphasize";
                this.box1="no_display";
                this.box2="";
                this.tip_text='';
                this.password='';
                this.number='';
                this.tip_text='';
            },
            regis:function(){
                this.login="no_display";
                this.register="";
                this.box1='no_display';
                this.box2='';
                this.l="no_display";
                this.r="";
                this.password='';
                this.number='';
                this.tip_text='';
            },
            back:function(){
                this.login="";
                this.register="no_display";
                this.l="";
                this.r="no_display";
                this.password='';
                this.number='';
                this.tip_text='';
                if(this.emclass1=="emphasize")
                {
                    this.box1="";
                    this.box2="no_display";
                }
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin:0px;
    padding:0px;
    text-decoration: none;
    list-style: none;
}
#login {
    position: relative;
    width:380px;
    height:450px;
    box-shadow:5px 5px 10px 2px rgb(240, 238, 238);
}
#passwordlogin {
    position:absolute;
    top:35px;
    left:50px;
    width:145px;
    height:30px;
    text-align: center;
}
.no_emphasize {
    color:rgb(113, 113, 113);
    font:18px/30px "Microsoft";
}
.emphasize {
    color:rgb(51, 51, 51);
    font:700 18px/30px "Microsoft";
}
#SMSlogin {
    position: absolute;
    top:35px;
    right:50px;
    width:150px;
    height:30px;
    border-left:3px solid rgb(113, 113, 113);
    text-align: center;
}
.no_display {
    display:none;
}
#phonenumber,
#password {
    width: 300px;
    height:45px;
    left:40px;
    background-color: rgb(249, 249, 249);
    border:none;
}
#phonenumber {
    position: absolute;
    top:100px;
}
#password {
    position: absolute;
    top:180px;
}
#login>p:nth-of-type(2) {
    position: absolute;
    top:250px;
    width:380px;
    height:40px;
    text-align:center;
    font:13px/40px "Microsoft";
    color:rgb(144, 142, 157);
}
#l_button,
#r_button {
    position: absolute;
    top:300px;
    left:40px;
    width:300px;
    height:45px;
    background-color: rgb(245, 57, 74);
    border:none;
    border-radius: 5px;
    color:white;
    text-align:center;
    font:20px/45px "Microsoft";
}
#login>p:nth-of-type(3) {
    position: absolute;
    top:360px;
    width:380px;
    height:40px;
    text-align:center;
    font:14px/40px "Microsoft";
    color:rgb(97, 97, 97);
}
#reg {
    position: absolute;
    top:35px;
    left:70px;
    width: 270px;
    text-align: center;
    color:rgb(51, 51, 51);
    font:700 18px/30px "Microsoft";
}
#back {
    position: absolute;
    top:35px;
    width:40px;
    width:30px;
    height:30px;
}
#tip {
    position: absolute;
    top:230px;
    left:40px;
    width:300px;
    height:30px;
    font:10px/30px "Microsoft";
    color:rgb(255, 50, 40);
}
#back {
    position: absolute;
    left:40px;
    width:30px;
    height:30px;
    content:'\e6b4';
    font-family: 'iconfont';
    font-size: 30px;
    color:rgb(51,51,51);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.weChat {
    display:inline-block;
    width:50px;
    margin-top: 10px;
    height:30px;
    content:'\e608';
    font-family: 'iconfont';
    font-size: 30px;
    color:rgb(101, 205, 81);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.pay {
    display:inline-block;
    width:50px;
    margin-top: 10px;
    height:30px;
    content:'\e607';
    font-family: 'iconfont';
    font-size: 30px;
    color:rgb(79, 201, 249);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.qq {
    display:inline-block;
    width:50px;
    margin-top: 10px;
    height:30px;
    content:'\e6b4';
    font-family: 'iconfont';
    font-size: 30px;
    color:rgb(88, 146, 238);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.weibo {
    display:inline-block;
    width:50px;
    margin-top: 10px;
    height:30px;
    content:'\e6b4';
    font-family: 'iconfont';
    font-size: 30px;
    color:rgb(253, 134, 109);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.baidu {
    display:inline-block;
    width:50px;
    margin-top: 7px;
    height:33px;
    content:'\e6b4';
    font-family: 'iconfont';
    font-size: 35px;
    color:rgb(152, 180, 240);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.footer {
    position: absolute;
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:380px;
    bottom:0px;
    height:50px;
    background-color: rgb(249, 249, 249);
}
</style>
