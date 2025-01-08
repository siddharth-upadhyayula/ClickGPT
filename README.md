Detailed Documentation for GitHub Repository: siddharth-upadhyayula-ClickGPT

Table of Contents
	1.	Introduction
	2.	Features
	3.	Technologies Used
	4.	Directory Structure
	5.	Setup Instructions
	6.	Backend Overview
	7.	Frontend Overview
	8.	Contributing
	9.	License

Introduction

ClickGPT is an AI-driven application that combines chat and image generation functionalities using modern web and backend frameworks. This repository contains a Spring Boot-based backend and a React-based frontend.

Features
	•	Chat Service: AI-powered conversational chatbot.
	•	Image Generation Service: AI-generated images based on user input.
	•	Scalable Architecture: Designed for performance and scalability.
	•	Modern UI: Intuitive user interface built with React.

Technologies Used
	•	Backend:
	•	Spring Boot
	•	Maven
	•	Java
	•	Frontend:
	•	React.js
	•	Node.js
	•	CSS
	•	Others:
	•	RESTful APIs

Directory Structure

siddharth-upadhyayula-ClickGPT/
├── backend/
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   ├── .DS_Store
│   ├── .gitignore
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/sidupadhyayula/GenAI/
│   │   │   │       ├── ChatService.java
│   │   │   │       ├── GenAIController.java
│   │   │   │       ├── GenAiApplication.java
│   │   │   │       ├── ImageService.java
│   │   │   │       └── WebConfig.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/sidupadhyayula/GenAI/
│   │           └── GenAiApplicationTests.java
│   └── .mvn/
│       └── wrapper/
│           └── maven-wrapper.properties
└── frontend/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── .gitignore
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        ├── setupTests.js
        └── components/
            ├── ChatComponent.js
            └── ImageGenerator.js

Setup Instructions

Prerequisites
	•	Java 17+
	•	Node.js 18+
	•	Maven 3.8+
	•	Git

Backend Setup
	1.	Navigate to the backend/ directory:
 
```
cd backend
```
	2.	Build the project using Maven:
 
```
./mvnw clean install
```

	3.	Run the application:
```
./mvnw spring-boot:run
```

	4.	The backend service will be available at http://localhost:8080.

Frontend Setup
	1.	Navigate to the frontend/ directory:
```
cd frontend
```

	2.	Install dependencies:
```
npm install
```

	3.	Start the development server:
```
npm start
```

	4.	The frontend will be accessible at http://localhost:3000.

Backend Overview

The backend is built using Spring Boot and includes the following components:

Key Files
	•	ChatService.java: Handles chat-related logic.
	•	GenAIController.java: Manages REST endpoints for chat and image services.
	•	GenAiApplication.java: Main application class to bootstrap the Spring Boot application.
	•	ImageService.java: Contains logic for image generation.
	•	WebConfig.java: Configures CORS and other web settings.

Configuration
	•	application.properties: Contains environment-specific configurations such as server ports and database details.

Frontend Overview

The frontend is built using React.js and includes reusable components for better scalability and modularity.

Key Files
	•	App.js: Entry point for the application.
	•	ChatComponent.js: Renders the chat interface.
	•	ImageGenerator.js: Allows users to generate AI-powered images.
	•	public/index.html: Base HTML file for the application.

Styling
	•	CSS files (App.css, index.css) provide consistent styling.

Contributing
	1.	Fork the repository.
	2.	Create a feature branch:

git checkout -b feature-name


	3.	Commit your changes:

git commit -m "Add feature"


	4.	Push to your fork:

git push origin feature-name


	5.	Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

This documentation provides a comprehensive overview of the ClickGPT repository, its structure, and how to set it up and contribute.
