# Project Setup and Run Instructions

## Backend

### Prerequisites

- Node.js (>=18.0.0 <=20.x.x)
- npm (>=6.0.0)

### Installation

1. Navigate to the `backend` directory:

    ```sh
    cd backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Configuration

1. Copy the `.env.example` file to `.env`:

    ```sh
    cp .env.example .env
    ```

2. Update the `.env` file with your configuration values.

### Running the Application

1. Start the development server:

    ```sh
    yarn develop
    ```

2. Open [http://localhost:1338](http://localhost:1338) with your browser to see the result.

### Building the Application

1. Build the application:

    ```sh
    npm run build
    ```

2. Start the production server:

    ```sh
    npm start
    ```

## Frontend

### Prerequisites

- Node.js (>=18.0.0 <=20.x.x)
- npm (>=6.0.0)

### Installation

1. Navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Application

1. Build the application:

    ```sh
    npm run build
    ```

2. Start the production server:

    ```sh
    npm start
    ```

## Additional Information

For more details, refer to the individual README files in the [backend](backend/README.md) and [frontend](frontend/README.md) directories.