function step_carousel(carouselimgs,skip,current) {
    carouselimgs = [...carouselimgs];
    let target = carouselimgs[current+skip];
    if(!target) return current;
    for (const image of carouselimgs) {
        image.classList.toggle("none",true);
    }
    target.classList.toggle("none",false)
    return current+skip
}

function init_carousels(){

    let carousels = document.getElementsByClassName("carousel");
    for(const carousel of carousels){
        let controls = [...carousel.getElementsByClassName("carouselnav")];
        let images = [...carousel.children][1];
        let index = 0;
        controls[1].addEventListener("click",()=>{
            index = step_carousel(images.children,1,index);
            console.log(index);
        })
        controls[0].addEventListener("click",()=>{
            index = step_carousel(images.children,-1,index);
            console.log(index);
        })
    }
}
// let gallery = false;
function clear_gallery(gallery){
    let children = gallery.children;
    for (const child of children) {
        child.style.width = "";
        child.style.height = "";
    }
}
let opened = false;
let last;
function apply_gallery_events(gallery){
    let children = gallery.children;
    for (const child of children) {
        child.addEventListener("click",()=>{
            clear_gallery(gallery);
            if(opened || last != child){
                child.style.width = "30vw";
                last = child;
            }
            opened = !opened;
        })
    }
}

function init_gallery(){
    let galleries = document.getElementsByClassName("gallery");
    for (const gallery of galleries) {
        apply_gallery_events(gallery);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    init_carousels();
    init_gallery();
})
