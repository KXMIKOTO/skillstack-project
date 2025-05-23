import axios from "axios";

const API_URL = "https://api.example.com/skills"; // Replace with your actual API URL

export const getSkills = async () => { 
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
}

export const createSkill = async (skill: 
    {
        id: number;
        name: string;
        description: string;
        level: "begginer" | "intermediate" | "advanced";
        category: string;
    }
) => {
    const response = await axios.post(`${API_URL}/skills`, skill);
    return response.data;
}