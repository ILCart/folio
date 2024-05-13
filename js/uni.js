let lastScrollTop = 0;
document.addEventListener("scroll",(e)=>{
    let nav = document.getElementsByTagName("nav").item(0);
    if(!nav) return;
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.transform = "translatey(-120%)"; // Hide the nav
    } else {
        nav.style.transform = ""; // Show the nav
    }
    lastScrollTop = scrollTop;
})