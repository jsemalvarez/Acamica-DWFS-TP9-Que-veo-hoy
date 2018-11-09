/* 
	GUIA 	1
*/
CREATE DATABASE QueVeoHoy;

USE QueVeoHoy;

CREATE TABLE peliculas(
	id int NOT NULL,
	titulo varchar(100) NOT NULL,
	duracion int(5),
	director varchar(400),
	anio int(5),
	fecha_lanzamiento date,
	puntuacion int(2),
	poster varchar(300),
	trama varchar(700),
	PRIMARY KEY(id)
) 

