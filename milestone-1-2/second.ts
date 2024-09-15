const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.querySelector('.skills-summary') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none' || !skillsSection.style.display) {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});
