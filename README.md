
# Todolist-ruby-react
A TodoList **WebAPP** with Ruby on Rails from API and ReactJS to Frontend.

![enter image description here](https://i.ibb.co/K0qqSnf/ezgif-com-video-to-gif.gif)

# To run

Clone this repository in your machine, the folder **"tasks"** is a Ruby API and **"tasks_client"** is the WebApp developed in ReactJS.

*If you is very lazy/pratic like me, this command resolve "all your problems"*
(start on the )

 - Run Server - *on folder **task***
 
`$ bundle install && rails db:create && rails db:migrate && rails db:seed && rails s -p 3001`

- Run WebAPP - *on folder **tasks_client***

`$ yarn install && yarn start` 

or

 `$ npm install && npm start`

### Rails Server

After cloning the repository, access **"tasks"** folder and run the commands to install all rails dependencies and create your database.

`$ bundle install` - Install Rails dependencies

`$ rails db:create` - Create your database

`$ rails db:migrate` - To generate migrations for your database

If you require datas run:

`rails db:seed` - Improve data to application.

to run serve:

`$ rails s -p 3001` - Run rails server as port 3001 (default configured in **"tasks_client"** )

### React.JS APP
Is required NPM installed.

I recommend use the **yarn** to run this application, but you have two commands to do run this.

Entry to folder **"tasks_client"** and run install command to install app packages and dependencies:

`$ yarn install` - With Yarn

`$ npm install` - Without Yarn - *(this is slow)*

After this, you only need start the client application do:

`$ yarn start` - with yarn

`$ npm start` - without yarn

The application will start in your default browser.  See Happy!

