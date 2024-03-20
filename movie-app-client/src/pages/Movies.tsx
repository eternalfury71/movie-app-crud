import { useQuery } from "@tanstack/react-query";

import { getMovies } from "./api";

export type Movie = {
  id: string;
  title: string;
  year: string;
  image: string;
};
const MovieList = () => {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getMovies(),
    queryKey: ["movies"],
    staleTime: Infinity,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1 className="text-5xl py-6 pl-6 text-black font-semibold">Movies</h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mx-6 rounded-lg pb-12 bg-white">
        {movies?.map((movie) => (
          <div className="text-center text-lg text-black" key={movie.id}>
            <h3 className="mt-4">{movie.title}</h3>
            <h4 className="mb-4">{movie.year}</h4>
            <img
              className="w-full aspect-[9/16] object-cover"
              src={movie.image}
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
