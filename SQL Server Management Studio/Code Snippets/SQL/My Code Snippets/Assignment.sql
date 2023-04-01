
CREATE DATABASE db_payroll;

USE db_payroll;


create table employee(
employee_id int not null primary key identity(1,1),
job_id int not null,
first_name varchar(50) not null,
last_name varchar(50) not null,
date_of_hire date
);

create table job(
job_id int not null primary key identity (1,1),
job_title varchar(50) not null,
job_dept varchar(50) not null,
salary_id int not null
);

create table salary(
salary_id int not null primary key identity(1,1),
hourly_rate money not null
);

create table payroll(
payroll_date date not null,
employee_id int not null,
hours_worked int not null,
);


alter table employee 
add foreign key (job_id) references job(job_id);

alter table payroll
add foreign key (employee_id) references employee(employee_id);

alter table job 
add foreign key (salary_id) references salary(salary_id);

insert into salary values
(19.50),
(20.00),
(20.50),
(21.50),
(21.50);

select * from salary;

insert into job values
('AR Director','Accounting',2),
('HR Director','Human Resources',4),
('Developer','IT',5),
('Customer Service Manager','Operations',3),
('Sales Manager','Sales and Marketing',1);



insert into employee values
(1,'Sam','Smith','2018-11-28'),
(4,'Amanda','James','2020-04-01'),
(4,'David','McGrath','2021-12-11'),
(2,'Valerie','Ringer','2014-07-31'),
(5,'Andrea','Antivilo','2019-02-04');

select * from employee;

insert into payroll values
('2023-06-07',1,40),
('2023-06-07',2,25),
('2023-06-07',3,38),
('2023-06-07',4,22),
('2023-06-07',5,34);


select e.first_name as "First Name",e.last_name as "Last Name",p.hours_worked as "Hours", s.hourly_rate as "Rate"
from employee e
inner join payroll p on e.employee_id=p.employee_id
inner join job j on e.job_id=j.job_id
inner join salary s on j.salary_id=s.salary_id;



