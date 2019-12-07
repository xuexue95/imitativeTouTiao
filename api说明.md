|           接口           | method |            参数             |      描述      |
| :----------------------: | :----: | :-------------------------: | :------------: |
|     api/index/login      |  post  |        name/password        |      登录      |
|    api/index/register    |  post  |        name/password        |      注册      |
| api/index/news/{cate_id} |  get   |                             |  新闻 列表页   |
| api/index/news/{cate_id} |  post  |     news_id/token(可选)     |  新闻 详情页   |
|   api/index/news/like    |  post  |  news_id/token/like(0\|1)   | 用户 喜欢 新闻 |
|  api/index/news/collect  |  post  | news_id/token/collect(0\|1) | 用户 收藏 新闻 |

## 登录(api/index/login)

```
//返回成功数据
{
    "status": true,
    "data": [
    	'token': token值
    ]
}

//返回失败数据
{
    "status": false,
    "data": "用户不存在"//错误信息字串
}
```

## 注册(api/index/resigter)

```
//返回成功数据
{
    "status": true
}

//返回失败数据
{
    "status": false,
    "data": "用户已存在"//错误信息字串
}
```

## 新闻 详情页(api/index/news/{cate_id})

- (分类名:首页)api/index/news/1
- (分类名:国内)api/index/news/2
- (分类名:国外)api/index/news/3

```
//返回成功数据
{
    "status": true,
    "msg": {
        "like": false,
        "detail": {
            "from": "文章的标题啊",
            "title": "文章的标题啊",
            "author": "文章的标题啊",
            "cate_id": "2",
            "old_title": "文章的标题啊",
            "img": "/ueditor/php/upload/image/20190920/1568988992639152.jpg",
            "created_at": "1568988994",
            "content": "<p>2415241</p><p><img src=\"/ueditor/php/upload/image/20190920/1568988985158251.jpg\" title=\"1568988985158251.jpg\" alt=\"9.jpg\"/></p><p><img src=\"/ueditor/php/upload/image/20190920/1568988992639152.jpg\" title=\"1568988992639152.jpg\" alt=\"5.jpg\"/></p>",
            "id": "2",
            "editor": "责任编辑责任编辑"
        }
    }
}

//返回失败数据
{
    "status": false,
    "msg": "请传递新闻id"
}

```

## 新闻 列表页(api/index/news/{cate_id})

```
//返回成功数据
{
    "status": true,
    "msg": {
        "data": [
            {
                "title": "文章的标题啊",
                "cate_id": "2",
                "img": "/ueditor/php/upload/image/20190920/1568988992639152.jpg",
                "created_at": "1568988994",
                "id": "2",
            },
        ]
    }
}

//返回失败数据
{
    "status": false,
    "msg": "该分类不存在,请重试"
}
```

## 用户 喜欢 新闻(api/index/like)

```
//返回成功数据
{
    "status": true
}

//返回失败数据
{
    "status": false,
    "msg": "请传递新闻id"
}
```

## 用户 收藏 新闻(api/index/collect)

```
//返回成功数据
{
    "status": true
}

//返回失败数据
{
    "status": false,
    "msg": "请传递新闻id"
}
```

## 分类(api/index/cates)

```
//返回成功数据
{
    "status": true,
    "data": [
        {
            "id": 1,
            "name": "首页"
        },
        {
            "id": 2,
            "name": "国内"
        },
        {
            "id": 3,
            "name": "国外"
        }
    ]
}
```










