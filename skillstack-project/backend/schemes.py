from pydantic import BaseModel
from typing import Literal

class SkillStack(BaseModel):
    name: str
    description: str
    level: Literal["beginner", "intermediate", "advanced"]
    category: str

class Skill(SkillStack):
    id: int