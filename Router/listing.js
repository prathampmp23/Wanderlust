const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../Utils/wrapAsync.js");
const {
  validateListing,
  isLoggedIn,
  isListingOwner,
} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  // **Index Route**
  .get(wrapAsync(listingController.index))
  // **Create Route**
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// **New Route**
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  // **Show Route**
  .get(wrapAsync(listingController.showListing))
  // **Update Route**
  .put(
    isLoggedIn,
    isListingOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  // **Delete Route**
  .delete(
    isLoggedIn,
    isListingOwner,
    wrapAsync(listingController.destroyListing)
  );

// **Edit Route**
router.get(
  "/:id/edit",
  isLoggedIn,
  isListingOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
