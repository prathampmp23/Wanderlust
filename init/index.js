if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL; // insert mongoURL here 

if (!MONGO_URL) {
  throw new Error('MONGO_URI is missing. Add it to your .env file.');
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "690d9960b2f5be63da1aac64",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
