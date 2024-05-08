let jumpyloopy = (dt)=>{
    if((dt/1000)%2 == 0){
        let scroll = document.getElementById("scroll");
        let x = [...scroll.children];
        x.forEach(child => {
            child.style.transform = `translateY(${Math.random()*100}%)`;
        });
    }

    requestAnimationFrame(jumpyloopy)
}
function redirect_to_project(clickable,file){
    clickable.addEventListener("click",()=>{
        open(`../projects/${file}`);
    })
}
function link_projects(projects){
    for (const project of projects) {
        if(project.dataset.file){
            redirect_to_project(project,project.dataset.file);
        }

    }
}
document.addEventListener("DOMContentLoaded",()=>{
    // jumpyloopy(0);
    let projects = document.getElementById("projects");
    if(projects){
        link_projects(projects.children);
    }
})