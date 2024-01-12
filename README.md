# E-commerce Back End
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/license/mit/)
[![Github Profile](https://img.shields.io/badge/GitHub-Saduhub-blue?logo=github)](https://github.com/saduhub)
[![Walkthrough](https://img.shields.io/badge/Drive-Walkthrough-orange?logo=googledrive)](https://drive.google.com/file/d/1vt_b1JcoOq6Hrtaqzb1qfTn4-F5dchvi/view)

## Description

The motivation behind this project was to solidify my knowledge of object relational mapping. I was to build a terminal-based app using my knowledge of Javascript, SQL, Node, and Sequelize. Additionaly, this challenge introduced me to the concepts of controllers and Express routing. Understanding how to use insomnia, was crucial for completing this project without having to rely on a front end or having to define the payload within the app. A future direction of this project is to finish integrating a front end to better visualize the e-commerce store (add-front-end branch).

Link to walkthrough [video](https://drive.google.com/file/d/1vt_b1JcoOq6Hrtaqzb1qfTn4-F5dchvi/view).


Throughout the development of this project, I gained valuable insights into the following areas:
  
- **Sequelize and ORM Implementation**: Making use of Sequelize, an ORM for Node.js, has deepened my understanding of database interactions within a JavaScript environment. Sequelize allowed me to translate complex SQL queries into readable JavaScript code. It also allowed me to design models and relationships to bridge the gap between object-oriented programming and database management. By abstracting database queries, I can ensure consistency across different SQL dialects and efficiently integrate databases into Node.js applications.

- **Insomnia API Testing and Development**: My experience with Insomnia has been crucial in teaching me about API development and testing. Using this platform, I was able to develop and test various types of HTTP requests in a controlled environment. I now know how to test and validate API endpoints and thus ensure they behave as expected under different scenarios. 
  
- **Express.js**: My experience with Express.js has deepened my understanding of web server frameworks. This framework is a significant improvement over handling complex routing purely with JavaScript. It streamlined the process of creating server routes, managing incoming HTTP requests, and developing a RESTful API. Moreover, I gained valuable insights into request processing and how middleware functions play a role in processing requests.

- **SQL Proficiency and Database Management**: Using MySQL has significantly enhanced my ability to write complex queries and database operations. I have become familiar SQL syntax and principles, which I applied to create, modify, and query a database effectively. This ensures that my future APIs depend on databases with robust and reliable architecture. This experience solidified my grasp on schemas, database management, and best practices.
  
- **mysql2 for Database Connectivity**: Using mysql2 has allowed me to understand the concept of a database driver for a relational database. Using mysql2 enabled me to establish a connection between my JavaScript code and the MySQL database. This skill is crucial for executing SQL commands through my application rather than through the MySQL shell or Workbench. Drivers like mysql2 allow me to combine Node.js with a relational database.
  
- **Node.js and Server-Side JavaScript**: Using Node.js has allowed me to create a server-side run environment for JavaScript. Thus, Node.js allows me to use JavaScript not just for front-end but also for back-end development. Also, I have gained a deeper understanding of the non-blocking I/O model that Node.js employs. This knowledge is useful for creating web applications that can handle several operations at the same time.
  
- **Node Package Manager (NPM) and Dependency Management**: I expanded my knowledge of NPM's intricacies and my proficiency in managing project dependencies. This ensures that my project is built on a solid foundation and remains up-to-date with the latest features and security patches.

- **Environment Variables for Secure Configurations**: Making use of environment variables in Node.js allowed me to securely store sensitive information like database credentials. This ultimately enhanced the security aspect of my applications moving forward.
  
- **TypeScript and Type-Safe Coding**: Using TypeScript has increased my understanding of statically typed languages in the JavaScript ecosystem. I have become familiar with type annotations, interfaces, type inference, function type annotations, and tsconfig.json to ensure type-safety throughout my applications. By making use of TypeScript's compiler and advanced type-checking features, I've been able to catch potential bugs early and streamline the refactoring process. This approach to coding has made my applications more maintainable and helped cultivate the habit of writing self-documenting and predictable code.
  
- **Bootstrap and Responsive Design**: Using Bootstrap has increased my ability to create visually appealing and responsive web designs. By learning about Bootstrap's grid system, prebuilt components, and utility classes, I was able to quickly put together a basic frontend for my e-commerce backend. 


## Table of Contents

- [E-commerce Back End](#e-commerce-back-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository (HTTPS): `git clone https://github.com/saduhub/Ecommerce-Back-End-Project.git`
2. Navigate to the project directory: `cd Ecommerce-Back-End-Project`
3. Install dependencies: `npm run install`
4. Set up your environment variables.
5. Connect to and seed the database: `npm run seed`

## Usage

1. Start the application using node and your preferred CLI (cd into Ecommerce-Back-End-Project directory): `npm run start`.
2. Enjoy an e-commerce backend that allows you to use a CLI to track and modify all the products in your e-commerece store! 

## Contributors

This project was developed by [Saduhub](https://github.com/saduhub).

Starter code: [Xandromus](https://github.com/Xandromus), [rxtATX](https://github.com/rxtATX), [Georgeyoo](https://github.com/Georgeyoo)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

This web application is intended strictly for educational and illustrative purposes. The creators and contributors of this project cannot assume liability for any potential consequences resulting from the use of this web application.
Users and deployers of this application bear the full responsibility of implementing adequate security measures and ensuring the secure handling of sensitive data. Please exercise caution when interacting with this or any other web application involving personal or sensitive data.
