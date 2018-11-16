var con = require('../lib/conexionbd.js');


function listarPeliculas(req, res){
	
	//var sql = `SELECT * FROM pelicula WHERE  ${valorExist('titulo',req.query.titulo)} AND ${valorExist('genero_id',req.query.genero)} AND ${valorExist('anio',req.query.anio)} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden} ${limit(req.query.pagina,req.query.cantidad)}`;
			   
	con.query(`${peliculasSELECT(req,"*")} ${limit(req.query.pagina,req.query.cantidad)}`, function(err, resultPeliculas){
		if(err){
			console.log("Error en la consulta", err.message);
			return res.status(404).send("Error en la consulta");
		}
		//var sql = `SELECT COUNT(*) as total FROM pelicula WHERE  ${valorExist('titulo',req.query.titulo)} AND ${valorExist('genero_id',req.query.genero)} AND ${valorExist('anio',req.query.anio)} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;
		con.query(peliculasSELECT(req,"COUNT(*) as total"), function(err, resultCOUNT){
			if(err){
				console.log("Error en la consulta", err.message);
				return res.status(404).send("Error en la consulta");
			}
			var resultado = {
				"peliculas": resultPeliculas,
				"total": resultCOUNT[0].total
			}
				
			res.status(200).send(JSON.stringify(resultado));	
		})
			
	})

	
}

function peliculasSELECT(req,columnas){
	return `SELECT ${columnas} FROM pelicula WHERE  ${valorExist('titulo',req.query.titulo)} AND ${valorExist('genero_id',req.query.genero)} AND ${valorExist('anio',req.query.anio)} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;;
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

function obtenerPelicula(req,res){
	
	var sqlPelicula = `SELECT p.titulo, p.poster, p.anio, p.fecha_lanzamiento, p.director, p.trama, p.duracion, p.puntuacion, g.nombre FROM pelicula AS p JOIN genero AS g WHERE p.id = ${req.params.id}`;

	con.query(sqlPelicula, function(err, result){
		if(err){
			console.log("Error en la comsuta: " + err.message);
			return res.status(500).send("Error en la consulta");
		}

		var pelicula = {
			"titulo": result[0].titulo,
			"poster": result[0].poster,
			"anio": result[0].anio,
			"fecha_lanzamiento": result[0].fecha_lanzamiento,
			"director": result[0].director,
			"trama": result[0].trama,
			"duracion": result[0].duracion,
			"puntuacion": result[0].puntuacion,
			"nombre": result[0].nombre
		}

		var sqlActores = `SELECT actor.nombre FROM actor JOIN actor_pelicula ON actor_pelicula.actor_id = actor.id WHERE actor_pelicula.pelicula_id = ${req.params.id}`;
		con.query(sqlActores, function(err, resultActores){

			var resultado = {
				'pelicula' : pelicula,
				'actores' : resultActores,
				'genero' : result[0].nombre
			}		
			return res.status(200).send(JSON.stringify(resultado));
		})		
	})
}

module.exports.listarPeliculas = listarPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;