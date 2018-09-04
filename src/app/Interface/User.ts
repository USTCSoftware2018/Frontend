export class User {
    constructor (
        public id: number,
        public username?: string,
        public actualname?: string,
        public location?: string,
        public organization?: string,
        public email?: string,
        public img?: string,
        // 头像
<<<<<<< HEAD
        public exp?: string,
        // 经验
=======
        public about_me?: string,
        // 关于我
>>>>>>> http-service
        public info?: {
            followings: Array<number>;
            // 本用户关注的主键列表
            followers: Array<number>;
            // 关注本用户的主键列表
<<<<<<< HEAD
            likes: Array<number>;
            // 被点赞数
            reports: Array<number>;
        },
        public intro?: string
=======
            praises: Array<number>;
            // 被点赞列表
            reports: Array<number>;
            // 报告列表
        },
        public collections?: Array<number>,
        // 收藏列表
        public favourites?: Array<number>,
        // 自己点赞列表
>>>>>>> http-service
    ) { }
    // 声明构造函数和公有属性，并在使用时初始化
}
