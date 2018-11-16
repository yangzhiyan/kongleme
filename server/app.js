var express = require("express");
var app = new express();
var mysql = require("mysql");
var bodyParser=require('body-parser');

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))  //qs  querystring
app.use(bodyParser.json());
app.get("/test",function(req,res){
	let connect = cntmysql();
	let sqlQuery="select * from strategy,users where strategy.userid = users.userid";
	connect.query(sqlQuery,function(err,result){
    	if(err){
       	 	console.log(`SQL error: ${err}!`);
    	}else{
       		console.log(result);
       		res.send(result);
        	closeMysql(connect);
    	}
	});
});
app.get("/test2",function(req,res){
	let connect = cntmysql();
  let sqlQuery="select * from shop where shid<=3";
	connect.query(sqlQuery,function(err,res1){
		if(err){
			console.log(`SQL error: ${err}!`);
		}else{
			console.log(res1);
       		res.send(res1);
        	closeMysql(connect);
		}
	})
})

app.post("/register",(req,res)=>{
  console.log(req.body);
  let connect = cntmysql();
  let mysql1 = `INSERT INTO users(userid,username,passwd,regtime)VALUES(${req.body.userid},${req.body.username},${req.body.passwd},${new Date()})`;
  connect.query(mysql1,(err)=>{
    if(err){
      console.log(`SQL error: ${err}!`);
    }else{
      console.log("写入成功");
      closeMysql(connect);
    }
  })
})
  
//查询成功后关闭mysql
function closeMysql(connect){
    connect.end((err)=>{
        if(err){
            console.log(`mysql关闭失败:${err}!`);
        }else{
            console.log('mysql关闭成功!');
        }
	});
}
app.listen(8888);

function cntmysql(){
	const db_config={
    	host:"localhost",
    	user:"root",
    	password:"root",
    	port:"3306",
    	database:"kongleme" 
	}
	let connect=mysql.createConnection(db_config);
	//开始链接数据库
	connect.connect(function(err){
    	if(err){
       	console.log(`mysql连接失败: ${err}!`);
    	}else{
        	console.log("mysql连接成功!");
    	}
	});
	return connect;
}