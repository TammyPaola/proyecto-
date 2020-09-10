CREATE DATABASE Nutricion;
USE Nutricion;
CREATE TABLE users
(
    id INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL
);

ALTER TABLE users MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

Create Table control_nutricion
(
    id int(11) PRIMARY Key NOT NULL,
    altura int (11) NOT NULL,
    edad int (11) NOT NULL,
    sexo varchar (10) NOT NULL,
    peso int (11) NOT Null,
    usuario int(11) NOT NULL,
    CONSTRAINT fk_control FOREIGN KEY(usuario) REFERENCES users(id)
);
ALTER TABLE control_nutricion MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
