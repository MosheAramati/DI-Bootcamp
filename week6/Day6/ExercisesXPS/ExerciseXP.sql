-- 🌟 Exercise 1 : Items And Customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.


-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson


-- CREATE TABLE ITEMS (
-- 	ID SERIAL PRIMARY KEY,
-- 	NAME VARCHAR(50) NOT NULL,
-- 	PRICE INTEGER NOT NULL
-- 	)

-- INSERT INTO ITEMS (NAME, PRICE) VALUES ('SMALL DESK', 100);
-- INSERT INTO ITEMS(NAME,PRICE) VALUES ('LARGE DESK', 300);
-- INSERT INTO ITEMS(NAME,PRICE) VALUES ('FAN', 80);

-- CREATE TABLE CUSTOMERS (
-- 	ID SERIAL PRIMARY KEY,
-- 	FIRST_NAME VARCHAR(100) NOT NULL,
-- 	LAST_NAME VARCHAR(100) NOT NULL
-- )

-- INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME) VALUES ('Greg', 'Jones');
-- INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME) VALUES ('Sandra', 'Jones');
-- INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME) VALUES ('Scott', 'Scott');
-- INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME) VALUES ('Trevor', 'Green');
-- INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME) VALUES ('Melanie', 'Johnson');


-- Use SQL to fetch the following data from the database:
-- 1. All the items.

-- SELECT * FROM ITEMS 

-- 2. All the items with a price above 80 (80 not included).

-- SELECT * FROM ITEMS WHERE PRICE > 80;

-- 3. All the items with a price below 300. (300 included)

-- SELECT * FROM ITEMS WHERE PRICE <= 300;

-- 4. All customers whose last name is ‘Smith’ (What will be your outcome?).

-- SELECT * FROM CUSTOMERS WHERE LAST_NAME = 'SMITH';

-- 5. All customers whose last name is ‘Jones’.

-- SELECT * FROM CUSTOMERS WHERE LAST_NAME ='Jones';

-- 6. All customers whose firstname is not ‘Scott’.

-- SELECT * FROM CUSTOMERS WHERE FIRST_NAME !='Scott';






