# school-web3-final
Final Project - Employee TODO manager

## Startup:

#### Requirements
* Node.js (v6.10.2)
* npm (v3.10.10)
* MongoDB (v3.4.4)
  * recommended setup: `docker run --name EmpTodoMongo -p 27017:27017 -d mongo` 


You will need a config.json file (in the 'server' folder) as follows:
```
  {
      "emailUser": "example@gmail.com",
      "emailPass": "exampleEmailPass",
      "emailRecipients": "example@gmail.com, example@gmail.com",
      "port": "8080",
      "ip": "127.0.0.1",
      "mongoHost": "127.0.0.1:27017",
      "jwtSecret": "secretpassword",
      "sessionSecret": "sessionPassword"
  }
```
Alternatively, these arguments may be provided as envirnoment variables or command line arguments

#### Prep
* pull from Github `git clone https://github.com/MarkRyanDev/school-web3-final.git`
* initialize database `node server/initMongo.js`
* run server
   * `cd server`
   * `node server.js`
* In a browser, go to 127.0.0.1:8080 (or whatever you put in the config.json)
