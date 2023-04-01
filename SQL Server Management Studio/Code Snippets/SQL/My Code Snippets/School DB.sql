
CREATE DATABASE db_School;

USE db_School


create table classes(
classId int not null primary key identity(1,1),
className varchar(50) not null

);

create table students(
studentId int not null primary key identity(1,1),
studentName varchar(50) not null
);

create table instructors(
instructorId int not null primary key identity(1,1),
instructorName varchar(50) not null
);


alter table students 
add instructorId int;

select * from students;
alter table students
add foreign key (classId) references classes(classId);

select * from instructors;

insert into classes values
('Software Developer Bootcamp'),
('C# Boot Camp');

select * from classes;

insert into students (studentName,classId,instructorId)
Values
('River Hart',1,2),
('Jasper Hart',2,1),
('Carrie Gee',1,2),
('Betty Casey',2,1),
('Lori Weaver',1,2),
('Lacey Michelle',2,1);

select * from students s;
select * from classes c;
select * from instructors i;

insert into instructors 
values
('Teri Bradshaw'),
('Gilbert Lewis');

select * 
from students s
order by s.studentName asc;

select c.classId,s.studentName,className,instructorName
from classes c
left join students s on c.classId=s.classId
left join instructors i on s.instructorId=i.instructorId;
