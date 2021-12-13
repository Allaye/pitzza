# pitzza
<h1>An API for pitzza delivery<h1>

# Project installation:

1. ### Clone the repository:
2. ### Navigate to the  project directory:
3. ### Install the project using "npm install" command:
4. ### Run the project using "npm start" command:

### To run the test suite:
5. Run the test suite using "npm test" command: 



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
```

8. login as a user using the below command:
```### endpoint: /login
    ### method: POST
    ### request body:
    {
        "email": "jondoe@goe.com",
        "password": "12345678",
    }
    ### response:
    {
        userobject
        token:"erszretgdgyjcfhfghh"
    }
```

9. create a new order using the below command need to pass token to this endpoint:
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
