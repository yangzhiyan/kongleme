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
  //console.log(req.query);
	let connect = connectmysql();
  //console.log(req.query.pageSize*req.query.val);
  //console.log(req.query.pageSize*(req.query.val-1)+1);
	let sqlQuery=`select * from strategy where sid<=${req.query.pageSize*req.query.val} && sid>=${req.query.pageSize*(req.query.val-1)+1}`;
	connect.query(sqlQuery,function(err,result){
    	if(err){
       	 	console.log(`SQL error: ${err}!`);
    	}else{
       		res.send(result);
        	closeMysql(connect);
    	}
	});
});
app.get("/indextotal",(req,res)=>{
  let connect = connectmysql();
  let sqlQuery = "SELECT COUNT(*) FROM strategy";
  connect .query(sqlQuery,function(err,res1){
    if(err){
      console.log(`SQL error: ${err}!`);
    }else{
          res.send(res1);
          closeMysql(connect);
    }
  })
});
app.get("/test2",function(req,res){
	let connect = connectmysql();
  let sqlQuery="select * from shop where shid<=3";
	connect.query(sqlQuery,function(err,res1){
		if(err){
			console.log(`SQL error: ${err}!`);
		}else{
      res.send(res1);
      closeMysql(connect);
		}
	})
});

app.post("/register",(req,res)=>{
  console.log(req.body);
  let connect = connectmysql();
  console.log(req.body.username)
  var username = req.body.username;
  let mysqlfind = `select userid from users where userid = ${req.body.userid}`;
  let mysql1 = "INSERT INTO users(userid,username,passwd) VALUES ('"+req.body.userid+"','"+req.body.username+"','"+req.body.passwd+"')";
  connect.query(mysqlfind,(err,res1)=>{
    if(err){
      console.log(`SQL error: ${err}!`);
    }else if(res1.length == 0){
      connect.query(mysql1,(err)=>{
        if(err){
          console.log(`SQL error: ${err}!`);
        }else{
          console.log("写入成功");
          res.send("1")
          closeMysql(connect);
        }
      })
    }else{
      res.send("0");
    }
  })
  
});
app.post("/login",(req,res)=>{
  console.log(req.body);
  let connect = connectmysql();
  let mysql1 = `select * from users where userid = ${req.body.userid}`
  connect.query(mysql1,(err,res1)=>{
    console.log(res1)
    if(err){
      console.log(`SQL error: ${err}!`);
    }else if(res1.length ==0){
      res.send("0");
    }else if(res1[0].passwd == req.body.passwd){
      console.log(res1);
      res.send("1");
      closeMysql(connect);
    }else if(res1[0].passwd != req.body.passwd){
      console.log(res1[0].passwd);
      console.log(req.body.passwd);
      res.send("2");
    }
  })
});
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
//连接数据库
function connectmysql(){
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