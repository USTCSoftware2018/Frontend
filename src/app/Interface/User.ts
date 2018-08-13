export class User {
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

