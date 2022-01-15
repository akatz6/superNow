export const actions = {
  setData({ commit, dispatch }: any) {
    const featuredOne = {
      id: 0,
      img: "pizzaOne.jpeg",
      title: "Lorem ipsum",
      tagLine: "dolor sit amet",
      check: false,
    };
    commit("setFeaturedBasicData", featuredOne);
    const featuredTwo = {
      id: 1,
      img: "pizzaTwo.jpeg",
      title: "consectetur",
      tagLine: "adipiscing elit",
      check: false,
    };
    commit("setFeaturedBasicData", featuredTwo);
    const featuredThree = {
      id: 2,
      img: "pizzaThree.jpeg",
      title: "sed do",
      tagLine: "eiusmod tempor incididunt ",
      check: false,
    };
    commit("setFeaturedBasicData", featuredThree);
    const artOne = {
      id: 0,
      img: "dogOne.jpeg",
      title: "ut labore",
      tagLine: "et dolore magna aliqua.",
      check: false,
    };
    commit("setArtBasicData", artOne);
    const artTwo = {
      id: 1,
      img: "dogTwo.jpeg",
      title: "Tristique risus",
      tagLine: "nec feugiat in.",
      check: false,
    };
    commit("setArtBasicData", artTwo);
    const artThree = {
      id: 2,
      img: "dogThree.jpeg",
      title: "Lobortis mattis",
      tagLine: "fermentum posuere",
      check: false,
    };
    commit("setArtBasicData", artThree);
    const artFour = {
      id: 3,
      img: "dogFour.jpeg",
      title: "aliquam faucibus",
      tagLine: "purus in massa tempor.",
      check: false,
    };
    commit("setArtBasicData", artFour);
    const artFive = {
      id: 4,
      img: "dogFive.jpeg",
      title: "Donec massa",
      tagLine: "sapien faucibus et.",
      check: false,
    };
    commit("setArtBasicData", artFive);
    const artSix = {
      id: 5,
      img: "dogSix.jpeg",
      title: "Elementum facilisis",
      tagLine: "leo vel fringilla. ",
      check: false,
    };
    commit("setArtBasicData", artSix);
    const artSeven = {
      id: 6,
      img: "dogSeven.jpeg",
      title: "Feugiat sed",
      tagLine: "lectus vestibulum mattis",
      check: false,
    };
    commit("setArtBasicData", artSeven);
    const artEight = {
      id: 7,
      img: "dogEight.jpeg",
      title: "Morbi leo",
      tagLine: "ullamcorper velit sed.",
      check: false,
    };
    commit("setArtBasicData", artEight);
    const smallOne = {
      id: 0,
      img: "burgerOne.jpeg",
      title: "urna molestie at",
      tagLine: "elementum eu facilisis sed.",
      check: false,
    };
    commit("setSmallSocial", smallOne);
    const smallTwo = {
      id: 1,
      img: "burgerTwo.jpeg",
      title: "Mattis ullamcorper",
      tagLine: "velit sed ullamcorper.",
      check: false,
    };
    commit("setSmallSocial", smallTwo);
    const smallThree = {
      id: 2,
      img: "burgerThree.jpeg",
      title: "morbi",
      tagLine: "tincidunt ornare.",
      check: false,
    };
    commit("setSmallSocial", smallThree);
    const smallFour = {
      id: 3,
      img: "burgerFour.jpeg",
      title: "Iaculis urnat",
      tagLine: "id volutpat lacus.",
      check: false,
    };
    commit("setSmallSocial", smallFour);
    const smallFive = {
      id: 4,
      img: "burgerFive.jpeg",
      title: "urna molestie at",
      tagLine: "elementum eu facilisis sed.",
      check: false,
    };
    commit("setSmallSocial", smallFive);
    const smallSix = {
      id: 5,
      img: "burgerSix.jpeg",
      title: "Leo vel",
      tagLine: "fringilla est ullamcorper.",
      check: false,
    };
    commit("setSmallSocial", smallSix);
    const smallSeven = {
      id: 6,
      img: "burgerSeven.jpeg",
      title: "eget",
      tagLine: "nulla facilisi.",
      check: false,
    };
    commit("setSmallSocial", smallSeven);
    const smallEight = {
      id: 7,
      img: "burgerEight.jpeg",
      title: "Sed id",
      tagLine: "semper risus",
      check: false,
    };
    commit("setSmallSocial", smallEight);
  },
  // async getAllNames({commit, dispatch}: any){
  //     const temp = await method
  // }
};
