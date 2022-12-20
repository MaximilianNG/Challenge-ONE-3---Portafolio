const navSkills = document.querySelector("#navSkills");
const navHobbies = document.querySelector("#navHobbies");
const navFormacion = document.querySelector("#navFormación");
const navProyectos = document.querySelector("#navProyectos");
const navContacto = document.querySelector("#navContacto");

const onClick = function() {
    let targetId = "#" + (this.innerHTML.toLowerCase());
    let scrollTarget = document.querySelector(targetId);
    scrollTarget.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
}

navSkills.onclick = onClick; 
navHobbies.onclick = onClick;
navFormacion.onclick = onClick;
navProyectos.onclick = onClick;
navContacto.onclick = onClick;