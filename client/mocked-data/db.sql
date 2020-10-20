CREATE TABLE pasajeros (pasajeros_id varchar(60) PRIMARY KEY NOT NULL UNIQUE,name text NOT NULL,nrovuelo VARCHAR(5) NOT NULL);
CREATE TABLE equipaje (equipaje_id varchar(60) PRIMARY KEY NOT NULL UNIQUE ,tipo varchar(60) NOT NULL, descripcion text NOT NULL);
CREATE TABLE pasajeros_equipajes (pasajeros_id varchar(60),equipaje_id varchar(60)[] );
