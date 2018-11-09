var con = require('../lib/conexionbd.js');

function listarGeneros(req, res){

	var sql= "SELECT * FROM genero";
	con.query(sql, function(err, result){
		if(err){
			console.log("Error en la consulta", err.message);
			return res.status(404).send("Error en la consulta");
		}

		var resultado= {
			"generos": result
		}

		res.status(200).send(resultado);

	})

}

module.exports.listarGeneros = listarGeneros;