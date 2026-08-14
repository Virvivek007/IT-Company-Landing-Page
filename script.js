// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


// Dark and light mode
function lightDark() {
    const lightDarkIcon = document.querySelector(".lightDark-row img");
    if (lightDarkIcon) lightDarkIcon.classList.toggle("active");
    document.body.classList.toggle("dark-mode");
}