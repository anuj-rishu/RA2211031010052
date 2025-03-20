# Number Average Calculator & Social Media Platform API

This repository contains two microservices: a **Number Average Calculator** and a **Social Media Platform API**.

## Number Average Calculator

A microservice that fetches numbers from third-party APIs and calculates their average using a sliding window approach.

### Features
- Fetches numbers from four different APIs: **Prime**, **Fibonacci**, **Even**, and **Random**.
- Maintains a configurable **sliding window** of unique numbers.
- Calculates the **average** of numbers in the current window.
- Provides **REST API endpoints** with proper error handling.

### Architecture
This service follows a microservices architecture, interacting with external APIs to fetch numbers and computing their average dynamically. The sliding window mechanism ensures efficiency and accuracy.

### API Endpoints
| Method | Endpoint       | Description               |
|--------|---------------|---------------------------|
| GET    | /numbers/p    | Fetch prime numbers       |
| GET    | /numbers/f    | Fetch Fibonacci numbers   |
| GET    | /numbers/e    | Fetch even numbers       |
| GET    | /numbers/r    | Fetch random numbers      |

### Example API Responses
#### **Fetching Prime Numbers**
```
GET /numbers/p
Response:
{
  "window": [2, 3, 5, 7, 11],
  "average": 5.6
}
```

#### **Fetching Fibonacci Numbers**
```
GET /numbers/f
Response:
{
  "window": [0, 1, 1, 2, 3, 5, 8],
  "average": 2.85
}
```

#### **Fetching Even Numbers**
```
GET /numbers/e
Response:
{
  "window": [2, 4, 6, 8, 10],
  "average": 6
}
```

#### **Fetching Random Numbers**
```
GET /numbers/r
Response:
{
  "window": [3, 14, 7, 9],
  "average": 8.25
}
```

---

## Social Media Platform API

This microservice powers a basic social media platform where users can create posts, comment, and interact.

### Features
- **User Authentication** (Signup, Login)
- **Post Creation and Management**
- **Commenting System**
- **Like & Unlike Posts**
- **REST API with JSON responses**

### API Endpoints
| Method | Endpoint      | Description                 |
|--------|--------------|-----------------------------|
| POST   | /signup      | Create a new user account   |
| POST   | /login       | Authenticate a user         |
| POST   | /posts       | Create a new post           |
| GET    | /posts       | Retrieve all posts          |
| POST   | /posts/:id/comments | Comment on a post  |
| POST   | /posts/:id/like | Like a post              |
| POST   | /posts/:id/unlike | Unlike a post         |

### Example API Responses
#### **User Signup**
```
POST /signup
Request Body:
{
  "username": "john_doe",
  "password": "securepassword"
}
Response:
{
  "message": "User registered successfully"
}
```

#### **Creating a Post**
```
POST /posts
Request Body:
{
  "title": "My First Post",
  "content": "Hello, this is my first post!"
}
Response:
{
  "id": 1,
  "title": "My First Post",
  "content": "Hello, this is my first post!",
  "likes": 0,
  "comments": []
}
```

#### **Liking a Post**
```
POST /posts/1/like
Response:
{
  "message": "Post liked successfully",
  "likes": 1
}
```

---

## Running the Microservices
### Prerequisites
- Node.js installed
- MongoDB for the Social Media Platform API

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-url.git
   cd repository-folder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Screenshots
