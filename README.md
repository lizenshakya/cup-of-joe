
# Cup of joe
This is a private repository to web application that allows users to order coffee online from local cafes.
Core features include:

- Sign up user
- Place an order for coffee
- View order
- Update order

# Technology stack:
  - Node JS(Express JS framework)
  - Mongo DB (Mongoose)
  - Jest(Unit testing)
  (Also refer to the package.json for more information about packages used)

# Getting Started
  # Requirements
  - node version > v14.12.0 
  - git 
  - mongodb version > 4.4.0 

  # Starting the project
  - git clone git@github.com:lizenshakya/cup-of-joe.git (Clone the project)
  - Mongo DB should be up and running before starting the project
  - npm install (Install the dependencies)
  - inside the config folder create a new .env file using .env.sample
    # Start server
      - npm run start
      - Now application is up and running. Go to browser and 'http://localhost:5000' | 'https://localhost:8000'
    # Running test
    - npm install (only if haven't run it already - i.e. install the dependencies)
    - npm run test
    - npm run test:coverage(for test coverage)

  # Note
    For now 
    - There are only two user roles customer and admin.
    - Customers can only order latte, capechino, americano or normal coffee

  # Api Information
  - Postman collection doc is located in apiDocs.
  - Open postman and import the doc to check the available apis.


