import { User } from './user';
import { Simuser } from './user';

export const USER: User = {
  id: 1,
  name: 'Thomas Romero',
  about_me: 'a student in ustc',
  following: {
    content: [{
      id: 2,
      name: 'Sindy',
      about_me: 'about me',
      avatar_url: '../../../assets/img/test/img.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
      }, {
      id: 3,
      name: 'Cindy',
      about_me: 'about me',
      avatar_url: '../../../assets/img/test/images.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
     }],
  },
  followers: {
    content: [{
      id: 4,
      name: 'Sindi',
      about_me: 'about me',
      avatar_url: '../../../assets/img/test/img.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
    },
      {
        id: 2,
        name: 'Sindy',
        about_me: 'about me',
        avatar_url: '../../../assets/img/test/img.jpg',
        flingnum: 67,
        flednum: 89,
        likenum: 321,
        reportsnum: 21,
      },
      {
      id: 5,
      name: 'Candy',
      about_me: 'about me',
      avatar_url: '../../../assets/img/test/img.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
    }],
  },
  likes: {
    content: [{
    ouser: {
      id: 2,
      name: 'Sindy',
      about_me: 'about me',
      avatar_url: '../../../assets/img/test/img.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
    },
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
  }]},
  reports: {
    content: [{
    title: 'research',
    topic: ['A', 'B', 'C'],
    content:  '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
'2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
'1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
'2. Add 250 μL Buﬀer P1, resuspend cells.\n',
    commentsnum: 190,
    likesnum: 12
  }]
  }
}
export const SIMUSER: Simuser = {
  name: 'Thomas Romero',
  avatar_url: '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  followingnum: 42,
  followednum: 233,
  likenum: 1,
  reportsnum: 1,
}
