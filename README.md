# Unhandled Promise Rejection in Express.js Asynchronous Route Handler

This repository demonstrates a common error in Express.js applications where asynchronous operations within route handlers lack proper error handling, leading to unhandled promise rejections and application crashes.

## Problem
The `bug.js` file shows an Express.js application with a route handler that performs an asynchronous operation using `Promise`.  If the asynchronous operation fails, the error is not caught, causing the server to crash without a helpful error message.

## Solution
The `bugSolution.js` file provides the corrected code. It includes a `catch` block within the `.then().catch()` chain to handle potential errors gracefully. This prevents the application from crashing and allows for more robust error handling and logging.

## How to run
1. Clone this repository.
2. Navigate to the directory: `cd Unhandled-Promise-Rejection`
3. Install dependencies: `npm install express`
4. Run the buggy version: `node bug.js` (Observe the crash)
5. Run the fixed version: `node bugSolution.js` (Observe the proper error handling)
