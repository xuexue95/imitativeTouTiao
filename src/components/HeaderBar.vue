<template>
    <div class="HeaderBar">
        <div class="topBar">
            <div id="search">
                <input type="text">
                <span class="iconfont icon-search"></span>
            </div>
            <div id="fabu" @click="showOptions">
                <span class="iconfont icon-changyongtubiao-mianxing-"></span>
                <p>发布</p>
            </div>

            <div id="options">
                <div class="sanjiao"></div>
                <div class="box">
                </div>
            </div>
        </div>

        <!-- 新闻分类栏 -->
        <div id="newsCategories">
            <div class="more">
                <div id="moreBtn">
                    <span class="iconfont icon-liebiao"></span>
                </div>
            </div>
            <div id="categoriesList">
                <div @click="changeCategory(index,category.id)" v-for="(category,index) in categoriesList" class="btn"
                    :class="{cur: index==currentIndex}">
                    {{category.name}}
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        name: 'HeaderBar',
        props: {
            categoriesList: {},
        },

        data() {
            return {
                currentIndex: 0,
            }
        },
        
        methods: {
            showOptions() { },
            changeCategory(index, categoryId) {
                this.currentIndex = index
                this.$emit('click', categoryId)
            },
        }
    }
</script>


<style scoped lang="scss">
    /* 顶部栏样式 */
    .HeaderBar {
        display: block;
        z-index: 998;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .HeaderBar .topBar {
        height: 75px;
        position: relative;
        background: #d43d3d;
    }

    .HeaderBar .topBar {
        height: 75px;
        position: relative;
        background: #d43d3d;
    }

    #search {
        position: relative;
    }

    #search input {
        width: 72%;
        height: 40px;
        position: absolute;
        left: 17px;
        top: 20px;
        border-radius: 4px;
        border-style: none;
        padding-left: 40px;
    }

    #search span {
        position: absolute;
        color: rgb(160, 160, 160);
        font-size: 18px;
        top: 30px;
        left: 30px;

    }

    #fabu span {
        position: absolute;
        right: 13px;
        top: 20px;
        font-size: 32px;
        color: #fff
    }

    #fabu p {
        position: absolute;
        font-size: 12px;
        color: #fff;
        right: 18px;
        top: 54px;
    }

    #options {
        display: none;
    }

    #options .sanjiao {
        position: absolute;
        right: 20px;
        top: 65px;
        border: 10px solid rgba(0, 0, 0, 0);
        border-bottom-color: rgba(0, 0, 0, 0.8);
    }

    #options .box {
        position: absolute;
        width: 140px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.8);
        top: 85px;
        right: 10px;
        border-radius: 5px;
    }

    /* 分类栏样式 */
    #newsCategories {
        background: #fff;
        height: 37px;
        line-height: 37px;
        /* box-sizing: border-box; */
        width: 100%;
        z-index: 200;
        border-bottom: 1px solid rgb(222, 222, 222);
    }

    #newsCategories .more {
        float: right;
        position: relative;
    }

    #newsCategories #moreBtn {
        display: block;
        position: relative;
        width: 40px;
        height: 40px;
        background-size: 20px;
        font-size: 35px;
        color: #f85959;
        text-align: center;
        line-height: 36px;
    }

    #newsCategories #moreBtn .iconfont {
        font-size: 22px;
        position: absolute;
        top: 0;
        right: 10px;
    }

    #categoriesList {
        overflow: hidden;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        line-height: 37px;
    }

    #categoriesList::-webkit-scrollbar {
        display: none;
    }

    #newsCategories .btn {
        display: inline-block;
        padding: 0 10px;
        color: #505050;
        font-size: 17px;
        height: 26px;
        height: 100%;
        margin-left: 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
        transition: all .2s;
    }

    #newsCategories div[class*='cur'] {
        color: #f85959;
        /* font-size: 19px; */
    }
</style>