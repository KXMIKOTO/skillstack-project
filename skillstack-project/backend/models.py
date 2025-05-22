from schemes import Skill

skills = []
curren_id = 1

def add_skill(skill_data) -> Skill:
    global curren_id
    skill = Skill(id=curren_id, **skill_data.dict())
    skills.append(skill_data)
    curren_id += 1
    return skill

def all_skills() -> list[Skill]:
    return skills