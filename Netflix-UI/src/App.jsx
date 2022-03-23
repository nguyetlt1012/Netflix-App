import {
  Navigate, Route, Routes
} from "react-router-dom";
import HomeAdmin from "./Admin/pages/home/Home";
import User from "./Admin/pages/user/User";
import "./app.scss";
import Home from "./Client/Pages/Home/Home";
import Login from "./Client/Pages/Login/Login";
import Register from "./Client/Pages/Register/Register";
import Watch from "./Client/Pages/Watch/Watch";
import ProductList from "./Admin/pages/productList/ProductList"


const App = () => {
  const user = false;
  
  
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />

      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      {user && (
        <>
          <Route path="/series" element={<Home type={"series"} />} />
          <Route path="/movies" element={<Home type={"movie"} />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
      <Route path="/admin">
        
        <Route index element ={<HomeAdmin/>}/>
        <Route path="users" element={<User/>}/>
        <Route path="movies" element={<ProductList/>}/>
      </Route>
    </Routes>
  );
};

export default App;
