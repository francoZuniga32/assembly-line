const { exec } = require('child_process');                                
const path = require('path');
var ruta = path.join(__dirname, '../../api');

exec(`cd ${ ruta+'/databases' } && npx sequelize-cli init`, (error, stdout, stderr) => {               
 if (error) {                                                            
   console.error(`error: ${error.message}`);                             
   return;                                                               
 }                                                                       
                                                                         
 if (stderr) {                                                           
   console.error(`stderr: ${stderr}`);                                   
    return;                                                               
  }                                                                       
                                                                          
  console.log(`stdout:\n${stdout}`);                                      
});  