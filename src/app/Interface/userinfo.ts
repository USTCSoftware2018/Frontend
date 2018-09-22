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
  ifFollow?: boolean;
}
export class Info {
  content: Simuser[];
}
export class Report {
  id: number;
  title: String;
  author: Simuser;
  labels: String[];
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
  about_me: String;
  following: Info;
  followers: Info;
  likes: Like[];
  reports: Report[];
}
export class Archive {
  data: string;
  num: number;
}

export class PopularReport {
  name: string;
  praises: number;
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
