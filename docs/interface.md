# Interface
**version:1.0.1**
>为了方便后端使用更新资源请求，不区别PATCH和PUT,由后端判断后使用

# 响应类
**定义**
```typescript
class Respon<T> {
    meta: {
        success: boolean,
        message: string
    };
    data: Array<T>;
    // 使用数组装起来
}
```

# 用户类
**定义**
```typescript
class User {
    constructor (
        public id: number,
        public username?: string,
        public actualname?: string,
        public location?: string,
        public organization?: string,
        public email?: string,
        public img?: string,
        // 头像
        public exp?: string,
        // 经验
        public info?: {
            followings: Array<number>;
            // 本用户关注的主键列表
            followers: Array<number>;
            // 关注本用户的主键列表
            likes: number;
            // 被点赞数
            reports: number;
        },
        public intro?: string
    ) { }
    // 声明构造函数和公有属性，并在使用时初始化
}
let response = new Respon<User>();
let user = new User(1);
// 进行一些操作之后
let UserData = JSON.stringify([user]); 
let ResponseData = JSON.stringify(response);
```

**请求方法**
|URL|Method|Request|Response|Description|
|:--:|:--:|:--:|:--:|:--:|
|./users|GET|null|ResponseData|管理员查看所有用户
|./users|POST|UserData|ResponseData| 创建新用户
|./users/{id}|GET|null|ResponseData| 主键查用户
|./users/{id}|PUT|UserData|ResponseData| 修改信息 
|./users/{id}|DELETE|null|ResponseData| 删除用户
|./users/followers|POST|{“user_id”:number}|ResponseData|关注用户
|./users/followers/{id}|DELETE|null|ResponseData|通过想要取消的用户主键取消关注


# 通知类
**定义**
```typescript
class Notifi {
    constructor (
        public id: number,
        // 通知主键
        public isread?: boolean,
        // 已读？
        public content?: string,
        public time?: Date,
        // 发送时间
        public to?: number
        // 发送对象主键
    ) { }
}
let response = new Respon<Notifi>();
let notification = new Notifi();
// 进行一些操作之后

let NotificationData = JSON.stringify([notification]);
// 用数组封装
let ResponseData = JSON.stringify(response);
```
**请求方法**
|URL|Method|Request|Response|Description|
|:--:|:--:|:--:|:--:|:--:|
|./{user_id}/notifications|GET|null|ResponseData| 通过user_id拿到用户的所有通知消息
|./notifications|POST|NotificationData|ResponseData|创建一个新的消息
|./notifications/id|DELETE|null|ResponseData|通过消息主键删除一条消息


# 报告类
**定义**
```typescript
class Report {
    constructor (
        public id: number,
        // 通知主键
        public like?: Array<number>,
        // 点赞了的用户id数组
        public title?: string,
        // 标题
        public abstract?: string,
        // 摘要
        public lable?: number,
        // 所属标签
        public comment？: Array<number>
        // 评论主键
    ) { }
}
let report = new Report();
let response = new Respon<Report>();

// 进行一些操作之后
let ReportData = JSON.stringify([report]);
let ResponseData = JSON.stringify(response);
```

**请求方法**
|URL|Method|Request|Response|Description
|:--:|:--:|:--:|:--:|:--:|
|./reports|GET|null|ResponseData|所有文章内容
|./{user_id}/reports|GET|null|ResponseData|用户主键拿到所有文章|
|./reports/{id}|GET|null|ResponseData|文章主键拿到文章
|./reports|POST|ReportData|ResponseData|新建文章
|./reports/{id}|PUT|ReportData|ResponseData|修改文章
|./reports/{id}|DELETE|null|ResponseData|删除文章
|./reports/likes|POST|{"report_id": number}|ResponseData|为文章点赞
|./reports/likes/{id}|DELETE|null|ResponseData|通过文章主键取消点赞



# 评论类
**定义**
```typescript
class Comment {
    constructor (
        public id: number,
        public from?: number,
        // 评论者id
        public to?: number,
        // 报告id
        public content?: string
    ) { }
}
let comment = new Comment(1);
let response = new Respon<Comment>();
// 一些操作之后
let CommentData = JSON.stringify([comment]);
let ResponseData = JSON.stringify(response);
```

**请求方法**
|URL|Method|Request|Response|Description
|:--:|:--:|:--:|:--:|:--:|
|./{user_id}/comments|GET|null|ResponseData|从用户主键拿用户所有评论
|./{report_id}/comments|GET|null|ResponseData|从文章主键拿到文章下的所有评论
|./comments/{id}|PUT|CommentData|ResponseData|用主键更新评论
|./comments/{id}|DELET|null|ResponseData|删除评论

# 动作类
**定义**

>待补充

**请求方法**
|URL|Method|Request|Response|Description
|:--:|:--:|:--:|:--:|:--:|
|./signin/comfirm/{token}|GET|null|{"status":boolean}|激活账号
|./forget-passwd|POST|{"email":string}|{"status":boolean}|忘记密码
|./signin|POST|{"username":string,"passwd":string}|{"status":boolean}|登录
|./signup|POST|{“email”:string,"username":string,"passwd":string}|{"status":boolean}|注册
|./search|POST|待定|{"meta":{"success":boolean,"message":string},"data":{"users":Array<number>,"reports":Array<number>,"thesis":待定,"protein":待定,'bio-brick':待定}}|搜索功能
|./get-popular|GET|null|{"meta":{"success":boolean,"message":string},"data":{"reports":Array<number>}}|热门文章


# 编辑器类
>待补充
