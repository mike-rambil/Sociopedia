# Sociopedia

Sociopedia is a full-stack social media application that allows users to connect with others, share posts, upload images, like and comment on posts, add friends, and view friends' profiles. The project utilizes Redux Toolkit for state management and incorporates full-stack authentication and authorization.

## Features

- **User Authentication**: Users can create an account, log in, and log out securely. This ensures that user data and interactions are protected.

- **User Authorization**: Proper authorization mechanisms are implemented to ensure that users can only access and modify their own data. This prevents unauthorized access and protects user privacy.

- **Profile Management**: Users can update their profile information, including their name, profile picture, and location. This allows users to personalize their profiles and share relevant information with others.

- **Post Creation**: Users can create and publish posts, including text descriptions and optional image attachments. This allows users to share their thoughts, experiences, and media content with others.

- **Image Upload**: Users can upload images to accompany their posts. The application handles image uploads securely and efficiently, allowing users to enrich their posts with visuals.

- **Like and Comment Functionality**: Users can like and comment on posts to engage in conversations and show appreciation for shared content. This fosters social interaction and community engagement within the application.

- **Friends Management**: Users can add friends within the application, view their friends' profiles, and interact with their friends' posts. This enhances the social aspect of the application and facilitates connections between users.

## Technology Stack

The Sociopedia project utilizes the following technologies and frameworks:

- **Front-end**: The front-end is built using React, a popular JavaScript library for building user interfaces. Redux Toolkit is employed for efficient state management, enabling predictable and scalable application behavior.

- **Back-end**: The back-end is developed using a server-side technology stack such as Node.js, Express.js, and a database system like MongoDB. These technologies handle user authentication, authorization, and data storage.

- **Authentication and Authorization**: Full-stack authentication and authorization mechanisms are implemented using industry-standard techniques, such as JSON Web Tokens (JWT) and secure password hashing. This ensures secure access to user accounts and protected data.

- **Image Upload**: The application utilizes appropriate libraries or services to handle image upload functionality. This may involve storing images in a cloud storage service like AWS S3 or utilizing dedicated image hosting platforms.

- **Database**: The project employs a database system, such as MongoDB, to store user profiles, posts, comments, likes, and other relevant data. The database facilitates efficient retrieval and storage of information, ensuring a seamless user experience.

## Getting Started

To set up and run the Sociopedia application locally, follow these steps:

1. Clone the project repository from GitHub.
2. Install the necessary dependencies using a package manager like npm or Yarn.
3. Set up the back-end server, including the necessary configurations for authentication, database connection, and image upload functionality.
4. Start the back-end server.
5. Set up the front-end environment, ensuring the proper configuration of the Redux Toolkit, API endpoints, and environment variables.
6. Start the front-end development server.
7. Access the Sociopedia application through the provided URL or localhost port, and register/login to begin using the application.

Please refer to the project's documentation or README files for detailed instructions on setting up the application and running it locally.

## Contributing

Contributions to the Sociopedia project are welcome! If you find any issues, have feature suggestions, or would like to contribute code improvements, please refer to the project's GitHub repository for guidelines on how to contribute.

## License

The Sociopedia project is released under the [MIT License](LICENSE).
