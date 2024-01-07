-- Instructions
-- In this exercise we will be using the actors table from todays lesson.(I'LL BE USING THE STUDENTS TABLE BECAUSE THERE IS NO ACTORS TABLE)
-- 1. Count how many actors are in the table.

SELECT COUNT(*) FROM STUDENTS

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO STUDENTS(LAST_NAME, FIRST_NAME, BIRTH_DATE) 
VALUES ('Aramati',  '1996-10-04', '')  

-- ERROR:  invalid input syntax for type date: ""


INSERT INTO STUDENTS(LAST_NAME, FIRST_NAME ) 
VALUES ('Aramati',  '')  

-- ERROR:  Failing row contains (9, Aramati, , null).null value in column "birth_date" of relation "students" violates not-null constraint 

-- ERROR:  null value in column "birth_date" of relation "students" violates not-null constraint

INSERT INTO STUDENTS(LAST_NAME, FIRST_NAME) 
VALUES ('Aramati', ' ')  

-- ERROR:  Failing row contains (10, Aramati,  , null).null value in column "birth_date" of relation "students" violates not-null constraint 

-- ERROR:  null value in column "birth_date" of relation "students" violates not-null constraint
