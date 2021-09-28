const modelo = {};

modelo.generate = async (name, structure, url) => {
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  const path = require("path");
  const replace = require("replace-in-file");
  console.log(path.dirname(__dirname))
  var ruta = path.join(path.dirname(__dirname), "../api/databases");
  var cmd = `cd ${ruta} && npx sequelize-cli model:generate --name ${name} --attributes `;
  var attributes = [];
  for (var key in structure) {
    attributes.push(`${key}:${structure[key]}`);
  }
  cmd += attributes.join(',')

  try {
    var {stdout, stderr} = await exec(cmd);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  } catch (error) {
    console.log(error)
  }
};

module.exports = modelo;
