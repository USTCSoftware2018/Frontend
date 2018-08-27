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
        public exp?: string,
        // 经验
        public info?: {
            followings: Array<number>;
            // 本用户关注的主键列表
            followers: Array<number>;
            // 关注本用户的主键列表
            likes: Array<number>;
            // 被点赞数
            reports: Array<number>;
        },
        public intro?: string
    ) { }
    // 声明构造函数和公有属性，并在使用时初始化
}
