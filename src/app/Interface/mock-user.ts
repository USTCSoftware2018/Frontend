import {Archive, Assortment, Label, PopularReport, User} from './userinfo';
import { Simuser } from './userinfo';

const user1: Simuser = {
  id: 2,
  name: 'Sindy',
  about_me: 'about me',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
  location: 'China',
  email: 'biohub@mail.ustc.edu.cn',
  organization: 'USTC',
  follow_or_unfollow: true,
  follow_or_edit: true,
};
const user2: Simuser = {
  id: 3,
  name: 'Cindy',
  about_me: 'about me',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
  location: 'China',
  email: 'biohub@mail.ustc.edu.cn',
  organization: 'USTC',
  follow_or_unfollow: true,
  follow_or_edit: true,
};
const user3: Simuser = {
  id: 4,
  name: 'Sindi',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
  location: 'China',
  email: 'biohub@mail.ustc.edu.cn',
  organization: 'USTC',
  follow_or_unfollow: true,
  follow_or_edit: true,
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
  location: 'China',
  email: 'biohub@mail.ustc.edu.cn',
  organization: 'USTC',
  follow_or_unfollow: true,
  follow_or_edit: true,
};
const report1 = {
  title: 'research',
  auther: user2,
  topic: ['A', 'B', 'C'],
  content: '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
  '2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
  '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
  '2. Add 250 μL Buﬀer P1, resuspend cells.\n',
  commentsnum: 190,
  likesnum: 12,
};

const archives = [
  {data: '2018-10-9', num: 12},
  {data: '2018-10-10', num: 14},
];
const popular_repots = [
  {name: 'aaa', num: 12},
  {name: 'bbb', num: 13},
];
const labels = [
  {name: 'ccc', num: 10},
  {name: 'ddd', num: 15},
];
const assortment = {
  archives: archives,
  popular_reports: popular_repots,
  labels: labels,
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
  reports: [report1],
  classification: assortment,
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
  location: 'China',
  email: 'biohub@mail.ustc.edu.cn',
  organization: 'USTC',
  follow_or_unfollow: true,
  follow_or_edit: true,
};
