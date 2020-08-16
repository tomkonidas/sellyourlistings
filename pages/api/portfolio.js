export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "51 Cambridge",
      showcase: ["1--G_KVORc-_aX_zm2mOBtxAhLdOT3Euf"],
      matterport: "url",
      youtube: "url",
    },
    {
      id: 2,
      name: "Address 2",
      showcase: ["img1", "img2", "img3", "img4"],
      matterport: "url",
      youtube: "url",
    },
    {
      id: 3,
      name: "Address 3",
      showcase: ["img1", "img2", "img3", "img4"],
      matterport: "url", 
      youtube: "url",
    },
  ]);
};
