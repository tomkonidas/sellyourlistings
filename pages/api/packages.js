export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Deluxe",
      price: { condo: 570.0, house: 675.0 },
      condoPrice: 570.0,
      housePrice: 675.0,
      services: [1, 2, 7, 8, 9, 11, 12],
    },
    {
      id: 2,
      name: "Deluxe Plus",
      price: { condo: 680.0, house: 850.0 },
      condoPrice: 680.0,
      housePrice: 850.0,
      services: [1, 2, 5, 6, 10, 12],
    },
    {
      id: 3,
      name: "Full Coverage",
      price: { condo: 385.0, house: 450.0 },
      condoPrice: 385.0,
      housePrice: 450.0,
      services: [1, 2, 7, 8, 9],
    },
    {
      id: 4,
      name: "Full Coverage Plus",
      price: { condo: 495.0, house: 675.0 },
      condoPrice: 495.0,
      housePrice: 675.0,
      services: [1, 2, 5, 6, 10],
    },
    {
      id: 5,
      name: "Basics",
      price: { condo: 220.0, house: 270.0 },
      condoPrice: 220.0,
      housePrice: 270.0,
      services: [1, 2, 7, 8],
    },
    {
      id: 6,
      name: "Basics Plus",
      price: { condo: 320.0, house: 450.0 },
      condoPrice: 320.0,
      housePrice: 450.0,
      services: [1, 2, 5, 6],
    },
    {
      id: 7,
      name: "Full Video",
      price: { condo: 370.0, house: 470.0 },
      condoPrice: 370.0,
      housePrice: 470.0,
      services: [10, 11, 12],
    },
    {
      id: 8,
      name: "Duo",
      price: { condo: 285.0, house: 365.0 },
      condoPrice: 285.0,
      housePrice: 365.0,
      services: [1, 2, 0, 11, 12],
    },
  ]);
};
