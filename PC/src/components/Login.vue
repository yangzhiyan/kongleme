<template>
  <div class="loginmodul"  :style="{width:height.width,height:height.height}">
    <div class="logindiv" :style="{marginTop:height.auto}">
      <div class="logo">
        <a href="javascript:void(0)" title="" class="logoimg"></a>
      </div>
      <div class="login-box">
        <div class="login-inner">
          <div class="login-left">
            <div class="login-input">
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="" prop="userid">
                  <el-input v-model.number="ruleForm2.userid" placeholder = "您的手机号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="passwd">
                  <el-input type="password" v-model="ruleForm2.passwd" placeholder= "您的密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                </el-form-item>
              </el-form> 
            </div>
            <div class="connect">
              <p>用合作网站账户直接登录</p>
              <div class="hzzh">
                <a href="" class="weibo">
                  <i></i>
                  <span>新浪微博</span>
                </a>
                <a href="" class="qq">
                  <i></i>
                  <span>QQ</span>
                </a>
                <a href="" class="weixin">
                  <i></i>
                  <span>微信</span>
                </a>
              </div>
            </div> 
          </div> 
          <div class="login-right">    
          </div>
          <div class="clear"></div>
        </div>
      </div> 
    </div>
     
  </div>
</template>
<script>
  export default {
    name:"Login",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback();
        }
      };
      var checkPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      
      return {
        ruleForm2: {
          userid: '',
          passwd: ''
        },
        rules2: {
          userid: [
            {validator: checkPhone, trigger: 'blur'}
          ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        height:{
          height:"",
          width:"",
          auto:"",
        }
      };
    },
    mounted(){
      this.height.height=document.documentElement.clientHeight+"px";
      this.height.width = document.documentElement.clientWidth+"px";
      this.height.auto = document.documentElement.clientHeight/2-300+"px";
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(666)
            this.ajax.post('http://localhost:8888/login', this.ruleForm2)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }   
    }
  }
</script>
<style>
  .loginmodul {
    position: relative;
    background-image: url("../../static/img/regback1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .logoimg {
    width: 150px;
    height: 120px;
    position: relative;
    left: 50px;
    display: block;
    text-indent: -999px;
    overflow: hidden;
    background: url("../../static/img/logo-new.png") no-repeat;
    background-position: -40px 10px;
    background-size: 100% 100%;
    margin: 10px auto;
  }
  .logindiv {
    width: 700px;
    height: 500px;
    /* background-color: rgba(255,168,0,0.8); */
    padding: 20px 0px;
    margin: 300px auto;
  }
  .logo {
    width: 600px;
  }
  .login-box {
    width: 600px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 30px;
  }
  .login-inner {
    width: 600px;
    padding-top: 26px;
    background-color: #fff;
    box-shadow: 0 3px 3px rgba(0,0,0,.4);
  }
  .login-left {
    width: 370px;
    float: left;
  }
  .login-input .el-button{
    width: 320px;
    text-align: center;
    height: 42px;
    border: 0;
    background-color: #ffa800;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin-left: -80px;
  }
  .login-input .el-input {
    width: 320px;
    margin-left: -80px;
  }
  .login-input .el-form-item__error{
    margin-left: -80px;
  }
  .connect {
    margin-top: 30px;
  }
  .connect p {
    padding: 15px 0 20px 24px;
    font-size: 12px;
    color: #999;
    border-top: 1px solid #ebebeb;
  }
  .hzzh{
    padding: 0 0 0 25px;
    width: 348px;
    height: 84px;
    overflow: hidden;
  }
  .hzzh a {
    text-decoration: none;
    width: 58px;
    height: 84px;
    text-align: center;
    font-size: 12px;
    color: #999;
    display: inline-block;
    margin-right: 25px;
  }
  .hzzh i {
    background-image: url('../../static/img/c_icon3.gif');
    background-repeat: no-repeat;
    width: 42px;
    height: 42px;
    display: block;
    margin: 0 0 4px 10px;
    cursor: pointer;
  }
  .login-right {
    float: right;
    border-left: 1px solid #ebebeb;
    width: 208px;
    padding-left: 20px;
    height: 300px;
    padding-top: 20px
  }

  
</style>