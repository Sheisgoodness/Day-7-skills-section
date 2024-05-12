document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-progress');

    skills.forEach(skill => {
        let width = skill.getAttribute('data-width');
        skill.style.width = width; 
        skill.setAttribute('data-percentage', width); 

        setTimeout(() => {
            if (parseFloat(width) < 30) { 
                skill.classList.add('short'); 
            }
        }, 1000); 
    });
});
