const { Listing, CATEGORIES } = require("../models/listing.js");
// Require geocoding services
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
let mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
  try {
    const { category } = req.query;

    // Whitelist check so only known categories are accepted
    const isValidCategory = category && CATEGORIES?.includes(category);

    const filter = {};
    if (isValidCategory && category !== "Trending") {
      filter.category = category;
    }

    // Base query with optional sorting for "Trending"
    let query = Listing.find(filter);

    // Optional "Trending" behaviour: newest first (requires { timestamps: true } in schema)
    if (category === "Trending") {
      query = query.sort({ createdAt: -1 });
    }

    const listings = await query.lean();

    res.render("listing/index.ejs", {
      allListing: listings, // keep your old var name to avoid changing the EJS loop
      categories: CATEGORIES, // for dropdown/icons
      activeCategory: isValidCategory ? category : null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("listing/new.ejs", { categories: CATEGORIES });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({ query: req.body.listing.location, limit: 1 })
    .send();

  const newListing = new Listing(req.body.listing); // contains listing.category
  newListing.owner = req.user._id;

  if (req.file) {
    newListing.image = { url: req.file.path, filename: req.file.filename };
  }

  // Guard in case geocode returns nothing
  const feature = response?.body?.features?.[0];
  if (feature?.geometry) newListing.geometry = feature.geometry;

  await newListing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not found!");
    res.redirect("/listings");
  }
  res.render("listing/show.ejs", { listing });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not found!");
    res.redirect("/listings");
  }
  // this reduce the quality of preview image
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listing/edit.ejs", {
    listing,
    originalImageUrl,
    categories: CATEGORIES,
  });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    listing.save();
  }
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
