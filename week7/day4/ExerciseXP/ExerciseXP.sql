-- 🌟 Exercise 1: DVD Rental
-- Instructions
--1. Get a list of all the languages, from the language table.
SELECT NAME FROM LANGUAGE;

--2. Get a list of all films joined with their languages 
-- select the following details : film title, description, and language name.
SELECT FILM.TITLE,
		FILM.DESCRIPTION,
		LANGUAGE.NAME
FROM FILM
INNER JOIN LANGUAGE
ON FILM.LANGUAGE_ID = LANGUAGE.LANGUAGE_ID

--3. Get all languages, even if there are no films in those languages 
--select the following details : film title, description, and language name.
SELECT FILM.TITLE,
		FILM.DESCRIPTION,
		LANGUAGE.NAME
FROM FILM
RIGHT JOIN LANGUAGE
ON FILM.LANGUAGE_ID = LANGUAGE.LANGUAGE_ID


--4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE NEW_FILM(
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR(100)
);

INSERT INTO NEW_FILM (NAME)
	VALUES ('THE AVENGERS'), ('SPIDER-MAN'), ('IRON MAN')
	
SELECT * FROM NEW_FILM

--5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
	-- 1.review_id – a primary key, non null, auto-increment.
	-- 2.film_id – references the new_film table. The film that is being reviewed.
	-- 3.language_id – references the language table. What language the review is in.
	-- 4.title – the title of the review.
	-- 5.score – the rating of the review (1-10).
	-- 6.review_text – the text of the review. No limit on the length.
	-- 7.last_update – when the review was last updated.
	
CREATE TABLE CUSTOMER_REVIEW(
	REVIEW_ID SERIAL PRIMARY KEY NOT NULL,
	FILM_ID INTEGER NOT NULL,
	LANGUAGE_ID INTEGER NOT NULL, 
	TITLE VARCHAR (100) NOT NULL,
	SCORE INTEGER NOT NULL,
	REVIEW_TEXT TEXT ,
	LAST_UPDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	CONSTRAINT FK_LANGUAGE_ID FOREIGN KEY (LANGUAGE_ID) REFERENCES LANGUAGE(LANGUAGE_ID),
	CONSTRAINT FK_FILM_ID FOREIGN KEY (FILM_ID) REFERENCES NEW_FILM(ID) ON DELETE CASCADE,
	CONSTRAINT SCORE_VAULE CHECK (SCORE > 0 AND SCORE <= 10)
);

--6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO CUSTOMER_REVIEW (FILM_ID, LANGUAGE_ID, TITLE, SCORE, REVIEW_TEXT)
	VALUES (1, 1, 'AMAZING MOVIE', 10, 'VERY EXCITING MOVIE' ), 
			(2, 1, 'JUST GREAT', 10 , 'AMAZING EFFECTS')
			
SELECT * FROM CUSTOMER_REVIEW

--7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM NEW_FILM WHERE (NAME = 'THE AVENGERS')
-- THE COLUMN OF THAT FILM WAS DELETED BECAUS THE CONTRAINT ON DELETE

-- Exercise 2 : DVD Rental
-- Instructions
--1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE FILM
SET LANGUAGE_ID = 2
WHERE (FILM_ID = 133)

SELECT * FROM FILM INNER JOIN LANGUAGE ON FILM.LANGUAGE_ID = LANGUAGE.LANGUAGE_ID

--2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
SELECT * FROM CUSTOMER
-- THERE ARE FOREIGN KEYS IN STORE_ID AND ADDRESS_ID WITCH MEANS THAT TO INSERT A ROW THIS VALUE NEEDS TO FILLED 

--3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE CUSTOMER_REVIEW
-- NOT EXTRA CHECKING

--4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM RENTAL WHERE (RETURN_DATE IS NULL) 

--5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM RENTAL 
INNER JOIN INVENTORY 
ON RENTAL.INVENTORY_ID = INVENTORY.INVENTORY_ID 
LEFT JOIN FILM
ON INVENTORY.FILM_ID = FILM.FILM_ID
WHERE RENTAL.RETURN_DATE IS NULL
ORDER BY FILM.REPLACEMENT_COST DESC
LIMIT 30

--6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
	--1. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT * FROM ACTOR WHERE (FIRST_NAME='Penelope')

SELECT * FROM FILM
INNER JOIN FILM_ACTOR
ON FILM.FILM_ID = FILM_ACTOR.FILM_ID
WHERE FILM_ACTOR.ACTOR_ID = 120 AND FILM.FULLTEXT @@ TO_TSQUERY('english', 'sumo')

	--2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM FILM 
INNER JOIN FILM_CATEGORY 
ON FILM.FILM_ID = FILM_CATEGORY.FILM_ID 
WHERE FILM.LENGTH < 60 AND FILM.RATING = 'R' AND FILM_CATEGORY.CATEGORY_ID = 6

	--3. The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT * FROM FILM 
INNER JOIN INVENTORY
ON FILM.FILM_ID = INVENTORY.FILM_ID
LEFT JOIN RENTAL
ON INVENTORY.INVENTORY_ID = RENTAL.INVENTORY_ID
WHERE RENTAL.CUSTOMER_ID = 323 AND FILM.RENTAL_RATE > 4.00 AND RENTAL.RETURN_DATE BETWEEN '2005-07-28' AND '2005-08-01';

	--4. The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT * FROM FILM 
INNER JOIN INVENTORY
ON FILM.FILM_ID = INVENTORY.FILM_ID
LEFT JOIN RENTAL
ON INVENTORY.INVENTORY_ID = RENTAL.INVENTORY_ID
WHERE RENTAL.CUSTOMER_ID = 323 AND FILM.DESCRIPTION LIKE '%Boat%' 
ORDER BY FILM.REPLACEMENT_COST DESC
LIMIT 1

