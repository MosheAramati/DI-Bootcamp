-- first_name, last_name, adress, district, city, country

SELECT 
    CUSTOMER.first_name, 
    CUSTOMER.last_name, 
    ADDRESS.address, 
    ADDRESS.district,
    CITY.city,
    COUNTRY.country
FROM 
    CUSTOMER
INNER JOIN 
    ADDRESS ON CUSTOMER.ADDRESS_ID = ADDRESS.ADDRESS_ID
INNER JOIN 
    CITY ON ADDRESS.city_ID = CITY.city_ID
INNER JOIN 
    COUNTRY ON CITY.country_ID = COUNTRY.country_ID;


