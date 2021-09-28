const controlador = {};
const modelo = require('..');

controlador.get = {};

controlador.get.all = (req, res)=>{
    modelo.findAll({
        while:{

        },
        
    })
};

controlador.get.one = (req, res)=>{

}

controlador.set = (req, res)=>{};

controlador.put = (req, res)=>{};

controlador.delete = (req, res)=>{};

return controlador;