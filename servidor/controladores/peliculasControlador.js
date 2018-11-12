var con = require('../lib/conexionbd.js');


function listarPeliculas(req, res){
	console.log(req.query);
	console.log(req.query.titulo);
	var sql = `SELECT * FROM pelicula WHERE  ${valorExist('titulo',req.query.titulo)} AND ${valorExist('genero_id',req.query.genero)} AND ${valorExist('anio',req.query.anio)} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden} ${limit(req.query.pagina,req.query.cantidad)}`;
	console.log(sql);		   
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

function valorExist(clave, valor){
	if(valor == undefined || valor == null){
		return 1;
	}else{
		if(clave === "titulo"){
			return clave + " LIKE " +"'%"+ valor +"%'";
		}else{
			return clave + "=" + valor;
		}
		
	}
}

function limit(pagina, cantidad){	
	return "LIMIT " + (pagina -1) * 52 + "," + cantidad; 
}

module.exports.listarPeliculas = listarPeliculas;