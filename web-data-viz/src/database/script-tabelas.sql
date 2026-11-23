CREATE DATABASE mestre_pokemon;

USE mestre_pokemon;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(140),
	senha VARCHAR(50)
);

CREATE DATABASE mestre_pokemon;
USE mestre_pokemon;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(140) NOT NULL UNIQUE,
	senha VARCHAR(250) NOT NULL
);

CREATE TABLE resultado(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    acertos INT NOT NULL,
    data_resultado DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	tempo_segundos INT NOT NULL,
    CONSTRAINT fk_fk_usuario
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
    CONSTRAINT chk_acertos CHECK (acertos BETWEEN 0 AND 30)
);

CREATE TABLE regiao(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(10) NOT NULL UNIQUE
);

INSERT INTO regiao(nome) VALUES
('Kanto'),
('Johto'),
('Hoenn'),
('Sinnoh'),
('Unova'),
('Kalos');

CREATE TABLE resultado_regiao(
	fk_resultado INT,
	fk_regiao INT,
	acertos_regiao INT,
    CONSTRAINT fk_fk_resultado 
		FOREIGN KEY (fk_resultado) 
			REFERENCES resultado (id),
	CONSTRAINT fk_fk_regiao 
		FOREIGN KEY (fk_regiao) 
			REFERENCES regiao (id),
	PRIMARY KEY(fk_resultado, fk_regiao),   
    CONSTRAINT chk_acertos_regiao CHECK (acertos_regiao BETWEEN 0 AND 5)
);