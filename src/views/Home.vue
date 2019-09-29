<template>
  <div class="home">

    <!-- 头部模块 -->
    <HeaderBar @click="changeCategory" :categoriesList="this.categoriesList">
    </HeaderBar>

    <!-- 首页新闻列表 -->
    <div id="content">
      <div id='newsList'>
        <NewsItem @click="goDetail" :newsId="newsItem.id" :commentsList='commentsList' :newsItem="newsItem"
          v-for="newsItem in newsList" v-if="newsItem.categories[0] == categoryNowId && flag">
        </NewsItem>
      </div>
      <div class="block"></div>
    </div>

    <!-- 底部按钮模块 -->
    <FootBar></FootBar>

  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar.vue'
  import FootBar from '@/components/FootBar.vue'
  import NewsItem from '@/components/NewsItem.vue'


  export default {
    name: 'home',
    components: {
      HeaderBar,
      FootBar,
      NewsItem,
    },

    data() {
      return {
        categoriesList: {},
        newsList: {},
        categoryNowId: {},
        commentsList: {},
        flag: true,
      }
    },
    watch: {
      categoryNowId () {
        this.flag = false
        this.$nextTick(() => {
        this.flag = true
        })
    }
  },

  methods: {
    // 获取新闻列表
    getNewsList() {
      this.axios.get("http://115.29.42.191:8001/wp-json/wp/v2/posts").then((res) => {
        this.newsList = res.data
      })
    },

    // 切换新闻分类
    changeCategory(categoryId) {
      this.categoryNowId = categoryId
      console.log(this.categoryNowId);

    },

    // 跳转新闻详情页
    goDetail(newsId) {
      this.$router.push({ path: '/detail', query: { news_id: newsId } })
    },

    // 获取评论
    getComments() {
      this.axios.get('http://115.29.42.191:8001/wp-json/wp/v2/comments/?per_page=100').then((res) => {
        this.commentsList = res.data
      })
    },

    // 获取新闻分类
    getCategories() {
      this.axios.get("http://115.29.42.191:8001/wp-json/wp/v2/categories").then((res) => {
        this.categoriesList = res.data
        this.categoryNowId = res.data[0].id
      })
    },
  },
  mounted() {
    this.getCategories()
    this.getComments()
    this.getNewsList()
  }
    }
</script>

<style scoped lang="scss">
  #content {
    width: 100%;
    position: relative;
    top: 111px;
    background: #fff
  }

  .block {
    height: 55px;
    width: 100%;
  }
</style>