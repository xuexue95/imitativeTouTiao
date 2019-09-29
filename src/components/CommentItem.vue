<template>
    <div class="comment">
        <div class="commentUser">
            <img :src="comment.author_avatar_urls[48]" alt="">
            <div class="info">
                <p>{{comment.author_name}}</p>
                <span>{{comment.date.split('T')[0]}}&nbsp;&nbsp;{{comment.date.split('T')[1]}}</span>
            </div>
        </div>
        <div class="content" v-html="comment.content.rendered"></div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        props: {comment:{}},
    }
</script>

<style scoped lang="scss">

    .comment {
        margin: 10px;
        border: 1px solid #ccc;
    }

    .comment .commentUser {
        margin: 10px;
        height: 50px;
    }

    .comment .commentUser img {
        border-radius: 50%;
        margin-right: 10px;
    }

    .comment .commentUser .info {
        display: inline-block;
    }

    .comment .commentUser .info p {
        font-size: 20px;
        font-weight: bold;
    }

    .comment .commentUser .info span {
        font-size: 14px;
        color: rgb(155, 155, 155);
        font-weight: bold;

    }
    
    .content{
        margin: 15px;
    }
    
</style>