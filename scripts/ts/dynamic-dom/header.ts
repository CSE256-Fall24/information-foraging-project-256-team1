export function stickyHeader() { 
    
    window.addEventListener('scroll', (e) => {
        const navbar = document.getElementById("main-menu-container");
        if (window.scrollY > 100) {
            navbar?.classList.add('sticky');
        } else {
            navbar?.classList.remove('sticky');
        }
    })

}