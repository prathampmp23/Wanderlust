// init/data.js
const sampleListings = [
  {
    title: "Royal Villa",
    description:
      "Relax on the sandy shores of Mumbai in this beautiful beachfront bungalow with a private pool.",
    category: "Beach",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762450586/wanderlust_DEV/dktscml3nssgm8jcmxpw.avif",
      filename: "wanderlust_DEV/dktscml3nssgm8jcmxpw",
    },
    price: 23000,
    location: "Mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.87872, 19.077793] },
  },
  {
    title: "Beach Resort",
    description: "Nice Beach and Hotel with beautiful ocean view.",
    category: "Beach",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762454676/wanderlust_DEV/cdwohfkmyk5nkkkd7oge.avif",
      filename: "wanderlust_DEV/cdwohfkmyk5nkkkd7oge",
    },
    price: 25000,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [74.054111, 15.325556] },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    category: "Rooms",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762497969/wanderlust_DEV/xehg8qkoyfalaw39skwj.avif",
      filename: "wanderlust_DEV/xehg8qkoyfalaw39skwj",
    },
    price: 12000,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.005994, 40.712749] },
  },
  {
    title: "Mountain Escape Cabin",
    description:
      "A cozy wooden cabin nestled in the Himalayas, perfect for a peaceful getaway.",
    category: "Mountain",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501001/wanderlust_DEV/zjmc5t9rbc6khghxd2yh.avif",
      filename: "wanderlust_DEV/zjmc5t9rbc6khghxd2yh",
    },
    price: 18000,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] },
  },
  {
    title: "Desert Safari Camp",
    description:
      "Experience the magic of the Thar Desert under the stars in a luxurious tented camp.",
    category: "Trending",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501055/wanderlust_DEV/xqzlkd6grbbuwcg9kp5q.avif",
      filename: "wanderlust_DEV/xqzlkd6grbbuwcg9kp5q",
    },
    price: 15000,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] },
  },
  {
    title: "Lakeside Cottage",
    description:
      "Enjoy tranquility by the lake in this charming wooden cottage surrounded by nature.",
    category: "View",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501101/wanderlust_DEV/nlmhpgqbyblgsaw0hs4b.avif",
      filename: "wanderlust_DEV/nlmhpgqbyblgsaw0hs4b",
    },
    price: 17000,
    location: "Nainital",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4636, 29.3803] },
  },
  {
    title: "Countryside Farmhouse",
    description:
      "A rustic farmhouse surrounded by greenery, ideal for family retreats and barbecues.",
    category: "Farm",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501152/wanderlust_DEV/ghykxlecn9lvzfx2t6uz.avif",
      filename: "wanderlust_DEV/ghykxlecn9lvzfx2t6uz",
    },
    price: 20000,
    location: "Pune",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] },
  },
  {
    title: "Ski Lodge Chalet",
    description:
      "A warm lodge with a fireplace near the best ski slopes, offering modern comforts.",
    category: "Mountain",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501210/wanderlust_DEV/urwucymhrbjl6ghbmn3a.avif",
      filename: "wanderlust_DEV/urwucymhrbjl6ghbmn3a",
    },
    price: 32000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Tropical Paradise Villa",
    description:
      "A private villa surrounded by coconut palms with access to a white-sand beach.",
    category: "Beach",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501264/wanderlust_DEV/qh6lueggmcewcngmb5vh.avif",
      filename: "wanderlust_DEV/qh6lueggmcewcngmb5vh",
    },
    price: 28000,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Urban Penthouse",
    description:
      "Luxury penthouse with panoramic city views and modern amenities.",
    category: "Cities",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501318/wanderlust_DEV/gkqhs8mcr1ybn2kqkz7y.avif",
      filename: "wanderlust_DEV/gkqhs8mcr1ybn2kqkz7y",
    },
    price: 40000,
    location: "Dubai",
    country: "UAE",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  },
  {
    title: "Heritage Palace Stay",
    description:
      "Live like royalty in this restored 18th-century palace with marble interiors.",
    category: "Castles",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501375/wanderlust_DEV/zybfusxuxr8y4fsn8gzq.avif",
      filename: "wanderlust_DEV/zybfusxuxr8y4fsn8gzq",
    },
    price: 35000,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Forest Treehouse",
    description:
      "Stay among the trees in a peaceful eco-treehouse surrounded by wildlife.",
    category: "Cabins",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501411/wanderlust_DEV/l3gh8cspqqr5v7r2xwpp.avif",
      filename: "wanderlust_DEV/l3gh8cspqqr5v7r2xwpp",
    },
    price: 16000,
    location: "Wayanad",
    country: "India",
    geometry: { type: "Point", coordinates: [76.132, 11.6854] },
  },
  {
    title: "Seaside Hut",
    description:
      "A cozy hut right by the sea — perfect for couples and nature lovers.",
    category: "Beach",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501470/wanderlust_DEV/rd9wjvxg5krzt7ehc8bt.avif",
      filename: "wanderlust_DEV/rd9wjvxg5krzt7ehc8bt",
    },
    price: 9000,
    location: "Kovalam",
    country: "India",
    geometry: { type: "Point", coordinates: [76.9784, 8.3986] },
  },
  {
    title: "Arctic Dome Stay",
    description:
      "Experience the Northern Lights from your private heated dome in the Arctic.",
    category: "Arctic",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501519/wanderlust_DEV/vyhzq8bz6g1fbl2w1d0v.avif",
      filename: "wanderlust_DEV/vyhzq8bz6g1fbl2w1d0v",
    },
    price: 60000,
    location: "Tromsø",
    country: "Norway",
    geometry: { type: "Point", coordinates: [18.9553, 69.6496] },
  },
  {
    title: "Countryside Cottage",
    description:
      "A vintage British cottage with garden views and rustic interiors.",
    category: "View",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501555/wanderlust_DEV/fj4xwhd5e9mwv3mjqbqm.avif",
      filename: "wanderlust_DEV/fj4xwhd5e9mwv3mjqbqm",
    },
    price: 19000,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.7782, 51.833] },
  },
  {
    title: "Lakeview Apartment",
    description:
      "An apartment overlooking a serene lake, ideal for relaxation and reflection.",
    category: "View",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501608/wanderlust_DEV/wxgs3p6bfsqzgxkblodg.avif",
      filename: "wanderlust_DEV/wxgs3p6bfsqzgxkblodg",
    },
    price: 14000,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
  },
  {
    title: "Snow Cabin Retreat",
    description:
      "A cabin in the snow-clad mountains with hot tub and fireplace for a cozy stay.",
    category: "Mountain",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501659/wanderlust_DEV/m1p8kjj4v3fwtq1c0yct.avif",
      filename: "wanderlust_DEV/m1p8kjj4v3fwtq1c0yct",
    },
    price: 27000,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.748, 46.0207] },
  },
  {
    title: "Tropical Overwater Bungalow",
    description:
      "Enjoy luxury and privacy in an overwater bungalow surrounded by turquoise waters.",
    category: "Beach",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501705/wanderlust_DEV/xvq9lpq9r7znvssnq7zo.avif",
      filename: "wanderlust_DEV/xvq9lpq9r7znvssnq7zo",
    },
    price: 65000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
  },
  {
    title: "Urban Studio Apartment",
    description:
      "Compact yet luxurious studio in the center of Tokyo with skyline views.",
    category: "Cities",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501743/wanderlust_DEV/y9gptn9r7jvdc3w0gqhm.avif",
      filename: "wanderlust_DEV/y9gptn9r7jvdc3w0gqhm",
    },
    price: 30000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Safari Lodge",
    description:
      "Stay close to wildlife with comfort and safety in a luxury safari lodge.",
    category: "Trending",
    image: {
      url: "https://res.cloudinary.com/dyb5dqqx0/image/upload/v1762501788/wanderlust_DEV/pg7drt1lyq3sdpomxkvu.avif",
      filename: "wanderlust_DEV/pg7drt1lyq3sdpomxkvu",
    },
    price: 34000,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: { type: "Point", coordinates: [35.1436, -1.4061] },
  },
];

module.exports = { data: sampleListings };
