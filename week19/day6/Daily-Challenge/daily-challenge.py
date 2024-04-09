# # Instructions
# # Challenge 1
# # Ask a user for a word
# # Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# # Make sure the letters are the keys.
# # Make sure the letters are strings.
# # Make sure the indexes are stored in a list and those lists are values.
# word = input("Enter a word: ")

# letter_indexes = {}

# for i, letter in enumerate(word):
#     if letter in letter_indexes:
#         letter_indexes[letter].append(i)
#     else:
#         letter_indexes[letter] = [i]

# print(letter_indexes)

# Challenge 2
#1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#2. Sort the list in alphabetical order.
#3. Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = 300

cart = []

for item, price in items_purchase.items():
    cleaned_price = price.replace("$", "").replace(",", "")
    price_in_number = int(cleaned_price)
    items_purchase[item] = price_in_number
    if price_in_number <= wallet:
        cart.append(item)

cart.sort()

if cart:
    print("Items you can afford:")
    for item in cart:
        print("-", item)
else:
    print("Nothing")