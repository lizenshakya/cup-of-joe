
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

  # Starting the project without docker
  - git clone https://github.com/lizenshakya/vendingmachineNew (Clone the project)
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

  # Starting the project with docker
  Starting this project using docker requires docker installed.
    # Dev server
    - docker-compose build (Build the image - only once, you need not do this every time unless you need to build a new image.)
    - docker-compose -up -d (Run the application)
    - Now application is up and running in development mode.
    - Your changes will be auto reflected. You are good to make changes to your files. 
    
    (Note:** docker-compose -up -d --build (Run this command instead of those two and application will run immediately after build is finished.))

Do reference apidocs for curl commands
