const movieData = [
    "Interstellar,sci-fi,10,spacefan@gmail.com",
    "Titanic,romance,8,reviewer@gmail.com",
    "Frozen,animation,7,parent@yahoo.com",
    "The Dark Knight,action,10,batfan@hotmail.com",
    "Barbie,comedy,8,viewer@movies.com",
    "Bad Movie,drama,5"
  ];
  
  function Movie(title, genre, rating, reviewEmail) {
    this.title = title;
    this.genre = genre;
    this.rating = Number(rating);
    this.reviewEmail = reviewEmail;
    this.id = Symbol(title);
  
    this.getSummary = function () {
      return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}`;
    };
  
    this.isHighlyRated = function () {
      return this.rating >= 8;
    };
  
    this.getReviewEmail = function () {
      return this.reviewEmail?.trim() || "none";
    };
  
    this.getID = function () {
      return this.id;
    };
  }
  
  const movies = [];
  
  movieData.forEach(function (movieString) {
    try {
      const parts = movieString.split(",");
  
      if (parts.length < 4) {
        throw new Error("Missing movie information");
      }
  
      const movie = new Movie(parts[0], parts[1], parts[2], parts[3]);
      movies.push(movie);
    } catch (error) {
      console.log(`Error processing "${movieString}": ${error.message}`);
    }
  });
  
  console.log("All Movie Summaries:");
  movies.forEach(function (movie) {
    console.log(movie.getSummary());
  });
  
  const highlyRatedMovies = movies.filter(function (movie) {
    return movie.isHighlyRated();
  });
  
  console.log("Highly Rated Movies:");
  highlyRatedMovies.forEach(function (movie) {
    console.log(movie.title);
  });
  
  console.log("Email Validation:");
  const emailRegex = /.+@.+\..+/;
  
  movies.forEach(function (movie) {
    const email = movie.getReviewEmail();
    const isValid = emailRegex.test(email);
    console.log(`${email}: ${isValid}`);
  });
  
  console.log(
    "My favorite movie is Interstellar because I love how it explores time dilation and family relationships. " +
    "The soundtrack and the overall storytelling make it an unforgettable movie."
  );
  
  // Reflection
  
  // 1. What are array methods, and how did you use them in this assignment?
  // Array methods are built-in functions that help work with arrays. I used forEach()
  // to convert each movie string into a Movie object and to display information for
  // each movie. I also used filter() to create a new array of highly rated movies.
  
  // 2. What does your regular expression check for?
  // My regular expression checks whether an email contains both an "@" symbol and
  // a "." to make sure it has a basic valid email format.
  
  // 3. How does try/catch help prevent errors in your program?
  // The try/catch statement prevents the program from crashing when a movie string
  // is missing information or is formatted incorrectly. Instead, it logs an error
  // message and continues processing the remaining movies.
  
  // This console.log() prints a personal message about my favorite movie, Interstellar.
  // I wrote this message directly in the console.log() to explain why Interstellar is
  // my favorite movie.