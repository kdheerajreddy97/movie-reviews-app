# Movie Reviews App  
  
A full-stack application for browsing and reviewing movies. This project uses React for the frontend and Spring Boot for the backend, with MongoDB as the database. The app allows users to browse movies, view detailed information, and submit reviews.  
  
## Features  
  
- Browse a list of movies  
- View detailed information about each movie  
- Submit reviews for movies  
- View reviews submitted by other users  
  
## Technologies Used  
  
- **Frontend**: React, React Router, Axios, Bootstrap  
- **Backend**: Spring Boot, MongoDB, Spring Data  
- **Database**: MongoDB  
  
## Project Structure  
  
movie-reviews-app/  
│  
├── MovieClient/  
│ ├── public/  
│ ├── src/  
│ │ ├── components/  
│ │ ├── api/  
│ │ ├── App.js  
│ │ ├── index.js  
│ │ └── ... (other frontend files)  
│ ├── package.json  
│ └── README.md  
│  
├── movies/  
│ ├── src/  
│ │ ├── main/  
│ │ │ ├── java/  
│ │ │ │ └── Reddy/Dheeraj/movies/  
│ │ │ │ ├── Movie.java  
│ │ │ │ ├── MovieController.java  
│ │ │ │ ├── MovieRepository.java  
│ │ │ │ ├── MovieService.java  
│ │ │ │ ├── Review.java  
│ │ │ │ ├── ReviewController.java  
│ │ │ │ ├── ReviewRepository.java  
│ │ │ │ ├── ReviewService.java  
│ │ │ │ └── ... (other backend files)  
│ │ ├── resources/  
│ │ ├── application.properties  
│ │ └── ... (other backend files)  
│ ├── pom.xml  
│ └── README.md  
│  
├── .gitignore  
└── README.md    
  
  
## Getting Started  
  
### Prerequisites  
  
- React.js and Spring  
- Java 11 or later  
- MongoDB  
  
### Installation  
  
1. **Clone the repository:**
      
     git clone https://github.com/kdheerajreddy97/movie-reviews-app.git  
     cd movie-reviews-app
  
2. **Backend Setup:**  
  
    Navigate to the backend directory:  
    cd movies  
      
    Install dependencies and build the project:  
    ./mvnw install  
    
    Run the Spring Boot application:  
    ./mvnw spring-boot:run  
    
3. **Frontend Setup:**  
  
    Navigate to the frontend directory:  
    cd ../MovieClient   
      
    Install dependencies:  
    npm install  
      
    Run the React application:  
    npm start
  
  
  
**Usage**  
  
Open your browser and navigate to http://localhost:3000 to access the frontend.  
The backend should be running on http://localhost:8080.  
  
**API Endpoints**  
  
GET /api/v1/movies - Retrieve a list of all movies  
GET /api/v1/movies/{id} - Retrieve detailed information about a specific movie  
POST /api/v1/reviews - Submit a review for a movie  
