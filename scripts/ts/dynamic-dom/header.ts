export function stickyHeader() { 
    
    window.addEventListener('scroll', (e) => {
        const navbar = document.getElementById("main-menu-container");
        console.log("sticky");
        if (window.scrollY > 100) {
            navbar?.classList.add('sticky');
        } else {
            navbar?.classList.remove('sticky');
        }
    })

}