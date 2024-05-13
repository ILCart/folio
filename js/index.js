let jumpyloopy = (dt) => {

    requestAnimationFrame(jumpyloopy)
    let scroll = document.getElementById("scroll");
    let x = [...scroll.children];
    x.forEach(child => {
        child.style.transform = `translateY(${(dt / 100) % 10}%) rotate(${Math.random() * 90}deg)`;
    });


}

//Redirect a clickable element to a file
function redirect(clickable, file) {
    clickable.addEventListener("click",() => {
        open(file)
    })
}
function change_bg(clickable, file) {
    clickable.style.backgroundImage = `url(${file})`;
}
//Link a list of projects (elements) to the file
function set_projects_bg(projects) {
    for (const project of projects) {
        if (project.dataset.bg) {
            change_bg(project, project.dataset.bg);
            redirect(project,project.dataset.file);
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

function init_rain(rain_count){
    let headerbg = document.getElementById("headerbg");
    if(!headerbg) return;
    let rot = `${Math.random()*45}deg`;
    for (let i = 0; i < rain_count; i++) {
        let rain = document.createElement("div");
        rain.classList.add("rain");
        headerbg.appendChild(rain);
        rain.style.left = `${Math.random()*120}vw`;
        rain.style.rotate = rot;
        setTimeout(() => {
            rain.classList.add("falling");
            
        }, (Math.random()*4)*1000);
    }
}

function distance(p1,p2){
    return Math.sqrt( (p2[1]-p1[1])**2 + (p2[0]-p1[0])**2 );
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function init_scroll_effect(){
    let scroll = document.getElementById("scroll");
    if(!scroll) return;
    for (const child of scroll.getElementsByTagName("span")) {
        
        let odd = rng(0,1) ? 1 : -1;
        child.style.transform = `translatex(${25*odd}vw) rotate(${30*odd}deg) translatey(${rng(10,50)*odd}vh)`
    }
    document.addEventListener("pointermove", (e) =>{
        let pos = [e.clientX,e.clientY];
        for (const child of scroll.children) {
            let rect = child.getBoundingClientRect();
            let childpos = [rect.left,rect.top]
            let dist = distance(pos,childpos);
            child.style.fontWeight = 600 - dist*3
        }
    })
    
}




document.addEventListener("DOMContentLoaded", () => {
    // jumpyloopy(0);
    let observer = new IntersectionObserver(iocallback);
    let projects = document.getElementById("projects");
    if (projects) {
        [...projects.children].forEach(project => {
            project.classList.toggle("hidden", true);
            observer.observe(project);
        });
        set_projects_bg(projects.children);
    }
    init_rain(100);
    init_scroll_effect();
})


