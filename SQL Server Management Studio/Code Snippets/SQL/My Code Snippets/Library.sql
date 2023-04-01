
CREATE DATABASE db_Library;

USE db_Library


create table libraryBranch(
branchID int not null primary key identity(1,1),
branchName varchar(50) not null,
address varchar(255)
);

create table borrower(
cardNo int not null primary key identity(2000,100),
name varchar(50) not null,
address varchar(255) not null,
phone varchar(50) not null,
);

create table bookCopies(
bookID int not null primary key identity (1,1),
branchID int, 
numberOfCopies int,
foreign key (branchID) references libraryBranch(branchID) 
);
create table publisher(
publisherName varchar(50) not null,
address varchar(255) not null,
phone varchar(50) not null,
primary key(publisherName)
);


create table books(
bookId int not null identity (1,1),
title varchar(255) not null,
publisherName varchar(50),
primary key (bookID),
foreign key (publisherName) references publisher(publisherName)
);

create table bookAuthors(
bookId int,
authorName varchar(50) not null,
foreign key (bookID) references books(bookID)
);

create table bookLoans(
bookID int,
branchID int,
cardNo int,
dateOut date not null,
dateDue date not null,
foreign key (bookID) references books(bookID),
foreign key (branchID)references libraryBranch(branchID),
foreign key (cardNo) references borrower(cardNo)
);

select * from libraryBranch;
select * from bookCopies;
select * from books;
select * from borrower;
select * from bookAuthors;
select * from publisher,

