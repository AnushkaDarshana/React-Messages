import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post_Without_JWT from "./Components/CRUD/Post_Without_JWT";
import Get_Without_JWT from "./Components/CRUD/Get_Without_JWT";

function App() {
  return (
    <div className="App">
      {/* Without JWT Tokens */}
      <Post_Without_JWT />
      <Get_Without_JWT />
      {/* <CrudSpecific />
      <CrudUpdate />
      <CrudDelete />
      <Login_Without_JWT /> */}

      {/* With JWT Tokens */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<LoginNew />} />
          <Route path="/createPost" element={<CrudPost />} /> */}

          {/* Protected Routes with JWT */}
          {/* <Route element={<ProtectedRoutesJWT />}>
            <Route path="getSpecificUserMsg" element={<GetSpecificUserMsg />} />
            <Route path="getAll" element={<CrudGet />} />
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
