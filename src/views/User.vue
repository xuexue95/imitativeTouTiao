<template>
    <div class="user">

        <!-- 顶部login -->
        <!-- 登录状态下内容 -->
        <div class="login" v-if="isLogin">
            <div class="userInfo">
                <div class="headPortrait">
                    <img src="../../public/010.png" alt="">
                </div>
                <span class="iconfont icon-jiantouyouxi"></span>
                <div class="info">
                    <span>{{username}}</span>
                    <div class="renzhen">
                        <span>申请认证</span>
                    </div>
                </div>
            </div>
            <div class="mine">
                <ul>
                    <li>
                        <span>0</span>
                        <p>头条</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>关注</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>粉丝</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>获赞</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 未登录状态下 -->
        <div class="noLogin" v-else>
            <div class="circle-out">
                <div class="circle-middle">
                    <div class="login-btn" @click="showForm">
                        <span>登录</span>
                    </div>
                </div>
            </div>
        </div>


        <div class='clear'></div>

        <!-- myRecord 我的收藏 评论点赞历史 -->
        <div class="myRecord">
            <ul>
                <li>
                    <span class="iconfont icon-shoucang"></span>
                    <p>我的收藏</p>
                </li>
                <li>
                    <span class="iconfont icon-shape3copy2"></span>
                    <p>我的评论</p>
                </li>
                <li>
                    <span class="iconfont icon-zan1"></span>
                    <p>我的点赞</p>
                </li>
                <li>
                    <span class="iconfont icon-lishi"></span>
                    <p>浏览历史</p>
                </li>
            </ul>
        </div>
        <div class="clear"></div>

        <div class="feature">
            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>
                <span>
                    我的关注
                </span>
            </div>
            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    我的钱包
                </span>
            </div>
            <div class="featureItem end">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    消息通知
                </span>
            </div>
            <div class="clear"></div>


            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    扫一扫
                </span>
            </div>
            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    免流量服务
                </span>
            </div>
            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>
                <span>
                    阅读公益
                </span>
                <div class="readTime">
                    <span>今日阅读XX分钟</span>
                </div>
            </div>
            <div class="featureItem end">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    广告推广
                </span>
            </div>
            <div class="clear"></div>


            <div class="featureItem">
                <span class="iconfont icon-jiantouyouxi"></span>

                <span>
                    用户反馈
                </span>
            </div>
            <div class="featureItem end">
                <span class="iconfont icon-jiantouyouxi"></span>
                <span>
                    系统设置
                </span>
            </div>
        </div>
        <div class="block"></div>

        <!-- 登录框 -->
        <div class="login-form">
            <div class="title">
                <span>账户密码登录</span>
            </div>
            <div class="show">
                <form action="" class="lg">
                    <div class="lg_info">
                        <input type="text" placeholder="请输入用户名" id="username" v-model="userinfo.username">
                        <span class="tip_msg"></span>
                    </div>
                    <div class="lg_info">
                        <input type="password" placeholder="请输入登录密码" id="userpwd" v-model="userinfo.password">
                        <span class="tip_msg"></span>
                    </div>
                    <div class="reg_btn">
                        <button @click="login">登录</button>
                    </div>
                    <div class="option" @click="showRegister">
                        <div class="register">
                            <span>账号注册</span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="close" @click="closeForm">
                <span class="iconfont icon-guanbi"></span>
            </div>
        </div>


        <!-- 注册框 -->
        <div class="register-form">
            <div class="title">
                <span>账户注册</span>
            </div>


            <div class="show">
                <form action="" class="reg">
                    <div class="reg_info">
                        <input type="text" placeholder="请设置用户名" id="reg-username" v-model="userinfo.username">
                        <span class="tip_msg"></span>
                    </div>
                    <div class="reg_info">
                        <input type="password" placeholder="请设置登录密码" id="reg-userpwd" v-model="userinfo.password">
                        <span class="tip_msg"></span>
                    </div>

                    <div class="reg_btn">
                        <button @click="register">注册</button>
                    </div>


                    <div class="option" @click="showForm">
                        <div class="register">
                            <span>账号登录</span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="close" @click="closeForm">
                <span class="iconfont icon-guanbi"></span>
            </div>
        </div>

        <!-- 底部栏 -->
        <FootBar :isLogin="isLogin"></FootBar>
    </div>
