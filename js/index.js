let jumpyloopy = (dt) => {

    requestAnimationFrame(jumpyloopy)
    let scroll = document.getElementById("scroll");
    let x = [...scroll.children];
    x.forEach(child => {
        child.style.transform = `translateY(${(dt / 100) % 10}%) rotate(${Math.random() * 90}deg)`;
    });


}

//Redirect a clickable element to a file
function change_bg(clickable, file) {
    clickable.style.backgroundImage = `url(${file})`;
}
//Link a list of projects (elements) to the file
function set_projects_bg(projects) {
    for (const project of projects) {
        if (project.dataset.bg) {
            change_bg(project, project.dataset.bg);
        }
    }
}


function iocallback(targets) {
    targets.forEach(target => {
        if (target.isIntersecting) {
            target.target.classList.toggle("hidden", false);
        }
    })
}


document.addEventListener("DOMContentLoaded", () => {
    // jumpyloopy(0);

    let observer = new IntersectionObserver(iocallback);
    let projects = document.getElementById("projects");
    [...projects.children].forEach(project => {
        project.classList.toggle("hidden", true);
        observer.observe(project);
    })
    if (projects) {
        set_projects_bg(projects.children);
    }
})
