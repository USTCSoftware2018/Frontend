class Respon<T> {
    // 一个泛型响应类
    meta: {
        success: boolean,
        message: string
    };
    data: Array<T>;
}

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
// 使用数组封装
let ResponseData = JSON.stringify(response);

console.log(typeof(response));

let a = new User(13, 'test');
let b = new User(19, 'yjw');
let c = {data: [ a, ] , info: b};
console.log(JSON.stringify(c));
console.log(JSON.stringify(new User(1, '66')));

