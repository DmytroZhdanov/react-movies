# React-movies

This repository contains the solution for the "Movie Search" task. It involves creating basic routing for movie search and storage. Utilizes themoviedb.org API to fetch various movie-related data.

## API Endpoints Used:
- `/trending/get-trending`: Fetches a list of popular movies for the homepage.
- `/search/search-movies`: Searches movies based on a keyword.
- `/movies/get-movie-details`: Fetches complete movie details for the Movie Details page.
- `/movies/get-movie-credits`: Retrieves information about the cast for a specific movie.
- `/movies/get-movie-reviews`: Fetches reviews for a particular movie.

## Routes:
- `'/'`: Home component, displaying a list of popular movies.
- `'/movies'`: Movies component, a page for searching movies by keywords.
- `'/movies/:movieId'`: MovieDetails component, detailed information about a specific movie.
- `'/movies/:movieId/cast'`: Cast component, displaying information about the cast for a movie. Renders within the MovieDetails page.
- `'/movies/:movieId/reviews'`: Reviews component, showcasing reviews for a movie. Renders within the MovieDetails page.

## Code Splitting:
Implemented asynchronous loading of JS code for application routes using React.lazy() and Suspense.
