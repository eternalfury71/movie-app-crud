import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <div className="bg-red-400 text-3xl font-bold flex justify-start text-white">
        <ul className="p-6">
          <li className="hover:text-blue-100">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="hover:text-blue-100">
            <Link to={`/newmovie`}>Add Movie</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
