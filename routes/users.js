
const express = require('express');

const user_s = require('../data/users.json');

const users = user_s.users;

const router = express.Router();

// const PORT = 8081;

// router.use(express.json());

/**
 * Route:/users
 * Method: Get
 * Description: Get all users in the system
 * Access: Public
 * Parameters: none
 * 
 */

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
});

/**
 * Route:/users/:id
 * Method: Get
 * Description: Get a user by id
 * Access: Public
 * Parameters: id
 */

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const user = users.find((usr) => usr.id === id);
    if (user) {
        res.status(200).json({
            success: true,
            data: user
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }
});

/**
 * Route:/users
 * Method: Post
 * Description: Create a new user
 * Access: Public
 * Parameters: none
*/
router.post('/', (req, res) => {
    const newUser = req.body;

     const user = users.find((usr) => usr.id === newUser.id);

     if(user){
        return res.status(400).json({
            success: false,
            message: 'User with this id already exists'
        });
     }else{
        users.push(newUser);
        res.status(201).json({  
            success: true,
            data: newUser,
            message: 'User created successfully'
        });
     }
});

/**
 * Route:/users/:id
 * Method: PUT
 * Description: updateing user by their id
 * Access: Public
 * Parameters: ID
*/

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body.data;

    const user =users.find((usr) =>usr.id ===id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    // update user data

    //with Object.assign
    // with spread operator

    const userData = users.map((usr) => {
        
        if(usr.id === id){
            return {
                ...usr,
                ...updatedData
            };
        }
        return usr;
});

    res.status(200).json({
        success: true,
        data: userData,
        message: 'User updated successfully'
    });

});


/**
 * Route:/users/:id
 * Method: Delete
 * Description: deleting user by their id
 * Access: Public
 * Parameters: ID
*/

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find((usr) => usr.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }
    // const filteredUsers = users.filter((usr) => usr.id !== id);

    const index = users.indexOf(user);

    users.splice(index, 1);

    const filteredUsers = users;

    res.status(200).json({
        success: true,
        data: filteredUsers,
        message: 'User deleted successfully'
    });
});


module.exports = router;
