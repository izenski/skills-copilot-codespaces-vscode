function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    getSkills() {
      return this.skills;
    },
  };
}

function persistSkills() {
  const skills = skillsMember
    console.log(skills.getSkills());
}

export default skillsMember;

