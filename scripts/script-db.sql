/* 
	GUIA 	1
*/
CREATE DATABASE QueVeoHoy;

USE QueVeoHoy;

CREATE TABLE pelicula(
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

/* 
	GUIA 2
*/

CREATE TABLE genero(
	id int NOT NULL,
	nombre varchar(30) NOT NULL,
	PRIMARY KEY(id)
)

ALTER TABLE pelicula ADD genero_id int AFTER director;

/*
primero cargar los up date del paso-2 y despues agregar el FK, sino da error
*/

ALTER TABLE pelicula ADD CONSTRAINT FK_generoId_peliculas_R_id_generos FOREIGN KEY (genero_id) REFERENCES genero(id);
