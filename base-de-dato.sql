DROP SCHEMA db_peliculas_series;
CREATE SCHEMA db_peliculas_series;
	use db_peliculas_series;

	-- Módulo de Género
	CREATE TABLE Genero (
		id_genero INT PRIMARY KEY AUTO_INCREMENT,
		nombre VARCHAR(255) NOT NULL,
		estado ENUM('Activo', 'Inactivo') NOT NULL,
	   fecha_creacion DATE,
	   fecha_actualizacion DATE ,
		descripcion TEXT
	);

	-- Módulo de Director
	CREATE TABLE Director (
		id_director INT PRIMARY KEY AUTO_INCREMENT,
		nombre VARCHAR(255) NOT NULL,
		estado ENUM('Activo', 'Inactivo') NOT NULL,
		fecha_creacion DATE,
		fecha_actualizacion DATE
	);

	-- Módulo de Productora
	CREATE TABLE Productora (
		id_productora INT PRIMARY KEY AUTO_INCREMENT,
		nombre VARCHAR(255) NOT NULL,
		estado ENUM('Activo', 'Inactivo') NOT NULL,
		fecha_creacion DATE,
		fecha_actualizacion DATE,
		slogan VARCHAR(255),
		descripcion TEXT
	);

	-- Módulo de Tipo
	CREATE TABLE Tipo (
		id_tipo INT PRIMARY KEY AUTO_INCREMENT,
		nombre VARCHAR(255) NOT NULL,
		fecha_creacion DATE,
		fecha_actualizacion DATE,
		descripcion TEXT
	);

	-- Módulo de Media (Películas y Series)
	CREATE TABLE Media (
		id_media INT PRIMARY KEY AUTO_INCREMENT,
		titulo VARCHAR(255) NOT NULL,
		sinopsis TEXT,
		url_pelicula VARCHAR(255) NOT NULL,
		imagen_portada VARCHAR(255),
		fecha_creacion DATE,
		fecha_actualizacion DATE,
		anno_estreno INT,
		id_genero INT,
		id_director INT,
		id_productora INT,
		id_tipo INT,
		FOREIGN KEY (id_genero) REFERENCES Genero(id_genero),
		FOREIGN KEY (id_director) REFERENCES Director(id_director),
		FOREIGN KEY (id_productora) REFERENCES Productora(id_productora),
		FOREIGN KEY (id_tipo) REFERENCES Tipo(id_tipo)
	);

	-- Insertar 10 registros en la tabla Genero
	INSERT INTO Genero (id_genero, nombre, estado, fecha_creacion, fecha_actualizacion, descripcion) VALUES
		(1, 'Acción', 'Activo', '2024-03-11', '2024-03-11', 'Películas llenas de acción y emoción'),
		(2, 'Drama', 'Activo', '2024-03-11', '2024-03-11', 'Historias emocionales y profundas'),
		(3, 'Comedia', 'Inactivo', '2024-03-11', '2024-03-11', 'Para reír y pasar un buen rato'),
		(4, 'Ciencia Inactivo', 'Activo', '2024-03-11', '2024-03-11', 'Explorando mundos futuristas y tecnología avanzada'),
		(5, 'Terror', 'Activo', '2024-03-11', '2024-03-11', 'Para aquellos que aman asustarse');


	-- Insertar 10 registros en la tabla Director
	INSERT INTO Director (id_director, nombre, estado, fecha_creacion, fecha_actualizacion) VALUES
		(1, 'Juan Pérez', 'Inactivo', '2024-03-11', '2024-03-11'),
		(2, 'Ana Gómez', 'Activo', '2024-03-11', '2024-03-11'),
		(3, 'Miguel Rodríguez', 'Inactivo', '2024-03-11', '2024-03-11'),
		(4, 'Elena García', 'Activo', '2024-03-11', '2024-03-11'),
		(5, 'Carlos López', 'Activo', '2024-03-11', '2024-03-11');


	-- Insertar 10 registros en la tabla Productora
	INSERT INTO Productora (id_productora, nombre, estado, fecha_creacion, fecha_actualizacion, slogan, descripcion) VALUES
		(1, 'Estudios ABC', 'Activo', '2024-03-11', '2024-03-11', 'Donde nacen las historias', 'Producción de películas y series'),
		(2, 'Producciones XYZ', 'Inactivo', '2024-03-11', '2024-03-11', 'Calidad y creatividad', 'Comprometidos con la excelencia'),
		(3, 'Películas DEF', 'Activo', '2024-03-11', '2024-03-11', 'Imágenes que perduran', 'Creando experiencias cinematográficas'),
		(4, 'Entretenimiento LMN', 'Activo', '2024-03-11', '2024-03-11', 'Diversión sin límites', 'Entretenimiento para todos'),
		(5, 'Imágenes GHI', 'Inactivo', '2024-03-11', '2024-03-11', 'Capturando momentos', 'Producción visual de alta calidad');

	-- Insertar 10 registros en la tabla Tipo
	INSERT INTO Tipo (id_tipo, nombre, fecha_creacion, fecha_actualizacion, descripcion) VALUES
		(1, 'Película', '2024-03-11', '2024-03-11', 'Producción cinematográfica para salas de cine'),
		(2, 'Serie de TV', '2024-03-11', '2024-03-11', 'Producción televisiva con varios episodios'),
		(3, 'Documental', '2024-03-11', '2024-03-11', 'Producción informativa y educativa'),
		(4, 'Animación', '2024-03-11', '2024-03-11', 'Producción con gráficos animados'),
		(5, 'Miniserie', '2024-03-11', '2024-03-11', 'Serie limitada con pocos episodios');

	-- Insertar 10 registros en la tabla Media
	INSERT INTO Media (id_media, titulo, sinopsis, url_pelicula, imagen_portada, fecha_creacion, fecha_actualizacion, anno_estreno, id_genero, id_director, id_productora, id_tipo) VALUES
		(1, 'Película 1', 'Una emocionante película de acción', 'http://url_pelicula1.com', 'imagen1.jpg', '2024-03-11', '2024-03-11', 2022, 1, 1, 1, 1),
		(2, 'Serie de TV 1', 'Una serie llena de intriga y suspenso', 'http://url_serie1.com', 'imagen2.jpg', '2024-03-11', '2024-03-11', 2021, 2, 2, 2, 2),
		(3, 'Documental 1', 'Explorando hechos fascinantes', 'http://url_documental1.com', 'imagen3.jpg', '2024-03-11', '2024-03-11', 2023, 3, 3, 3, 3);

		
		-- consultar todos los generos
		SELECT * FROM Genero;

		-- consultar todos los directores
		SELECT * FROM Director;
		
		-- consultar todos las productoras
		SELECT * FROM Productora;
		
		-- consultar todos los tipos
		SELECT * FROM Tipo;
		
		-- Consultar todos los datos de Media con información relacionada
		SELECT
		Media.id_media,
		Media.titulo,
		Media.sinopsis,
		Media.url_pelicula,
		Media.imagen_portada,
		Media.fecha_creacion,
		Media.fecha_actualizacion,
		Media.anno_estreno,
		Genero.nombre AS genero,
		Director.nombre AS director,
		Productora.nombre AS productora,
		Tipo.nombre AS tipo
		FROM
			Media
		JOIN Genero ON Media.id_genero = Genero.id_genero
		JOIN Director ON Media.id_director = Director.id_director
		JOIN Productora ON Media.id_productora = Productora.id_productora
		JOIN Tipo ON Media.id_tipo = Tipo.id_tipo;


