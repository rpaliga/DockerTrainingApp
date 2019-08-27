
## Task

The goal is this task is create **TO DO** application which show tasks from database.

You have to run API server which working on port **5000**
Client is running on port **3000**

For the "security" reason, you can not use port **3000**. So you have to run client on another port fe. **4000** .

phpmyadmin run on port **8080** .


## Requirements:
* define production environment in `docker-compose.yml`
* define service phpmyadmin in `docker-compose-dev.yml`
    * use image `phpmyadmin/phpmyadmin`
    * phpmyadmin works on port `80`
* use MySQL database 
  * use image `mariadb`
  * define volume for persistent data (use Docker managed). Name it `mysql_db`
  * remember about password to MySQL
  * define database with `todoapp` name
  * define table with `tasks` name
  * define fields
    * id (int with autoincrement)
    * text (varchar)
    * completed (bool)
* server has been written in Node JS
  * use image `10 (alpine)` to build service
  * remember about correctly connect configuration - `index.js` file in `api_server`
  * create image for API (Dockerfile) - name it `todoapp-api`
  * crate service with `apiserver` name
* client has been written in React.JS
  * use image `10 (alpine)` to build service
  * remember about correctly API connect configuration - variable `API_server` in `react_app/src/components/wrappers/StateProvider.js` file - set address IP of your machine
  * create image for UI (Dockerfile) - name it `todoapp-client`
  * create service with `clientapp` name

* remember about depends of services

  


## Hints:

* **MySQL:**
  * use environment variable `MYSQL_ROOT_PASSWORD` to set mysql password
* **Serwer i klient:**
  * create working directory `/usr/app` for application
  * remeber about copy `package.json` and run `npm install`
* **Serwer:**
  * for server, add global package PM2 by `npm install pm2 -g`
  * run server with command `pm2-docker start ecosystem.config.js` (remember about syntax Dockerfile ! )
* **Klient:**
  * run client with `npm start` (remember about syntax Dockerfile ! )
* **docker-compose**
  * to define depends of services use `depends_on`
