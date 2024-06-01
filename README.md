# TinyUrl

TinyUrl is a URL shortening service designed for business clients who publish links to landing pages and internet files. It allows users to create short, user-friendly URLs for their original links.

## Features

- **User Registration**: Clients can register and manage their accounts.
- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Redirection**: Short links redirect users to the original URL.
- **Tracking**: Monitor clicks and user interactions with the short links.
- **Targeting**: Track and analyze traffic sources via query parameters.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/zippiL/nodeFinal.git
    ```
2. Navigate to the project directory:
    ```sh
    cd nodeFinal
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```
2. Access the application at `http://localhost:3000`.

## Project Structure

- **DB**: Database connections and configurations using MongoDB and Mongoose.
- **Routers**: Define API endpoints for users and links.
- **Controllers**: Handle business logic for user and link operations.
- **Models**: Define schemas for users and links.

## Development Stages

### Sprint 1: Base API
- Implemented initial API setup with Node.js and MongoDB.
- Created CRUD operations for users and links.

### Sprint 2: Tracking
- Added click tracking and redirection functionality.

### Sprint 3: Targeting
- Implemented targeting capabilities with query parameters for traffic source analysis.

