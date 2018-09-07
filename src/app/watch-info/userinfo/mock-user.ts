import { User } from './user';
import { Simuser } from './user';
import { Otheruser } from './user';

const user1: Otheruser = {
  id: 2,
  name: 'Sindy',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
const user2: Otheruser = {
  id: 3,
  name: 'Cindy',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/images.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
const user3: Otheruser = {
  id: 4,
  name: 'Sindi',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
};
const user4: Otheruser = {
  id: 5,
  name: 'Candy',
  about_me: 'about me',
  avatar_url: '../../../assets/img/test/img.jpg',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
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
    report: {
      title: 'research',
      topic: ['A', 'B', 'C'],
      content: '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
      '2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
      '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
      '2. Add 250 μL Buﬀer P1, resuspend cells.\n',
      commentsnum: 190,
      likesnum: 12
    }
  }],
  reports: [{
    title: 'research',
    topic: ['A', 'B', 'C'],
    content:  '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
'2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
'1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
'2. Add 250 μL Buﬀer P1, resuspend cells.\n',
    commentsnum: 190,
    likesnum: 12
  }]
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
