import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegistrationForm } from "./components/RegistrationForm";
import { StudentsList } from "./components/StudentsList";
import { StudentsFilter } from "./components/StudentsFilter";

function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/register' element={<RegistrationForm></RegistrationForm>}></Route>
            <Route path='/students-list' element={<StudentsList></StudentsList>}></Route>
            <Route path='/students-filter' element={<StudentsFilter></StudentsFilter>}></Route>
          </Routes>
        </BrowserRouter>
      </>    
  );
}

export default App;
