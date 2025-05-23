import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SkillForm } from "./components/SkillForm";
import { SkillList } from "./components/SkillList";


export default function App() {
  const [reload, setReload] = useState(false);

  const handleAddSkill = () => {
    setReload(!reload);
  };
  
  return (
    <div className="p-8 space-y-8">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
