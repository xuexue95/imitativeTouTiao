<template>
    <div class="detail">
        <div class="header">
            <div class="top">
                <div class='toutiao'>
                    <span>
                        今日头条
                    </span>
                </div>
                <div class="back" @click='goBack'>
                    <span class="iconfont icon-left"></span>
                </div>
                <div class="search">
                    <span class="iconfont icon-search"></span>
                </div>
                <div class="more">
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>
        </div>

        <div class="article">
            <div class="title">
                <span>{{detail.title.rendered}}
                </span>
            </div>
            <div class="content">
                <div v-html="detail.content.rendered">
                </div>
            </div>

            <!-- 文章标签 -->
            <div class="tags">
                <ul>
                    <li v-for="tag in tags">
                        <div class="tag">
                            #{{tag}}
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 文章评论 -->
            <div class="comments">
                <CommentItem :comment="comment" v-for="comment in commentsList" v-if="comment.post ==query.news_id">
                </CommentItem>
                <div class="block"></div>
            </div>
        </div>


        <!-- 添加评论 -->
        <div class="createComment" :style="styleObject">
            <div class="writeComment">
                <textarea name="" id="" cols="30" rows="1" placeholder="优质评论将会被优先展示"
                    v-model="createComment.content"></textarea>
                <span class="send" @click="sendComment">发布
                </span>
                <span class="iconfont icon-guanbi" @click="closeCreatComment"></span>
            </div>
            <div class="sendOption">
                <input type="checkbox" name="zhuanfa" id=""> <label for="zhuanfa" style="font-size: 14px;"> 同时转发</label>
                <div class="choose">
                    <ul>
                        <li>
                            <span class="iconfont icon-tupian"></span>
                        </li>
                        <li>
                            <span class="iconfont icon-fuhao"></span>
                        </li>
                        <li>
                            <span class="iconfont icon-jinghao"></span>
                        </li>
                        <li>
                            <span class="iconfont icon-xiaolian"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="bottomBar">
            <div class="comment" @click="showCreateComment">
                <span class="iconfont icon-SVG-"></span>
                <span>&nbsp;&nbsp;写评论...</span>
            </div>
            <div class="option">
                <ul>
                    <li>
                        <div class="commentCount">
                            <span>{{CommentCount}}</span>
                        </div>
                        <span class="iconfont icon-pinglun1"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-shoucang1"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-zan"></span>
                    </li>
                    <li>
                        <span class="iconfont icon-fenxiang"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import CommentItem from '@/components/CommentItem.vue'
    import Qs from 'qs'

    export default {
        name: "detail",
        components: {
            CommentItem,
        },

        data() {
            return {
                query: {
                    news_id: this.$route.query.news_id,
                },

                detail: {
                    content: {},
                    title: {},
                },
                newTags: {

                },

                commentsList: [],

                CommentCount: 0,

                styleObject: {
                    height: '0px',
                },

                createComment: {
                    content: '',
                    post: this.$route.query.news_id,
                },
                tags: [],
            }
        },

        watch: {
            commentsList() {
                this.getCommentCount()
            }
        },

        methods: {
            goBack() {
                history.go(-1)
            },

            getNewsDetail() {
                this.axios.get("http://115.29.42.191:8001/wp-json/wp/v2/posts/" + this.query.news_id).then((res) => {
                    this.detail = res.data
                    this.newTags = res.data.tags
                    this.getTags()
                })
            },

            getComments() {
                this.axios.get('http://115.29.42.191:8001/wp-json/wp/v2/comments/?per_page=100').then((res) => {
                    this.commentsList = res.data
                })
            },

            getCommentCount() {
                for (var i = 0; i < this.commentsList.length; i++) {
                    if (this.commentsList[i].post == this.query.news_id) {
                        this.CommentCount += 1
                    }
                }
            },

            getTags() {
                this.axios.get('http://115.29.42.191:8001/wp-json/wp/v2/tags').then((res) => {
                    let tags = res.data
                    for (let tag of tags) {
                        for (let tagid of this.newTags) {
                            if (tag.id == tagid) {
                                this.tags.push(tag.name)
                            }
                        }
                    }
                })
            },

            sendComment() {
                var token = localStorage.getItem('token')
                if (!token) {
                    alert('请先登录')
                } else if (this.createComment.content == '') {
                    alert('内容不能为空')
                } else {
                    this.axios.post("http://115.29.42.191:8001/wp-json/wp/v2/comments", (this.createComment), {
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'Bearer ' + token,
                        }
                    }).then((res) => {
                        console.log(res);
                        if (res.status == 201) {
                            alert('评论成功')
                            location.reload()
                        } else {
                            alert('评论失败')
                            location.reload()
                        }
                    }).catch((error) => {
                        alert('评论失败!')
                        console.log(error)
                    })
                }
            },

            showCreateComment() {
                this.styleObject.height = '130px'
            },

            closeCreatComment() {
                this.styleObject.height = '0px'
            }
        },

        mounted() {
            this.getNewsDetail()
            this.getComments()
        },
    }
