import { Movie } from "./Movies";

export async function getMovies(): Promise<Movie[] | void> {
  try {
    const response = await fetch("/api/movies");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        "Failed to fetch movies. Server returned " + response.status
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export async function addNewMovie(newMovie: Movie): Promise<void> {
  try {
    await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });
  } catch (error) {
    console.error("Error adding new movie:", error);
  }
}
