# 🌟 Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

new_dict = dict(zip(keys, values))
print(new_dict)

# 🌟 Exercise 2 : Cinemax
# Instructions
#1. A movie theater charges different ticket prices depending on a person’s age.
# -if a person is under the age of 3, the ticket is free.
# -if they are between 3 and 12, the ticket is $10.
# -if they are over the age of 12, the ticket is $15.

#2. Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#3. How much does each family member have to pay ?
#4. Print out the family’s total cost for the movies.
#5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

ticket_cost = 0

for key, value in family.items():
    if value < 3:
        ticket_cost += 0
        print(f"{key}'s ticket is free")  
    elif 3 <= value <= 12: 
        ticket_cost += 10
        print(f"{key}'s ticket is $10")  
    else:
        ticket_cost += 15
        print(f"{key}'s ticket is $15")  
print (f"The total cost of your tickets is ${ticket_cost}")

new_family = {}
update = True

while update:
    member_name = input("Add family member name: (Enter 'quit' to finish)")
    if member_name.lower() == "quit":
        update = False
    else:
        member_age = int(input(f"Add {member_name}'s age: "))
        new_family[member_name] = member_age

print("New family members:", new_family)

# 🌟 Exercise 3: Zara
# Instructions
#1. Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green

# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 3. Change the number of stores to 2.
brand["number_stores"]= 2
print("3",brand)

# 4. Print a sentence that explains who Zaras clients are.
print(f"4 Zara's clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]} and {brand['type_of_clothes'][2]}")

# 5. Add a key called country_creation with a value of Spain.
brand["country_creation"]= "Spain"
print("5",brand)

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print("6",brand)

# 7. Delete the information about the date of creation.
brand["creation_date"]= None
print("7",brand)

# 8. Print the last international competitor.
print("8",brand["international_competitors"][-1])

# 9. Print the major clothes colors in the US.
print("9",brand["major_color"]["US"])

# 10. Print the amount of key value pairs (ie. length of the dictionary).
print("10",len(brand))

# 11. Print the keys of the dictionary.
for key, value in brand.items():
    print(key)
# 12. Create another dictionary called more_on_zara with the following details:
# creation_date: 1975 
# number_stores: 10 000
more_on_zara={"creation_date": 1975, "number_stores": 10000}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)
print("13",brand)

# 14. Print the value of the key number_stores. What just happened ?
print("14",brand["number_stores"])
# number_stores was updated

# 🌟 Exercise 4 : Disney Characters
# Instructions
# Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]


#1. Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
disney_users_A = {}
for i, character in  enumerate(users):
    disney_users_A[character] = i
else:
    print(disney_users_A)

#2. Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
disney_users_B = {}
for i, character in  enumerate(users):
    disney_users_B[i] = character
else:
    print(disney_users_B)

#3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
ordered_users = sorted(users)
disney_users_C = {}
for i, character in  enumerate(ordered_users):
    disney_users_C[character] = i
else:
    print(disney_users_C)

#4. Only recreate the 1st result for:
# 1.The characters, which names contain the letter “i”.
disney_users_D = {}
for i, character in  enumerate(users):
    if "i" in character:
        disney_users_D[character] = i

print(disney_users_D)

# 2.The characters, which names start with the letter “m” or “p”.
disney_users_E = {}
for i, character in  enumerate(users):
     if character[0].lower() == "m" or character[0].lower() == "p":
        disney_users_E[character] = i

print(disney_users_E)