var con = require('../lib/conexionbd.js');


function listarPeliculas(req, res){
	var datos = req.query;			   
	con.query(`${getPeliculas(datos,"*")} ${limit(datos.pagina,datos.cantidad)}`, function(err, resultPeliculas){
		if(err){
			console.log("Error en la consulta", err.message);
			return res.status(404).send("Error en la consulta");
		}
		con.query(getPeliculas(datos,"COUNT(*) as total"), function(err, resultCOUNT){
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


function getPeliculas(datos,columnas){
	return `SELECT ${columnas} FROM pelicula WHERE  ${campoExist('titulo',datos.titulo)} AND ${campoExist('genero_id',datos.genero)} AND ${campoExist('anio',datos.anio)} ORDER BY ${datos.columna_orden} ${datos.tipo_orden}`;
}

function getPeliculasConGenero(campo, genero){
	return `SELECT p.id, p.titulo, p.poster, p.anio, p.fecha_lanzamiento, p.director, p.trama, p.duracion, p.puntuacion, g.nombre FROM pelicula AS p JOIN genero AS g WHERE ${campo} = ${genero}`
}


function campoExist(campo, valor){
	if(valor == undefined || valor == null){
		return 1;
	}else{
		var result = "";
		switch(campo){
			case "titulo":
				result = `${campo} LIKE '%${valor}%'`;
			break;
			case "anio_inicio":
				result = `anio >= ${valor}`;
			break;
			case "anio_fin":
				result = `anio <= ${valor}`;
			break;
			default:
				result = `${campo} = ${valor}`;
		}

		return 	result;	
	}
}


function limit(pagina, cantidad){	
	return "LIMIT " + (pagina -1) * 52 + "," + cantidad; 
}


function obtenerPelicula(req,res){		
	var sqlPelicula = `${getPeliculasConGenero("p.id", req.params.id)}`;

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
			"puntuacion": result[0].puntuacion
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


function recomendacion(req, res){
	var datos = req.query;		
	var sql = `${getPeliculasConGenero("g.nombre", '"'+ datos.genero +'"')} AND ${campoExist('anio_inicio',datos.anio_inicio)} AND ${campoExist('anio_fin',datos.anio_fin)} AND ${campoExist('puntuacion',datos.puntuacion)}`
	
	con.query(sql, function(err, result){
		if(err){
			console.log("Error en la consulta", err.message);
			return res.status(404).send("Error en la consulta");
		}

		var resultado = {
			"peliculas" : result
		}
			
		res.status(200).send(JSON.stringify(resultado));	
		
	})	
}

module.exports.listarPeliculas = listarPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;
module.exports.recomendacion = recomendacion;