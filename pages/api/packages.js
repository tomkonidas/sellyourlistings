export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Deluxe",
      price: { condo: 570.0, house: 675.0 },
      services: { condo: [1, 7, 9, 10, 11], house: [2, 8, 9, 10, 11] },
      special: { condo: [], house: [] },
    },
    {
      id: 2,
      name: "Deluxe Plus",
      price: { condo: 680.0, house: 850.0 },
      services: { condo: [1, 5, 10], house: [2, 6, 12] },
      special: { condo: [], house: [] },
    },
    {
      id: 3,
      name: "Full Coverage",
      price: { condo: 385.0, house: 450.0 },
      services: { condo: [1, 7, 9], house: [2, 8, 9] },
      special: { condo: [], house: [] },
    },
    {
      id: 4,
      name: "Full Coverage Plus",
      price: { condo: 495.0, house: 675.0 },
      services: { condo: [1, 5, 10], house: [2, 6, 10] },
      special: { condo: [], house: [] },
    },
    {
      id: 5,
      name: "Basics",
      price: { condo: 220.0, house: 270.0 },
      services: { condo: [1, 7], house: [2, 8] },
      special: { condo: [], house: [] },
    },
    {
      id: 6,
      name: "Basics Plus",
      price: { condo: 320.0, house: 450.0 },
      services: { condo: [1, 5], house: [2, 6] },
      special: { condo: [], house: [] },
    },
    {
      id: 7,
      name: "Full Video",
      price: { condo: 370.0, house: 470.0 },
      services: { condo: [10, 11], house: [10, 12] },
      special: { condo: [], house: [] },
    },
    {
      id: 8,
      name: "Duo",
      price: { condo: 285.0, house: 365.0 },
      services: {
        condo: [1],
        house: [2],
        special: { condo: [10, 11], house: [10, 12] },
      },
    },
  ]);
};
