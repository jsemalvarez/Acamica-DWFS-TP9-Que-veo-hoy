var con = require('../lib/conexionbd.js');


function listarPeliculas(req, res){
	
	var sql = "SELECT * FROM pelicula";
	con.query(sql, function(err, result){
		if(err){
			console.log("Error en la consulta", err.message);
			return res.status(404).send("Error en la consulta");
		}
		var resultado = {
			"peliculas": result,
			"total": result.length
		}
			
		res.status(200).send(JSON.stringify(resultado));		
	})

}

module.exports.listarPeliculas = listarPeliculas;