
export class Simuser {
  id: number;
  name: string;
  avatar_url: string;
  about_me: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
  location: string;
  email: string;
  organization: string;
  follow_or_unfollow: boolean;
  follow_or_edit: boolean;
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
  archive: string; //报告的日期
  popular_report: boolean; //是否为受欢迎的报告
  label: string; //报告分类
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


