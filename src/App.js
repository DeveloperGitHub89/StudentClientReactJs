import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistrationForm } from "./components/RegistrationForm";

function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/register' element={<RegistrationForm></RegistrationForm>}></Route>
          </Routes>
        </BrowserRouter>
      </>    
  );
}

export default App;
