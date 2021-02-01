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
                                <el-input v-model="loginInfo.verifyCode"></el-input>
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
    const axios = require('axios')
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
        methods: {  // 注意这里是methods ，不要少了这个s！！！
            login() {
                axios({
                    method: 'post',
                    url: 'http://192.168.220.141:2020//user/login/' + this.loginInfo.verifyCode + '/'
                        + this.loginInfo.from,
                    data: this.user
                }).then(response => {
                    console.log(response)
                })
            },
            updateVerifyCode() {
                this.imgPath = 'http://192.168.220.141:2020//user/captcha?captcha_key=' + this.key;
                console.log(this.imgPath)
            }
        },
        // 在mounted的时候就要去初始化验证码图片路径
        mounted() {
            axios
                .get("'https://api.coindesk.com/v1/bpi/currentprice.json'")
                .then(
                    response => {
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