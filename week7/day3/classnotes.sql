CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	price INTEGER
);

CREATE TABLE product_desc (
	id SERIAL PRIMARY KEY,
	description VARCHAR(500),
	product_id INTEGER
);

INSERT INTO products(price, name)
values
(700, 'iPad'),
(800, 'iPhone'),
(600, 'iWatch'),
(900, 'iCar')

SELECT * FROM products

INSERT INTO product_desc(description, product_id)
VALUES
('Amazing iPad', 1),
('Great iPhone', 2),
('The best watch', 3),
('Amazing Car', 4)


SELECT * FROM product_desc

--JOIN TABLES:
SELECT 
products.id, 
products.name, 
products.price, 
product_desc.description 
FROM products
INNER JOIN product_desc 
ON products.id = product_desc.product_id


--RESETTING TABLE!!!
DROP TABLE products
DROP TABLE product_desc

--Foreign Keys
CREATE TABLE product_desc (
	id SERIAL PRIMARY KEY,
	description VARCHAR(500),
	product_id INTEGER,
	--FOREIGN KEY ASSIGN NAME 
	CONSTRAINT fk_product_id
	FOREIGN KEY (product_id)
	--IF YOU DONT WANT TO CUSTOM NAME A FOR.KEY YOU CAN JUST DO THIS BELOW AND SKIP ABOVE:
	REFERENCES products(id)
);

INSERT INTO product_desc(description, product_id)
VALUES
('Amazing iPad', 1),
('Great iPhone', 2),
('The best watch', 3),
('Fastest Car', 4)

SELECT 
products.id, 
products.name, 
products.price, 
product_desc.description 
FROM products
INNER JOIN product_desc 
ON products.id = product_desc.product_id


--BE CAREFUL WHILE USING THERE ARE NO UNDO!!!
--ON DELETE / ON UPDATE: Deleting Content from table after JOIN with Foreign Key:
--default = NO ACTION / RESTRICT
--SET NULL
--SET DEFAULT
--CASCADE

ALTER TABLE product_desc 
DROP CONSTRAINT fk_product_id,
ADD CONSTRAINT fk_product_id
	FOREIGN KEY (product_id)
			REFERENCES products(id)
			ON DELETE CASCADE
			
--Table Relations:
--One to One (One password for one user)
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL
	--OTHER USER INFO:
);

CREATE TABLE users_info(
	info_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	--Additional user info:
	user_id INTEGER UNIQUE REFERENCES users(id)
);

--One to Many (ONE author could write MANY posts)
CREATE TABLE authors(
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL
	--OTHER USER INFO:
);

INSERT INTO authors (username)
VALUES ('Harry'), ('Moshe')

CREATE TABLE posts(
	post_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	author_id INTEGER UNIQUE REFERENCES authors(id)
);

INSERT INTO posts (title, author_id)
VALUES 
('JS For Dummies', 1),
('SQL for Begginers', 1),
('Massaiah Code', 2),
('Code 16', 2)

SELECT authors.username, posts.title

FROM authors
INNER JOIN posts
ON authors.id = posts.author_id

--Many to Many (MANY student can take MANY courses)
CREATE TABLE students(
	student_id SERIAL PRIMARY KEY,
	student_name VARCHAR(50)
)

INSERT INTO students(student_name)
VALUES ('John'), ('Marry'), ('Dan'), ('Alla')

CREATE TABLE courses(
	course_id SERIAL PRIMARY KEY,
	course_name VARCHAR(50)	
)

INSERT INTO courses(course_name)
VALUES ('Java'), ('C++'), ('React'), ('Node.JS'), ('SQL')

CREATE TABLE student_courses(
	id SERIAL PRIMARY KEY,
	student_id INTEGER, 
	course_id INTEGER
)

INSERT INTO student_courses(student_id, course_id)
VALUES 
(1,1), (1,3), (1,4),
(2,1), (2,2), (2,3), (2,4), (2,5),
(3,4),(3,5),
(4,2),(4,3)

SELECT * FROM students
SELECT * FROM courses
SELECT * FROM student_courses

SELECT 
students.student_name,
courses.course_name
FROM students
INNER JOIN student_courses
ON students.student_id = student_courses.student_id
INNER JOIN courses
ON courses.course_id = student_courses.course_id
