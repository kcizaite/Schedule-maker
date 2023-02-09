import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { RoomList } from "./pages/rooms/RoomList";
import { ModuleList } from "./pages/modules/ModuleList";
import { ShiftList } from "./pages/shifts/ShiftList";
import { SubjectList } from "./pages/subjects/SubjectList";
import { TeacherList } from "./pages/teachers/TeacherList";
import { GroupList } from "./pages/groups/GroupList";
import { ProgramList } from "./pages/programs/ProgramList";
import { CreateSubject } from "./pages/subjects/CreateSubject";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/"></Route>
          <Route path="/teachers" element={<TeacherList />}></Route>
          <Route path="/groups" element={<GroupList />}></Route>
          <Route path="/modules" element={<ModuleList />}></Route>
          <Route path="/subjects" element={<SubjectList />}></Route>
          <Route path="/shifts" element={<ShiftList />}></Route>
          <Route path="/rooms" element={<RoomList />}></Route>
          <Route path="/programs" element={<ProgramList />}></Route>

          <Route path="/createSubject" element={<CreateSubject />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
