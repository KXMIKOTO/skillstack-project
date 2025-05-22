from fastapi import FastAPI
from schemes import Skill, SkillStack
from models import add_skill, all_skills
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/skills", response_model=list[Skill])
def read_skills():
    return all_skills()

@app.post("/skills", response_model=Skill)
def create_skill(skill: SkillStack):
    return add_skill(skill)