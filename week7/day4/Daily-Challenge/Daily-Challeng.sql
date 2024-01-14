-- Instructions
-- You are going to practice tables relationships

-- Part I

-- 1.Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE CUSTOMER(
	ID SERIAL PRIMARY KEY,
	FIRST_NAME VARCHAR(50) NOT NULL,
	FIRST_NAME VARCHAR(50) NOT NULL
)

CREATE TABLE CUSTOMER_PROFILE(
	ID SERIAL PRIMARY KEY,
	ISLOGGEDIN BOOLEAN DEFAULT FALSE,
	CUSTOMER_ID INTEGER UNIQUE REFERENCES CUSTOMER(ID)
)

--2. Insert those customers
INSERT INTO CUSTOMER (FIRST_NAME, LAST_NAME)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

SELECT * FROM CUSTOMER
--3. Insert those customer profiles, use subqueries
INSERT INTO CUSTOMER_PROFILE (CUSTOMER_ID, ISLOGGEDIN)
VALUES
(1, TRUE),
(2, FALSE)

SELECT * FROM CUSTOMER_PROFILE
-- John is loggedIn
-- Jerome is not logged in

--4. Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
SELECT  CUSTOMER.FIRST_NAME,
		CUSTOMER_PROFILE.ISLOGGEDIN
FROM CUSTOMER
INNER JOIN CUSTOMER_PROFILE ON CUSTOMER.ID = CUSTOMER_PROFILE.CUSTOMER_ID
WHERE CUSTOMER_PROFILE.ISLOGGEDIN = TRUE


-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT  CUSTOMER.FIRST_NAME,
		CUSTOMER_PROFILE.ISLOGGEDIN
FROM CUSTOMER
LEFT JOIN CUSTOMER_PROFILE ON CUSTOMER.ID = CUSTOMER_PROFILE.CUSTOMER_ID

-- The number of customers that are not LoggedIn
SELECT  COUNT(*)
FROM CUSTOMER
INNER JOIN CUSTOMER_PROFILE ON CUSTOMER.ID = CUSTOMER_PROFILE.CUSTOMER_ID
WHERE CUSTOMER_PROFILE.ISLOGGEDIN = FALSE

-- Part II:

--1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

--2. Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

--3. Create a table named Student, with the columns : 
--student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE STUDENT(
	STUDENT_ID SERIAL PRIMARY KEY,
	NAME VARCHAR(50) UNIQUE NOT NULL ,
	AGE INT CHECK (AGE <= 15)
)

--4. Insert those students:
INSERT INTO STUDENT (NAME, AGE)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

CREATE TABLE BOOK(
	BOOK_ID SERIAL PRIMARY KEY,
	NAME VARCHAR(50) UNIQUE NOT NULL 
)

INSERT INTO BOOK (NAME)
VALUES
('Alice In Wonderland'),
('To kill a mockingbird'),
('Harry Potter')

--5. Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE LIBRARY(
	BOOK_ID INT,
	STUDENT_ID INT,
	BORROWED_DATE DATE,
	
	
	CONSTRAINT BOOK_FK_ID FOREIGN KEY (BOOK_ID) REFERENCES BOOK(BOOK_ID) ON DELETE CASCADE,
	CONSTRAINT STUDENT_FK_ID FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT(STUDENT_ID) ON DELETE CASCADE
)

--6. Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO LIBRARY (BOOK_ID, STUDENT_ID, BORROWED_DATE)
VALUES
(1, 1, '2022-02-15'),
(2, 4, '2021-03-03'),
(1, 2, '2021-05-23'),
(3, 4, '2021-08-12')

SELECT * FROM STUDENT


--7. Display the data
-- Select all the columns from the junction table
SELECT* FROM LIBRARY
-- Select the name of the student and the title of the borrowed books
SELECT STUDENT.NAME,
		BOOK.NAME
FROM STUDENT
INNER JOIN LIBRARY
ON STUDENT.STUDENT_ID = LIBRARY.STUDENT_ID
INNER JOIN BOOK
ON LIBRARY.BOOK_ID = BOOK.BOOK_ID
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(AGE) AS AVERAGE_AGE_VALUE
FROM STUDENT

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM STUDENT
WHERE STUDENT_ID = 1
-- THE WHOLE ROW WAS DELETED BECAUSE THE ON DELETE CASCADE

