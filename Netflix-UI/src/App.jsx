import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.scss";
const App = () => {
  const user = true;
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
    </Routes>
  );
};

export default App;