</script>}

<style scoped lang="scss">
    .block {
        width: 100%;
        height: 80px;
    }

    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 70px;
        background: #fff;
        z-index: 2;
    }

    .header .top {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #eeeeee;
    }

    .top .toutiao {
        font-size: 20px;
        font-weight: bolder;
    }

    .top .back {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0px;
        left: 10px;
    }

    .iconfont {
        font-size: 20px;
    }

    .top .more {
        position: absolute;
        top: 0px;
        right: 15px;
    }

    .top .search {
        position: absolute;
        top: 0px;
        right: 50px;
    }

    .article {
        position: relative;
        top: 60px;
        left: 0;
    }

    .article .title {
        top: 60px;
        margin: 15px;
        font-size: 25px;
    }

    .article .content {
        margin: 15px;
    }

    .bottomBar {
        width: 100%;
        height: 50px;
        position: fixed;
        display: flex;
        align-items: center;
        bottom: 0;
        left: 0;
        border-top: 1px solid #eeeeee;
        background: #fff;
    }

    .bottomBar .comment {
        height: 30px;
        width: 45%;
        background: #eeeeee;
        border-radius: 20px;
        padding-left: 10px;
        line-height: 30px;
        color: rgb(112, 112, 112);
        margin-left: 15px;
    }

    .option {
        width: 55%;
        height: 50px;
    }

    .option ul {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .option ul li {
        width: 25%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        position: relative;
    }

    .option ul li .iconfont {
        font-size: 24px;
    }

    .commentCount {
        position: absolute;
        right: 6px;
        top: 10px;
        width: 22px;
        height: 12px;
        background: red;
        border-radius: 20px;
        font-size: 4px;
        line-height: 10px;
        text-align: center;
        color: #fff;
    }

    .tags ul {
        margin-left: 10px;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        align-items: center;
    }

    .tags ul li {
        margin-right: 10px;
        font-size: 15px;
        color: rgb(87, 85, 85);
        display: inline-block;
        margin-bottom: 10px;
    }

    .tags ul li .tag {
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 10px;
        background: #ccc;
    }

    /* 评论框 */
    .comments {
        margin-top: 30px;
    }

    .createComment {
        width: 100%;
        height: 130px;
        background: #fff;
        border-top: 1px solid #dddddd;
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        transition: height 0.3s;
    }

    .createComment .writeComment {
        margin-left: 10px;
        width: 100%;
        height: 90px;
        line-height: 90px;
    }

    .createComment .writeComment textarea {
        width: 75%;
        height: 60px;
        border: none;
        background: rgb(236, 236, 236);
        border-radius: 5px;
        padding-left: 10px;
        padding-top: 10px;
        margin-top: 10px;
    }

    .writeComment .iconfont {
        position: relative;
        top: -55px;
        left: 60px;
        font-size: 16px;
    }

    .writeComment .send {
        color: #ccc;
        font-size: 20px;
        font-weight: bolder;
        position: absolute;
        right: 30px;
    }

    .createComment .sendOption {
        width: 100%;
        height: 40px;
        margin-left: 10px;
        line-height: 40px;
        color: rgb(133, 133, 133);
    }

    .sendOption .choose {
        width: 55%;
        height: 40px;
        float: right;
    }

    .sendOption .choose ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 10px;
    }

    .sendOption .choose ul li {
        width: 25%;
        height: 40px;
        text-align: center;
    }

    .sendOption .choose ul li .iconfont {
        font-size: 18px;
    }
</style>