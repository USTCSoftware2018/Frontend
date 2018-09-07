import { User } from './user';

export const USER: User = {
  id: 1,
  name: 'Thomas Romero',
  about_me: 'a student in ustc',
  avatar_url: '../../../assets/img/test/images.jpg',
  following: {
    inum: 42,
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
      avatar_url: '../../../assets/img/test/img.jpg',
      flingnum: 67,
      flednum: 89,
      likenum: 321,
      reportsnum: 21,
     }],
  },
  followers: {
    inum: 233,
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
    inum: 1,
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
      '…',
      commentsnum: 190,
      likesnum: 12
    }
  }]},
  reports: {
    inum: 1,
    content: [{
    title: 'research',
    topic: ['A', 'B', 'C'],
    content:  '1. Centifuge 1.5 mL bacterium solution at 11000 rpm, few sediment getted. Remove the supernatant. Repeat twice.\n' +
    '2. Add 250 μL Buﬀer P1, resuspend cells.\n' +
    '…',
    commentsnum: 190,
    likesnum: 12
  }]
  }
};
