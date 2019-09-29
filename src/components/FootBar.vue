<template>
    <div class="FootBar">
        <ul>
            <li @click="goRouter('/')">
                <span class="iconfont icon-shouye1"></span>
                <p>首页</p>
            </li>
            <li>
                <span class="iconfont icon-bofang101"></span>
                <p>西瓜视频</p>
            </li>
            <li>
                <span class="iconfont icon-shipinbofang"></span>
                <p>小视频</p>
            </li>
            <li @click="goRouter('/user')">
                <span class="iconfont icon-denglu"></span>
                <p v-if="isLogin">已登录</p>
                <p v-else>未登录</p>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'FootBar',
        props: {},
        data() {
            return {
                isLogin: false,
            }
        },
        methods: {
            goRouter(path) {
                this.$router.push({ path: path })
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.isLogin = true
            }
        },
    }
</script>


<style scoped lang="scss">
    .FootBar {
        height: 55px;
        width: 100%;
        border-top: 0.8px solid rgb(221, 221, 221);
        background: #fff;
        position: fixed;
        bottom: 0;
    }

    .FootBar ul {
        height: 55px;
        display: flex;
        justify-content: space-around;
    }

    .FootBar ul li {
        width: 25%;
        height: 100%;
        padding-top: 5px;
        text-align: center;
    }

    .FootBar ul li span {
        font-size: 25px;
        color: black;
    }

    .FootBar ul li p {
        font-size: 10px;
        color: #505050;
    }
</style>