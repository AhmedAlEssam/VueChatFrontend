# **Vue_Chat_frontend**


This repository contains the frontend code for the Vue_Chat application. It is intended for testing and practicing the AI-DOJO AI 4 Web Bootcamp. The project utilizes Vue.js, vue-router, axios, and tailwindcss.

## Project Setup

To use this project, please follow the steps below:

1. Clone the repository to your local machine: 

```
git clone https://github.com/AhmedAlEssam/VueChatFrontend.git
```

2. Navigate to the project directory:
```
cd Vue_Chat_frontend
```

3. Install the project dependencies using npm:
 
 ```
npm install
```

Start the development server: 

```
npm run dev
``` 

This will launch the application and provide you with a local development server URL.

## Connecting to the Backend

This frontend project is designed to be connected with a backend server through a RESTful API. The backend repository can be found at [https://www.github.com/AhmedAlEssam/Vue_Chat_backend.git](https://www.github.com/AhmedAlEssam/Vue_Chat_backend.git  "Could be not uploaded yet") . Please refer to the backend repository's readme file for instructions on setting up and running the backend server.

Once the backend server is up and running, you may need to configure the frontend to connect to the correct API endpoints. Open the ``src/helpers/http.js`` file and update the ``baseURL`` variable to match the backend server's URL.

```
// src/helpers/http.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Update with the correct backend server URL
});


export default instance;
```

Make sure to replace ``http://localhost:8000/api`` with the appropriate URL where the backend server is running.

## Usage

With the project set up and connected to the backend server, you can now start using the Vue_Chat application. Open your browser and navigate to the development server URL provided when running ``npm run serve``.

Follow the instructions provided by the application to create an account, log in, and start using the chat features. The frontend code has been pre-configured to communicate with the backend server and handle the necessary API requests.

Feel free to explore and modify the codebase to practice and experiment with different features and functionality.

## Contributing
If you wish to contribute to this project, please fork the repository, make your changes, and submit a pull request. Your contributions are greatly appreciated!

## License
This project is licensed under the [MIT License](/License). Feel free to use and modify the codebase according to the terms of the license
