function toggleSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        section.classList.toggle('hidden');
    }
}

document.getElementById('toggle-about')?.addEventListener('click', () => toggleSection('about'));
document.getElementById('toggle-education')?.addEventListener('click', () => toggleSection('education'));
document.getElementById('toggle-work-experience')?.addEventListener('click', () => toggleSection('work-experience'));
document.getElementById('toggle-skills')?.addEventListener('click', () => toggleSection('skills'));