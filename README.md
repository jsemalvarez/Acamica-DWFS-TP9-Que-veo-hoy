# Acamica-DWFS-TP9-Que-veo-hoy

<h3>Para corregir el proyecto Que veo hoy</h3>

<p>
	Para que un proyecto apruebe u obtenga categoría hacker, tiene que cumplir con todas las condiciones del checklist correspondiente.	
</p>

<h3>Condiciones para entregar:</h3>

<ul>
	<li>
		Archivos mínimos entregados: En la carpeta entregada se incluye el script con la estructura de la base de datos, al menos un controlador con las funcionalidades del proyecto, el package.json con las dependencias utilizadas, el archivo servidor.js con las rutas definidas y aquel que contiene la conexión con la base de datos.
	</li>
	<li>
		Rutas definidas: Revisar que el archivo servidor.js tenga definidas las rutas indicadas en la consigna (/generos, /peliculas/recomendacion, /peliculas, /peliculas:id) y que las funciones que se ejecutan al llamarlas se encuentren al menos definidas y con algún contenido en el controlador.
	</li>
</ul>

<h3>Condiciones para aprobar:</h3>

<ul>
	<li>
		Ejecución sin errores: El código del servidor se ejecuta sin errores al correrlo desde la consola (node servidor.js)
	</li>
	<li>
		Estructura de la base de datos: El script SQL entregado se ejecuta sin errores y contiene todas las entidades y relaciones especificadas en la consigna.
	</li>
	<li>
		Funcionalidad de listar películas: Se creó una función que obtiene los filtros enviados a través de la URL y envía al cliente las películas que corresponden según los filtros
	</li>
	<li>
		Funcionalidad de encontrar una película determinada: Se creó una función que obtiene el id de una película y devuelve al cliente la
información correspondiente sobre ella
	</li>
  <li>
		Funcionalidad de listar géneros: Se creó una función que retorna al cliente todos los géneros de la base de datos
	</li>
  <li>
		Funcionalidad de recomendación de películas: Se creó una función que encuentra todas las películas que cumplen con las preferencias
del usuario y las envía al cliente.
	</li>
  <li>
		Cálculo del total de resultados obtenidos: El backend envía el total de resultados obtenidos luego de aplicar una búsqueda para que el frontend calcule la cantidad de páginas.
	</li>
  <li>
		Conexión del backend con la base de datos: Se utiliza correctamente la configuración para conectar el backend con la base de datos.
	</li>
  <li>
		Dependencias utilizadas: El archivo package.json contiene todas las dependencias utilizadas en el proyecto.
	</li>
  <li>
		Ejecución correcta de consultas: Las consultas SQL se ejecutan correctamente y devuelve los resultados esperados.
	</li>
</ul>

<h3>Condiciones para Categoría Hacker:</h3>

<ul>
	<li>
		Nuevo criterio de recomendación o nuevo filtro: Se agrega un nuevo criterio para recomendar una película o algún nuevo filtro para
buscarlas y se aplica correctamente a la consulta SQL que corresponde.
	</li>
	<li>
		Código modularizado: Crea funciones propias para alcanzar los requerimientos de manera simple, cada una de ellas tiene un objetivo
específico y están separadas por comportamiento. No hay una función enorme que resuelve todo.
	</li>
 </ul>
