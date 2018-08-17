class User {
    id: number;
    name: string;
    actualname: string;
    location: string;
    organization: string;
    email: string;
    img: string;
    about: string;
    exp: string;
    info: {
        followings: number;
        followers: number;
        likes: number;
        reports: number;
    };
    intro: string;
}

let a = new User();
a.id = 5;
let b = new User();
b.id = 1;
let c = {data: [ a, ] , info: b};
console.log(JSON.stringify(c));
