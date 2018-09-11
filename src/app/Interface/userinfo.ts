
export class Simuser {
  id: number;
  name: string;
  avatar_url: string;
  about_me: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
}
export class Info {
  content: Simuser[];
}
export class Report {
  title: String;
  auther: Simuser;
  topic: String[];
  content: String;
  commentsnum: Number;
  likesnum: Number;
}
export class Like {
  ouser: Simuser;
  report: Report;
}
export class User {
  id: Number;
  name: String;
  about_me: String;
  following: Info;
  followers: Info;
  likes: Like[];
  reports: Report[];
}


