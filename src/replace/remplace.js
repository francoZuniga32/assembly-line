const replace = require("replace-in-file");
module.exports = async (url, from, to) => {
  replace({
    files: url,
    from: from,
    to: to,
  })
    .then((results) => {
      console.log("Replacement results:", results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
};
