
export class Otheruser {
  id: Number;
  name: String;
  about_me: String;
  avatar_url: String;
  flingnum: Number;
  flednum: Number;
  likenum: Number;
  reportsnum: Number;
}
export class Info {
  inum: Number;
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
  inum: Number;
  content: Like[];
}
export class Reports {
  inum: Number;
  content: Report[];
}
export class User {
  id: Number;
  name: String;
  about_me: String;
  avatar_url: String;
  following: Info;
  followers: Info;
  likes: Likes;
  reports: Reports;
}
