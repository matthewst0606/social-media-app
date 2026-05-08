# Web-Dev-Project
A social-media style web application built with PHP, JavaScript, CSS, PostgreSQL, and Docker.

## Features
- **User accounts**
  - user registration and login
  - password hashing on registration
  - password verification on login

- **Database-backed content**
  - stores users, profiles, posts, comments, reactions
  - loads posts, comments, reactions, profile data, and users from PostgreSQL

- **Post system**
  - image upload with optional descriptions
  - home feed displaying posts from the database
  - like and dislike reactions that persist after refresh
  - comment form and saved comments for each post

- **Profile system**
  - profile page with user photo, username, bio, stats, and user posts
  - edit post descriptions
  - delete posts created by the logged-in user

- **Settings**
  - update profile photo
  - update bio
  - delete account

- **App views**
  - tab navigation for home, upload, friends, notifications, and profile
  - find-friends and friends sections
  - notifications empty state


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

## Credits

Icons from [Iconoir](https://iconoir.com).
