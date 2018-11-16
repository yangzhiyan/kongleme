<template>
  <div class="register" :style="{height: regWid}">
    <div class="content">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="电话号码：" prop="userid">
          <el-input v-model="ruleForm2.userid"></el-input>
        </el-form-item>
         <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passwd">
          <el-input type="password" v-model="ruleForm2.passwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
          <span class="login">已经注册？<a href="#">马上登陆</a></span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('号码不能为空'));
      }
      setTimeout(() => {
        if (!(/^1[34578]\d{9}$/.test(value))) {
          callback(new Error('请输入正确的电话号码'));
        } else {
            callback();
        }
      }, 1000);
    };
     var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(() => {
       callback();
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.passwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      regWid:"",
      msg: [],
      ruleForm2: {
        passwd: '',
        checkPass: '',
        userid:'',
        username:''
      },
      rules2: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userid:[
          {validator: checkPhone, trigger: 'blur'}
        ],
        username:[
          {validator: checkUsername, trigger: 'blur'}
        ]
      }
    };
  },
  mounted:function(){
    let _this = this;
    var screenHeight=document.documentElement.clientHeight;
    _this.regWid = screenHeight+"px";
  },
  methods: {
    submitForm(formName) {
      let _this=this;
      // console.log(this.ruleForm2.phone)
      this.$refs[formName].validate((valid,myobj) => {
        // 如果验证成功，即valid为true，就提交表单，否则，返回错误
        if (valid) {
          // 要发送到后台的请求的数据
          console.log(_this.ruleForm2);
          //post请求
          _this.ajax.post(
            "http://localhost:8888/register",
             _this.ruleForm2)
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
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>


<style scoped>
*{
  padding: 0;
  margin: 0;
}
.register {
  position: relative;
  width: 100%;
  background-image: url("../../../static/img/regback2.png")

}
.register .content {
  width: 40%;
  height: 320px;
  padding: 20px 0px 0px;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 15px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
}
.register .el-input {
  width: 80%;
}
.register .el-input__inner {
  width: 100% !important;
}
.register .el-form-item {
  margin: 20px 0px 12px;
}
.register .el-button {
  width: 50px;
  height: 30px;
  margin: 0px 10px 0px 50px;
}
.register .login {
  display: inline-block;
  position: relative;
  left: 50px;
  color: 	#8B8989;
}
.register .login a {
  color: 	#4F4F4F;
  text-decoration: none;
}
.register a:hover {
  text-decoration: underline;
}
</style>
