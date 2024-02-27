const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');



const{
    readUsersFromFile,
    writeUsersToFile
}= require('../models/models.js')

const dataFilePath = path.join(__dirname, '..', 'tasks.json');

const register = (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    // Check if username already exists
    const users = readUsersFromFile();
    if (users.find(user => user.username === username)) {
        return res.status(400).send('Username already exists');
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }

        console.log('Password:', password)
        const id = users.length +1

        const newUser = { id:id , name, lastName, email, username, password: hashedPassword };
        users.push(newUser);
        writeUsersToFile(users);
        res.send('User registered successfully');
    });
}

const login = (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const users = readUsersFromFile();
    const user = users.find(user => user.username == username);
    if (!user) {
        return res.status(404).send('User not found');
    }

    // Compare hashed password
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).send('Invalid username or password');
        }
        res.send('Login successful');
    });
}

const getUsers = (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
  };

const getUserId = (req, res) => {
    const users = readUsersFromFile();
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };

  const updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, lastName, email, username, password } = req.body;

    // Read users data from file
    const users = readUsersFromFile();

    // Find the index of the user to update
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update user's information
    const userToUpdate = users[index];
    userToUpdate.name = name 
    userToUpdate.lastName = lastName 
    userToUpdate.email = email 
    userToUpdate.username = username 

    // Hash the password if provided and different from the existing one

    bcrypt.compare(password, userToUpdate.password, (err, result) => {
        if (err || !result) {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).send('Error hashing password');
                }
                userToUpdate.password = hashedPassword;
                // Write updated users data to file
                writeUsersToFile(users);
                res.send('User updated successfully');
            });
        }
        writeUsersToFile(users);
        res.send('User updated successfully');
    });
    
};



module.exports = {
    register,
    login,
    getUsers,
    getUserId,
    updateUsers
}