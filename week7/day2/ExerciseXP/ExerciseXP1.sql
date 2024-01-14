-- 🌟 Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

--1. Use SQL to get the following from the database:
-- 1. All items, ordered by price (lowest to highest).

SELECT * 
FROM ITEMS 
ORDER BY PRICE; 

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * 
FROM ITEMS 
WHERE PRICE >= 80 
ORDER BY PRICE DESC;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

SELECT * 
FROM ITEMS 
ORDER BY NAME;


-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT LAST_NAME 
FROM CUSTOMERS 
ORDER BY LAST_NAME DESC;

