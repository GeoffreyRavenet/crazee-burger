import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";
import {Route, Routes} from "react-router-dom";

function App() {
  //state {etat, données}
  
  //comportements

  //affichage (render)
  return ( 
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:loginName" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
