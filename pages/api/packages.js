export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Deluxe",
      condoPrice: 570.0,
      housePrice: 675.0,
      services: [1, 2, 7, 8, 9, 11, 12],
    },
    {
      id: 2,
      name: "Deluxe Plus",
      condoPrice: 680.0,
      housePrice: 850.0,
      services: [1, 2, 5, 6, 10, 12],
    },
    {
      id: 3,
      name: "Full Coverage",
      condoPrice: 385.0,
      housePrice: 450.0,
      services: [1, 2, 7, 8, 9],
    },
    {
      id: 4,
      name: "Full Coverage Plus",
      condoPrice: 495.0,
      housePrice: 675.0,
      services: [1, 2, 5, 6, 10],
    },
    {
      id: 5,
      name: "Basics",
      condoPrice: 220.0,
      housePrice: 270.0,
      services: [1, 2, 7, 8],
    },
    {
      id: 6,
      name: "Basics Plus",
      condoPrice: 320.0,
      housePrice: 450.0,
      services: [1, 2, 5, 6],
    },
    {
      id: 7,
      name: "Full Video",
      condoPrice: 370.0,
      housePrice: 470.0,
      services: [10, 11, 12],
    },
    {
      id: 8,
      name: "Duo",
      condoPrice: 285.0,
      housePrice: 365.0,
      services: [1, 2, 0, 11, 12],
    },
  ]);
};
