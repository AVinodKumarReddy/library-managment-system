# library-managment-system


    This is a library managemnet API Backend for the management of user and books

# Routes and the Endpoints

## /users
GET: Get all the list of users in the system
POST: Create/Register  a new user

## /users/{id}
GET: get a user by their ID
PUT: Updating a user by their ID
DELETE:Deleting a user by their ID(check if the user stillhas a issued book) && (if there any fine/penalty) to be collected

## /user/subscription/{id}

GET: get a user subscription by their id
    >> Date of subscription
    >> Valid till?
    >> Fine if any ?

## /books
GET: get all the books in the system
POST: Add a new book to the system

## /book/{bookID}
GET:get a book by its ID
PUT: update a book by ID
DELETE: Delete a book by ID


## /books/issued
GET : Get all the issued books

## /books/issued/withfines

GET: get all issed books with their finr amount

## Subscription types
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

>> if a user missed the renewal date , then user should be collected with $100
>>if a user missed the subscription , then user is expected to pay $100
>> If a user misses both renewal & subscription ,the the collected amount should be $200


## command
git init

git status

git add .

git commit -m "comments"

git push

git clone

git checkout -b "initail-Set-up"

git push set-upstream origin Inital-Set-up

---------------------------------------------------------------------------------

npm init

npm i express

npm i nodemon --save-dev

npm run dev

npm i / npm install => to restor node module and package-lock.json 




--------------------------------------------------------------------------------------

https://www.incometax.gov.in/lec/fopotal/


