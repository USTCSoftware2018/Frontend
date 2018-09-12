import { User, Report } from './userinfo';
import { Simuser } from './userinfo';

export const user1: Simuser = {
  id: 2,
  name: 'Sindy',
  about_me: 'about me',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
export const user2: Simuser = {
  id: 3,
  name: 'Cindy',
  about_me: 'about me',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
export const user3: Simuser = {
  id: 4,
  name: 'Sindi',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
const user4: Simuser = {
  id: 5,
  name: 'Candy',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
export const report1: Report = {
  title: 'research',
  author: user2,
  topic: ['A', 'B', 'C'],
  abstract: '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
  '2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
  '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
  '2. Add 250 μL Buﬀer P1, resuspend cells.\n',
  commentsnum: 190,
  likesnum: 12
};
export const USER: User = {
  id: 1,
  name: 'Thomas Romero',
  about_me: 'a student in ustc',
  following: {
    content: [ user1, user2],
  },
  followers: {
    content: [user3, user4, user1 ],
  },
  likes: [{
    ouser: user1,
    report: report1,
  }],
  reports: [report1]
};
export const SIMUSER: Simuser = {
  id: 1,
  name: 'Thomas Romero',
  about_me: 'messages',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
