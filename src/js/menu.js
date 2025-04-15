

export const toggleMobileMenu = (element, buttonClass, closeButtonClass, toggleClass) => {
    let mobileMenu = document.querySelector(element);
    let mobileMenuButton = document.querySelector(buttonClass);
    let closeMenu = document.querySelector(closeButtonClass);
    
    // Mostrar menú
    mobileMenuButton.addEventListener("click", (e) => {
        mobileMenu.classList.add(toggleClass);
    })

    // Cerrar menú
    closeMenu.addEventListener("click", (e) => {
        mobileMenu.classList.remove(toggleClass);
    })
}