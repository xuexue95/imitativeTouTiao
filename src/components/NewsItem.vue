<template>
    <div class="NewsItem" @click="goDetail(newsItem.id)">
        <h3>{{newsItem.title.rendered}}</h3>
        <div class="newsItem-image">
            <ul>
                <li>
                    <img v-bind:src="newsItem.thumbnail" alt="">
                </li>
            </ul>
        </div>
        <div class="newsItem-info">
            <div>
                <span class="src">作者:{{newsItem.author}}</span>
                <span class="cmt">
                    评论 {{CommentCount}}
                </span>
                <span class="time">{{newsItem.date.split('T')[0]}}&nbsp;{{newsItem.date.split('T')[1]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsItem",
        props: {
            newsItem: {},
            commentsList: {},
            newsId: {},
        },

        data() {
            return {
                CommentCount: 0,
            }
        },

        watch: {
            commentsList() {
                this.getCommentCount()
            }
        },

        methods: {
            goDetail(newsId) {
                this.newsId = newsId;
                this.$emit('click', this.newsId)
            },
            
            getCommentCount() {
                for (let i = 0; i < this.commentsList.length; i++) {
                    if (this.commentsList[i].post == this.newsId) {
                        this.CommentCount += 1;
                    }
                }
            }
        },

        mounted() {
            this.getCommentCount()
        },
    }
</script>

<style scoped lang="scss">
    .NewsItem {
        margin: 0px 20px;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        display: block;
        padding: 16px 0px;
        min-height: 42px;
        font-size: 0px;
        text-decoration: none;
    }

    .NewsItem h3 {
        color: #222;
        font-size: 20px;
        line-height: 26px;
        font-weight: normal;
        overflow: hidden;
    }

    .NewsItem .newsItem-image {
        margin-top: 6px;
    }

    .newsItem-image img {
        display: block;
        width: 100%;
    }

    .NewsItem .newsItem-info {
        color: #999;
        overflow: hidden;
        font-size: 0;
        padding-top: 10px;
    }

    .NewsItem .newsItem-info span {
        margin-right: 15px;
        line-height: 10px;
        font-size: 6px;
    }
</style>