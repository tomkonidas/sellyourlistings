export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "51 Cambridge",
      showcase: [
        require("../../images/51_cambridge_1.JPG"),
        require("../../images/51_cambridge_2.JPG"),
        require("../../images/51_cambridge_3.JPG"),
      ],
      matterport: "",
      youtube: "https://www.youtube.com/embed/aw_TksVa-q0",
    },
    {
      id: 2,
      name: "4572 de L'esplanade",
      showcase: [
        require("../../images/4572_esplanade_1.JPG"),
        require("../../images/4572_esplanade_2.JPG"),
        require("../../images/4572_esplanade_3.JPG"),
      ],
      matterport: "",
      youtube: "",
    },
    {
      id: 3,
      name: "31650 Rue Saint Louis",
      showcase: [
        require("../../images/31650_rue_saint_louis_1.JPG"),
        require("../../images/31650_rue_saint_louis_2.JPG"),
        require("../../images/31650_rue_saint_louis_3.JPG"),
      ],
      matterport: "",
      youtube: "",
    },
    {
      id: 4,
      name: "3906 St. Andre",
      showcase: [
        require("../../images/3906_st_andre_1.JPG"),
        require("../../images/3906_st_andre_2.JPG"),
        require("../../images/3906_st_andre_3.JPG"),
      ],
      matterport: "",
      youtube: "",
    },
  ]);
};
