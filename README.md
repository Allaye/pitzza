# pitzza
<h1>An API for pitzza delivery<h1>

## Project installation 💾💾:

1. Clone the repository 🆑:
2. Navigate to the  project directory 🧭:
3. Install the project using "npm install" command:
4. Run the project using "npm start" command 👟:

### To run the test suite and generate the coverage report:
  make sure you have installed the project using "npm install" command
  and navigate to the project directory 🧭:
5. Run the test suite using "npm test" command 🧪:
   the coverage report will be generated 📊:

## 🛠 Technologies
This project was built using the following technologies:
    nodejs, typescript, mongodb, express, mongoose orm and the jest testing framework.

To be able to run the project on your local machine, you will need to install the following dependencies:
   mongocompass (for mongodb)

## Usage endpoints flow

6. create some menu items using the below command:
```### endpoint: /create/menu
    ### method: POST
    ### request body:
    {
        "foodname": "burger",
        "price": 100,
        "description": "burger with cheese",
        "category": "food",
    }

    ### response:
    {
        "status": "success",
        {
            "foodname": "burger",
            "price": 100,
            "description": "burger with cheese",
        }
    }
```
7. register as a user using the below command:
this endpoint is used to register a user, it expects a json object with the following properties:
```### endpoint: /registration
    ### method: POST
    ### request body:
    {
        "firstname": "John",
        "lastname": "Doe",
        "email": "jondoe@goe.com",
        "password": "12345678",
        "address" : "123, street, city, country",
    }

    ### response:
the endpoint return a response object with the registration details and a token
    {
        "status": "success",
        {
            
        "firstname": "John",
        "lastname": "Doe",
        "email": "jondoe@goe.com",
        "password": "12345678",
        "address" : "123, street, city, country",
        "tokens: [token: "asdfgfbdfrdvczdfgfhffre324546gfg"]
        }
    }
```

8. login as a user using the below command:
this endpoint is used to login a user, it expects an email and a password used in registration 
<b>NB this is a protected endpoint</b>
```### endpoint: /login
    ### method: POST
    ### request body:
    {
        "email": "jondoe@goe.com",
        "password": "12345678",
    }
    ### response:
the endpoint return a response object attached with a token
    {
        userobject
        token:"erszretgdgyjcfhfghh"
    }
```

9. create a new order using the below command need to pass token to this endpoint:
this endpoint is used to create a new order, it expects a json object with the following properties:
<b>NB this is a protected endpoint</b>
```### endpoint: /create/order
    ### method: POST
    ### request body:
    {
        "foodname": "rice",
        "quantity": 1,
        "comment": "i want the food quickly",
    }
    Bearer token: "erszretgdgyjcfhfghh"

    ### response:
    {
    "message": "Order added successfully"
    }
```

<b>NB without a local instance of mongodb the db connection is going to fail</b>
