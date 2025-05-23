import React, { useState, useEffect, use } from "react";
import { getSkills } from "../api/skills";
import { SkillCard } from "./SkillCard";
import type { Skill } from "../components/SkillCard";

export const SkillList = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    const loadSkills = async () => {
        const data = await getSkills();
        setSkills(data);
    };

    useEffect(() => {
        loadSkills();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    );
}