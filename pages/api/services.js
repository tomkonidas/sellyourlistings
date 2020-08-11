export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Property Photos",
      price: 100.0,
      class: "Condo",
      description:
        "Includes 20 professionally edited photos of high quality, color balance, exposure and sharpening.",
    },
    {
      id: 2,
      name: "Property Photos",
      price: 150.0,
      class: "House",
      description:
        "Includes 35 professionally edited photos of high quality, color balance, exposure and sharpening.",
    },
    {
      id: 3,
      name: "10 Extra Photos",
      price: 20.0,
      class: "",
      description: "",
    },
    {
      id: 4,
      name: "Virtual Home Staging*",
      price: 30.0,
      class: "",
      description: "Price per room. Does not include property photos.",
    },
    {
      id: 5,
      name: "HQ 3D Virtual Tour*",
      price: 250.0,
      class: "Condo",
      description:
        "3D tour with Matterport camera for condos, lofts and apartments that are a single floor.",
    },
    {
      id: 6,
      name: "HQ 3D Virtual Tour*",
      price: 400.0,
      class: "House",
      description: "3D tour with Matterport camera for 2+ floor properties.",
    },
    {
      id: 7,
      name: "3D Virtual Tour*",
      price: 135.0,
      class: "Condo",
      description:
        "3D tour for condos, lofts and apartments that are a single floor.",
    },
    {
      id: 8,
      name: "3D Virtual Tour*",
      price: 150.0,
      class: "House",
      description: "3D tour for 2+ floor properties.",
    },
    {
      id: 9,
      name: "Drone Video",
      price: 200.0,
      class: "",
      description:
        "Includes filming the exterior of the property and a 30-60 second edit.",
    },
    {
      id: 10,
      name: "HDR Drone Video",
      price: 250.0,
      class: "",
      description:
        "Includes filming the exterior of the property in HDR with detailed coloring and fixed windows 60 second edit.",
    },
    {
      id: 11,
      name: "HDR Interior Video",
      price: 200.0,
      class: "Condo",
      description:
        "Includes filming the interior of the property in HDR with detailed coloring, 60 second edit.",
    },
    {
      id: 12,
      name: "HDR Interior Video",
      price: 250.0,
      class: "House",
      description:
        "Includes filming the interior of the property in HDR with detailed coloring, 60 second edit.",
    },
    {
      id: 13,
      name: "1-Day Rush Delivery",
      price: 100.0,
      class: "",
      description: "",
    },
    {
      id: 14,
      name: "Matterport Storage",
      price: 15.0,
      class: "",
      description: "Includes an extra 3 months of storage.",
    },
  ]);
};
