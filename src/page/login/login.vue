<template>
    <div class="login-box">
        <!--首页页面-->
        <div class="login-header">
            <div class="header-center center">
                <div class="login-logo">
                    吐司单词 | 登录
                </div>
            </div>
        </div>
        <div class="login-content">
            <div class="content-center center">
                <el-row :gutter='20'>
                    <el-col :span='8'>
                        <el-form label-position="left" label-width="100px">
                            <el-form-item label="帐号" required>
                                <el-input v-model="user.account"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" required>
                                <el-input type='password' v-model="user.password" placeholder="xxx"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" required>
                                <el-input v-model="loginInfo.verifyCode" @keyup.enter.native="login"></el-input><!--注意这里-->>
                                <img :src="imgPath" @click="updateVerifyCode">
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="login" size='small'>登 录</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="login-bottom">

        </div>
    </div>
</template>

<script>
    //const axios = require('axios')
    import {} from '../../api/api';
    export default {
        data() {
            return {
                user: {
                    account: '',
                    password: ''
                },
                loginInfo: {
                    verifyCode: '',
                    from: '',
                    to: ''
                },
                imgPath: '',
                key: '',
                dream: ''
            }
        },
        methods: {  // 注意这里是methods ，不要少了这个s！！！不然必错！
            login() {
                if (this.user.account === '') {
                    this.toastError('账号为空');
                    return;
                }
                if (this.user.password === '') {
                    this.toastError('密码为空');
                    return;
                }
                axios({
                    method: 'post',
                    url: 'http://192.168.220.141:2020//user/login/' + this.loginInfo.verifyCode + '/'
                        + this.loginInfo.from,
                    data: this.user
                }).then(response => {
                    console.log(response)
                    // 判断状态
                    // 如果成功则跳转，普通用户跳到首页，如果是管理员跳到管理中心。main.js里要对router做拦截
                    // 失败给出提示
                    let data = response.data;
                    // 具体什么值由后端写的接口确定
                    if (data.code === 20000) {
                        // 跳转到首页，别漏了$
                        this.$router.push('/index')
                        // this.$message是elementUI提供的功能
                        // https://element.eleme.cn/#/zh-CN/component/message
                        this.$message({
                            message: data.message,
                            center: true,
                            type: 'success'
                        })
                    } else {
                        this.updateVerifyCode();
                        toastError(data.message);
                    }

                })
            },
            updateVerifyCode() {
                this.imgPath = 'http://192.168.220.141:2020//user/captcha?captcha_key=' + this.key;
                console.log(this.imgPath)
            },
            toastError(msg) {
                this.$message({
                    message: msg,
                    center: true,
                    type: 'error'
                })
            }
        },
        // 在mounted的时候就要去初始化验证码图片路径
        mounted() {
            // 要先检查登录是否有效，如果有效直接跳到首页
            axios
                .get("'https://api.coindesk.com/v1/bpi/currentprice.json'")
                .then(response => {
                    console.log(response)
                    this.dream = response.data.bpi
                })
            // 注意这里，建信的项目也是这样写前端的
            this.key = Date.parse(new Date())
            this.updateVerifyCode();
        }
    }

</script>

<style>
    .center {
        margin: 0 auto;
        width: 1140px;
    }

    .login-header {
        background-color: dodgerblue;
        height: 46px;
        width: 100%;
        margin-bottom: 20px;
    }

    .header-center {
        line-height: 46px;
    }

    .login-logo {
        color: white;
        font-size: 16px;
        font-weight: 600;
    }

    .content-center {
        width: 1146px;
        height: 300px;
        background: white;
        box-shadow: 0 1px 10px #afafaf;
        border-radius: 6px;
        padding-top: 20px;
        padding-left: 20px;
    }

    /* 使用label也是可以覆盖到的，这个label是查看网页获取到的，因为是饿了么的组件 */
    .el-form-item__label {
        background: #FBFBFB;
        text-align: center;
        border: solid #E6E6E6 1px;
        border-radius: 6px;
    }

    .el-input__inner {
        height: 42px;
        margin-left: 2px;
    }
</style>