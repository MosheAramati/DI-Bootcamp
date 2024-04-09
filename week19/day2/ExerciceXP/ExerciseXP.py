# 🌟 Exercise 1 : Hello World
print('Hello World\n' * 4)

# 🌟 Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).
print((99**3)*8)

# 🌟 Exercise 3 : What Is The Output ?
# Instructions
# Predict the output of the following code snippets:

# >>> 5 < 3
#FALSE
print(5<3)

# >>> 3 == 3
#TRUE
print(3 ==3)

# >>> 3 == "3"
#FALSE
print(3 == "3")

# >>> "3" > 3
#ERROR - "'>' not supported between instances of 'str' and 'int'"
# print("3" > 3)

# >>> "Hello" == "hello"
#FALSE
print("Hello" == "hello")


# 🌟 Exercise 4 : Your Computer Brand
# Instructions
#1. Create a variable called computer_brand which value is the brand name of your computer.
#2. Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Apple"

print(f"I have an {computer_brand} computer" )


# 🌟 Exercise 5 : Your Information
# Instructions
#1. Create a variable called name, and set it’s value to your name.
#2. Create a variable called age, and set it’s value to your age.
#3. Create a variable called shoe_size, and set it’s value to your shoe size.
#4. Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
#5. Have your code print the info message.
#6. Run your code

name = "Moshe"
age = 27
shoe_size = 10

info = f"Hi my name is {name} and I'm {age} years old and my shoe size is {shoe_size}"
print(info)

# 🌟 Exercise 6 : A & B
# Instructions
#1. Create two variables, a and b.
#2. Each variable value should be a number.
#3. If a is bigger then b, have your code print Hello World.

a = 10
b = 5

if a > b:
    print("Hello World")
else:
    print( "a is smaller than b")

# 🌟 Exercise 7 : Odd Or Even
# Instructions
#1. Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Please add number:"))

if number%2 == 0:
    print("Your number is even!")
else:
    print("Your number is odd!")

# 🌟 Exercise 8 : What’s Your Name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

name = input("Please write your name:").lower()
myName = "moshe"

if myName == name:
    print("Congratulations, we have the seame name!")
else:
    print("I'm sorry you don't have an amazing name")

# 🌟 Exercise 9 : Tall Enough To Ride A Roller Coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

limit = 145
height = int(input("please enter your height in cm:"))

if limit <= height:
    print("Congratulations, you can ride!")
else:
    print("I'm sorry you need to grow a few centimeters")
