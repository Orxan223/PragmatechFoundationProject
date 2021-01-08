CREATE TABLE Admins(
    id INTEGER PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL,
    passwords INTEGER NOT NULL,
    mail VARCHAR(40) NOT NULL,
    images VARCHAR(100)
)
INSERT INTO Admins(fullname,passwords,mail,images,dates)
VALUES ("Salmanov Orxan",123456,"orxan@gmail.com","img/sekil.png")
    -- dates VARCHAR(10)

SELECT * from Admins;

--------  blog
create TABLE Blog(
    id INTEGER primary KEY,
    texts VARCHAR(50) NOT NULL,
    images VARCHAR(30) ,
    change_date VARCHAR(100),
    create_date VARCHAR(50),
    detail binary,
    stat boolen
)

INSERT INTO Blog(texts,images, change_date,create_date,detail,stat)

VALUES ("lorem ipsum","img/sekil.png","nese","nesesdf",412355,True)

SELECT * from Blog;

------portfolio

create TABLE Catalogs(
    id INTEGER PRIMARY KEY,
    name VARCHAR (100),
    title VARCHAR (100),
    portfolio_id INTEGER,
    CONSTRAINT Portfolio_Catalog
    FOREIGN KEY (portfolio_id)
    REFERENCES Portfolio (id)
)

create TABLE Portfolio(
    id INTEGER primary KEY,
    images VARCHAR(30) Not NULL,
    title VARCHAR(15) NOT NULL,
)

INSERT INTO Catalogs (name,title,portfolio_id)
VALUES('photograpy','Lorem',1)

select * from Catalogs

INSERT into Portfolio(images, title)
VALUES ("img/sekil.png","Lorem ipsum")
select * from Portfolio

SELECT * FROM Portfolio;
select * from Catalogs;

-------about

create table About(
    id INTEGER PRIMARY key,
    texts VARCHAR (50) not null,
    CVurl VARCHAR(40)
);
CREATE TABLE Skills(
    id INTEGER PRIMARY key,
    name VARCHAR(50) not null,
    percentage INTEGER,
    aboutId INTEGER,
    CONSTRAINT aboutskill
    FOREIGN key (aboutId)
    REFERENCES About(id)

)
INSERT into Skills(name,percentage,aboutId)
VALUES("dew",70,1)

select * from Skills

insert into About(texts,Cvurl)
VALUES('nese yaz','files/nese.pdf')

select * from About;
select * from Skills;

CREATE TABLE form(
     id INTEGER PRIMARY key,
     fullname VARCHAR(50) not null,
     email varchar (50) not null,
     messages VARCHAR(50) not null
)

insert into from(fullname,email,messages)
VALUES("salmanov orxan",'orxan@gmail.com','nesesqws')

select * from services


CREATE TABLE contact(
    id INTEGER PRIMARY key,
    messages VARCHAR(50) not null,
    change_date DATETIME,
    text_date DATETIME
)
insert into contact(messages,change_date,text_date)
VALUES("nese",'nese','nesesqws')

select * from contact


CREATE TABLE services(
    id INTEGER PRIMARY key,
    icon VARCHAR (10) not null,
    texts VARCHAR (50) not NULL
)

insert into services(icon,texts)
VALUES('loqo','nese')

select * from services





