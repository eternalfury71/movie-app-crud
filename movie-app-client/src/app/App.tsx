import MovieList from "../pages/Movies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "../routes/root";
import { NewMovie } from "../pages/NewMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({});
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <MovieList />,
        },
        {
          path: "/newmovie",
          element: <NewMovie />,
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
