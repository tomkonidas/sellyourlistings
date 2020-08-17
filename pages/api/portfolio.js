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
        require("../../images/31650_rue_saint_louis_1.jpg"),
        require("../../images/31650_rue_saint_louis_2.jpg"),
        require("../../images/31650_rue_saint_louis_3.jpg"),
      ],
      matterport: "",
      youtube: "",
    },
  ]);
};
