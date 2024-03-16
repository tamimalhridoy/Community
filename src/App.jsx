import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./components/HomePage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<HomePage/>}>
        
      </Route>

    </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
