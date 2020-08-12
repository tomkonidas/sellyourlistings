export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Photo",
      services: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: "3D Virtual Tour",
      services: [5, 6, 7, 8],
    },
    {
      id: 3,
      name: "Video",
      services: [9, 10, 11, 12],
    },
    {
      id: 3,
      name: "Addons",
      services: [13, 14],
    },
  ]);
};
