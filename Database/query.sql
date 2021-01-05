create table management(
    management_Id INTEGER PRIMARY KEY,
    management_FullName VARCHAR(50) NOT NULL,
    management_Mail VARCHAR(30) NOT NULL,
    management_Password VARCHAR(100) NOT NULL,
    management_Image VARCHAR(100) ,
    management_Data  DATA
    -- CONSTRAINT management_Blog
    -- FOREIGN KEY (Blog_Text)
    -- REFERENCES Admin(Admin_Id)
)
INSERT INTO management (management_FullName,management_Mail,management_Password,management_Image)

VALUES ("Salmanov Orxan","orxan@gmail.com",123456,"img/sekil.png")

SELECT * from management;


create TABLE Blog(
    Blog_Id INTEGER primary KEY,
    Blog_Text VARCHAR(50) NOT NULL,
    Blog_Image VARCHAR(30) ,
    Blog_Data VARCHAR(100),
)

INSERT INTO Blog(Blog_Text,Blog_Image)

VALUES ("lorem ipsum","img/sekil.png")

SELECT * from Blog;

create TABLE Portfolio(
    Portfolio_Id INTEGER primary KEY,
    Portfolio_Image VARCHAR(30) Not NULL,
    Portfolio_Title VARCHAR(15) NOT NULL,
    CONSTRAINT Portfolio_Catalog
    FOREIGN KEY (Portfolio_Catalog_Id)
    REFERENCES Admin(Catalog_Id)
    
)
INSERT into Portfolio(Portfolio_Image, Portfolio_Title)

VALUES ("img/sekil.png","Lorem ipsum")

SELECT * FROM Portfolio;