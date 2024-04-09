# # 🌟 Exercise 1 : Set
# # Instructions
# #1. Create a set called my_fav_numbers with all your favorites numbers.
# my_fav_numbers = {4, 10, 18}
# print (my_fav_numbers)

# #2. Add two new numbers to the set.
# my_fav_numbers.add(100)
# my_fav_numbers.add(200)
# print (my_fav_numbers)

# #3. Remove the last number.
# my_fav_numbers.remove(200)
# print(my_fav_numbers)

# #4. Create a set called friend_fav_numbers with your friend’s favorites numbers.
# friend_fav_numbers = {1, 2, 3}
# print(friend_fav_numbers)

# #5. Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# # 🌟 Exercise 2: Tuple
# # Instructions
# #1. Given a tuple which value is integers, is it possible to add more integers to the tuple?

# #RSP: No, it's not possible to directly add more integers to an existing tuple in Python. Tuples are immutable, meaning their elements cannot be changed or modified after creation.

# # 🌟 Exercise 3: List
# # Instructions
# # Using this list 
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# print(basket)

# #1. Remove “Banana” from the list.
# basket.remove("Banana")
# print(basket)

# #2. Remove “Blueberries” from the list.
# basket.remove("Blueberries")
# print(basket)

# #3. Add “Kiwi” to the end of the list.
# basket.append("Kiwi")
# print(basket)

# #4. Add “Apples” to the beginning of the list.
# basket.insert(0, "Apples")
# print(basket)

# #5. Count how many apples are in the basket.
# count_items = len(basket)
# print(count_items)

# #6. Empty the basket.
# basket.clear()

# #7. Print(basket)
# print(basket)

# # 🌟 Exercise 4: Floats
# # Instructions
# #1. Recap – What is a float? What is the difference between an integer and a float?
# #he main difference between an integer and a float is that integers represent whole numbers (e.g., -3, 0, 42), whereas floats can represent both whole numbers and fractional numbers (e.g., 3.14, -0.5, 2.718). Floats provide greater precision but may occupy more memory compared to integers.

# #2. Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# sequence = [x / 2 for x in range(3, 11)]
# print(sequence)

# #3. Can you think of another way to generate a sequence of floats?
# sequence = []
# for i in range(10):
#     sequence.append(1 + i * 0.5)
# print(sequence)

# # 🌟 Exercise 5: For Loop
# # Instructions
# #1. Use a for loop to print all numbers from 1 to 20, inclusive.
# for number in range(1, 21):
#     print(number)
# #2. Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# for index, number in enumerate(range(1, 21)):
#     if index % 2 == 0:
#         print(number)

# # 🌟 Exercise 6 : While Loop
# # Instructions
# #1. Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# name = True

# while name:
#     user_input = input("Write a name: ")
#     if user_input == "moshe":
#         name = False

# # 🌟 Exercise 7: Favorite Fruits
# # Instructions
# #1. Ask the user to input their favorite fruit(s) (one or several fruits).
# # Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# favorite_fruit = input("input your favorite fruit separated by a single space: ")
# #2. Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# favorite_fruit_list = favorite_fruit.split()
# print(favorite_fruit_list)
# #3. Now that we have a list of fruits, ask the user to input a name of any fruit.
# # -If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# # -If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# user_fruit = input("submit fruit: ")
# if user_fruit in favorite_fruit_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")

# # 🌟 Exercise 8: Who Ordered A Pizza ?
# # Instructions
# #1. Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# #2. As they enter each topping, print a message saying you’ll add that topping to their pizza.
# #3. Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# toppings = []
# while True:
#     user_toppings = input("add topping")
#     toppings.append(user_toppings)
#     print(toppings)
#     if user_toppings == "quit":
#         break
    
# total_price = 10 + 2.5 * len(toppings)
# print("Total price:", total_price)

# 🌟 Exercise 9: Cinemax
# Instructions
#1. A movie theater charges different ticket prices depending on a person’s age.
# -if a person is under the age of 3, the ticket is free.
# -if they are between 3 and 12, the ticket is $10.
# -if they are over the age of 12, the ticket is $15.

#2. Ask a family the age of each person who wants a ticket.

#3. Store the total cost of all the family’s tickets and print it out.

# ticket_cost = 0
# family =["joe", "dan", "ana", "neil"]
# for member in family:
#     age = int(input(f"enter {member}'s age:"))
#     if age < 3:
#         ticket_cost += 0  
#     elif 3 <= age <= 12: 
#         ticket_cost += 10
#     else:
#         ticket_cost += 15
# print (f"The total cost of your tickets is ${ticket_cost}")

#4. A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# teen_group = ["neil", "joe", "john", "carl", "nate"]
# permited_teens = []
# for teen in teen_group:
#     teen_age = int(input(f"enter {teen}'s age:"))
#     if not 16 <= teen_age <= 21:
#         permited_teens.append(teen)  

# print (permited_teens)

# 🌟 Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#1. The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#2. We need to prepare the orders of the clients:
# -Create an empty list called finished_sandwiches.
# -One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#3. After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

finished_sandwiches = []

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
else:
    sandwich_orders.clear()

print(sandwich_orders)
print(finished_sandwiches)

for f_sandwich in finished_sandwiches:
    print(f"I made your {f_sandwich}")


