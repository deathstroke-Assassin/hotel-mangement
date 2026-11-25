# Hotel Management System

A web-based hotel management application built with **Node.js, Express.js, MongoDB, and EJS**. The project provides a foundation for managing hotel operations, including rooms, reservations, users, and products through a web interface.

## Features

- **User Authentication** – Sign-in and sign-up functionality.
- **Dashboard** – A dedicated dashboard interface for managing the application.
- **Room Management** – Browse rooms and view room details.
- **Reservation Management** – Create and view reservations.
- **Product Management** – Browse, create, update, and manage products.
- **User Management** – View and manage user information.
- **Database Integration** – MongoDB integration for persistent data storage.
- **Server-Side Rendering** – Dynamic pages rendered using EJS.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| EJS | Server-side templating |
| HTML5 / CSS3 | Frontend structure and styling |
| JavaScript | Application logic |
| Bootstrap | UI styling and responsive components |

## Project Structure

```text
hotel/
├── controllers/       # Application controllers
├── models/            # Database models and connections
├── public/            # Static assets (CSS, JS, images)
├── route/             # Application routes
├── views/             # EJS templates
│   ├── dashboard/
│   ├── pages/
│   └── partials/
├── .gitignore
├── app.js             # Application entry point
├── package.json
├── package-lock.json
└── seeding.js         # Database seeding
```

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deathstroke-Assassin/hotel-mangement.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hotel-mangement
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables in a `.env` file in the project root.

   Add the required database connection string and application secrets according to the configuration used in your application.

5. Start the application using the appropriate script defined in `package.json`:

   ```bash
   npm start
   ```

## Environment Variables

The application may require environment variables for database connectivity and authentication.

Create a local `.env` file and configure the variables expected by the application. **Never commit your `.env` file or expose credentials in your repository.**

## Development

To run the project in development mode, use the development script defined in `package.json`, if available.

## Future Improvements

- Improve reservation workflows.
- Add room availability management.
- Enhance dashboard analytics.
- Improve validation and error handling.
- Add automated testing.

## Author

**Mohamed Ashraf**

GitHub: [@deathstroke-Assassin](https://github.com/deathstroke-Assassin)

---

*This project is developed for learning and practical application of backend web development using JavaScript and the Node.js ecosystem.*
