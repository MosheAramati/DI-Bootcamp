# print("hello world")

# my_age = 27

# future_age = my_age * 123879

# print(f"my future_age: {future_age}")

# first_name = 'moshe'.capitalize()

# last_name = 'aramati'.capitalize()

# print(f"My first name is: {first_name} \t My last name is: {last_name}")



# email= input("Please create email:")
# # string for my email
# password= input("Please create password:")
# # string for my password
# age= input("Please add you age:")
# # int for my age
# gender= input("Please add gender:")
# # string for gender
# f_Name = input("Please add first name:").capitalize()
# # string for name
# l_Name = input("Please add  last name:") .capitalize()
# # string for last name

# # print(f"my name is {f_Name} {l_Name} Im a {gender} my age is {age} and my email is{email}")

# number = int(input("Enter a number between 1 and 100: "))

# if number % 3 == 0 and number % 5 == 0:
#     print("FizzBuzz")
# elif number % 3 == 0:
#     print("Fizz")
# elif number % 5 == 0:
#     print("Buzz")
# else:
#     print("your number is not a multiple of 5 or 3")

# print("Finished")

# print('Hello World\n' * 4)


# x= [2, 34, -5,5,3,2,1,4,5,-7]

# max= x[0]
# min= x[0]
# for num in x:
#     if num>max:
#         max=num
#     if num<min:
#         min=num
# print(f'max:{max} \nmin:{min}')

# counter = 1
# while True:
#     if counter == 101:
#         break
#     if counter % 2 == 0:
#         counter += 1
#         continue
#     print (counter)
#     counter+= 1
   

# # Question: Write a program that takes a list of strings and finds all the palindromes in the list.
# # A palindrome is a word that reads the same backward as forward. Print each palindrome found in the list.

# example of palindrome:level

# strings = ["level", "world", "madam", "python", "racecar", "hello", "civic"]
# polindrome = []

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict["class"]["student"]["marks"]["history"])

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
student_average ={}

for student, grade in student_grades.items():
    student_average [student] = sum(grade)/len(grade)
    # print((grade[0]+grade[1]+grade[2])/len(grade))

print(student_average)

student_letter_grades = {}

for student, average in student_average.items():
    if average >= 90:
        grade = "A"
    elif average >=80:
        grade = "B"
    elif average >= 70:
        grade = "C"
    elif average >= 60:
        grade = "D"
    else:
        grade= "F"
    student_average[student]= grade

print(student_average)

print (sum(student_average.values())/len(student_average))


### Exercise: Advanced Data Manipulation and Analysis
In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]
*Tasks:*
1. *Total Sales Calculation*: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.
2. *Customer Spending Profile*: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.
3. *Sales Data Enhancement*:
    - Add a new field to each transaction called "total_price" that represents the total price for that transaction (quantity * price).
    - Use a loop to modify the sales_data list with this new information.
4. *High-Value Transactions*:
    - Using list comprehension, create a list of all transactions where the total price is greater than $500.
    - Sort this list by the total price in descending order.
5. *Customer Loyalty Identification*:
    - Identify any customer who has made more than one purchase, suggesting potential loyalty.
    - Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.
6. *Bonus: Insights and Analysis*:
    - Calculate the average transaction value for each product category.
    - Identify the most popular product based on the quantity sold.
    - Provide insights into how these analyses could inform the company’s marketing strategies.









