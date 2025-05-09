const projectsData = [
  {
    name: "Short Films",
    delay: "100",
    items: [
      {
        title: "Aalaporan thamizhan",
        image: "aalaporan-thamizhan.jpg",
        briefDescription: "A group of friends reunites to stop a scam.",
      },
      {
        title: "Kanave Kalaiyaathe",
        image: "kanave-kalaiyaathe.jpg",
        briefDescription: "A rich man realizes money can't buy happiness.",
      },
      {
        title: "Muthal Maatram Un Kaiyil",
        image: "muthal-maatram.jpg",
        briefDescription: "A judge learns a lesson about environmental protection.",
      },
      {
        title: "Unnakkaga Vaazha Ninaikiren",
        image: "unnakkaga-vaazha.jpg",
        briefDescription: "A woman helps her husband overcome his past.",
      },
      {
        title: "Scared",
        image: "", // Using a placeholder image
        briefDescription: "A chain smoker has a life-changing dream.",
      },
      {
        title: "Mudintha Kathai Thodarvathillai (Iraivan Aetinile)",
        image: "mudintha-kathai.jpg",
        briefDescription: "A reporter investigates a brutal murder.",
      },
      {
        title: "The Last Wish",
        image: "the-last-wish.jpg",
        briefDescription: "A drug addict confronts his past.",
      },
    ],
  },
  {
    name: "Webseries",
    delay: "200",
    items: [
      {
        title: "Venpani Malare",
        image: "venpani-malare.jpg",
        briefDescription: "A Rom-Com Tamil Livin Series.",
      },
    ],
  },
  {
    name: "Album Songs",
    delay: "300",
    items: [
      {
        title: "Aval Peyar Dhatchaeni",
        image: "aval-peyar-dhatchaeni.jpg",
        briefDescription: "A Tamil album song inspired by a movie.",
      },
      {
        title: "Avalo Athirai",
        image: "avalo-athirai.jpg",
        briefDescription: "A love feel music video.",
      },
    ],
  },
];

projectsData.forEach((category) => {
  category.items.forEach((item) => {
    if (item.title === "Venpani Malare") {
      item.episodes = [
        { title: "Episode 1", link: "http://www.youtube.com/watch?v=-rZWOW8UfIk" },
        { title: "Episode 2", link: "http://www.youtube.com/watch?v=CExeXTpKAe8" },
        { title: "Episode 3", link: "http://www.youtube.com/watch?v=UAaRp1lLx64" },
        { title: "Episode 4", link: "http://www.youtube.com/watch?v=u2UAJkNf1Ao" },
        { title: "Episode 5 (Climax)", link: "http://www.youtube.com/watch?v=TmORlTyNN-E" },
      ];
    }
  });
});

export default projectsData;
