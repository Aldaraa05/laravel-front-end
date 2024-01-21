import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/home";
import { Sign } from "./Components/sign";
import { Student } from "./Components/student";
import { TeacherField } from "./Components/teacherField";
import { createContext, useState } from "react";
export const Context = createContext();
function App() {
  const [signed, setSigned] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={[signed, setSigned]}>
          {signed ? (
            <Routes>
              <Route path=":bagsh/bagshHome/:id" element={<TeacherField />} />
              <Route path="suragchHome/:id" element={<Student />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":suragch" element={<Sign />} />
              <Route path=":bagsh" element={<Sign />} />
            </Routes>
          )}
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
