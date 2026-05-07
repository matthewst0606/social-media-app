# Web-Dev-Project
A social-media style web application built with PHP, JavaScript, CSS, PostgreSQL, and Docker.

## Features
- **Database connection that stores**
  - users, posts, comments, and profile stats


- **User registration & login**
  - password hashing on registration
  - password verification on login


- **Post System**
  - displays posts from the database
  - supports image files and optional description


 - **Profile System**
   - users can edit their post description and delete posts created on their account.


## Database Setup
This project requires PostgreSQL to be running through Docker.

### - If the database is empty, run the provided SQL file to create the tables:
```bash
psql -h localhost -U postgres -d social_media -f table.sql
```

## How to run using a localhost
(This was the main method used to develop and test the project.)

### 1. Start the Postgres database from the provided dockerfile
```bash 
docker compose up -d
```

### 2. Create a localhost on port 8000 using the `public` folder
```bash 
php -S localhost:8000 -t public
```

### 3. Visit
```bash 
http://localhost:8000/HTML/main.php
```


## Running with XAMPP
(This is an alternative method if the PHP development server is not available.)

### 1. If using XAMPP, place the project folder inside:
```bash
C:\xampp\htdocs\
```
### 2. Start Apache from the XAMPP Control Panel

### 3. Make sure Docker is running for PostgreSQL
```bash 
docker compose up -d
```

### 4. Visit
```bash 
http://localhost/Web-Dev-Project/public/HTML/main.php
```
