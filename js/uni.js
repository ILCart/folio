function init_nav_hide(nav){
    let lastScrollTop = 0;
    document.addEventListener("scroll",(e)=>{
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            nav.style.transform = "translatey(-120%)"; // Hide the nav
        } else {
            nav.style.transform = ""; // Show the nav
        }
        lastScrollTop = scrollTop;
    })
}

function init_ham_menu(nav){
    let ham = document.getElementById("menuopen");
    if (!ham) return;
    ham.addEventListener("click",()=>{
        document.getElementById("directory").classList.toggle("navhide");
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    let nav = document.getElementsByTagName("nav").item(0);
    if(!nav) return;
    init_nav_hide(nav);
    init_ham_menu(nav);
})
