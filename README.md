# Ecommerce Website

This is a fully functional Ecommerce website built using React, Redux, and Node.js. The application allows users to browse products, add items to the cart, manage their orders, and make secure payments. It features user authentication, protected routes, and a responsive design for a seamless shopping experience across devices.

## Features

- **User Authentication**: Register and login functionality with protected routes.
- **Product Browsing**: View products, search, and filter through different categories.
- **Cart Management**: Add, update, or remove products from the shopping cart.
- **Checkout Process**: Includes shipping details, order confirmation, and payment integration.
- **Payment Integration**: Secure payment processing using [payment gateway integration].
- **Responsive Design**: Fully responsive layout for an optimal user experience on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Redux, React Router, SCSS
- **Backend**: Node.js, Express, MongoDB
- **Payment Integration**: [Payment Gateway Name]
- **State Management**: Redux for state management, with local storage for persisting cart items
- **Deployment**: [Deployment Platform]

## Dependencies

### Frontend Dependencies
- `react` - Core React library.
- `react-dom` - React library for DOM rendering.
- `react-router-dom` - Routing for React applications.
- `redux` - State management library.
- `react-redux` - Integration of Redux with React.
- `redux-thunk` - Middleware for Redux to handle asynchronous actions.
- `axios` - Promise-based HTTP client for API requests.
- `scss` or `sass` - CSS pre-processor for styling.
- `react-icons` - Icon library for React components.
- `material-ui` - styled feature like button,box,icon,etc.. for React components.

### Backend Dependencies
- `express` - Web framework for Node.js.
- `mongoose` - MongoDB object modeling tool.
- `dotenv` - Loads environment variables from a `.env` file.
- `jsonwebtoken` - For generating and verifying JWT tokens.
- `bcryptjs` - For password hashing and verification.
- `cookie-parser` - Parses cookies attached to client requests.
- `nodemailer` - For handling email functionality.
- `cors` - Middleware for enabling CORS in Express.

### Development Dependencies
- `nodemon` - Automatically restarts the server on file changes.
- `concurrently` - Allows running multiple npm scripts concurrently (e.g., frontend and backend).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
