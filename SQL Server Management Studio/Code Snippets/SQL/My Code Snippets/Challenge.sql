/*Distinct*/
select distinct Gender 
from
HumanResources.Employee
/*Top works like limit*/
select top 10 *
from HumanResources.Department;

/*Min*/
select min(DepartmentID)
from HumanResources.Department;

/*Max*/
select max(DepartmentID)
from HumanResources.Department;

/*Like*/
select *
from Person.Address
where person.Address.AddressLine1 like '%st';

/*WildCard*/
select *
from Person.Person
where person.FirstName like '%[!a]%';
/*Between*/
select * from person.person
where person.BusinessEntityID between 5 and 15;


