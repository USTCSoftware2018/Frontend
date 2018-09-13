import { Report } from '../../Interface/userinfo';

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
export class Like {
  ouser: Otheruser;
  report: Report;
}
