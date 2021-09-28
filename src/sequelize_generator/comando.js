const { exec } = require("child_process");
const path = require("path");
var ruta = path.join(__dirname, "../../api");

exec(`cd ${ruta + "/databases"} & ls `, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(stdout.split('\n'));
});
