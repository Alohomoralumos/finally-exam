// 导入 express 模块
const express = require('express');
const app = express();

const User = require("./user.js");
const http = require("http");
//引入文件模块，用来读取json文件
const fs = require('fs');

//解析前端发送过来的json格式
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//使用jwt生成token
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

// 定义 secret 密钥
const secretKey = 'xiaofuhanlumos____'; 

//定义将 JWT 字符串解析还原成 JSON 对象的中间件
//app.use(expressJWT({secret: secretKey, algorithms: ['HS256']}).unless({ path: [/^\/books\//][/^\/user\//]}));

//文件路径需用
const path = require('path');

// 导入cors 模块,解决跨域问题
const cors = require('cors');
const req = require('express/lib/request');

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}));

// express 托管静态资源
app.use(express.static('./最终考核'));

// 配置 cors 中间件, 从而解决接口跨域的问题
app.use(cors());

const p = path.join(__dirname,'rush_purchase.json')

//GET--倒计时
app.get('/books/rush_purchase',(req,res)=>{
    //文件路径
	fs.readFile(p, (err, data) => {
        
		//允许跨域请求
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
            "Content-Type":"charset=utf-8"
		});
		if (err) {
			res.write("server error");
		} else {
			res.write(data);
		}
		res.end();
	});return
})

const p2 = path.join(__dirname,'recommend_part.json')

//GET--为您推荐
app.get('/books/recommend_part',(req,res)=>{
    fs.readFile(p2, (err, data) => {
        //允许跨域请求
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
            "Content-Type":"charset=utf-8"
		});
		if (err) {
			res.write("server error");
		} else {
			res.write(data);
		}
		res.end();
	});return
})

//GET--儿童专区

const p3=path.join(__dirname,"children_part.json")

app.get('/books/children_part',(req,res)=>{
    fs.readFile(p3, (err, data) => {
        //允许跨域请求
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
            "Content-Type":"charset=utf-8"
		});
		if (err) {
			res.write("server error");
		} else {
			res.write(data);
		}
		res.end();
	});return
})

//GET--电子书专区

const p4=path.join(__dirname,"e-books_part.json")

app.get('/books/e-books_part',(req,res)=>{
    fs.readFile(p4, (err, data) => {
        //允许跨域请求
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
            "Content-Type":"charset=utf-8"
		});
		if (err) {
			res.write("server error");
		} else {
			res.write(data);
		}
		res.end();
	});return
})

// GET--刚进入页面专区

const p5=path.join(__dirname,"main_show.json")

app.get('/books/main_show',(req,res)=>{
    fs.readFile(p5, (err, data) => {
        //允许跨域请求
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With",
            "Content-Type":"charset=utf-8"
		});
		if (err) {
			res.write("server error");
		} else {
			res.write(data);
		}
		res.end();
	});return
})

// POST--login
app.post('/user/login',(req,res)=>{
    let username = req.body.name;
    let password = req.body.password;
    let body = req.body;
    //设置跨域
    console.log(body);
    res.setHeader('Access-Control-Allow-Origin','*');
    //如果提交为空，返回提示信息
    if(req.body.name == '' || req.body.password == '')
    {
        return res.send({
            msg:"登陆失败",
            data:"请输入用户名或密码"
        })
    }
    //判断用户提交的登录信息是否正确
    User.findOne({
        phonenumber:body.name
    }),function(err,data){
        if(err){
            return res.send({
                msg:'登陆失败',
                data:"账号或密码不正确"
            })
        }
        if(data){
            const tokenStr = jwt.sign({name:req.body.name},secretKey,{ expiresIn:'10000h' });
            return res.send({
                message:'登陆成功',
                url:path.join(__dirname,'./login.html'),
                token:tokenStr,//发送给前端的 token 字符串
            });
        }
    }
    }
    //登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串
    //参1：用户的信息 参2：加密的密钥 参3：配置 token 有效期
)

// POST--register
app.post('/user/register',(req,res)=>{
    let body=req.body
    console.log(body,body.phonenumber)
    //查询数据库中是否含有输入的电话号码
    User.findOne({
        phonenumber:body.phonenumber
    },function(err,data){
        if(err){
            return res.status(500).json({
                code:500,
                message:"服务器错误"
            })
        }
        if(data){
            return res.status(200).json({
                code:1,
                msg:"phonenumber already exists"
            })
        }
        new User(body).save(function (err,user) {
            if (err) {
                return res.status(500).json({
                    code:500,
                    message: '服务器错误'
                })
            }
            res.status(200).json({
                code:0,
                message:'ok'
            })
        })
    })
})

// POST--search
/*
app.post('/things/search',(req,res)=>{
    let body=req.body;
    if(body.name=='良品铺子')
    {`
        console.log('ok');
    }
})*/
app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1');
})