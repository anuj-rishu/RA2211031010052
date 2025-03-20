# Number Average Calculator

A microservice that fetches numbers from third-party APIs and calculates their average using a sliding window approach.

## Features

- Fetches numbers from four different APIs: **Prime, Fibonacci, Even, and Random**.
- Maintains a configurable **sliding window** of unique numbers.
- Calculates the **average** of numbers in the current window.
- Provides **REST API endpoints** with proper error handling.

## Architecture

This service follows a **microservices architecture**, interacting with external APIs to fetch numbers and computing their average dynamically. The **sliding window** mechanism ensures efficiency and accuracy.

## API Endpoints

| Method | Endpoint      | Description           |
|--------|-------------|-----------------------|
| GET    | /numbers/p  | Fetch prime numbers   |
| GET    | /numbers/f  | Fetch Fibonacci numbers |
| GET    | /numbers/e  | Fetch even numbers    |
| GET    | /numbers/r  | Fetch random numbers  |

## Example API Responses

### Fetching Prime Numbers

**GET /numbers/p**

```json
{
  "window": [2, 3, 5, 7, 11],
  "average": 5.6
}
```

### Fetching Fibonacci Numbers

**GET /numbers/f**

```json
{
  "window": [0, 1, 1, 2, 3, 5, 8],
  "average": 2.85
}
```

### Fetching Even Numbers

**GET /numbers/e**

```json
{
  "window": [2, 4, 6, 8, 10],
  "average": 6
}
```

### Fetching Random Numbers

**GET /numbers/r**

```json
{
  "window": [3, 14, 7, 9],
  "average": 8.25
}
```

## Screenshot



---


