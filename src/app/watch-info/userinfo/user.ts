
export class Otheruser {
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
  content: Otheruser[];
}
export class Report {
  title: String;
  topic: String[];
  content: String;
  commentsnum: Number;
  likesnum: Number;
}
export class Like {
  ouser: Otheruser;
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
export class Simuser {
  id: number;
  avatar_url: string;
  about_me: string;
  name: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
}
