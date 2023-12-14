# Zephyr
 
## Getting Started - Docker

To use the Zephyr Application using docker, follow these simple steps:

1. **Clone the Repository:** Use Git to clone the Zephyr repository to your local machine.
 
    ```bash
    git clone https://github.com/travelandcode/Zephyr.git
    ```
 
2. **Navigate to the Project Folder:** Change your current directory to the project folder.
 
    ```bash
    cd zephyr/
    ```

3. **Spin up Docker Containers (Docker Compose)**

    ```bash
    docker compose up -d
    ```
    This spins up the following core pieces
    - Frontend
    - Backend
    - Database

    To pull down these containers, run the following command'
    ```bash
    docker compose down
    ```

## Getting Started - Local (Frontend)

To use the Zephyr Frontend Application, follow these simple steps:

1. **Clone the Repository:** Use Git to clone the Zephyr repository to your local machine.

    ```bash
    git clone https://github.com/travelandcode/Zephyr.git
    ```

2. **Navigate to the Project Folder:** Change your current directory to the project folder.

    ```bash
    cd zephyr/app/frontend
    ```

3. **Install Dependencies:** Use npm (Node Package Manager) to install the project dependencies.

    ```bash
    npm install
    ```

4. **Run the Application:** Start the Zephyr Frontend Application by running the following command.

    ```bash
    npm run start
    ```

The frontend application should now be up and running on your local machine.
Collapse
has context menu
Compose

## Getting Started - Local (Backend)

To use the Zephyr Frontend Application, follow these simple steps:

1. **Clone the Repository:** Use Git to clone the Zephyr repository to your local machine.

    ```bash
    git clone https://github.com/travelandcode/Zephyr.git
    ```

2. **Navigate to the Project Folder:** Change your current directory to the project folder.

    ```bash
    cd zephyr/app/backend
    ```

3. **Install Dependencies:** Use npm (Node Package Manager) to install the project dependencies.

    ```bash
    npm install
    ```

4. **Run the Application:** Start the Zephyr Backend Application by running the following command.

    ```bash
    npm run start
    ```

The backend application should now be up and running on your local machine on `https://localhost:3000`.

5. **Run the tests:** Test the Zephyr Backend Application by running the following command.

    ```bash
    npm test
    ```


## Getting Started - Prisma 
To get the Zephyr database up and running, follow these steps:
 
 
1. **Follow backend set steps:** Follow and complete steps 1 - 4 for **Getting Started - Local (Backend)** above.
 
2. **Evironment variables:** Set the `DATABASE_URL` to the database connection string in a .env file in the backend directory.
 
3. **Start docker** Get docker desktop up and running the run the following command:
 
    ```bash
    docker compose up -d
    ```
 
4. **Check that the database exists:** Open Microsoft SQL Server Management Studo and check that the `zephyr` database exists with its tables. If it was found, run the following command:

    ```bash
    npx prisma migrate dev --name init
    ```
see [Prisma Site](https://www.prisma.io/docs/getting-started/quickstart) for more.

