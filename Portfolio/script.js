const sideMenu = document.querySelector("#sideMenu")
const navBar = document.querySelector("nav")
const navBarLinks = document.querySelector("nav ul")


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 50){
        navBar.classList.add("bg-green-950", 'bg-opacity-40','backdrop-blur-lg', 'shadown-sm' )
        navBarLinks.classList.remove('bg-green-950', 'shadow-sm','bg-opacity-40' )
    }else{
        navBar.classList.remove("bg-green-950", 'bg-opacity-40','backdrop-blur-lg', 'shadown-sm')
        navBarLinks.classList.add('bg-green-950', 'shadow-sm','bg-opacity-40' )

    }

})

// Theme

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';

    }else {
        localStorage.theme('light');
    }

  }