</template>

<script>
    import FootBar from "@/components/FootBar.vue"
    import Qs from 'qs'
    export default {
        name: "user",
        components: {
            FootBar,
        },
        data() {
            return {
                userinfo: {
                    username: '',
                    password: '',
                },
                isLogin: false,
                username: {},
            }
        },
        methods: {
            showForm() {
                $('.login-form').css('height', '100%');
                $('.register-form').css('height', '0%');
            },
            closeForm() {
                $('.login-form').css('height', '0');
                $('.register-form').css('height', '0');
            },
            login() {
                var data = {
                    username: this.userinfo.username,
                    password: this.userinfo.password,
                }
                console.log(data);

                if (!this.checkUsername(data.username)) {
                    alert('用户名不能为空')
                } else if (!this.checkPassword(data.password)) {
                    alert('密码不能为空')
                } else {
                    this.axios.post("http://115.29.42.191:8001/wp-json/jwt-auth/v1/token", (data))
                        .then((res) => {
                            console.log(res.status)

                            if (res.status) {
                                localStorage.setItem("token", res.data.token)
                                localStorage.setItem('username', res.data.user_nicename)
                                this.username = res.data.user_nicename
                                alert('登录成功')
                                this.userinfo = {}
                                this.closeForm()
                                location.reload()
                                this.isLogin = true
                            } else {
                                alert("用户名密码错误!")
                                this.userinfo = {}
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                            alert('账号密码错误')
                        })
                }
            },

            showRegister() {
                $('.register-form').css('height', '100%');
                $('.login-form').css('height', '0');

            },

            register() {
                var data = {
                    username: this.userinfo.username,
                    password: this.userinfo.password,
                }

                if (!this.checkUsername(data.username)) {
                    alert('用户名不能为空')
                } else if (!this.checkPassword(data.password)) {
                    alert('密码不能为空')
                } else {
                    this.axios.post("http://115.29.42.191:8001/wp-json/auth/v1/register", Qs.stringify(data))
                    .then((res) => {
                        console.log(data);

                        if (res.data.status) {
                            alert('注册成功')
                            this.showForm();
                            this.userinfo = {}
                        } else {
                            alert(res.data.data)
                        }
                    })
                    .catch((error) => {
                        alert('注册失败')
                        console.log(error.data.data);
                    })
                }
            },

            checkUsername(username) {
                if (username == '') {
                    return false
                } else {
                    return true
                }
            },

            checkPassword(password) {
                if (password == '') {
                    return false
                } else {
                    return true
                }
            },

        },
        mounted() {
            if (localStorage.getItem('token')) {
                if (localStorage.getItem('username')) {
                    this.username = localStorage.getItem('username')
                    this.isLogin = true
                }
            }

        }
    }
</script>

<style scoped lang="scss">
    .clear {
        width: 100%;
        height: 5px;
        background: #f7f7f7;
    }

    .user {
        font-family: 微软雅黑;
    }

    .login {
        width: 100%;
        height: 160px;
    }

    .userInfo {
        height: 90px;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 15px;
    }

    .userInfo .iconfont {
        position: absolute;
        right: 15px;
    }

    .userInfo .headPortrait {
        width: 70px;
        height: 70px;
        background: #ccc;
        border-radius: 50%;
        overflow: hidden;
    }

    .userInfo .headPortrait img {
        width: 100%;
        height: 100%;
    }

    .userInfo .info {
        font-size: 22px;
        margin-left: 15px;
        margin-bottom: 10px;
    }


    .userInfo .info .renzhen {
        width: 60px;
        height: 16px;
        background: red;
        color: #fff;
        font-size: 10px;
        border-radius: 15px;
        text-align: center;
        margin-top: 5px;
    }

    .login .mine {
        width: 100%;
        height: 55px;
    }

    .login .mine ul {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .login .mine ul li {
        width: 25%;
        text-align: center;
        font-size: 14px;
    }

    .login .mine ul li span {
        font-size: 22px;
    }

    .noLogin {
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    }

    .noLogin .circle-out {
        width: 120px;
        height: 120px;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .noLogin .circle-out .circle-middle {
        width: 100px;
        height: 100px;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-btn {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: rgb(228, 20, 20);
        text-align: center;
        line-height: 90px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }

    .myRecord {
        width: 100%;
        height: 80px;
        background: #fff;
    }

    .myRecord ul {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .myRecord ul li {
        text-align: center;
        font-size: 14px;
        font-weight: 300;
    }

    .myRecord ul li .iconfont {
        font-size: 25px;
        font-weight: normal;
    }

    .icon-shoucang {
        color: rgb(233, 191, 1);
    }

    .icon-shape3copy2 {
        color: rgb(84, 162, 235);
    }

    .icon-zan1 {
        color: rgb(255, 102, 0);
    }

    .icon-lishi {
        color: rgb(18, 158, 88);
    }

    .feature {
        width: 100%;
    }

    .feature .featureItem {
        margin-left: 15px;
        height: 55px;
        background: #fff;
        line-height: 55px;
        font-size: 16px;
        font-weight: 300;
        border-bottom: 1px solid #f5f5f5;
        position: relative;
    }

    .feature .featureItem.end {
        border: none;
    }

    .featureItem .iconfont {
        position: absolute;
        right: 15px;
        color: #ccc;
    }

    .readTime {
        color: rgb(112, 112, 112);
        font-size: 14px;
        position: absolute;
        right: 40px;
        top: 0;
    }

    .block {
        width: 100%;
        height: 70px;
        background: #f7f7f7;
    }

    /* login-form框 */
    .login-form {
        height: 0%;
        width: 100%;
        border-radius: 10px 10px 0 0;
        background: rgb(233, 232, 232);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        transition: height .2s linear;
    }

    .login-form .title {
        width: 100%;
        /* background: red; */
        font-size: 18px;
        text-align: center;
        margin-top: 70px;
    }

    .login-form .title span {
        padding: 0 auto;
        font-size: 20px;
    }

    .login-form .show {
        width: 100%;
        height: 200px;
        /* border: 1px solid #ccc; */
        margin: 0 auto;
        margin-top: 45px;
    }

    .lg {
        text-align: center;
    }

    .lg .lg_info {
        height: 50px;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 20px;
        /* background: red; */
        text-align: center;
    }

    .lg_info input {
        width: 300px;
        height: 40px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding-left: 20px;
    }

    .lg button {
        width: 320px;
        height: 40px;
        font-size: 20px;
        border-radius: 30px;
        border: none;
        background: rgb(241, 125, 125);
        color: #fff;
        margin-top: 10px;
    }

    .lg .option {
        width: 100%;
        height: 100px;
        /* background:red; */
        margin-top: 200px;
    }

    .login-form .close {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    /* 关闭按钮 */
    .icon-guanbi {
        font-size: 20px;
    }


    /* regiest-form框 */
    .register-form {
        height: 0%;
        width: 100%;
        /* border-top: 0.8px solid rgb(221, 221, 221); */
        border-radius: 10px 10px 0 0;
        background: rgb(233, 232, 232);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        transition: height .2s linear;
    }

    .register-form .title {
        width: 100%;
        /* background: red; */
        font-size: 18px;
        text-align: center;
        margin-top: 70px;
    }

    .register-form .title span {
        padding: 0 auto;
        font-size: 20px;
    }

    .register-form .show {
        width: 100%;
        height: 200px;
        /* border: 1px solid #ccc; */
        margin: 0 auto;
        margin-top: 45px;
    }

    .reg {
        text-align: center;
    }

    .reg .reg_info {
        height: 50px;
        width: 100%;
        margin-bottom: 10px;
        margin-top: 20px;
        /* background: red; */
        text-align: center;
    }

    .reg_info input {
        width: 300px;
        height: 40px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding-left: 20px;
    }

    .reg button {
        width: 320px;
        height: 40px;
        font-size: 20px;
        border-radius: 30px;
        border: none;
        background: rgb(241, 125, 125);
        color: #fff;
        margin-top: 10px;
    }

    .reg .option {
        width: 100%;
        height: 100px;
        /* background:red; */
        margin-top: 200px;
    }

    .register-form .close {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    /* 关闭按钮 */
    .icon-guanbi {
        font-size: 20px;
    }
</style>