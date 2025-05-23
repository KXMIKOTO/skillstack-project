import React, {useState} from "react";
import { createSkill } from "../api/skills";

type SkillFormData = {
    id: number;
    name: string;
    description: string;
    level: "begginer" | "intermediate" | "advanced";
    category: string;
};

const defaultData: SkillFormData = {
    id: 0,
    name: "",
    description: "",
    level: "begginer",
    category: "",
};

export const SkillForm = ({onAdd}: {onAdd: () => void }) => {
    const [form, setForm] = useState<SkillFormData>(defaultData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createSkill(form);
            setForm(defaultData);
            onAdd();
        } catch (error) {
            console.error("Error creating skill:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Skill Name"
                className="w-full p-2 border rounded"
                required
            />
            <input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Skill Description"
                className="w-full p-2 border rounded"
                required   
            />
            <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Skill Category"
                className="w-full p-2 border rounded"
                required
            />
            <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            >
            <option value="begginer">Begginer</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            </select>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Skill
            </button>
        </form>
    )
}