if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./Utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Require Express Router
const listingRouter = require("./Router/listing.js");
const reviewRouter = require("./Router/review.js");
const userRouter = require("./Router/user.js");

// Views folder (To Serve templating files like EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// URL encoded parser (Request body Parser)
app.use(express.urlencoded({ extended: true }));

// MethodOverride ( To use PUT & DELETE Request)
app.use(methodOverride("_method"));

// EJS Mate (layout)
app.engine("ejs", ejsMate);

// Public folder (Serve Static files like CSS,JS)
app.use(express.static(path.join(__dirname, "/public")));

// **Connection with MongoDB
// Mongo Atlas Database URL
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUrl);
}

// **Session store
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Mongo Session store error", err);
});

// **Cookie Session Option
const sessionOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};


// Use Session
app.use(session(sessionOption));
// use flash
app.use(flash());

// use passport methods
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));


// This function determines which data of the user object should be stored in the session
passport.serializeUser(User.serializeUser());
// This function is used to retrieve the user object from the session
passport.deserializeUser(User.deserializeUser());

// Middleware to store locals used in flash() ("alerts")
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// Listing, Review & User Router
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// **Custom ExpressError for "404" Error "page not found"
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// **Error handling
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went Wrong!" } = err;
  res.status(statusCode);
  res.render("error.ejs", { message });
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080.");
});
