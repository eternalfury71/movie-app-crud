import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { addNewMovie } from "./api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../app/App";
export function NewMovie() {
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    image: "",
  });
  const navigate = useNavigate();
  const id = uuidv4();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const { mutateAsync: addNewMovieMutate } = useMutation({
    mutationFn: addNewMovie,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const identifiedNewMovie = { ...newMovie, id };
    await addNewMovieMutate(identifiedNewMovie);
    setNewMovie({ title: "", year: "", image: "" });
    navigate("/");
  };
  return (
    <div className="flex justify-center mt-6">
      <form
        onSubmit={handleSumbit}
        className="max-w-md p-12 bg-gray-200 rounded-lg text-center"
      >
        <h1 className="text-center mb-12 text-2xl">New Movie</h1>
        <div className="flex flex-col mb-4 text-lg">
          <label htmlFor="title">Title</label>
          <input
            className="p-2 mt-1 rounded-md"
            type="text"
            name="title"
            placeholder="Type movie title"
            onChange={handleChange}
            value={newMovie.title}
          />
        </div>
        <div className="flex flex-col mb-4 text-lg">
          <label htmlFor="year">Year</label>
          <input
            className="p-2 mt-1 rounded-md"
            type="text"
            name="year"
            placeholder="Type movie year"
            onChange={handleChange}
            value={newMovie.year}
          />
        </div>
        <div className="flex flex-col text-lg mb-8">
          <label htmlFor="image">Poster</label>
          <input
            className="p-2 mt-1 rounded-md"
            type="text"
            name="image"
            placeholder="Add image url"
            onChange={handleChange}
            value={newMovie.image}
          />
        </div>
        <button className="bg-green-400 text-white px-6 py-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
