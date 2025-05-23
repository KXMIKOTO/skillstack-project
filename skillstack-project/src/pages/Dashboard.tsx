import { useState } from "react";
import { SkillForm } from "../components/SkillForm";
import { SkillList } from "../components/SkillList";

export default function Dashboard() {
    const [reload, setReload] = useState(false);

    const handleAddSkill = () => {
        setReload(!reload);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2x1 font-semibold">
                Dashboard
            </h2>
            <SkillForm onAdd={handleAddSkill} />
            <SkillList key={reload.toString()} />
        </div>
    );
}