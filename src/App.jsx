import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  // { path: "/", element: "Some Page"}
  // { path: "/login", element: "Login Page"}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
