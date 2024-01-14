import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/home";
import { Sign } from "./Components/sign";
import { Student } from "./Components/student";
import { TeacherField } from "./Components/teacherField";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":suragch" element={<Sign />} />
          <Route path=":bagsh" element={<Sign />} />
          <Route path="suragchHome/:id" element={<Student />} />
          <Route path=":bagsh/bagshHome/:id" element={<TeacherField />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
