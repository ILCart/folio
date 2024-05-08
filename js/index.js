let jumpyloopy = (dt)=>{
       
    requestAnimationFrame(jumpyloopy)
    let scroll = document.getElementById("scroll");
    let x = [...scroll.children];
    x.forEach(child => {
        child.style.transform = `translateY(${(dt/100)%10}%) rotate(${Math.random()*90}deg)`;
    });


}

//Redirect a clickable element to a file
function redirect_to_project(clickable,file){
    clickable.addEventListener("click",()=>{
        open(`../projects/${file}`);
    })
}
//Link a list of projects (elements) to the file
function link_projects(projects){
    for (const project of projects) {
        if(project.dataset.file){
            redirect_to_project(project,project.dataset.file);
        }
    }
}

function iocallback(targets){
    targets.forEach(target=>{
        if(target.isIntersecting){
            target.target.classList.toggle("hidden",false);
        }else{
            target.target.classList.toggle("hidden",true);
 
        }
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    // jumpyloopy(0);
    
    let observer = new IntersectionObserver(iocallback);
    let projects = document.getElementById("projects");
    [...projects.children].forEach(project=>{
        project.classList.toggle("hidden",true);
        observer.observe(project);
    })
    if(projects){
        link_projects(projects.children);
    }
})