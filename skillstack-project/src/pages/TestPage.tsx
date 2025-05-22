import { SkillCard } from "../components/SkillCard";

const mockSkill = {
  id: "1",
  name: "React",
  description: "Library for building user interfaces.",
  level: "Advanced" as "Advanced" | "Begginer" | "Intermediate",
  category: "Frontend",
};

export default function TestPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkillCard skill={mockSkill} />
    </div>
  );
}
