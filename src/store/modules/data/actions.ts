export const actions = {
  setData({ commit }: any) {
    commit("resetFeaturedBasicData");
    commit("resetArtBasicData");
    commit("resetSmallSocial");
    const featuredOne = {
      id: 0,
      img: "pizzaOne.jpeg",
      title: "Lorem ipsum",
      tagLine: "dolor sit amet",
      extendedDescription:
        "Lorem ipsum dolor sit amet, consectetur Morbi leo urna molestie at elementum eu facilisis sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Iaculis urna id volutpat lacus. Leo vel fringilla est ullamcorper eget nulla facilisi.",
      check: false,
    };
    commit("setFeaturedBasicData", featuredOne);
    const featuredTwo = {
      id: 1,
      img: "pizzaTwo.jpeg",
      title: "consectetur",
      tagLine: "adipiscing elit",
      extendedDescription:
        "Dapibus ultrices in iaculis nunc sed augue. Quis  est. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. In mollis nunc sed id semper risus. Vitae turpis massa sed elementum tempus egestas sed sed. Consequat semper viverra nam libero justo laoreet sit amet cursus. Eget duis at tellus at urna condimentum mattis pellentesque. Elementum integer enim neque volutpat ac. ",
      check: false,
    };
    commit("setFeaturedBasicData", featuredTwo);
    const featuredThree = {
      id: 2,
      img: "pizzaThree.jpeg",
      title: "sed do",
      tagLine: "eiusmod tempor incididunt ",
      extendedDescription:
        "Viverra ipsum nunc aliquet bibendum suscipit adipiscing bibendum est ultricies integer. Rhoncus mattis rhoncus urna neque. Odio ut enim blandit volutpat maecenas volutpat blandit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Ultrices sagittis orci a scelerisque purus semper eget duis. Auctor eu augue ut lectus arcu bibendum at. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Felis bibendum ut tristique et. Interdum consectetur libero id faucibus. Egestas integer eget aliquet nibh praesent tristique magna. In vitae turpis massa sed elementum tempus. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eu turpis egestas pretium aenean pharetra magna ac placerat. Urna condimentum mattis pellentesque id nibh tortor id.",
      check: false,
    };
    commit("setFeaturedBasicData", featuredThree);
    const artOne = {
      id: 0,
      img: "dogOne.jpeg",
      title: "ut labore",
      tagLine: "et dolore magna aliqua.",
      extendedDescription:
        "Rhoncus est pellentesque elit ullamcorper Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Augue eget arcu dictum varius duis. Arcu non odio euismod lacinia. Blandit massa enim nec dui nunc mattis enim ut. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Magna fermentum iaculis eu non. Blandit massa enim nec dui nunc mattis. In hendrerit gravida rutrum quisque. Pulvinar pellentesque habitant morbi tristique. Ultrices mi tempus imperdiet nulla malesuada. Congue eu consequat ac felis donec et odio. Tortor consequat id porta nibh venenatis. Pretium viverra suspendisse potenti nullam ac tortor. Sagittis aliquam malesuada bibendum arcu vitae. Sagittis orci a scelerisque purus semper. Neque vitae tempus quam pellentesque nec nam aliquam. ",
      check: false,
    };
    commit("setArtBasicData", artOne);
    const artTwo = {
      id: 1,
      img: "dogTwo.jpeg",
      title: "Tristique risus",
      tagLine: "nec feugiat in.",
      extendedDescription:
        "Viverra orci sagittis eu volutpat sa massa ultricies mi quis hendrerit dolor magna. Ipsum nunc aliquet bibendum enim facilisis. Nibh tellus molestie nunc non. Tellus orci ac auctor augue mauris augue. Pharetra et ultrices neque ornare aenean euismod elementum nisi. ",
      check: false,
    };
    commit("setArtBasicData", artTwo);
    const artThree = {
      id: 2,
      img: "dogThree.jpeg",
      title: "Lobortis mattis",
      tagLine: "fermentum posuere",
      extendedDescription:
        "Nulla aliquet porttitor lacus luctus accustibulum morbi blandit cursus. Enim diam vulputate ut pharetra sit. Facilisi cras fermentum odio eu feugiat pretium. Imperdiet nulla malesuada pellentesque elit eget gravida. Ac tortor dignissim convallis aenean et tortor at risus. Aliquet eget sit amet tellus. Amet cursus sit amet dictum sit amet justo donec enim. Sit amet nisl suscipit adipiscing bibendum est ultricies. Fames ac turpis egestas sed tempus urna et pharetra pharetra.",
      check: false,
    };
    commit("setArtBasicData", artThree);
    const artFour = {
      id: 3,
      img: "dogFour.jpeg",
      title: "aliquam faucibus",
      tagLine: "purus in massa tempor.",
      extendedDescription:
        "Quisque id diam vel quam elementum pulvinar e lectus urna duis convallis convallis tellus. Mauris nunc congue nisi vitae. Lectus arcu bibendum at varius vel pharetra vel turpis. Arcu non odio euismod lacinia at quis risus sed vulputate. Tincidunt eget nullam non nisi est sit amet facilisis. Mauris nunc congue nisi vitae suscipit tellus. Molestie at elementum eu facilisis sed. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Dolor sit amet consectetur adipiscing elit. Cursus mattis molestie a iaculis at erat. ",
      check: false,
    };
    commit("setArtBasicData", artFour);
    const artFive = {
      id: 4,
      img: "dogFive.jpeg",
      title: "Donec massa",
      tagLine: "sapien faucibus et.",
      extendedDescription:
        "Augue eget arcu dictum varius duis at. Nulla facilisi nullam vehicula ipsum a arcu. In cursus turpis massa tincidunt dui ut ornare. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Non arcu risus quis varius quam quisque id diam vel. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Ultricies integer quis auctor elit sed vulputate. Auctor augue mauris augue neque gravida in fermentum et. Nunc non blandit massa enim. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Et netus et malesuada fames ac. Tortor posuere ac ut consequat. Diam maecenas ultricies mi eget mauris. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Consectetur lorem donec massa sapien faucibus et. At tellus at urna condimentum mattis pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. ",
      check: false,
    };
    commit("setArtBasicData", artFive);
    const artSix = {
      id: 5,
      img: "dogSix.jpeg",
      title: "Elementum facilisis",
      tagLine: "leo vel fringilla. ",
      extendedDescription:
        "Fermentum dui faucibus in ornare quam viverra. o nec ultrices dui. Dignissim diam quis enim lobortis scelerisque. At consectetur lorem donec massa. Platea dictumst quisque sagittis purus. At auctor urna nunc id cursus metus. Morbi non arcu risus quis varius quam.",
      check: false,
    };
    commit("setArtBasicData", artSix);
    const artSeven = {
      id: 6,
      img: "dogSeven.jpeg",
      title: "Feugiat sed",
      tagLine: "lectus vestibulum mattis",
      extendedDescription:
        "Interdum velit laoreet id donec. Felis egetntesque nec nam aliquam sem et tortor consequat. Ipsum consequat nisl vel pretium lectus quam id. Habitant morbi tristique senectus et netus et malesuada. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Mauris ultrices eros in cursus turpis massa. Faucibus purus in massa tempor nec feugiat nisl. Quis auctor elit sed vulputate. Sit amet nulla facilisi morbi tempus. Vitae justo eget magna fermentum iaculis eu non. Odio tempor orci dapibus ultrices in. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fames ac turpis egestas sed tempus. Dignissim diam quis enim lobortis.",
      check: false,
    };
    commit("setArtBasicData", artSeven);
    const artEight = {
      id: 7,
      img: "dogEight.jpeg",
      title: "Morbi leo",
      tagLine: "ullamcorper velit sed.",
      extendedDescription:
        "Nunc sed id semper risus in. Orci dapibus ultrices ilit scelerisque in dictum. Faucibus et molestie ac feugiat. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Integer eget aliquet nibh praesent tristique. Viverra nibh cras pulvinar mattis nunc sed. Sagittis eu volutpat odio facilisis mauris. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.",
      check: false,
    };
    commit("setArtBasicData", artEight);
    const smallOne = {
      id: 0,
      img: "burgerOne.jpeg",
      title: "urna molestie at",
      tagLine: "elementum eu facilisis sed.",
      extendedDescription:
        "Adipiscing elit ut aliquam purus. C Dictum sit amet justo donec enim diam vulputate ut pharetra. Mauris a diam maecenas sed. Egestas tellus rutrum tellus pellentesque eu. Lacus vel facilisis volutpat est velit egestas dui id. Pretium nibh ipsum consequat nisl. Donec ultrices tincidunt arcu non sodales neque sodales.",
      check: false,
    };
    commit("setSmallSocial", smallOne);
    const smallTwo = {
      id: 1,
      img: "burgerTwo.jpeg",
      title: "Mattis ullamcorper",
      tagLine: "velit sed ullamcorper.",
      extendedDescription:
        "Nam aliquam sem et tortor consequat id porta niuis blandit turpis cursus. Eu turpis egestas pretium aenean pharetra magna. Odio eu feugiat pretium nibh ipsum consequat. Amet commodo nulla facilisi nullam vehicula ipsum.",
      check: false,
    };
    commit("setSmallSocial", smallTwo);
    const smallThree = {
      id: 2,
      img: "burgerThree.jpeg",
      title: "morbi",
      tagLine: "tincidunt ornare.",
      extendedDescription:
        "Vel turpis nunc eget lorem dolor sed viverra bibendum. Nibh ipsum consequat nisl vel pretium lectus. Lectus proin nibh nisl condimentum id venenatis a. Aliquet enim tortor at auctor. Quis hendrerit dolor magna eget est. Cursus risus at ultrices mi tempus imperdiet nulla. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Hac habitasse platea dictumst vestibulum. Fringilla phasellus faucibus scelerisque eleifend. Consequat ac felis donec et odio pellentesque diam. Non tellus orci ac auctor augue mauris augue. Eget arcu dictum varius duis at.",
      check: false,
    };
    commit("setSmallSocial", smallThree);
    const smallFour = {
      id: 3,
      img: "burgerFour.jpeg",
      title: "Iaculis urnat",
      tagLine: "id volutpat lacus.",
      extendedDescription:
        "Lacus luctus accumsan tortor aenean et tortor at risus viverra adipiscing. Egestas maecenas pharetra convallis posuere morbi. Urna nec tincidunt praesent semper feugiat. Risus nullam eget felis eget. Id donec ultrices tincidunt arcu non sodales neque. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Quis imperdiet massa tincidunt nunc. A pellentesque sit amet porttitor eget dolor. Sit amet aliquam id diam maecenas ultricies mi. Ornare arcu odio ut sem nulla pharetra diam. Lobortis elementum nibh tellus molestie nunc non blandit. Blandit turpis cursus in hac habitasse platea dictumst. Magna fringilla urna porttitor rhoncus. Hendrerit dolor magna eget est lorem ipsum dolor.",
      check: false,
    };
    commit("setSmallSocial", smallFour);
    const smallFive = {
      id: 4,
      img: "burgerFive.jpeg",
      title: "urna molestie at",
      tagLine: "elementum eu facilisis sed.",
      extendedDescription:
        "Non consectetur a erat nam at sed. Duis at consectetur lorem donec massa sapien faucibus et. Nunc aliquet bibendum enim facilisis gravida. Ullamcorper malesuada proin libero nunc consequat. Pellentesque habitant morbi tristique senectus et. Risus quis varius quam quisque id diam vel quam. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Et egestas quis ipsum suspendisse. Amet consectetur adipiscing elit pellentesque habitant morbi.",
      check: false,
    };
    commit("setSmallSocial", smallFive);
    const smallSix = {
      id: 5,
      img: "burgerSix.jpeg",
      title: "Leo vel",
      tagLine: "fringilla est ullamcorper.",
      extendedDescription:
        "Quam quisque id diam vel lobortis scelerisque fermentum dui faucibus in ornare.",
      check: false,
    };
    commit("setSmallSocial", smallSix);
    const smallSeven = {
      id: 6,
      img: "burgerSeven.jpeg",
      title: "eget",
      tagLine: "nulla facilisi.",
      extendedDescription:
        "A erat nam at lectus urna duis convallisr leo a diam sollicitudin. Suscipit adipiscing bibendum est ultricies. Pharetra et ultrices neque ornare aenean euismod elementum. Morbi blandit cursus risus at. Consectetur adipiscing elit ut aliquam purus sit. Quis auctor elit sed vulputate mi. Fringilla est ullamcorper eget nulla. Massa sapien faucibus et molestie ac feugiat sed.",
      check: false,
    };
    commit("setSmallSocial", smallSeven);
    const smallEight = {
      id: 7,
      img: "burgerEight.jpeg",
      title: "Sed id",
      tagLine: "semper risus",
      extendedDescription:
        "Sed id semper risus in hendrerit arcu cursus vitae. Nisl purus in mollis nunc sed id. Volutpat maecenas volutpat blandit aliquam etiam. Arcu felis bibendum ut tristique et egestas. Pulvinar mattis nunc sed blandit libero. Non sodales neque sodales ut etiam sit. Sit amet consectetur adipiscing elit. Pellentesque diam volutpat commodo sed egestas. Massa massa ultricies mi quis hendrerit dolor.",
      check: false,
    };
    commit("setSmallSocial", smallEight);
  },
  getMoreData({ commit }: any, payload: any) {
    commit("getMoreData", payload);
  },
  setCategory({ commit }: any, category: string) {
    commit("setCategory", category);
  },
  setBooking({ commit }: any, payload: any) {
    commit("setBooking", payload);
  },
};
