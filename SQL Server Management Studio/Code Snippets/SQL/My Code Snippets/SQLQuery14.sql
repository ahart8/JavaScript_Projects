CREATE DATABASE dbPetFosters;

CREATE TABLE fosters(
fosterID int PRIMARY KEY NOT NULL IDENTITY(1,1),
fosterFullName varchar(100)NOT NULL,
fosterPhone varchar(50) NOT NUll,
);

CREATE TABLE pets(
petID int PRIMARY KEY NOT NULL IDENTITY(1,1),
petName varchar(50) NOT NULL,
intakeDate date,
fosterID int FOREIGN KEY REFERENCES fosters(fosterID) on UPDATE cascade on DELETE cascade
);


INSERT INTO fosters(fosterFullName,fosterPhone) VALUES
('Betty Casey','555-555-1234'),
('Kelly Zunchisky','555-555-2341'),
('Floyd Hart', '555-555-8866'),
('Carrie Gee','555-555-3345'),
('Lori Weaver','555-555-1144');

INSERT INTO pets(petName,intakeDate,fosterID) VALUES
('Stella Blue','2023-03-01',2),
('Cassedy','2021-08-04',1),
('Jed','1999-12-31',5),
('Buddy Guy','2021-05-10',4),
('Piper','2023-01-01',3);


SELECT *
FROM fosters f
LEFT JOIN pets p on f.fosterID=p.fosterID
WHERE YEAR(intakeDate)>2021;





