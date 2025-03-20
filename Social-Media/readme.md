# Social Media Platform API

A robust backend API for a social media platform with analytics capabilities, built with Node.js, Express, and MongoDB.

## Overview
This project provides a RESTful API for managing social media functionality including users, posts, comments, and basic analytics. It features proper error handling, MongoDB transactions, and performance optimizations such as pagination.

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Morgan** - HTTP request logger middleware
- **Cors** - Cross-origin resource sharing middleware
- **Dotenv** - Environment variable management

## Project Structure
```
├── controllers
├── models
├── routes
├── middleware
├── config
├── utils
└── server.js
```

## Features
### User Management
- Create user profiles
- Retrieve user information
- Update user details
- View top users by post count
- Track followers and following

### Post Management
- Create, read, update, and delete posts
- Support for text content and media URLs
- Retrieve post feed with pagination
- Get trending posts based on comment count
- User-specific post retrieval

### Comment System
- Add comments to posts
- Update and delete comments
- Retrieve all comments for a specific post

### Analytics
- Post count tracking per user
- Comment count tracking per post
- Likes tracking

## API Endpoints
### User Endpoints
| Method | Endpoint            | Description                   |
|--------|--------------------|-------------------------------|
| GET    | /users             | Get all users                |
| GET    | /users/top         | Get top users by post count  |
| GET    | /users/:id         | Get user by ID               |
| GET    | /users/:id/posts   | Get posts by user ID         |
| POST   | /users             | Create new user              |
| PATCH  | /users/:id         | Update user information      |

### Post Endpoints
| Method | Endpoint                  | Description                     |
|--------|--------------------------|---------------------------------|
| GET    | /posts                   | Get all posts                  |
| GET    | /posts/feed              | Get paginated feed             |
| GET    | /posts/trending          | Get trending posts             |
| GET    | /posts/:id               | Get post by ID                 |
| GET    | /posts/:id/comments      | Get comments for post          |
| POST   | /posts                   | Create new post                |
| POST   | /posts/:id/comments      | Add comment to post            |
| PATCH  | /posts/:id               | Update post                    |
| PATCH  | /posts/comments/:id      | Update comment                 |
| DELETE | /posts/:id               | Delete post                    |
| DELETE | /posts/comments/:id      | Delete comment                 |

## Installation
Clone the repository:
```sh
git clone https://github.com/your-repo.git
cd your-repo
```
Install dependencies:
```sh
npm install
```
Create a `.env` file in the root directory with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application
### Development mode with auto-restart:
```sh
npm run dev
```
### Production mode:
```sh
npm start
```

## Technical Implementation Details
### Database Design
- Uses MongoDB with Mongoose for schema validation
- Implements references between collections using ObjectId
- Timestamps for created and updated fields

### Transaction Support
- MongoDB transactions for data consistency
- Operations like post creation/deletion maintain data integrity across collections

### Performance Considerations
- Pagination for feed endpoints to handle large datasets
- Selective population of related data
- Proper indexing through Mongoose schema design

### Error Handling
- Consistent error response format
- Environment-aware error details (more detailed in development)
- Specific handling for JSON parsing errors



