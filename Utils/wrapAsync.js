// **Custom wrapAsync declaration
// function wrapAsync(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch(next);
//   };
// }

// Another way in which we export module directly
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
