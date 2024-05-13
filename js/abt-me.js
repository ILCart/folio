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

document.addEventListener("DOMContentLoaded", () => {
    init_carousels();

})
