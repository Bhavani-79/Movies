# Title

    Write the title of the Assignment
    Movie

## Objective

    Define the main goal or purpose of the Assignment
    
    To Bulid Application for Movie

## Tech Stack

    List the primary technologies, languages required for the Assignment
    Frontend - React JS (css or css framework, git and github repository for hosting the project)

## Completion Instructions

### Functionality

#### Must Have

    Build a React Js application with multie page/component including , Home, Top Rated, Up coming ,Movie details,Header
    implement features like Movie Search

### Technical Details
 
### Routes

|Page        | Route          | Path       |
|Home        | Home           | /          |
|TopRated    | TopRated       | /top-rated | 
|UpComing    | UpComing       | /upcoming  |
|movieDetails| MovieDetails   | /movies/:id|
|NotFound    | NotFound       | /not-found |

### Routes and Components

Header

link for TopRated, upcoming, Popular/Home, searchInput

Home
|component        | Details                                                       | state                               | API
|Home             | Movies                                                        | movieData, context Consumer         |
|Header           | link for TopRated, upcoming, Popular/Home, searchInput        | context Provider                    | 


TopRated
|component        | Details                                                       | state                               | API
|TopRated         | TopRated Movies                                               | movieData, context Consumer         |
|Header           | link for TopRated, upcoming, Popular/Home, searchInput        | context Provider                    | 


Upcoming
|component        | Details                                                       | state                               | API
|upcoming         | upcoming Movies                                               | movieData, context Consumer         |
|Header           | link for TopRated, upcoming, Popular/Home, searchInput        | context Provider                    | 

MovieDeatils
|component        | Details                                                       | state                               | API
|MovieDeatils     | MovieDetails,cast                                             | movieData, context Consumer         |
|Header           | link for TopRated, upcoming, Popular/Home, searchInput        | context Provider                    | 


#### Nice to Have

    List the bonus features or tasks mentioned in the Assignment, if any

### Guidelines to develop a project

#### Must Have

    List the necessary guidelines to follow while developing the project, mentioned in the Assignment, if any

    The project must be responsive with decent CSS.
    It is not necessary that the colors should match the images above. Use your imagination and try to make it as you like.
    Pagination is required.
    Make sure the components are reusable wherever possible.
    For Image Path: You need to add a base domain which is given below
    https://image.tmdb.org/t/p/w500

    Eg: For your Reference

    https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpgbcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg
        
        

#### Nice to Have

    List the additional/suggested guidelines to follow while developing the project, mentioned in the Assignment, if any

    Utilize GitHub
        Commit code regularly and commit messages should be clear
        Include a README file explaining the project setup, usage instructions, and any additional information
        The repo should be well organized and easy to understand.
        The code should be clean, modular, and well-structured

### Submission Instructions

#### Must Have

    List the Instructions to follow while submitting the project mentioned in the Assignment, if any
    
    Upload the project on Codesandbox (https://codesandbox.io/) and submit it using the code sandbox link. This is mandatory, without this, the submission will not be accepted.

#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

    List the references of design files required for the Assignment

    Home, Top Rated, upcoming, Header , movieDetails,
    

### APIs

    List the APIs, providing any relevant endpoints, documentation links, or access keys, required for the Assignment if any
     API Key = 1303763ee89de2e76b22abaf890433e9
    Get all movies: https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
    Get movie detail: https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US
    Get movie cast detail:https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US
    Get upcoming movies:https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1
    Get top-rated movies:https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1
    Get search result:https://api.themoviedb.org/3/search/movie?api\_key=${Api\_key}&language=en-US&query=${movie\_name}&page=1

    
   

### Third-party packages

    List the Third-party packages required for the Assignment, if any
    React-Router-dom
    styled-component
