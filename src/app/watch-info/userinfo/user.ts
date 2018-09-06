
export class Otheruser {
  id: number;
  name: String;
  about_me: String;
  avatar_url: String;
  flingnum: Number;
  flednum: Number;
  likenum: Number;
  reportsnum: Number;
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
export class Likes {
  content: Like[];
}
export class Reports {
  content: Report[];
}
export class User {
  id: Number;
  name: String;
  about_me: String;
  following: Info;
  followers: Info;
  likes: Likes;
  reports: Reports;
}
export class Simuser {
  avatar_url: string
  name: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
}
