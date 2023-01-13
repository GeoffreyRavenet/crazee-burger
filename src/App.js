import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/ErrorPage";
import OrderPage from "./components/pages/OrderPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  //state {etat, données}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/order/:loginName",
      element: <OrderPage />,
    },
  ]);
  //comportements

  //affichage (render)
  return ( 
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
