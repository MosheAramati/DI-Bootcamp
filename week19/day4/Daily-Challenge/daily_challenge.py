# Challenge 1
#1. Ask the user for a number and a length.
#2. Create a program that prints a list of multiples of the number until the list length reaches length.

user_number = int(input("add number: "))
user_length = int(input("add length: "))

display_list = []
multiples = user_number

while len(display_list) < user_length:
    display_list.append(multiples)
    multiples += user_number
else:
    print(f"number: {user_number} - length: {user_length} -{display_list}")

# Challenge 2
#1. Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_word = input("add woooorrrddd: ")
clean_word = ""

for i, char in enumerate(user_word):
     if i == len(user_word) - 1 or user_word[i] != user_word[i+1]:
        clean_word += char

print(clean_word)
