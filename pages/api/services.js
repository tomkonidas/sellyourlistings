export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Property Photos",
      price: 100.0,
      category: "photo",
      class: "Condo",
      packages: [
        "deluxe",
        "deluxePlus",
        "fullCoverage",
        "fullCoveragePlus",
        "basics",
        "basicsPlus",
        "duo",
      ],
    },
  ]);
};
