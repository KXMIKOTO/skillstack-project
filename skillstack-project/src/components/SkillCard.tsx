import React from "react";
// Скилы в SkillStack
type Skill = {
    id: string;
    name: string;
    description: string;
    level: "Begginer" | "Intermediate" | "Advanced";
    category: string;
};
type SkillCardProps = {
    skill: Skill;
};

// Компонент карточки скила
export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const levelColor = {
        Begginer: "bg-green-200",
        Intermediate: "bg-yellow-200",
        Advanced: "bg-red-200",
    }


    return (
    <div className="rounded-2xl shadow-md p-4 border border-gray-200 bg-white hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{skill.name}</h2>
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${levelColor[skill.level]}`}
        >
          {skill.level}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
        {skill.category}
      </span>
    </div>
  );
};

