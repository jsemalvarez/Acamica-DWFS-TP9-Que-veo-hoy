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
); 

/* 
	GUIA 2
*/

CREATE TABLE genero(
	id int NOT NULL,
	nombre varchar(30) NOT NULL,
	PRIMARY KEY(id)
);

ALTER TABLE pelicula ADD genero_id int AFTER director;

/* 
	FIN DEL PASO GUIA 2
*/

/* 
	GUIA 3
*/
CREATE TABLE actor(
	id int NOT NULL,
	nombre varchar(70) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE actor_pelicula(
	id int NOT NULL,
	actor_id int NOT NULL,
	pelicula_id int NOT NULL,
	PRIMARY KEY(id)
);
/* 
	FIN DEL PASO GUIA 3
*/

/*
primero cargar los up date del paso-2 y despues agregar el FK, sino da error
o crear todas la tablas y refenias primero y despues los update
*/

/* 
	GUIA 2
*/

ALTER TABLE pelicula ADD CONSTRAINT FK_generoId_peliculas_R_id_generos FOREIGN KEY (genero_id) REFERENCES genero(id);

/* 
	FIN DEL PASO GUIA 2
*/