# Instructions
#1. Using the input function, ask the user for a string. The string must be 10 characters long.
# -If it’s less than 10 characters, print a message which states “string not long enough”.
# -If it’s more than 10 characters, print a message which states “string too long”.
# -If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
string = input("please enter a string of 10 characters:")

remove_spaces = string.replace(" ", "")
string_length = len(remove_spaces)

if string_length == 10:
    print("Perfect String!")
elif string_length > 10:
    print("Sorry yor string is too long")
else:
    print("Sorry yor string is too short")

#2. Then, print the first and last characters of the given text.

print("First Character:", string[0], "Last Character:", string[-1])

#3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
new_string = ""

for character in string:
    print(new_string + character)
    new_string = new_string + character

# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
import random

characters = list(string)

random.shuffle(characters)

jumbled_string = "".join(characters) 

print(jumbled_string)