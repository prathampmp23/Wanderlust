const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const CATEGORIES = [
  "Trending",
  "Rooms",
  "Cities",
  "Beach",
  "Cabins",
  "Castles",
  "Mountain",
  "View",
  "Pool",
  "Farm",
  "Arctic",
  "Golfing",
  "Boat"
];

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: CATEGORIES,
    // required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// ***Post middleware
// This is called when entire listing is delete (findByIdAndDelete)
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = { Listing, CATEGORIES };
