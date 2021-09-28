const replace = require("replace-in-file");
const path = require("path");
const url = path.join(__dirname,'doc.js')

var remplazar = 
`function hola(){
    console.log("hola");
}`;
const options = {
files: url,
  from: "//remplazar",
  to: remplazar,
};
replace(options)
  .then((results) => {
    console.log("Replacement results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
