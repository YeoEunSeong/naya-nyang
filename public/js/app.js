let cats = [];

const setCats = _cats => {
  cats = _cats;
};

const fetchCats = () => {
  cats = [
    {
      id: 1,
      url: 'img/image01.jpeg',
      content: '고양이는 귀엽다',
      liked: true,
      hashtag: ['고양이', '귀엽다', '냥스타그램'],
    },
    {
      id: 2,
      url: 'img/image02.jpeg',
      content: '고양이는 귀엽다',
      liked: false,
      hashtag: ['고양이', '귀엽다', '냥스타그램'],
    },
    {
      id: 3,
      url: 'img/image03.jpeg',
      content: '고양이는 귀엽다',
      liked: true,
      hashtag: ['고양이', '귀엽다', '냥스타그램'],
    },
    {
      id: 4,
      url: 'img/image04.jpeg',
      content: '고양이는 귀엽다',
      liked: false,
      hashtag: ['고양이', '귀엽다', '냥스타그램'],
    },
  ];
};
