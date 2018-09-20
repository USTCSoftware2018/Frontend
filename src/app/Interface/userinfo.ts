export class Simuser {
  id: number;
  name: string;
  avatar_url: string;
  actual_name: string;
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
  author: Simuser;
  topic: String[];
  abstract: String;
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
  classification: Assortment;
}
export class Archive {
  data: string;
  num: number;
}

export class PopularReport {
  name: string;
  num: number;
}

export class Label {
  name: string;
  num: number;
}

export class Assortment {
  archives: Archive[];
  popular_reports: PopularReport[];
  labels: Label[];
}
